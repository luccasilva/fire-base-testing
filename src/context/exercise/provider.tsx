import React, { useMemo, useState } from "react";
import ContextProviderProps from "../ContextProviderProps";
import { ExerciseContext, EXERCISE_CONTEXT_DEFAULT_VALUE } from "./context";
import { Exercise } from "../../interfaces";

function ExercisesContextProvider({ children }: ContextProviderProps) {
  const [exercises, setExercises] = useState<Exercise[]>(
    EXERCISE_CONTEXT_DEFAULT_VALUE.exercises
  );

  const value = useMemo(
    () => ({
      exercises,
      setExercises,
    }),
    [exercises, setExercises]
  );

  return (
    <ExerciseContext.Provider value={value}>
      {children}
    </ExerciseContext.Provider>
  );
}

export default ExercisesContextProvider;
