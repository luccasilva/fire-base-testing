import { createContext, useContext } from "react";
import { User } from "../../interfaces";

interface UserContextInformation {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

export const USER_CONTEXT_DEFAULT_VALUE = {
  users: [] as User[],
  setUsers: () => null,
} as UserContextInformation;

export const UserContext = createContext<UserContextInformation>(
  USER_CONTEXT_DEFAULT_VALUE
);

const useUserContext = () => useContext(UserContext);

export default useUserContext;
