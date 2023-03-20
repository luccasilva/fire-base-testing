import Exercise from "./exercise";

type CreateExerciseAttributes = Omit<Exercise, "exerciseId">;

export default CreateExerciseAttributes;
