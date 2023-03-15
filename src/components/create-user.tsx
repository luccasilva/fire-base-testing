import React from "react";
import { doc, setDoc } from "@firebase/firestore";
import { createUsersCol, getUsersCol } from "../_firebase/useDb";
import { useForm } from "react-hook-form";
import { CreateUserAttributes, User } from "../interfaces";
import { getDocs } from "firebase/firestore";

interface Props {
  users: User[];
  setUsers: (users: User[]) => void;
}

export default function CreateUser({ users, setUsers }: Props) {
  const { register, handleSubmit } = useForm<CreateUserAttributes>();

  const handleCreateUserSubmit = async (data: CreateUserAttributes) => {
    const userRef = doc(createUsersCol);
    try {
      await setDoc(userRef, {
        name: data.name,
        email: data.email,
      })
    }
    catch (error: unknown) {
      console.log(error)
    }
    const usersDocs = await getDocs(getUsersCol);
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
