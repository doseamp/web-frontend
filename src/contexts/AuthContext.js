import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { signInWithGoogle } from "../firebase";

const baseUrl = process.env.REACT_APP_BASE_URL;
const auth = getAuth();

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

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
      if (password !== confirmPassword) {
        return Error({ error: "Mismatched password" });
      }

      try {
        setLoading(true);
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
        console.error(error);
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
