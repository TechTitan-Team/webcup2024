import React, { useEffect } from "react";

const Header = () => {
  const headerScroll = () => {
    let header = document.getElementById("header");
    if (window.pageYOffset <= 50) {
      header.classList.remove("header-scrolled");
    } else {
      header.classList.add("header-scrolled");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerScroll);
  }, []);

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <img src="/rect2.png" alt="logo" className="mx-2"/>
          <a href={"/"} style={{verticalAlign:"middle"}}>Elite Events</a>
        </h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href={"/espace"}>
                Services
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a href="https://bff.ecoindex.fr/redirect/?url=https://techtitan.madagascar.webcup.hodi.host" target="_blank">
                <img src="https://bff.ecoindex.fr/badge/?theme=dark&url=https://techtitan.madagascar.webcup.hodi.host" alt="Ecoindex Badge" />
              </a>
            </li>
            <li>
              <a className="getstarted scrollto" href="#about">
                Devenir un parternaire
              </a>
            </li>
            <li>
              <a className="" href={"/login"}>
                Se connecter
              </a>
            </li>
            <li>
              <a className="" href={"/login"}>
                S'inscrire
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
