import React from "react";

const Footer = () => {
  return (
    <footer className="pt-6">
      <div className="container position-relative mt-sm-5">
        {/* CTA */}
        <div className="row g-3 g-md-4 align-items-center">
          <div className="col-md-6">
            <h2 className="mb-0 lh-base">
              Alors, decouvrez notre produit et savoir faire avec Edenia
            </h2>
          </div>
          {/* Button */}
          <div className="col-md-5 text-md-end ms-auto ppd">
            <a
              className="btn btn-lg btn-primary-soft icon-link icon-link-hover mb-0"
              href="#"
            >
              Decouvrez ici
              <i className="bi bi-arrow-right" />{" "}
            </a>
          </div>
        </div>
        {/* Divider */}
        <hr className="my-5" />
        {/* Footer Widgets */}
        <div className="row g-4 justify-content-between">
          {/* Widget 1 START */}
          <div className="col-lg-8 col-xl-7">
            <div className="row g-4">
              {/* Link block */}
              <div className="col-6 col-md-3">
                <h6 className="mb-2 mb-md-4">Liens utiles</h6>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link pt-0" href="about-v1.html">
                      À propos 
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact-v1.html">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="career.html">
                      Carrière
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact-v1.html">
                      Devenir un partenaire
                    </a>
                  </li>

                </ul>
              </div>
              {/* Link block */}
              {/* Link block */}
              <div className="col-md-6">
                <h6 className="mb-2 mb-md-4">Notre coordonnées</h6>
                <ul className="list-group list-group-borderless">
                  <li className="d-flex mb-3">
                    <i className="me-2 text-primary bi bi-geo-alt" />
                    Lot II A 105bis Nanisana Antananarivo, 101
                  </li>
                  <li className="d-flex mb-3">
                    <i className="me-2 text-primary bi bi-phone" /> 034 54 659 24
                  </li>
                  <li className="d-flex mb-3">
                    <i className="me-2 text-primary bi bi-envelope" />{" "}
                    chocolaterieedenia@gmail.com
                  </li>
                  <li className="d-flex mb-3">
                    <i className="me-2 text-primary bi bi-clock" />
                    <p className="mb-0">
                      Ouvert du lundi au vendredi de <strong>08:30 à 16:00</strong>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>


          <div className="col-lg-3">
            <h6 className="mb-2 mb-md-4">Suivez-nous</h6>
            <ul className="list-inline mb-0 mt-3">
              <li className="list-inline-item">
                {" "}
                <a className="btn btn-xs btn-icon bg-facebook" href="https://www.facebook.com/p/Edenia-Chocolaterie-100063834920816/">
                  <i className="fab fa-fw fa-facebook-f lh-base" />
                </a>{" "}
              </li>
            </ul>
          </div>
          {/* Widget 2 END */}
        </div>
        {/* Divider */}
        <hr className="mt-4 mb-3" />
        {/* Bottom footer */}
        <div className="d-md-flex justify-content-between align-items-center text-center text-lg-start py-3">
          {/* Logo */}
          <a className="navbar-brand ppd" href="/">
            <img src={"/rect12.png"} alt="Edenia" className="img-fluid" style={{
              height: "80px"
            }} />
            <span style={{
              color: "rgb(211, 141, 95)",
              fontSize: "32px",
              verticaAlign: "middle",
              marginInlineStart: "10px"
            }}>Edenia Chocolaterie</span>
          </a>
          {/* Copyright link*/}
          <div className="text-body mt-3 mt-md-0">
            {" "}
            Copyrights ©2024 Edenia. Créer par {" "}
            <a
              href="https://www.webestica.com/"
              className="text-body text-primary-hover"
            >
              TechTitan
            </a>
            .{" "}
          </div>
        </div>
      </div>
    </footer>

  );
};
export default Footer;