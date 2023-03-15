import React from "react";
import { doc, setDoc } from "@firebase/firestore";
import { createUsersCol } from "../_firebase/useDb";
import { useForm } from "react-hook-form";
import { CreateUserAttributes } from "../interfaces";

export default function ReadUsers() {
  const { register, handleSubmit } = useForm<CreateUserAttributes>();

  const handleCreateUserSubmit = async (data: CreateUserAttributes) => {
    const userRef = doc(createUsersCol);
    await setDoc(userRef, {
      name: data.name,
      email: data.email,
    });
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
