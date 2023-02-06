import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, addDoc, collection } from "@firebase/firestore";

const auth = getAuth();
const db = getFirestore();

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const handleClick = {
    signup: async function (email, password, confirmPassword) {
      // confirm password
      if (confirmPassword !== password) {
        console.error("Mismatched passwords");
        return { error: "Mispatched passwords" };
      }

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
        return true;
      } catch (error) {
        console.error(error);
        return { error: error.message };
      }
    },

    signin: async function (email, password) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = userCredential.user;
        return true;
      } catch (error) {
        console.error(error);
        return { error: error.message };
      }
    },
  };

  return (
    <AuthContext.Provider value={{ user, setUser, ...handleClick }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
