import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


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
          <a href={"/"} style={{ verticalAlign: "middle" }}>Elite Events</a>
        </h1>
        <nav id="navbar" className="navbar">
          <ul className={`${toggle ? "d-block" : ""}`}>
          <li>
  <NavLink to={"/"} activeClassName="active" className="nav-link">Accueil</NavLink>
</li>
<li>
  <NavLink to={"/espace"} activeClassName="active" className="nav-link">Services</NavLink>
</li>
<li>
  <NavLink to={"#contact"} className="nav-link">Contact</NavLink>
</li>
<li>
  <a href="https://bff.ecoindex.fr/redirect/?url=https://techtitan.madagascar.webcup.hodi.host" target="_blank">
    <img src="https://bff.ecoindex.fr/badge/?theme=dark&url=https://techtitan.madagascar.webcup.hodi.host" alt="Ecoindex Badge" />
  </a>
</li>
<li>
  <NavLink to={"/become-partner"} activeClassName="active" className="getstarted">Devenir un partenaire</NavLink>
</li>

            <li>

              <a className="" href={"/login"}>
                Se connecter
              </a>
            </li>
            <li>
              <a className="" href={"/signup"}>
                S'inscrire
              </a>
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
