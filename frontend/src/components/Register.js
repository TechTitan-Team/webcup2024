import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import LoginCarousel from "./Login/LoginCarousel";
import useHttps from "../hooks/useHttps";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../hooks/useToken";
// import FaceDetectorModal from "./FaceDetectorModal/FaceDetectorModal";
// import useHttps from "../../hooks/useHttps";
// import useToken from "../../hooks/useToken";
// import VoiceDetectoreModal from "./VoiceDetectorModal/VoiceDetectoreModal";

const Register = () => {
  const nav = useNavigate();
  //   const [faceDetector, setFaceDetector] = useState(false);
  //   const [voiceDetector, setVoiceDetector] = useState(false);
  //   const [data, setData] = useState(null);
  const { setToken } = useToken();
  const [registerLoad, setRegisterLoad] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    pdp: "",
    password: "",
  });
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
  const { aiFileHttp, fileHttp } = useHttps();
  function dataURLtoFile(dataurl) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[arr.length - 1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], Date.now() + ".jpg", { type: mime });
  }
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUser({ ...user, pdp: reader.result });

      // Afficher le résultat de la lecture de l'image
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const register = (e) => {
    e.preventDefault();
    setRegisterLoad(true);
    const imgFile = dataURLtoFile(user.pdp);
    let formData = new FormData();
    formData.append("img", imgFile);
    formData.append("name", user.email);
    console.log(formData);
    aiFileHttp
      .post("/create-dataset", formData)
      .then((res) => {
        console.log(res);
        let data = new FormData();
        data.append("name", user.name);
        data.append("last_name", user.lastName);
        data.append("email", user.email);
        data.append("password", user.password);
        data.append("type", "client");
        data.append("pdp", imgFile);

        fileHttp
          .post("/users", data)
          .then((res) => {
            setError(false);
            console.log(res);
            setRegisterLoad(false);
            setToken(res.data);
            nav("/");
          })
          .catch((err) => {
            console.log(err);
            setError(true);
            setRegisterLoad(false);
          });
      })
      .catch((err) => {
        console.log(err.message);
        setError(true);
        setRegisterLoad(false);
      });
  };

  return (
    <div className="register row g-0">
      {/* left */}
      {/* Right */}
      <div className="col-sm-10 col-lg-5 d-flex m-auto vh-100">
        <div className="row w-100 m-auto">
          <div className="col-sm-10 my-5 m-auto">
            <a href="index.html">
              <img
                src={"/rect2.png"}
                width={100}
                className="h-25px mb-4"
                alt="logo"
              />
            </a>
            <h2 className="mb-0">Créer un compte </h2>
            <p className="mb-0">Bienvenue, veuillez vous inscrire</p>
            {/* Social buttons */}
            <div className="row mt-5">
              {/* Social btn */}
              <div className="col-xxl-6 d-grid"></div>
              {/* Divider with text */}
              <div className="position-relative my-1">
                <hr />
              </div>
            </div>
            {/* Form START */}
            <form onSubmit={register}>
              {/* Email */}
              <div className="input-floating-label form-floating mb-4">
                <input
                  type="text"
                  className="form-control ffl"
                  id="floatingInput"
                  name="name"
                  required
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
                <label htmlFor="floatingInput">Nom</label>
              </div>
              {/* Email */}
              <div className="input-floating-label form-floating mb-4">
                <input
                  type="text"
                  className="form-control ffl"
                  id="floatingInput"
                  name="last_name"
                  required
                  value={user.lastName}
                  onChange={(e) =>
                    setUser({ ...user, lastName: e.target.value })
                  }
                />
                <label htmlFor="floatingInput">Prenom</label>
              </div>
              {/* Email */}
              <div className="input-floating-label form-floating mb-4">
                <input
                  type="email"
                  className="form-control ffl"
                  id="floatingInput"
                  name="email"
                  required
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
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
              <div className=" mb-4">
                <label htmlFor="floatingInput">Photo de profil</label>
                <input
                  required
                  type="file"
                  className="form-control ffl"
                  id="floatingInput"
                  name="imageFile"
                  onChange={handleFileInputChange}
                />
              </div>

              {/* Password */}
              <div className="input-floating-label form-floating mb-4 mt-3 position-relative">
                <input
                  type="password"
                  className="form-control fakepassword pe-6 ffl"
                  id="psw-input"
                  name="password"
                  value={user.password}
                  required
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
                <label htmlFor="floatingInput">Mot de passe</label>
                <span className="position-absolute top-50 end-0 translate-middle-y p-0 me-2">
                  <i className="fakepasswordicon fas fa-eye-slash cursor-pointer p-2" />
                </span>
              </div>
              {/* Button */}
              <div className="align-items-center mt-0">
                <div className="d-grid">
                  <button type="submit" className="btn btn-prim mb-0">
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
            {error ? (
              <div className="col-12">
                <Alert variant="danger">Veuillez changer l'image</Alert>
              </div>
            ) : null}
            <div className="mt-4 text-center">
              <span>Tu as déjà un compte?</span>
              <Link to={"/login"} className="link-underline-primary">
                {" "}
                Se connecter
              </Link>
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
