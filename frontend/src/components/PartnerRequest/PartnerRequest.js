import React, { useState } from "react";
import Layout from "../Layout/Layout";
import flesheImg from "../../assets/img/fleche.png";
import FirstForm from "./FirstForm/FirstForm";
import SecondForm from "./SecondForm/SecondForm";
// import sitemarkImg from "../../images/sitemark.svg";
// import importImg from "../../images/import.svg";

const PartnerRequest = () => {
  const [data, setData] = useState({
    pers_min: 20,
    pers_max: 20
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
      <section class="pt-7 pt-md-8">
        <div class="container pt-4 pt-md-0">
          <div class="row justify-content-between">
            <div class="col-lg-6 mb-6 mb-lg-0">
              <div class="d-flex flex-column h-100">
                <h1 class="mb-3">Les avantages et règlement des partenaires</h1>
                <p class="mb-0">
                  You can reach us anytime via <a href="#">example@gmail.com</a>
                </p>
                <p class="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercice ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </p>

                <div class="d-sm-flex gap-3 align-items-center my-5">
                  <h6 class="mb-3 mb-sm-0">Follow us on:</h6>
                  <ul class="list-inline flex-wrap mb-0">
                    <li class="list-inline-item">
                      <a
                        href="#"
                        class="btn btn-icon btn-light text-facebook rounded-circle"
                      >
                        <i class="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        href="#"
                        class="btn btn-icon btn-light text-instagram rounded-circle"
                      >
                        <i class="bi bi-instagram"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        href="#"
                        class="btn btn-icon btn-light text-dribbble rounded-circle"
                      >
                        <i class="bi bi-dribbble"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        href="#"
                        class="btn btn-icon btn-light text-twitter rounded-circle"
                      >
                        <i class="bi bi-twitter"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        href="#"
                        class="btn btn-icon btn-light text-youtube rounded-circle"
                      >
                        <i class="bi bi-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-xl-5">
              <div class="card card-body shadow border p-sm-5">
                <figure class="position-absolute top-100 start-0 translate-middle mt-n5">
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
