import React from "react";
import useToken from "../../../../hooks/useToken";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { token, clearToken } = useToken();
  const nav = useNavigate();

  const deconnect = () => {
    clearToken();
    nav("/admin/login");
  };

  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          {/* <img src="assets/img/logo.png" alt="" /> */}
          <span className="d-none d-lg-block">EliteEvents</span>
        </a>
        {/* <i className="bi bi-list toggle-sidebar-btn" /> */}
      </div>
      {/* End Logo */}
      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <li className="nav-item d-block d-lg-none">
            <a className="nav-link nav-icon search-bar-toggle " href="/">
              <i className="bi bi-search" />
            </a>
          </li>
          {/* End Search Icon*/}
          {/* End Messages Nav */}
          <li className="nav-item dropdown pe-3">
            <a
              className="nav-link nav-profile d-flex align-items-center pe-0"
              href="/"
              data-bs-toggle="dropdown"
            >
              {/* <img
                src="assets/img/profile-img.jpg"
                alt="Profile"
                className="rounded-circle"
              /> */}
              {token.user.type == "admin" ? (
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  {token && token.user.name + " " + token.user.last_name}
                </span>
              ) : (
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  {token && token.user.name}
                </span>
              )}
            </a>
            {/* End Profile Iamge Icon */}
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
              <li className="dropdown-header">
                <h6>
                  {token && token.user.name + " "}{" "}
                  {token.user.last_name && token.user.last_name}
                </h6>
                <span>{token && token.user.email}</span>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              {token && token.user.type == "admin" ? null : (
                <>
                  <li>
                    <span className="dropdown-item d-flex align-items-center">
                      <i className="bi bi-person" />
                      <span>Mon Profile</span>
                    </span>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </>
              )}
              <li>
                <span
                  onClick={deconnect}
                  className="dropdown-item d-flex align-items-center"
                >
                  <i className="bi bi-box-arrow-right" />
                  <span>Se déconnecter</span>
                </span>
              </li>
            </ul>
            {/* End Profile Dropdown Items */}
          </li>
          {/* End Profile Nav */}
        </ul>
      </nav>
      {/* End Icons Navigation */}
    </header>
  );
};

export default Header;
