import React from "react";
import aboutImg from "../../../assets/img/about.jpg"
import aboutImg2 from "../../../assets/img/about-2.jpg"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Us</h2>
          <p>
            Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro
            incidunt dolores placeat sunt id nobis omnis tiledo stran delop
          </p>
        </div>
        <div className="row gy-4">
          <div className="col-lg-6">
            <h3>Voluptatem dignissimos provident quasi corporis</h3>
            <img
              src={aboutImg}
              className="img-fluid rounded-4 mb-4"
              alt=""
            />
            <p>
              Ut fugiat ut sunt quia veniam. Voluptate perferendis perspiciatis
              quod nisi et. Placeat debitis quia recusandae odit et consequatur
              voluptatem. Dignissimos pariatur consectetur fugiat voluptas ea.
            </p>
            <p>
              Temporibus nihil enim deserunt sed ea. Provident sit expedita aut
              cupiditate nihil vitae quo officia vel. Blanditiis eligendi
              possimus et in cum. Quidem eos ut sint rem veniam qui. Ut ut
              repellendus nobis tempore doloribus debitis explicabo similique
              sit. Accusantium sed ut omnis beatae neque deleniti repellendus.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle-fill" /> Ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  <i className="bi bi-check-circle-fill" /> Duis aute irure
                  dolor in reprehenderit in voluptate velit.
                </li>
                <li>
                  <i className="bi bi-check-circle-fill" /> Ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate trideta storacalaperda mastiro
                  dolore eu fugiat nulla pariatur.
                </li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident
              </p>
              <div className="position-relative mt-4">
                <img
                  src={aboutImg2}
                  className="img-fluid rounded-4"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
