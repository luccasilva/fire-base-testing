import { CreateUserAttributes, User } from "../../interfaces";
import { createCollection } from "../config";

const USERS_PATH = "users";

const usersCollection = createCollection<any>(USERS_PATH);
const getUserCollection = createCollection<User>(USERS_PATH);
const createUserCollection = createCollection<CreateUserAttributes>(USERS_PATH);

export { usersCollection, getUserCollection, createUserCollection };
