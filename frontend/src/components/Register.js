import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import logo from "../assets/img/logo-horizontal.png";
import LoginCarousel from "./Login/LoginCarousel";
// import { Link, useNavigate } from "react-router-dom";
// import FaceDetectorModal from "./FaceDetectorModal/FaceDetectorModal";
// import useHttps from "../../hooks/useHttps";
// import useToken from "../../hooks/useToken";
// import VoiceDetectoreModal from "./VoiceDetectorModal/VoiceDetectoreModal";



const Register = () => {
//   const nav = useNavigate();
//   const [faceDetector, setFaceDetector] = useState(false);
//   const [voiceDetector, setVoiceDetector] = useState(false);
//   const [data, setData] = useState(null);
const [registerLoad, setRegisterLoad] = useState(false);
//   const [error, setError] = useState(null);
//   const { http } = useHttps();
//   const { setToken } = useToken();

//   const onChange = (name, value) => {
//     setData({
//       ...data,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (data && data.email.trim()) {
//       try {
//         setRegisterLoad(true);
//         let toSend = data;
//         toSend.email = data.email.trim();
//         let response = await http.post("/users", toSend);
//         if (response) {
//           setError(null);
//           setRegisterLoad(false);
//           console.log(response.data)
//           setToken(response.data);
//           nav("/");
//         }
//       } catch (error) {
//         setError(true);
//         setRegisterLoad(false);
//         console.log(error);
//       }
//     }
//   };

  return (
    <div className="row g-0">
      {/* left */}
      {/* Right */}
      <div className="col-sm-10 col-lg-5 d-flex m-auto vh-100">
        <div className="row w-100 m-auto">
          <div className="col-sm-10 my-5 m-auto">
            <a href="index.html">
              <img src={logo} width={150} className="h-25px mb-4" alt="logo" />
            </a>
            <h2 className="mb-0">Créer un compte </h2>
            <p className="mb-0">Bienvenue, veuillez vous inscrire</p>
            {/* Social buttons */}
            <div className="row mt-5">
              {/* Social btn */}
              <div className="col-xxl-6 d-grid">
               
              </div>
              {/* Divider with text */}
              <div className="position-relative my-1">
                <hr />
              </div>
            </div>
            {/* Form START */}
            <form >
              {/* Email */}
              <div className="input-floating-label form-floating mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  name="name"
                 
                />
                <label htmlFor="floatingInput">Nom</label>
              </div>
              {/* Email */}
              <div className="input-floating-label form-floating mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  name="last_name"
                 
                />
                <label htmlFor="floatingInput">Prenom</label>
              </div>
              {/* Email */}
              <div className="input-floating-label form-floating mb-4">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  name="email"
                 
                />
                <label htmlFor="floatingInput">Adresse email</label>
              </div>
              {/* <div className="input-floating-label form-floating mb-4">
                <input
                  type="date"
                  className="form-control"
                  id="floatingInput"
                  name="date_of_birth"
                  
                />
                <label htmlFor="floatingInput">Date de naissance</label>
              </div> */}
              <div class=" mb-4">
                <label htmlFor="floatingInput">Photo de profil</label>
                <input type="file" className="form-control " id="floatingInput" name="imageFile"/>
              </div>

             
              {/* Password */}
              <div className="input-floating-label form-floating mb-4 mt-3 position-relative">
                <input
                  type="password"
                  className="form-control fakepassword pe-6"
                  id="psw-input"
                  name="password"
                  
                />
                <label htmlFor="floatingInput">Mot de passe</label>
                <span className="position-absolute top-50 end-0 translate-middle-y p-0 me-2">
                  <i className="fakepasswordicon fas fa-eye-slash cursor-pointer p-2" />
                </span>
              </div>
              {/* Button */}
              <div className="align-items-center mt-0">
                <div className="d-grid">
                  <button type="submit" className="btn btn-dark mb-0">
                    {registerLoad ? "Chargement..." : "S'inscrire"}
                  </button>
                </div>
              </div>
            </form>
            {/* Form END */}
            {/* {error && (
              <Alert variant={"danger"} className="mt-2">
                Une erreur c'est produite
              </Alert>
            )} */}
            {/* Sign up link */}
            <div className="mt-4 text-center">
              <span>
                Tu as déjà un compte?
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-7 vh-100 d-none d-lg-block e">
        {/* Slider START */}
        <LoginCarousel />
      </div>
      {/* <FaceDetectorModal
        show={faceDetector}
        
      /> */}
      {/* <VoiceDetectoreModal
        show={voiceDetector}
       
      /> */}
    </div>
  );
};

export default Register;
