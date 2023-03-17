import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./components/create-user";
import ReadUsers from "./components/read-users";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={"/"}
          key={"/"}
          element={
            <>
              <CreateUser />
              <ReadUsers />
            </>
          }
        />
        <Route path={"/create"} key={"/create"} element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
