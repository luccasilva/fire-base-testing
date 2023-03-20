import { createContext, useContext } from "react";
import { Exercise } from "../../interfaces";

interface ExerciseContextInformation {
  exercises: Exercise[];
  setExercises: React.Dispatch<React.SetStateAction<Exercise[]>>;
}

export const EXERCISE_CONTEXT_DEFAULT_VALUE = {
  exercises: [] as Exercise[],
  setExercises: () => null,
} as ExerciseContextInformation;

export const ExerciseContext = createContext<ExerciseContextInformation>(
  EXERCISE_CONTEXT_DEFAULT_VALUE
);

const useExerciseContext = () => useContext(ExerciseContext);

export default useExerciseContext;
