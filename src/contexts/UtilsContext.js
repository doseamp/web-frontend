import React, { createContext, useState } from "react";

export const UtilsContext = createContext();

const UtilsContextProvider = (props) => {
  const [errorMsg, setErrorMsg] = useState({
    email: null,
    password: null,
    confirmPassword: null,
  });

  return (
    <UtilsContext.Provider value={{ errorMsg, setErrorMsg }}>
      {props.children}
    </UtilsContext.Provider>
  );
};

export default UtilsContextProvider;
