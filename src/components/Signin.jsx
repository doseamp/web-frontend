import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Signin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleClick = useContext(AuthContext);
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Sign in</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleClick.signin(email, password);
        }}
      >
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />

        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <br />

        <button type="submit">Sign in</button>
        <br />

        <button onClick={handleClick.googleSignin}>Google signin</button>
        {user && (
          <button onClick={() => handleClick.changePassword(user.email)}>
            Change password?
          </button>
        )}
      </form>
    </div>
  );
};

export default Signin;
