import React, { useEffect } from "react";
import useUserContext from "../context/user/context";
import {
  deleteUserDocumentById,
  getAllUsersDocs,
  getUserSnapshotById,
} from "../_firebase/user/services";

export default function ReadUsers() {
  const { users, setUsers } = useUserContext();

  const handleDeleteUser = async (userId: string) => {
    await deleteUserDocumentById(userId);
    const usersAfterDelete = users.filter((user) => user.userId !== userId);
    setUsers(usersAfterDelete);
  };

  const handleViewUser = async (userId: string) => {
    const userDocSnap = await getUserSnapshotById(userId);
    console.log({ id: userDocSnap.id, ...userDocSnap.data() });
  };

  const getUsers = async () => {
    const usersDocs = await getAllUsersDocs();
    setUsers(
      usersDocs.docs.map((userDoc) => ({
        ...userDoc.data(),
        userId: userDoc.id,
      }))
    );
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
