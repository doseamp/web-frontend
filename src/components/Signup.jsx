import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, addDoc, collection } from "@firebase/firestore";
import { useState } from "react";
const auth = getAuth();
const db = getFirestore();

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  //   console.log({ email, password });

  const handleClick = {
    signup: async function (e) {
      e.preventDefault();

      // confirm password
      if (confirmPassword !== password) console.error("Mismatched passwords");

      try {
        // create user
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        // save user to db
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          email: user.email,
        });
        console.log({ email, password });
        return true;
      } catch (error) {
        console.error(error);
        return { error: error.message };
      }
    },
  };

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleClick.signup}>
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label>Password</label>
        <input
          type="password"
          minLength={8}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          minLength={8}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
