import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { signInWithGoogle } from "../firebase";

const baseUrl = process.env.REACT_APP_BASE_URL;
const auth = getAuth();

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const handleClick = {
    signup: async function (firstName, lastName, email, phoneNumber, password) {
      try {
        const { data } = await axios({
          method: "post",
          url: `${baseUrl}/auth/register`,
          data: {
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
          },
        });
        console.log(data);

        // // create user
        // const userCredential = await createUserWithEmailAndPassword(
        //   auth,
        //   email,
        //   password
        // );
        // const user = userCredential.user;

        // // save user to db
        // await addDoc(collection(db, "users"), {
        //   uid: user.uid,
        //   email: user.email,
        // });
        // return true;
      } catch (error) {
        console.error(error);
        return { error: error.message };
      }
    },

    signin: async function (email, password) {
      try {
        const { data } = await axios({
          method: "post",
          url: `${baseUrl}/auth/login`,
          data: {
            email,
            password,
          },
        });

        setUser({
          email: "user@email.com",
          id: 1,
        });

        console.log(data);
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

    resetPassword: async function (email) {
      try {
        await axios({
          method: "post",
          url: `${baseUrl}/auth/send-password-reset-email`,
          headers: {
            Authorization: user.idToken,
          },
          data: {
            email,
          },
        });
      } catch (error) {
        console.error(error);
        return { error: error.message };
      }
    },

    forgotPassword: async function (email) {
      try {
        await axios({
          method: "post",
          url: `${baseUrl}/auth/send-forgot-password-email`,
          data: {
            email,
          },
        });
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
