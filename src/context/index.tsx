import React from "react";
import AuthContextProvider from "./auth/provider";
import ContextProviderProps from "./ContextProviderProps";
import ExercisesContextProvider from "./exercise/provider";

function AplicationContextProvider({ children }: ContextProviderProps) {
  return (
    <AuthContextProvider>
      <ExercisesContextProvider>{children}</ExercisesContextProvider>
    </AuthContextProvider>
  );
}

export default AplicationContextProvider;
