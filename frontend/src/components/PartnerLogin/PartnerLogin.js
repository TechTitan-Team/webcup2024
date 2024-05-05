import React, { useState } from "react";
import Layout from "../Layout/Layout";
import flesheImg from "../../assets/img/fleche.png";
import useHttps from "../../hooks/useHttps";
import { Link, useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import useToken from "../../hooks/useToken";

const PartnerLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { http } = useHttps();
  const [data, setData] = useState({
    pers_min: 20,
    pers_max: 20,
    type: "lieux"
  });
  const nav = useNavigate();
  const { setToken } = useToken();

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const validate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let response = await http.post("/partenaires/login", data);
      if (response) {
        if(response.data.partenaire.isValid == true) {
            let res = response.data
            let user = {
                id: res.partenaire.id,
                name: res.partenaire.name,
                email: res.partenaire.email,
                type: "partner"
            }
            setToken({
                user,
                token: res.token
            })
            nav("/admin");
            setError(false)
        }
        else {
            setError("Votre compte n'est pas encore validé")
        }
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
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
            <div className="col-lg-6 col-xl-5">
              <div className="card card-body shadow border p-sm-5">
                <figure className="position-absolute top-100 start-0 translate-middle mt-n5">
                  <img src={flesheImg} width={200} />
                </figure>
                <form className="row g-4" onSubmit={validate}>
                  <div className="col-md-12">
                    <label className="form-label heading-color">
                      Adresse email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      required
                      id="floatingInput"
                      name="email"
                      onChange={onChange}
                    />
                  </div>

                  <div className="col-md-12">
                    <label className="form-label heading-color">Mot de passe</label>
                    <input
                      type="password"
                      className="form-control"
                      required
                      name="password"
                      onChange={onChange}
                    />
                  </div>
                  {error ? <Alert variant="danger">{error}</Alert> : null}
                  <Link to={"/become-partner"}>Devenir partenaire</Link>

                  <button type="submit" className="btn btn-primary mb-0">
                    Se connecter
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PartnerLogin;
