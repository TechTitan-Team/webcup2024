import React, { useState } from "react";
import { Link } from "react-router-dom";

const FirstForm = ({ onChange, setStep }) => {
  const validate = (e) => {
    e.preventDefault();
    setStep(1);
  };
  return (
    <form className="row g-4" onSubmit={validate}>
      <span style={{ fontWeight: "bold", margin: 0 }}>Étape 1/2</span>
      <div className="col-md-6">
        <label className="form-label heading-color">Nom de l'organisation</label>
        <input
          type="text"
          className="form-control"
          required
          name="name"
          onChange={onChange}
        />
      </div>

      <div className="col-md-6">
        <label className="form-label heading-color">Adresse email</label>
        <input
          type="email"
          className="form-control"
          required
          id="floatingInput"
          name="email"
          onChange={onChange}
        />
      </div>

      <div className="col-md-6">
        <label className="form-label heading-color">Téléphone</label>
        <input
          type="text"
          className="form-control"
          required
          name="number"
          onChange={onChange}
        />
      </div>

      <div className="col-md-6">
        <label className="form-label heading-color">Adresse</label>
        <input
          type="text"
          className="form-control"
          required
          name="location"
          onChange={onChange}
        />
      </div>

      <div className="col-12">
        <label className="form-label heading-color">Description</label>
        <textarea
          className="form-control"
          required
          id="floatingTextarea2"
          style={{ height: "150px" }}
          name="description"
          onChange={onChange}
        ></textarea>
      </div>

      <Link to={"/partner-login"}>Je suis déjà partenaire</Link>

      <button type="submit" className="btn btn-primary mb-0">
        Suivant
      </button>
    </form>
  );
};
export default FirstForm;
