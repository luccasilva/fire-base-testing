import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import IndexUser from "./components/exercise/index-exercise";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} key={"/"} element={<Login />} />
        <Route path={"/register"} key={"/register"} element={<Register />} />
        <Route path={"/users"} key={"/users"} element={<IndexUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
