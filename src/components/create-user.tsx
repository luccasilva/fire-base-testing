import React from "react";
import { useForm } from "react-hook-form";
import { CreateUserAttributes } from "../interfaces";
import useUserContext from "../context/user/context";
import {
  createUserDocument,
  getAllUsersDocs,
} from "../_firebase/user/services";

export default function CreateUser() {
  const { setUsers } = useUserContext();
  const { register, handleSubmit } = useForm<CreateUserAttributes>();

  const handleCreateUserSubmit = async (user: CreateUserAttributes) => {
    try {
      await createUserDocument(user);
    } catch (error: unknown) {
      console.log(error);
      return;
    }

    const usersDocs = await getAllUsersDocs();
    setUsers(
      usersDocs.docs.map((userDoc) => ({
        ...userDoc.data(),
        userId: userDoc.id,
      }))
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleCreateUserSubmit)}>
        <input {...register("name")} />
        <input {...register("email", { required: true })} />
        <input type="submit" />
      </form>
    </div>
  );
}
