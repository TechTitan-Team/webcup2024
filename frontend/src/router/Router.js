import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Search from "../components/Search/Search";
import Location from "../components/Location/Location";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/espace" element={<Search />}></Route>
        <Route path="/espace/:id" element={<Location />}></Route>

      </Routes>
    </BrowserRouter>
  );
};

export default Router;