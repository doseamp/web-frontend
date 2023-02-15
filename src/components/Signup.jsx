import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Signup = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleClick = useContext(AuthContext);

  return (
    <div>
      <h1>Sign up</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleClick.signup(firstName, lastName, email, phoneNumber, password);
        }}
      >
        <label>First Name</label>
        <input
          type="text"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <br />

        <label>Last Name</label>
        <input
          type="text"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <br />

        <label>Email</label>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />

        <label>Phone</label>
        <input
          type="tel"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
        <br />

        <label>Password</label>
        <input
          type="password"
          minLength={8}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
