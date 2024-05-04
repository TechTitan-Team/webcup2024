import React, { useEffect } from "react";
import useToken from "../hooks/useToken";
import { useNavigate } from "react-router-dom";

const IsAdmin = ({ children }) => {
  const { token } = useToken();
  const nav = useNavigate();

  useEffect(() => {
    if (!token || !token.token == "admin") nav("/admin/login");
  }, [token]);
  return <>{!token || !token.token == "admin" ? null : children}</>;
};

export default IsAdmin;