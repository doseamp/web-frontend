import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = useContext(AuthContext);
  const handleClick = useContext(AuthContext);

  return (
    <div>
      <h1>Homepage</h1>
      <h3>{user ? `Logged in as: ${user.email}` : `Logged out`}</h3>
      {user && console.log(user)}
      <button onClick={handleClick.signout}>Sign out</button>
      <br />
      <button>
        <Link to="/signup">Sign up</Link>
      </button>
    </div>
  );
};

export default Home;
