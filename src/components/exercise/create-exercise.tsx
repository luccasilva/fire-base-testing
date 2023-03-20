import React from "react";
import { useForm } from "react-hook-form";
import { CreateExerciseAttributes } from "../../interfaces";
import useExerciseContext from "../../context/exercise/context";
import {
  createExerciseDocument,
  getAllExercisesDocs,
} from "../../_firebase/exercise/services";
import useAuthContext from "../../context/auth/context";

export default function CreateExercise() {
  const { auth } = useAuthContext();
  const { setExercises } = useExerciseContext();
  const { register, handleSubmit } = useForm<CreateExerciseAttributes>();

  const handleCreateExerciseSubmit = async (
    exercise: CreateExerciseAttributes
  ) => {
    try {
      await createExerciseDocument(exercise, auth);
    } catch (error: unknown) {
      throw error;
    }

    const ExercisesDocs = await getAllExercisesDocs();
    setExercises(
      ExercisesDocs.docs.map((exerciseDoc) => ({
        ...exerciseDoc.data(),
        exerciseId: exerciseDoc.id,
      }))
    );
  };

  return (
    <div>
      <h1>Create Exercise</h1>
      <form onSubmit={handleSubmit(handleCreateExerciseSubmit)}>
        <p>Nome</p>
        <input {...register("name", { required: true })} />
        <p>Peso</p>
        <input {...register("weight", { required: true })} />
        <p>Repetições</p>
        <input {...register("repetitions", { required: true })} />
        <p>Pausa</p>
        <input {...register("breakTime", { required: true })} />
        <input type="submit" />
      </form>
    </div>
  );
}
