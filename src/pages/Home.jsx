import { useContext, useRef } from "react";
import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "../firebase";
import { AuthContext } from "../contexts/AuthContext";

const Home = () => {
  const messageRef = useRef();
  const ref = collection(firestore, "names");
  const { user } = useContext(AuthContext);
  const handleClick = useContext(AuthContext);

  const handleSave = async (e) => {
    e.preventDefault();

    let data = {
      name: messageRef.current.value,
    };

    try {
      addDoc(ref, data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Homepage</h1>
      <h3>{user ? `Logged in as: ${user.email}` : `Logged out`}</h3>
      <button onClick={handleClick.signout}>Sign out</button>

      <form onSubmit={handleSave}>
        <label>Name</label>
        <input type="text" ref={messageRef} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Home;
