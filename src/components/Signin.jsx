import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const auth = getAuth();

const Signin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleClick = {
    signin: async function (e) {
      e.preventDefault();

      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = userCredential.user;
        console.log(user);
        return true;
      } catch (error) {
        console.error(error);
        return { error: error.message };
      }
    },
  };

  return (
    <div>
      <h1>Sign in</h1>
      <form onSubmit={handleClick.signin}>
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default Signin;
