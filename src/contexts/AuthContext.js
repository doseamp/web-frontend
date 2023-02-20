import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { signInWithGoogle } from "../firebase";
import { UtilsContext } from "./UtilsContext";

const baseUrl = process.env.REACT_APP_BASE_URL;
const auth = getAuth();

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const { errorMsg } = useContext(UtilsContext);
  const { setErrorMsg } = useContext(UtilsContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const handleClick = {
    signup: async function (
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      confirmPassword
    ) {
      try {
        setLoading(true);
        if (password !== confirmPassword) {
          setLoading(false);
          setErrorMsg({ confirmPassword: "Passwords are not the same" });
          throw Error("Passwords are not the same");
        }

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
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.log("error");
        console.error(error.response.data);
        if (
          error.response.data.message ===
          "The email address is already in use by another account."
        )
          setErrorMsg({ email: "This email is already in use" });

        if (error.response.data.message.includes("password"))
          setErrorMsg({
            password:
              "Password must be at least 8 characters with 1 letter and 1 number",
          });

        setLoading(false);
        return { error: error.message };
      }
    },

    signin: async function (email, password) {
      try {
        setLoading(true);
        await signInWithEmailAndPassword(auth, email, password);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        return { error: error.message };
      }
    },

    googleSignin: async function () {
      setLoading(true);
      signInWithGoogle();
      setLoading(false);
    },

    signout: async function () {
      try {
        setLoading(true);
        await signOut(auth);
        setLoading(false);

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },

    resetPassword: async function (email) {
      try {
        setLoading(true);
        await axios({
          method: "post",
          url: `${baseUrl}/auth/send-password-reset-email`,
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
          data: {
            email,
          },
        });
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        return { error: error.message };
      }
    },

    forgotPassword: async function (email) {
      try {
        setLoading(true);
        await axios({
          method: "post",
          url: `${baseUrl}/auth/send-forgot-password-email`,
          data: {
            email,
          },
        });
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        return { error: error.message };
      }
    },
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loading, ...handleClick }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
