import React from "react";
import heroImg from "../../../assets/img/hero-img.png";
import img from "../../../assets/img/photo1.jpg";
import AnimationWrapper from "../../../hooks/JumpInAnimation";
import ElegantText from "../../../hooks/ElegantText";
const Banner = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <AnimationWrapper text="Elite Events"/>
            <h2>Réalisez vos soirées d'exception, sans compromis</h2>

            <p>
            <ElegantText text="Bienvenue sur Elite Events, votre destination ultime pour des soirées mémorables et impeccables. Que ce soit pour une fête mondaine ou un événement professionnel, notre plateforme vous permet de réserver facilement des services sur mesure qui correspondent à vos besoins et à vos exigences." title={false}/>
            </p>
            <div className="d-flex">
              <a href="#about" className="btn-get-started scrollto">
                Decouvrez nos services
              </a>
             
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <img
              src={img}
              className="img-fluid animated"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
