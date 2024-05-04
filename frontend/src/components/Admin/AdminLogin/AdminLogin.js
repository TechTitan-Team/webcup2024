import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useHttps from "../../../hooks/useHttps";
import useToken from "../../../hooks/useToken";
import Alert from "react-bootstrap/Alert";

const AdminLogin = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const nav = useNavigate();
  const { http } = useHttps();
  const { setToken } = useToken();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let response = await http.post("/users/login", data);
      if (response) {
        console.log(response.data);
        setError(false);
        if(response.data.user.type == "admin") {
            setToken(response.data)
            nav("/admin");
        }
        else {
            setError("Vous n'etes pas administrateur");
        }
      }
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="admin-container">
      <div className="login container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <Link
                    to="/"
                    className="logo d-flex align-items-center w-auto"
                  >
                    <span className="d-none d-lg-block">Elite Events</span>
                  </Link>
                </div>
                {/* End Logo */}
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">
                        Administrateur
                      </h5>
                      <p className="text-center small">
                        Seule l'administrateur a l'accès à cette partie
                      </p>
                    </div>
                    <form
                      className="row g-3 needs-validation"
                      onSubmit={submit}
                    >
                      <div className="col-12">
                        <label htmlFor="yourUsername" className="form-label">
                          Email
                        </label>
                        <div className="input-group has-validation">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="yourUsername"
                            required
                            onChange={onChange}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">
                          Mot de passe
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="yourPassword"
                          required=""
                          onChange={onChange}
                        />
                      </div>
                      {error ? (
                        <div className="col-12">
                          <Alert variant="danger">{error}</Alert>
                        </div>
                      ) : null}
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="remember"
                            defaultValue="true"
                            id="rememberMe"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="rememberMe"
                          >
                            Enregistrer
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">
                          {loading ? "Chargement..." : "Login"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
export default AdminLogin;
