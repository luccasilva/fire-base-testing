import { CreateUserAttributes, User } from "../../interfaces";
import { createCollection } from "../config";

const usersCollection = createCollection<any>("users");
const getUserCollection = createCollection<User>("users");
const createUserCollection = createCollection<CreateUserAttributes>("users");

export { usersCollection, getUserCollection, createUserCollection };
