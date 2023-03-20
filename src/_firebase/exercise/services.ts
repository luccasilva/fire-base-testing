import { deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { AuthInfo, CreateExerciseAttributes } from "../../interfaces";
import { createExerciseCollection, exercisesCollection } from "./collections";

const getAllExercisesDocs = async () => {
  return await getDocs(exercisesCollection);
};

const getExerciseDocumentById = (exerciseId: string) => {
  return doc(exercisesCollection, exerciseId);
};

const getExerciseSnapshotById = async (exerciseId: string) => {
  return await getDoc(getExerciseDocumentById(exerciseId));
};

const createExerciseDocument = async (
  exercise: CreateExerciseAttributes,
  auth: AuthInfo
) => {
  const createExerciseDocument = doc(createExerciseCollection);
  return await setDoc(createExerciseDocument, {
    createdByUserId: auth.uId,
    name: exercise.name,
    weight: exercise.weight,
    repetitions: exercise.repetitions,
    breakTime: exercise.breakTime,
  });
};

const deleteExerciseDocumentById = async (exerciseId: string) => {
  return await deleteDoc(getExerciseDocumentById(exerciseId));
};

export {
  getAllExercisesDocs,
  deleteExerciseDocumentById,
  getExerciseDocumentById,
  createExerciseDocument,
  getExerciseSnapshotById,
};
