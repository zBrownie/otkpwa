import React from "react";
// import { useLocation } from "react-router-dom";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
// import { Container } from './styles';

function Anime() {
  const [selfie, setSelfie] = React.useState(true);
  const [erroCamera, setErroCamera] = React.useState(false);
  // const { state } = useLocation();
  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...
    console.log("takePhoto");
  }

  const takeSnapshot = () => {
    const element = document.getElementById("video");
    const canvas = document.getElementById("fotoDisplay");

    let img = document.createElement("img");
    let context;
    let width = element.offsetWidth,
      height = element.offsetHeight;

    canvas.width = width;
    canvas.height = height;

    context = canvas.getContext("2d");
    context.drawImage(element, 0, 0, width, height);

    img.src = canvas.toDataURL("image/png");
    document.body.appendChild(img);
  };

  const handleNotificationDialog = () => {
    var result = window.confirm(
      "A aplicação deseja permissão de acesso a Notificação"
    );

    if (result) {
      requestNotify();
    } else {
      alert("Acesso Notificação Negado.");
    }
  };

  const requestNotify = React.useCallback(() => {
    Notification.requestPermission(function (status) {
      if (status === "denied") {
        alert("Acesso Notificação Negado.");
      } else {
        //NOTIFICAÇÂO GRANTED
      }
    });
  }, []);

  React.useEffect(() => {
    const loadCamera = async () => {
      const element = document.getElementById("video");

      try {
        if (
          "mediaDevices" in navigator &&
          "getUserMedia" in navigator.mediaDevices
        ) {
          const videoStream = await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: selfie ? "user" : "environment",
            },
            audio: false,
          });
          element.srcObject = videoStream;
          element.play();
          setErroCamera(false);
        } else {
          setErroCamera(true);
        }
      } catch (err) {
        setErroCamera(true);
        console.error(err);
      }
    };
    loadCamera();
  }, [selfie]);

  if (erroCamera) {
    return (
      <div className="container">
        <button type="button" onClick={handleNotificationDialog}>
          Notificação
        </button>
        Não Possui Camera
      </div>
    );
  }

  return (
    <div className="container" id="mainDiv">
      <video muted autoPlay id="video"></video>
      <button type="button" id="tirarFoto" onClick={takeSnapshot}>
        Tirar Foto
      </button>
      <button type="button" onClick={() => setSelfie(!selfie)}>
        Trocar camera
      </button>
      <canvas
        id="fotoDisplay"
        style={{ display: "none" }}
        width="300"
        height="300"
      ></canvas>
    </div>
  );
}

export default Anime;
