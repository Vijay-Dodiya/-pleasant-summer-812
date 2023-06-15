import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  // maintain isAuth state
  // login,logout function which updates isAuth state
  let provider = {
    isAuth: false,
    name: "vijay",
  };

  return (
    <AuthContext.Provider value={provider}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
