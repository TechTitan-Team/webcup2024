import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Dashboard from "../components/Admin/Dashboard/Dashboard";
import UserList from "../components/Admin/UserList/UserList";
import Commandes from "../components/Admin/Commandes/Commandes";
import PartnerList from "../components/Admin/PartnerList/PartnerList";
import DemandPartner from "../components/Admin/DemandPartner/DemandPartner";
import InvalidOrder from "../components/Admin/InvalidOrder/InvalidOrder";
import Login from "../components/Login/Login";
import Register from "../components/Register";
import Search from "../components/Search/Search";
import Location from "../components/Location/Location";
import PartnerRequest from "../components/PartnerRequest/PartnerRequest";
import AdminLogin from "../components/Admin/AdminLogin/AdminLogin";
import IsAdmin from "../pageGuard/IsAdmin";
import PartnerProfile from "../components/Admin/PartnerProfile/PartnerProfile";
import PartnerLogin from "../components/PartnerLogin/PartnerLogin";
import Partners from "../components/Partners/Partners";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/admin"
          element={
            <IsAdmin>
              <Dashboard />
            </IsAdmin>
          }
        ></Route>
        <Route
          path="/admin/user-list"
          element={
            <IsAdmin>
              <UserList />
            </IsAdmin>
          }
        ></Route>
        <Route
          path="/admin/orders"
          element={
            <IsAdmin>
              <Commandes />
            </IsAdmin>
          }
        ></Route>
        <Route
          path="/admin/partners"
          element={
            <IsAdmin>
              <PartnerList />
            </IsAdmin>
          }
        ></Route>
        <Route
          path="/admin/partners-request"
          element={<DemandPartner />}
        ></Route>
        <Route
          path="/admin/orders-inactive"
          element={
            <IsAdmin>
              <InvalidOrder />
            </IsAdmin>
          }
        ></Route>
        <Route
          path="/admin/partner/:id"
          element={
            <IsAdmin>
              <PartnerProfile />
            </IsAdmin>
          }
        ></Route>
        <Route path="/admin/login" element={<AdminLogin />}></Route>
        <Route path="/espace" element={<Search />}></Route>
        <Route path="/espace/:id" element={<Location />}></Route>
        <Route path="/become-partner" element={<PartnerRequest />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/partner-login" element={<PartnerLogin />}></Route>
        <Route path="/all-partners" element={<Partners />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
