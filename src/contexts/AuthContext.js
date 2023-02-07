import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getFirestore, addDoc, collection } from "@firebase/firestore";
import { signInWithGoogle } from "../firebase";

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
        await signInWithEmailAndPassword(auth, email, password);

        return true;
      } catch (error) {
        console.error(error);
        return { error: error.message };
      }
    },

    googleSignin: async function () {
      signInWithGoogle();
    },

    signout: async function () {
      try {
        await signOut(auth);

        return true;
      } catch (error) {
        console.error(error);
        return false;
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
