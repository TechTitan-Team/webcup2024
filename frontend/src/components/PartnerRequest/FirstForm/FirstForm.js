import React, { useState } from "react";
import { Link } from "react-router-dom";

const FirstForm = ({ onChange, setStep }) => {
  const validate = (e) => {
    e.preventDefault();
    setStep(1);
  };
  return (
    <form class="row g-4" onSubmit={validate}>
      <span style={{ fontWeight: "bold", margin: 0 }}>Étape 1/2</span>
      <div class="col-md-6">
        <label class="form-label heading-color">Nom de l'organisation</label>
        <input
          type="text"
          class="form-control"
          required
          name="name"
          onChange={onChange}
        />
      </div>

      <div class="col-md-6">
        <label class="form-label heading-color">Adresse email</label>
        <input
          type="email"
          class="form-control"
          required
          id="floatingInput"
          name="email"
          onChange={onChange}
        />
      </div>

      <div class="col-md-6">
        <label class="form-label heading-color">Téléphone</label>
        <input
          type="text"
          class="form-control"
          required
          name="number"
          onChange={onChange}
        />
      </div>

      <div class="col-md-6">
        <label class="form-label heading-color">Adresse</label>
        <input
          type="text"
          class="form-control"
          required
          name="location"
          onChange={onChange}
        />
      </div>

      <div class="col-12">
        <label class="form-label heading-color">Description</label>
        <textarea
          class="form-control"
          required
          id="floatingTextarea2"
          style={{ height: "150px" }}
          name="description"
          onChange={onChange}
        ></textarea>
      </div>

      <Link to={"/partner-login"}>Je suis déjà partenaire</Link>

      <button type="submit" class="btn btn-primary mb-0">
        Suivant
      </button>
    </form>
  );
};
export default FirstForm;
