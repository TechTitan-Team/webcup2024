import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const headerScroll = () => {
    let header = document.getElementById("header");
    if (window.pageYOffset <= 50) {
      header.classList.remove("header-scrolled");
    } else {
      header.classList.add("header-scrolled");
    }
  };
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", headerScroll);
  }, []);

  return (
    <header id="header" className={`fixed-top ${toggle ? "header-scrolled" : ""}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <img src="/rect2.png" alt="logo" className="mx-2" />
          <Link to={"/"} style={{ verticalAlign: "middle" }}>Elite Events</Link>
        </h1>
        <nav id="navbar" className="navbar">
          <ul className={`${toggle?"d-block":""}`}>
            <li>
              <Link className="nav-link  active" to={"/"}>
                Accueil
              </Link>
            </li>
            <li>
              <Link className="nav-link " to={"/espace"}>
                Réservation
              </Link>
            </li>
            <li>
              <Link className="" to={"/login"}>
                Se connecter
              </Link>
            </li>
            <li>
              <a href="https://bff.ecoindex.fr/redirect/?url=https://techtitan.madagascar.webcup.hodi.host" target="_blank">
                <img src="https://bff.ecoindex.fr/badge/?theme=dark&url=https://techtitan.madagascar.webcup.hodi.host" alt="Ecoindex Badge" />
              </a>
            </li>
            <li>
              <Link className="getstarted " to="/become-partner">
                Devenir parternaire
              </Link>
            </li>
          </ul>
          <button className={`mobile-nav-toggle ${toggle ? "viewed" : ""}`} onClick={() => setToggle(!toggle)}>
            <i className="bi bi-list" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
