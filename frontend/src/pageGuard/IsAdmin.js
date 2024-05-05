import React, { useEffect } from "react";
import useToken from "../hooks/useToken";
import { useNavigate } from "react-router-dom";

const IsAdmin = ({ children }) => {
  const { token } = useToken();
  const nav = useNavigate();

  useEffect(() => {
    if (!token || !token.user.type == "admin" || !token.user.type == "partner")
      nav("/admin/login");
  }, [token]);
  return (
    <>
      {!token || !token.user.type == "admin" || !token.user.type == "partner"
        ? null
        : children}
    </>
  );
};

export default IsAdmin;
