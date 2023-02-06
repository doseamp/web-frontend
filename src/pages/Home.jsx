import { useRef } from "react";
import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "../firebase";

const Home = () => {
  const messageRef = useRef();
  const ref = collection(firestore, "names");

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(messageRef.current.value);

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

      <form onSubmit={handleSave}>
        <label>Name</label>
        <input type="text" ref={messageRef} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Home;
