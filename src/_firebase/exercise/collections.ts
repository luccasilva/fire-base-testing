import { CreateExerciseAttributes, Exercise } from "../../interfaces";
import { createCollection } from "../config";

const EXERCISES_PATH = "exercises";

const exercisesCollection = createCollection<any>(EXERCISES_PATH);
const getExerciseCollection = createCollection<Exercise>(EXERCISES_PATH);
const createExerciseCollection =
  createCollection<CreateExerciseAttributes>(EXERCISES_PATH);

export { exercisesCollection, getExerciseCollection, createExerciseCollection };
