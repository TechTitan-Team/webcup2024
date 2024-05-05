import React from "react";

const Faq = () => {
  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="content px-xl-5">
              <h3>
                Les questions frequentes
              </h3>
              <p>
                Voici quelques questions fréquemment posées à propos de nous
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <div
              className="accordion accordion-flush"
              id="faqlist"
            >
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-content-1"
                  >
                    <span className="num">1.</span>
                    Quels types de services proposez-vous sur Elite events ?
                  </button>
                </h3>
                <div
                  id="faq-content-1"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqlist"
                >
                  <div className="accordion-body">
                  Elite events propose une gamme complète de services pour répondre à tous vos besoins en matière d'événements. Cela inclut la location de lieux, les services traiteur, les animations, les services de conciergerie et bien plus encore.
                  </div>
                </div>
              </div>
              {/* # Faq item*/}
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-content-2"
                  >
                    <span className="num">2.</span>
                    Comment fonctionne le processus de réservation sur votre plateforme ?
                  </button>
                </h3>
                <div
                  id="faq-content-2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqlist"
                >
                  <div className="accordion-body">
                  Le processus de réservation sur Elite events est simple et intuitif. Les clients peuvent parcourir les différents services disponibles, sélectionner ceux qui correspondent à leurs besoins, et effectuer leur réservation en quelques clics seulement.
                  </div>
                </div>
              </div>
              {/* # Faq item*/}
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-content-3"
                  >
                    <span className="num">3.</span>
                    Quels sont les critères pour devenir partenaire sur Elite events ?
                  </button>
                </h3>
                <div
                  id="faq-content-3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqlist"
                >
                  <div className="accordion-body">
                  Les partenaires sur Elite events doivent répondre à des critères stricts de qualité et d'excellence. Nous sélectionnons soigneusement nos partenaires en fonction de leur expérience, de leur professionnalisme et de leur capacité à offrir des services de haute qualité.
                  </div>
                </div>
              </div>
              {/* # Faq item*/}
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-content-4"
                  >
                    <span className="num">4.</span>
                    Comment garantissez-vous la qualité des prestataires de services sur votre plateforme ?
                  </button>
                </h3>
                <div
                  id="faq-content-4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqlist"
                >
                  <div className="accordion-body">
                  Nous garantissons la qualité des prestataires de services sur Elite events en effectuant un processus de sélection rigoureux. Nous vérifions leurs antécédents, examinons leurs références et recueillons des avis clients pour nous assurer qu'ils répondent à nos normes élevées de qualité.
                  </div>
                </div>
              </div>
              {/* # Faq item*/}
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-content-5"
                  >
                    <span className="num">5.</span>
                    Avez-vous des options de personnalisation pour les événements sur Elite events ?
                  </button>
                </h3>
                <div
                  id="faq-content-5"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqlist"
                >
                  <div className="accordion-body">
                  Oui, chez Elite events, nous comprenons que chaque événement est unique. C'est pourquoi nous offrons des options de personnalisation pour répondre aux besoins spécifiques de chaque client. Que vous recherchiez une décoration sur mesure, un menu personnalisé ou des divertissements uniques, nous sommes là pour vous aider à créer l'événement parfait.

                  </div>
                </div>
              </div>
              {/* # Faq item*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
