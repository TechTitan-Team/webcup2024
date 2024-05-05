import React from "react";
import aboutImg from "../../../assets/img/about-2.jpg"
import aboutImg2 from "../../../assets/img/demarche-eco.jpg"

const About = () => {
  return (
    <section id="about" className="about pt-5">
      <div className="container">
        <div className="section-header">
          <h2>Notre engagement envers l'environnement</h2>
          <p>
          Chez Elite Events, nous nous engageons à protéger l'environnement.
          </p>
        </div>
        <div className="row gy-4">
          <div className="col-lg-6">
            <h4>Engagement écologique, mesuré par <span className="text-primary mb-4">EcoIndex</span></h4>
            <img
              src={aboutImg}
              className="img-fluid rounded-4 mb-10 mt-5"
             
              alt=""
            />
            <p style = {{marginTop: "1.5rem"}}>
            Ensemble, faisons la différence pour un avenir plus vert et plus durable. Rejoignez-nous chez Élite évents pour créer des événements exceptionnels tout en préservant notre planète pour les générations futures.
            </p>
            <a href="#" className="btn btn-primary " style = {{marginRight:"1rem"}}>
              Devenir partenaire
            </a>
            <a href="#" className="btn btn-primary ">
              Consulter nos services
            </a>
            {/* <p>
              Temporibus nihil enim deserunt sed ea. Provident sit expedita aut
              cupiditate nihil vitae quo officia vel. Blanditiis eligendi
              possimus et in cum. Quidem eos ut sint rem veniam qui. Ut ut
              repellendus nobis tempore doloribus debitis explicabo similique
              sit. Accusantium sed ut omnis beatae neque deleniti repellendus.
            </p> */}
          </div>
          <div className="col-lg-6">
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic">
               Voici les avantanges pour vous de choisir une plateforme éco-consciente comme Elite Events :
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle-fill" /> Réduction de l'empreinte carbone
                  {/* <p>En choisissant des fournisseurs et des services éco-conscients pour leur événement, les clients peuvent contribuer à réduire l'empreinte carbone de celui-ci. Par exemple, en optant pour des traiteurs proposant des menus à base de produits locaux et de saison, les clients réduisent l'empreinte carbone associée au transport des aliments.</p> */}
                </li>
                <li>
                  <i className="bi bi-check-circle-fill" /> Conservation des ressources naturelles
                </li>
                <li>
                  <i className="bi bi-check-circle-fill" /> Soutien à des initiatives positives
                </li>
                <li>
                  <i className="bi bi-check-circle-fill" /> Image de marque responsable 
                </li>  
              </ul>
              <p>
              
              Nous sommes fiers de notre engagement écologique, mesuré par EcoIndex. EcoIndex évalue la performance écologique de notre application web, et nous sommes ravis d'avoir obtenu une excellente note. Cela signifie que notre plateforme respecte des normes environnementales élevées, contribuant ainsi à préserver notre planète.
              </p>
              <div className="position-relative mt-4">
                <img
                  src={aboutImg2}
                  className="img-fluid rounded-4"
                  width="120%"
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
