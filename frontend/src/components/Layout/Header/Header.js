import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useToken from "../../../hooks/useToken";

const Header = () => {
  const [isScroll, setIsScroll] = useState(false)
  const location = useLocation();
  const { token, clearToken } = useToken();

  const checkActive = (url) => {
    return location.pathname == url ? "active" : null;
  };

  const headerScroll = () => {
    let header = document.getElementById("header");
    if (window.pageYOffset <= 50) {
      setIsScroll(false)
    } else {
      setIsScroll(true)
    }
  };
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", headerScroll);
  }, []);

  const deconnect = () => {
    clearToken();
    window.location.reload();
  };

  return (
    <header id="header" className={`fixed-top ${isScroll||toggle ? "header-scrolled" : ""}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <img src="/rect2.png" alt="logo" className="mx-2" />
          <Link to={"/"} style={{ verticalAlign: "middle" }}>
            Elite Events
          </Link>
        </h1>
        <nav id="navbar" className="navbar">
          <ul className={`${toggle ? "d-block" : ""}`}>
            <li>
              <Link className={`nav-link ${checkActive("/")}`} to={"/"}>
                Accueil
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link ${checkActive("/espace")}`}
                to={"/espace"}
              >
                Réservation
              </Link>
            </li>
            {!token || token.user.type != "user" ? (
              <li>
                <Link className="" to={"/login"}>
                  Se connecter
                </Link>
              </li>
            ) : null}
            <li>
              <a
                href="https://bff.ecoindex.fr/redirect/?url=https://techtitan.madagascar.webcup.hodi.host"
                target="_blank"
              >
                <img
                  src="https://bff.ecoindex.fr/badge/?theme=dark&url=https://techtitan.madagascar.webcup.hodi.host"
                  alt="Ecoindex Badge"
                />
              </a>
            </li>
            {!token || token.user.type != "user" ? (
              <li>
                <Link className="getstarted " to="/become-partner">
                  Devenir parternaire
                </Link>
              </li>
            ) : (

              <li className="d-flex" style={{ alignItems: "center" }}>
                <Link to="/profile">
                  Mon profil : {token.user.name + " " + token.user.last_name}
                </Link>
                <span onClick={deconnect} className="getstarted cursor-pointer">
                  Deconnexion
                </span>
              </li>
            )}
          </ul>
          <button
            className={`mobile-nav-toggle ${toggle ? "viewed" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <i className="bi bi-list" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
