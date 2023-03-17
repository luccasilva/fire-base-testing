import React from "react";
import ContextProviderProps from "./ContextProviderProps";
import UsersContextProvider from "./user/provider";

function AplicationContextProvider({ children }: ContextProviderProps) {
  return <UsersContextProvider>{children}</UsersContextProvider>;
}

export default AplicationContextProvider;
