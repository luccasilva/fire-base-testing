import React from "react";
import useAuthContext from "../../context/auth/context";
import Logout from "../auth/logout";
import CreateExercise from "./create-exercise";
import ReadExercises from "./read-exercises";

export default function IndexUser() {
  const { auth } = useAuthContext();
  return (
    <div>
      {auth.isAutenticated && (
        <>
          <Logout />
          <CreateExercise />
          <ReadExercises />
        </>
      )}
      {!auth.isAutenticated && <h1>Não autenticado</h1>}
    </div>
  );
}
