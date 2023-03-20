import React from "react";
import { firebaseAuth } from "../../_firebase/config";
import { AuthInfo } from "../../interfaces";
import useAuthContext from "../../context/auth/context";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  const { setAuth } = useAuthContext();

  const handleLogout = async () => {
    const auth = firebaseAuth;
    signOut(auth)
      .then(() => {
        const logOutInfo: AuthInfo = {
          isAutenticated: false,
          uId: "",
        };
        setAuth(logOutInfo);
        navigate("/");
      })
      .catch((error) => {
        throw error;
      });
  };

  return (
    <div>
      <button onClick={() => handleLogout}>LogOut</button>
    </div>
  );
}
