import { deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { CreateUserAttributes, User } from "../../interfaces";
import { createUserCollection, usersCollection } from "./collections";

const getAllUsersDocs = async () => {
  return await getDocs(usersCollection);
};

const getUserDocumentById = (userId: string) => {
  return doc(usersCollection, userId);
};

const getUserSnapshotById = async (userId: string) => {
  return await getDoc(getUserDocumentById(userId));
};

const createUserDocument = async (user: CreateUserAttributes) => {
  const createUserDocument = doc(createUserCollection);
  return await setDoc(createUserDocument, {
    name: user.name,
    email: user.email,
  });
};

const deleteUserDocumentById = async (userId: string) => {
  return await deleteDoc(getUserDocumentById(userId));
};

export {
  getUserDocumentById,
  getUserSnapshotById,
  createUserDocument,
  deleteUserDocumentById,
  getAllUsersDocs,
};
