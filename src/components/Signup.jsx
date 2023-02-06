import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, addDoc, collection } from "@firebase/firestore";
import { useState } from "react";
const auth = getAuth();
const db = getFirestore();

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  //   console.log({ email, password });

  const handleClick = {
    signup: async function (e) {
      e.preventDefault();

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
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
