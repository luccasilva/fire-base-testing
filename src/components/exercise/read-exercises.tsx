import React, { useEffect } from "react";
import useExerciseContext from "../../context/exercise/context";
import {
  deleteExerciseDocumentById,
  getAllExercisesDocs,
  getExerciseSnapshotById,
} from "../../_firebase/exercise/services";

export default function ReadExercises() {
  const { exercises, setExercises } = useExerciseContext();

  const handleDeleteExercise = async (exerciseId: string) => {
    await deleteExerciseDocumentById(exerciseId);
    const ExercisesAfterDelete = exercises.filter(
      (exercise) => exercise.exerciseId !== exerciseId
    );
    setExercises(ExercisesAfterDelete);
  };

  const handleViewExercise = async (exerciseId: string) => {
    const ExerciseDocSnap = await getExerciseSnapshotById(exerciseId);
    console.log({ id: ExerciseDocSnap.id, ...ExerciseDocSnap.data() });
  };

  const getExercises = async () => {
    const ExercisesDocs = await getAllExercisesDocs();
    setExercises(
      ExercisesDocs.docs.map((exerciseDoc) => ({
        ...exerciseDoc.data(),
        exerciseId: exerciseDoc.id,
      }))
    );
  };

  useEffect(() => {
    getExercises();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>Read Exercises</h1>
      <ul>
        {exercises.map((exercise, key) => {
          return (
            <div key={key}>
              <li>{exercise.createdByUserId}</li>
              <li>{exercise.name}</li>
              <li>{exercise.weight}</li>
              <li>{exercise.repetitions}</li>
              <li>{exercise.breakTime}</li>
              <button onClick={() => handleDeleteExercise(exercise.exerciseId)}>
                Deletar
              </button>
              <button onClick={() => handleViewExercise(exercise.exerciseId)}>
                Visualizar
              </button>
              <br />
            </div>
          );
        })}
      </ul>
    </>
  );
}
