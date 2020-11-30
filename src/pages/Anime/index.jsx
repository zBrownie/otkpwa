import React from "react";
// import { useLocation } from "react-router-dom";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
// import { Container } from './styles';

function Anime() {
  const [erroCamera, setErroCamera] = React.useState(false);
  // const { state } = useLocation();
  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...
    console.log("takePhoto");
  }

  const loadCamera = React.useCallback(async () => {
    const element = document.getElementById("video");
    try {
      if (
        "mediaDevices" in navigator &&
        "getUserMedia" in navigator.mediaDevices
      ) {
        const videoStream = await navigator.mediaDevices.getUserMedia(
          {
            video: true,
          },
          (stream) => {
            const btnFoto = document.getElementById("tirarFoto");
            const canvas = document.getElementById("fotoDisplay");

            btnFoto.addEventListener("click", () => {
              canvas
                .getContext("2d")
                .drawImage(element, 0, 0, 300, 300, 0, 0, 300, 300);
              var img = canvas.toDataURL("image/png");
              alert("done");
            });
          },
          (err) => alert("Erro Camera", err)
        );
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
  }, []);

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
    loadCamera();
  }, [loadCamera]);

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
    <div className="container">
      <video autoPlay id="video"></video>
      <button type="button" id="tirarFoto">
        Tirar Foto
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
