import React from "react";
import Header from "./Header/Header";
import "../../../assets/styles/admin.css";
import Sidebar from "./Sidebar/Sidebar";

const AdminLayout = ({children}) => {
  return (
    <div className="admin-container">
        <Header />
        <Sidebar />
        {children}
    </div>
  );
};

export default AdminLayout;