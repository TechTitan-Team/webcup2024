import React from "react";
import heroImg from "../../../assets/img/photo1.jpg";
import background from "../../../assets/img/photo5.jpg";
const Banner = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>Elite envents</h1>
            <h2>
              Réalisez vos soirées d'exception, sans compromis
            </h2>
            <div className="d-flex">
              <a href="#about" className="btn-get-started scrollto">
                Get Started
              </a>
              <a
                href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                className="glightbox btn-watch-video"
              >
                <i className="bi bi-play-circle" />
                <span>Watch Video</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <img
              src={heroImg}
              className="img-fluid "
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
