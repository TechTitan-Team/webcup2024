import React, { useState } from "react";
import useHttps from "../../../hooks/useHttps";
import Alert from 'react-bootstrap/Alert';

const SecondForm = ({ onChange, setStep, data }) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { fileHttp } = useHttps();

  const validate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });
      formData.append("image", image);

      console.log(formData);
      let response = await fileHttp.post("/partenaires/create", formData);
      if (response) {
        console.log(response.data);
        setSuccess(true);
      }
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="row g-4" onSubmit={validate}>
      <span style={{ fontWeight: "bold", margin: 0 }}>Étape 2/2</span>
      <div className="col-md-12">
        <label className="form-label heading-color">
          Mot de passe de connexon
        </label>
        <input
          type="password"
          className="form-control"
          required
          name="password"
          onChange={onChange}
        />
      </div>

      <div className="col-md-12">
        <label className="form-label heading-color">Photo</label>
        <input
          type="file"
          className="form-control"
          required
          name="number"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>

      <div className="col-12">
        <label className="form-label heading-color">Vos Services</label>
        <div className="form-group">
          <select
            className="form-control"
            id="exampleSelect"
            name="type"
            onChange={onChange}
            // value={selectedValue}
            // onChange={handleSelectChange}
          >
            <option value="lieux">Location de lieux</option>
            <option value="traiteur">Services traiteur</option>
            <option value="divertissements">
              Animations et divertissements
            </option>
            <option value="conciergerie">Services de conciergerie</option>
            <option value="decoration">Services de décoration</option>
            <option value="photographie">Services de photographie</option>
          </select>
        </div>
      </div>
      <div className="col-md-12">
        <label className="form-label heading-color">Prix de votre service</label>
        <input
          type="number"
          className="form-control"
          required
          name="price"
          onChange={onChange}
        />
      </div>
      <div className="col-md-6">
        <label className="form-label heading-color">Personne minimum</label>
        <input
          type="number"
          className="form-control"
          required
          name="pers_min"
          defaultValue={5}
          onChange={onChange}
        />
      </div>

      <div className="col-md-6">
        <label className="form-label heading-color">Personne maxinimum</label>
        <input
          type="number"
          className="form-control"
          required
          id="floatingInput"
          name="pers_max"
          defaultValue={20}
          onChange={onChange}
        />
      </div>

      {error && <Alert variant="danger">Une erreur s'est produit</Alert>}

      {success && (
        <Alert variant="success">
          Votre demande à été envoyer, on vous recontactera pour la suite
        </Alert>
      )}

      <button type="submit" className="btn btn-primary mb-0">
        {loading ? "Chargement..." : "Enregister"}
      </button>
    </form>
  );
};
export default SecondForm;
