import React, { useEffect, useState } from "react";
import { getDocs } from "@firebase/firestore";
import { firestore, getUserById, getUsersCol, usersRef } from "../_firebase/useDb";
import User from "../interfaces/user/user";
import { collection, deleteDoc, doc, getDoc } from "firebase/firestore";

interface Props {
  users: User[];
  setUsers: (users: User[]) => void;
}

export default function ReadUsers({ users, setUsers }: Props) {

  const handleDeleteUser = async (deleteUserId: string) => {
    await deleteDoc(doc(firestore, "users", deleteUserId));
    const usersAfterDelete = users.filter(
      (user) => user.userId !== deleteUserId
    );
    setUsers(usersAfterDelete);
  };

  const getUsers = async () => {
    const usersDocs = await getDocs(getUsersCol);
    setUsers(
      usersDocs.docs.map((userDoc) => ({
        ...userDoc.data(),
        userId: userDoc.id,
      }))
    );
  };

  const handleViewUser = async (userId: string) => {
    const docRef = doc(collection(firestore, 'users'), userId)
    const userDocSnap = await getDoc(docRef);
    console.log({ id: userDocSnap.id, ...userDocSnap.data() })
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <ul>
        {users.map((user, key) => {
          return (
            <div key={key}>
              <li>{user.name}</li>
              <li>{user.email}</li>
              <button onClick={() => handleDeleteUser(user.userId)}>
                Deletar
              </button>
              <button onClick={() => handleViewUser(user.userId)}>
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
