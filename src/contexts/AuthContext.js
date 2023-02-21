import React, { createContext, useEffect, useState } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
