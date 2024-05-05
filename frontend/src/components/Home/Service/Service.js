import React from "react";
import heroImg from "../../../assets/img/hero-img.png";
// import heroImg from "../../../assets/photo3";

const Service = () => {
  return (
<section className="pb-4 section-header" >
  <div className="container">
    {/* Title */}
    <div className="inner-container text-center mb-4 mb-sm-6">
      <h2 className="mb-0">Nos services</h2>
    </div>
    {/* Service list START */}
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
      {/* Service item */}
      <div className="col">
        <div className="card card-hover-shadow border h-100 p-4">
          {/* Card body */}
          <div className="card-body p-0">
            {/* Icon */}
            <figure className="text-primary mb-4">
              <svg
                width={50}
                height={50}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C16.567 21.75 20.4006 18.6099 21.4597 14.371C21.6257 13.7068 21.7086 13.3746 21.5327 13.0378C21.4825 12.9418 21.3914 12.8252 21.3104 12.7532C21.0263 12.5009 20.6322 12.5009 19.844 12.5009H13.3C12.5501 12.5009 12.1751 12.5009 11.9122 12.3099C11.8273 12.2482 11.7527 12.1736 11.691 12.0887C11.5 11.8258 11.5 11.4508 11.5 10.7009V4.15582C11.5 3.36765 11.5 2.97356 11.2477 2.68947C11.1758 2.60848 11.0591 2.51736 10.9631 2.4672C10.6263 2.29125 10.2942 2.37418 9.63002 2.54005C5.39056 3.59874 2.25 7.43262 2.25 12Z"
                  fill="currentColor"
                  fillOpacity="0.25"
                />
                <path
                  d="M12.8 9.4V4.25994C12.8 3.42978 12.8 3.0147 13.0698 2.72637C13.1465 2.64435 13.2702 2.55404 13.3717 2.50592C13.7284 2.33679 14.0733 2.44702 14.7632 2.6675C17.8775 3.66283 20.3372 6.12259 21.3326 9.23688C21.553 9.92672 21.6633 10.2716 21.4941 10.6284C21.446 10.7299 21.3557 10.8536 21.2737 10.9303C20.9853 11.2 20.5703 11.2 19.7401 11.2H14.6C13.8501 11.2 13.4751 11.2 13.2123 11.009C13.1274 10.9473 13.0527 10.8727 12.991 10.7878C12.8 10.5249 12.8 10.1499 12.8 9.4Z"
                  fill="currentColor"
                />
              </svg>
            </figure>
            {/* Content */}
            <h5 className="mb-3">
              <a  href="#">Location de lieux</a>
            </h5>
            <p>
            Trouvez l'endroit parfait pour votre événement parmi notre sélection exclusive de lieux élégants, allant des salles de réception luxueuses aux espaces extérieurs pittoresques.
            </p>
          </div>
          {/* Card footer */}
          <div className="card-footer mt-auto p-0 pt-2">
            <a 
              className="lien icon-link icon-link-hover stretched-link z-index-2"
              href="#"
            >
            Voir plus
              <i className="bi bi-arrow-right" />{" "}
            </a>
          </div>
        </div>
      </div>
      {/* Service item */}
      <div className="col">
        <div className="card card-hover-shadow border h-100 p-4">
          {/* Card body */}
          <div className="card-body p-0">
            {/* Icon */}
            <figure className="text-primary mb-4">
              <svg
                width={50}
                height={50}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5.75H5M10.5 5.75H21M3 18.25H5M10.5 18.25H21M21 12H19M13.5 12H3"
                  stroke="currentColor"
                  strokeOpacity="0.25"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.25 5.75C4.25 3.817 5.817 2.25 7.75 2.25V2.25C9.683 2.25 11.25 3.817 11.25 5.75V5.75C11.25 7.683 9.683 9.25 7.75 9.25V9.25C5.817 9.25 4.25 7.683 4.25 5.75V5.75Z"
                  fill="currentColor"
                />
                <path
                  d="M4.25 18.25C4.25 16.317 5.817 14.75 7.75 14.75V14.75C9.683 14.75 11.25 16.317 11.25 18.25V18.25C11.25 20.183 9.683 21.75 7.75 21.75V21.75C5.817 21.75 4.25 20.183 4.25 18.25V18.25Z"
                  fill="currentColor"
                />
                <path
                  d="M12.75 12C12.75 10.067 14.317 8.5 16.25 8.5V8.5C18.183 8.5 19.75 10.067 19.75 12V12C19.75 13.933 18.183 15.5 16.25 15.5V15.5C14.317 15.5 12.75 13.933 12.75 12V12Z"
                  fill="currentColor"
                />
              </svg>
            </figure>
            {/* Content */}
            <h5 className="mb-3">
              <a  href="#">Services traiteur </a>
            </h5>
            <p>
            Régaliez vos invités avec une cuisine raffinée préparée par nos chefs talentueux, offrant une gamme de menus personnalisables pour satisfaire tous les palais.
            </p>
          </div>
          {/* Card footer */}
          <div className="card-footer mt-auto p-0 pt-2">
            <a 
              className="lien icon-link icon-link-hover stretched-link z-index-2"
              href="#"
            >
             Voir plus
              <i className="bi bi-arrow-right" />{" "}
            </a>
          </div>
        </div>
      </div>
      {/* Service item */}
      <div className="col">
        <div className="card card-hover-shadow border h-100 p-4">
          {/* Card body */}
          <div className="card-body p-0">
            {/* Icon */}
            <figure className="text-primary mb-4">
              <svg
                width={50}
                height={50}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.2402 6.75391C21.2543 9.81065 21.2543 11.8485 20.2402 14.9052"
                  stroke="currentColor"
                  strokeOpacity="0.25"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.25047 12.9739C2.25055 14.0922 3.15715 14.9988 4.27547 14.9988V14.9988L4.25651 19.4911C4.25125 20.7361 5.25945 21.7481 6.50452 21.7474V21.7474C7.74497 21.7468 8.75021 20.741 8.75021 19.5006V15.1105H10V6.55981H6.46978C5.09959 6.55981 4.41449 6.55981 3.87962 6.79848C3.26038 7.07479 2.76505 7.57015 2.48879 8.18941C2.25016 8.72431 2.25021 9.4094 2.25031 10.7796L2.25047 12.9739Z"
                  fill="currentColor"
                />
                <path
                  d="M11.0002 15.8122C13.9211 18.3111 15.3815 19.5606 16.6274 19.37C17.1377 19.2919 17.6157 19.0718 18.0068 18.7348C18.9616 17.912 18.9616 15.99 18.9616 12.146V9.4287C18.9616 5.58267 18.9616 3.65966 18.0199 2.83775C17.6138 2.48322 17.1124 2.2559 16.5781 2.18405C15.3393 2.01748 13.893 3.28476 11.0002 5.81933V5.81933V15.8122V15.8122Z"
                  fill="currentColor"
                  fillOpacity="0.25"
                />
              </svg>
            </figure>
            {/* Content */}
            <h5 className="mb-3">
              <a  href="#">Animations et divertissements</a>
            </h5>
            <p>
            Ajoutez une touche de magie à votre soirée avec notre sélection d'animations captivantes, des artistes de renom aux spectacles de cirque en passant par les DJ réputés pour mettre l'ambiance.
            </p>
          </div>
          {/* Card footer */}
          <div className="card-footer mt-auto p-0 pt-2">
            <a
              className="lien icon-link icon-link-hover stretched-link z-index-2"
              href="#"
            >
             Voir plus
              <i className="bi bi-arrow-right" />{" "}
            </a>
          </div>
        </div>
      </div>
      {/* Service item */}
      <div className="col">
        <div className="card card-hover-shadow border h-100 p-4">
          {/* Card body */}
          <div className="card-body p-0">
            {/* Icon */}
            <figure className="text-primary mb-4">
              <svg
                width={50}
                height={50}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.523 8.92914C17.523 9.94279 16.6746 10.7645 15.6281 10.7645C14.5816 10.7645 13.7333 9.94279 13.7333 8.92914C13.7333 7.91548 14.5816 7.09375 15.6281 7.09375C16.6746 7.09375 17.523 7.91548 17.523 8.92914Z"
                  fill="currentColor"
                />
                <path
                  d="M10.485 8.92914C10.485 9.94279 9.63664 10.7645 8.59015 10.7645C7.54366 10.7645 6.69531 9.94279 6.69531 8.92914C6.69531 7.91548 7.54366 7.09375 8.59015 7.09375C9.63664 7.09375 10.485 7.91548 10.485 8.92914Z"
                  fill="currentColor"
                />
                <path
                  d="M11.0264 15.2219C11.0264 16.2355 10.178 17.0573 9.13154 17.0573C8.08504 17.0573 7.2367 16.2355 7.2367 15.2219C7.2367 14.2082 8.08504 13.3865 9.13154 13.3865C10.178 13.3865 11.0264 14.2082 11.0264 15.2219Z"
                  fill="currentColor"
                />
                <path
                  d="M21.748 9.45998C21.4753 4.55256 14.4854 1.4706 9.28231 2.41642C4.07925 3.36223 1.56208 8.48915 2.41245 13.4547C3.23924 18.2826 8.68956 21.7459 12.1134 21.7459C15 21.7459 17.25 20.6058 17.25 18.9959C17.25 18.9959 17.2846 18.5254 16.98 17.9961C16.7157 17.5369 16.4642 17.3392 16.07 16.9961C15.8584 16.8119 15.5273 16.5296 15.15 15.9959C14.9079 15.6534 14.8139 15.4137 14.8 15.3435C14.7846 14.9174 15.0127 14.407 15.5 14.2561C15.6439 14.2115 15.8105 14.2221 16 14.2459C18 14.3961 22 13.9961 21.748 9.45998Z"
                  fill="currentColor"
                  fillOpacity="0.25"
                />
              </svg>
            </figure>
            {/* Content */}
            <h5 className="mb-3">
              <a  href="#">Services de conciergerie</a>
            </h5>
            <p>
                Laissez-nous nous occuper de tous les détails de votre événement, de la gestion des invitations à la coordination des fournisseurs, pour que vous puissiez vous détendre et profiter de chaque instant.
            </p>
          </div>
          {/* Card footer */}
          <div className="card-footer mt-auto p-0 pt-2">
            <a 
className="lien icon-link icon-link-hover stretched-link z-index-2"
              href="#"
            >
              Voir plus
              <i className="bi bi-arrow-right" />{" "}
            </a>
          </div>
        </div>
      </div>
      {/* Service item */}
      <div className="col">
        <div className="card card-hover-shadow border h-100 p-4">
          {/* Card body */}
          <div className="card-body p-0">
            {/* Icon */}
            <figure className="text-primary mb-4">
              <svg
                width={50}
                height={50}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 18V15M12 13V18M16 18V11M6.5 11.5L7.9646 9.7913C8.91547 8.68195 10.3837 8.16067 11.8212 8.42204V8.42204C13.812 8.78401 15.8538 8.14622 17.2846 6.71542L17.5 6.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.2 2.25H10.8C7.23775 2.25 5.45663 2.25 4.20802 3.15717C3.80477 3.45015 3.45015 3.80477 3.15717 4.20802C2.25 5.45663 2.25 7.23775 2.25 10.8V13.2C2.25 16.7622 2.25 18.5434 3.15717 19.792C3.45015 20.1952 3.80477 20.5499 4.20802 20.8428C5.45663 21.75 7.23775 21.75 10.8 21.75H13.2C16.7622 21.75 18.5434 21.75 19.792 20.8428C20.1952 20.5499 20.5499 20.1952 20.8428 19.792C21.75 18.5434 21.75 16.7622 21.75 13.2V10.8C21.75 7.23775 21.75 5.45663 20.8428 4.20802C20.5499 3.80477 20.1952 3.45015 19.792 3.15717C18.5434 2.25 16.7622 2.25 13.2 2.25Z"
                  fill="currentColor"
                  fillOpacity="0.25"
                />
              </svg>
            </figure>
            {/* Content */}
            <h5 className="mb-3">
              <a href="#" >Services de décoration </a>
            </h5>
            <p>
            Créez une ambiance spectaculaire avec notre équipe de designers d'intérieur et de décorateurs experts, qui peuvent transformer n'importe quel espace en un décor de rêve pour votre soirée.
            </p>
          </div>
          {/* Card footer */}
          <div className="card-footer mt-auto p-0 pt-2">
            <a 
          className=" lien icon-link icon-link-hover stretched-link z-index-2"
              href="#"
            >
              Voir plus
              <i className="bi bi-arrow-right" />{" "}
            </a>
          </div>
        </div>
      </div>
      {/* Service item */}
      <div className="col">
        <div className="card card-hover-shadow border h-100 p-4">
          {/* Card body */}
          <div className="card-body p-0">
            {/* Icon */}
            <figure className="text-primary mb-4">
              <svg
                width={50}
                height={50}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75Z"
                  fill="currentColor"
                  fillOpacity="0.25"
                />
                <path
                  d="M14.5 10V10C14.5 8.89543 13.6046 8 12.5 8H12M12 8H11.5C10.3954 8 9.5 8.89543 9.5 10V10C9.5 11.1046 10.3954 12 11.5 12H12M12 8V6.5M12 8V12M12 12H12.5C13.6046 12 14.5 12.8954 14.5 14V14C14.5 15.1046 13.6046 16 12.5 16H12M12 12V16M12 16H11.5C10.3954 16 9.5 15.1046 9.5 14V14M12 16V17.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </figure>
            {/* Content */}
            <h5 className="mb-3">
              <a  href="#">Services de photographie</a>
            </h5>
            <p>
            Capturez chaque moment spécial de votre événement avec nos professionnels de la photographie et de la vidéographie, qui sauront immortaliser vos souvenirs pour les années à venir.
            </p>
          </div>
          {/* Card footer */}
          <div className="card-footer mt-auto p-0 pt-2">
            <a 
            className=" lien icon-link icon-link-hover stretched-link z-index-2"
              href="#"
            >
              Voir plus
              <i className="bi bi-arrow-right" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Service list END */}
  </div>
</section>

  );
};

export default Service;
