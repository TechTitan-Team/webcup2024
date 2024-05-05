import React, { useState } from "react";
import Layout from "../Layout/Layout";
import flesheImg from "../../assets/img/fleche.png";
import FirstForm from "./FirstForm/FirstForm";
import SecondForm from "./SecondForm/SecondForm";
// import sitemarkImg from "../../images/sitemark.svg";
// import importImg from "../../images/import.svg";

const PartnerRequest = () => {
  const [data, setData] = useState({
    pers_min: 5,
    pers_max: 20,
    type: "lieux"
  });
  const [step, setStep] = useState(0);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <SecondForm onChange={onChange} setStep={setStep} data={data} />;
      default:
        return <FirstForm onChange={onChange} setStep={setStep} />;
    }
  };

  return (
    <Layout>
<<<<<<< HEAD
      <section class="pt-7 pt-md-8">
        <div class="container pt-4 pt-md-0">
          <div class="row justify-content-between">
            <div class="col-lg-6 mb-6 mb-lg-0">
              <div class="d-flex flex-column h-100">
                <h1 class="mb-3">Les avantages et règlement des partenaires</h1>
                <p class="mb-0">
                  Vous pouvez nous contacter à tous temps via notre email <a href="#">eliteevents@gmail.com</a>.
                </p>
                <p class="mb-0">
                En devenant partenaire d'Élite évents, vous bénéficiez d'une multitude d'avantages, notamment une visibilité accrue auprès de notre clientèle sélecte à la recherche de services haut de gamme pour leurs événements, une opportunité de développer votre réseau professionnel en collaborant avec d'autres prestataires de qualité, ainsi qu'un accès exclusif à des opportunités de marketing et de promotion. En échange, nous demandons à nos partenaires de respecter nos normes élevées de qualité et d'excellence, de fournir des services fiables et professionnels à nos clients, et de contribuer à maintenir la réputation d'Élite évents en tant que plateforme de choix pour des événements mémorables et réussis.
                </p>

                <div class="d-sm-flex gap-3 align-items-center my-5">
                  <h6 class="mb-3 mb-sm-0">Suivez-nous sur:</h6>
                  <ul class="list-inline flex-wrap mb-0">
                    <li class="list-inline-item">
=======
      <section className="pt-7 pt-md-8">
        <div className="container pt-4 pt-md-0">
          <div className="row justify-content-between">
            <div className="col-lg-6 mb-6 mb-lg-0">
              <div className="d-flex flex-column h-100">
                <h1 className="mb-3">Les avantages et règlement des partenaires</h1>
                <p className="mb-0">
                  You can reach us anytime via <a href="#">example@gmail.com</a>
                </p>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercice ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </p>

                <div className="d-sm-flex gap-3 align-items-center my-5">
                  <h6 className="mb-3 mb-sm-0">Follow us on:</h6>
                  <ul className="list-inline flex-wrap mb-0">
                    <li className="list-inline-item">
>>>>>>> 0ea6fd4b44e28e813fe1ecbe54274a52fa78e613
                      <a
                        href="#"
                        className="btn btn-icon btn-light text-facebook rounded-circle"
                      >
                        <i className="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="#"
                        className="btn btn-icon btn-light text-instagram rounded-circle"
                      >
                        <i className="bi bi-instagram"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="#"
                        className="btn btn-icon btn-light text-dribbble rounded-circle"
                      >
                        <i className="bi bi-dribbble"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="#"
                        className="btn btn-icon btn-light text-twitter rounded-circle"
                      >
                        <i className="bi bi-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="#"
                        className="btn btn-icon btn-light text-youtube rounded-circle"
                      >
                        <i className="bi bi-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="login col-lg-6 col-xl-5">
              <div className="card card-body shadow border p-sm-5">
                <figure className="position-absolute top-100 start-0 translate-middle mt-n5">
                  <img src={flesheImg} width={200} />
                </figure>

                {renderStep()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PartnerRequest;
