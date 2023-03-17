import React, { useMemo, useState } from "react";
import ContextProviderProps from "../ContextProviderProps";
import { UserContext, USER_CONTEXT_DEFAULT_VALUE } from "./context";
import { User } from "../../interfaces";

function UsersContextProvider({ children }: ContextProviderProps) {
  const [users, setUsers] = useState<User[]>(USER_CONTEXT_DEFAULT_VALUE.users);

  const value = useMemo(
    () => ({
      users,
      setUsers,
    }),
    [users, setUsers]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UsersContextProvider;
