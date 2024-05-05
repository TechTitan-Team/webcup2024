import React, { useState } from "react";
// import Layout from "../Layout/Layout";
import logo from "../../assets/img/logo-horizontal.png";
import LoginCarousel from "./LoginCarousel";
import { Link, useNavigate } from "react-router-dom";
import FaceDetectorModal from "./FaceDetectorModal/FaceDetectorModal";
import Alert from "react-bootstrap/Alert";
import useToken from "../../hooks/useToken";
import useHttps from "../../hooks/useHttps";
import AnimationWrapper from "../../hooks/JumpInAnimation";

const Login = () => {
  const nav = useNavigate();
  const [faceDetector, setFaceDetector] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { http } = useHttps();
  const { setToken } = useToken();

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data && data.email.trim()) {
      try {
        setLoading(true);
        let toSend = data;
        toSend.email = data.email.trim();
        let response = await http.post("/users/login", toSend);
        if (response) {
          setError(null);
          setLoading(false);
          setToken(response.data);
          if (response.data.user.type == "admin") nav("/admin");
          else nav("/");
        }
      } catch (error) {
        setError(error.response.data);
        setLoading(false);
        console.log(error);
      }
    }
  };
  return (
    <div className="login row g-0">
      {/* left */}
      <div className="col-lg-7 vh-100 d-none d-lg-block e">
        {/* Slider START */}
        <LoginCarousel />
      </div>
      {/* Right */}
      <div className="col-sm-10 col-lg-5 d-flex m-auto vh-100 align-items-center">
        <div className="row w-100 m-auto vh-100">
          <div className="col-sm-10 my-5 m-auto">
            <a href={"/"}>
              <AnimationWrapper text="Elite Events" />
            </a>
            <h2 className="mb-0">Ravi de vous revoir</h2>
            <p className="mb-0">Bienvenue, veuillez entrer vos coordonées</p>
            {/* Social buttons */}
            <div className="row mt-5">
              {/* Social btn */}
              <div className="d-grid">
                <div
                  onClick={() => setFaceDetector(true)}
                  className="btn btn-dark mb-0"
                >
                  <i className="bi bi-person-bounding-box"></i> Reconnaissance
                  faciale
                </div>
              </div>

              {/* Divider with text */}
              <div className="position-relative my-5">
                <hr />
                <p className="small position-absolute top-50 start-50 translate-middle px-4" style={{background: "#232323"}}>
                  Ou
                </p>
              </div>
            </div>
            {/* Form START */}
            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div className="input-floating-label form-floating mb-4">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  name="email"
                  onChange={onChange}
                />
                <label htmlFor="floatingInput">Adresse email</label>
              </div>
              {/* Password */}
              <div className="input-floating-label form-floating mb-4 position-relative">
                <input
                  type="password"
                  className="form-control fakepassword pe-6"
                  id="psw-input"
                  placeholder="Enter your password"
                  name="password"
                  onChange={onChange}
                />
                <label htmlFor="floatingInput">Mot de passe</label>
                <span className="position-absolute top-50 end-0 translate-middle-y p-0 me-2">
                  <i className="fakepasswordicon fas fa-eye-slash cursor-pointer p-2" />
                </span>
              </div>
              {/* Check box */}
              <div className="mb-4 d-flex justify-content-between">
                <div className="form-check">
                  {/* <input
                    type="checkbox"
                    className="form-check-input"
                    id="checkbox-1"
                  />
                  <label className="form-check-label" htmlFor="checkbox-1">
                    
                  </label> */}
                </div>
                <a
                  href="forgot-password.html"
                  className="link-underline-primary"
                >
                  {" "}
                  Mot de passe oublié ?
                </a>
              </div>
              {error ? (
                <div className="col-12">
                  <Alert variant="danger">{error}</Alert>
                </div>
              ) : null}
              {/* Button */}
              <div className="align-items-center mt-0">
                <div className="d-grid">
                  <button type="submit" className="btn btn-prim mb-0">
                    {loading ? "Chargement..." : "Se connecter"}
                  </button>
                </div>
              </div>
            </form>
            {/* Form END */}

            {/* Sign up link */}
            <div className="mt-4 text-center">
              <span>
                Pas encore inscrit ?
                <Link to={"/signup"} className="link-underline-primary">
                  {" "}
                  S'inscrire
                </Link>
                {/* <Link >S'inscrire</Link> */}
              </span>
            </div>
          </div>
        </div>
      </div>
      <FaceDetectorModal
        show={faceDetector}
        onHide={() => setFaceDetector(false)}
      />
    </div>
  );
};

export default Login;
