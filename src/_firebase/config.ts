import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  DocumentData,
  CollectionReference,
} from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCenr8r0CgpCp6IK7yAkUUV_5AjyMLlhTQ",
  authDomain: "fire-base-testing-75417.firebaseapp.com",
  projectId: "fire-base-testing-75417",
  storageBucket: "fire-base-testing-75417.appspot.com",
  messagingSenderId: "1040141787766",
  appId: "1:1040141787766:web:6d50840b45b6ec2521f557",
});

const firestore = getFirestore();

const firebaseAuth = getAuth(firebaseApp);

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(firestore, collectionName) as CollectionReference<T>;
};

export { firebaseApp, firestore, firebaseAuth, createCollection };
