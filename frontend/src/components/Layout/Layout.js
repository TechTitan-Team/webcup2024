import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
     
    </main>
  );
};

export default Layout;
