import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Webcam from "react-webcam";
import useHttps from "../../../hooks/useHttps";
import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import useToken from "../../../hooks/useToken";
import { useNavigate } from "react-router-dom";

const FaceDetectorModal = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { http, aiFileHttp } = useHttps();
  const { setToken } = useToken();
  const nav = useNavigate();

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

  const captureImage = async (getScreenshot) => {
    const imageSrc = getScreenshot();
    if (imageSrc) {
      const imgFile = dataURLtoFile(imageSrc);
      console.log(imgFile);
      try {
        setLoading(true);
        let formData = new FormData();
        formData.append("img", imgFile);

        let response = await aiFileHttp.post("/recognize", formData);
        if (response) {
          setLoading(false);
          console.log(response.data)
          handleCheck(response.data);
        }
      } catch (error) {
        if (error.response.data.error == "Faciale unkown")
          setError("Visage non détécté");
        else setError("Une érreur c'est produite");
        setLoading(false);
        console.log(error);
      }
    }
  };

  const handleCheck = async (email) => {
    if (email.trim()) {
      try {
        setLoading(true);
        let toSend = {
          email: email.trim()
        }
        let response = await http.post("/users/login-by-email", toSend);
        if (response) {
          setLoading(false);
          setToken(response.data);
          nav("/");
        }
      } catch (error) {
        setLoading(false);
        setError(error.response.data);
        console.log(error);
      }
    }
  };

  return (
    <Modal
      show={props.show}
      onHide={() => {
        props.onHide();
        setError(null);
      }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Reconnaissance faciale
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        <Webcam
          audio={false}
          height={520}
          screenshotFormat="image/jpeg"
          width={"100%"}
        >
          {({ getScreenshot }) => (
            <>
              {error && <Alert variant={"danger"}>{error}</Alert>}

              <button
                className="btn btn-primary"
                onClick={() => captureImage(getScreenshot)}
              >
                {loading ? "Chargement..." : "Enregister"}
              </button>
            </>
          )}
        </Webcam>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="btn-danger"
          onClick={() => {
            props.onHide();
            setError(null);
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default FaceDetectorModal;
