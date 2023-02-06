import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const handleClick = useContext(AuthContext);

  return (
    <div>
      <h1>Sign up</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleClick.signup(email, password, confirmPassword);
        }}
      >
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
