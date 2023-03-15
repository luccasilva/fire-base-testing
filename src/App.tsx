import { useState } from "react";
import CreateUser from "./components/create-user";
import ReadUsers from "./components/read-users";
import { User } from "./interfaces";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  return (
    <>
      <CreateUser users={users} setUsers={setUsers} />
      <ReadUsers users={users} setUsers={setUsers} />
    </>
  );
}

export default App;
