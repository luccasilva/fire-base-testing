import React, { useEffect, useState } from "react";
import { getDocs } from "@firebase/firestore";
import { firestore, getUsersCol } from "../_firebase/useDb";
import User from "../interfaces/user/user";
import { deleteDoc, doc } from "firebase/firestore";

interface Props {}

// eslint-disable-next-line no-empty-pattern
export default function ReadUsers({}: Props) {
  const [users, setUsers] = useState<User[]>([]);

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
              <br />
            </div>
          );
        })}
      </ul>
    </>
  );
}
