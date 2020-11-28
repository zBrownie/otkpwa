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
    const element = document.querySelector("#video");
    try {
      if (
        "mediaDevices" in navigator &&
        "getUserMedia" in navigator.mediaDevices
      ) {
        const videoStream = await navigator.mediaDevices.getUserMedia({
          video: true,
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
  }, []);

  React.useEffect(() => {
    loadCamera();
  }, [loadCamera]);

  return (
    <div className="container">
      {/* Anime
      <img src={state.imgUrl} alt="" />
      <h3>{state.title}</h3>
      <p>{state.desc}</p> */}
      <video autoPlay id="video"></video>
      {erroCamera ? <div>Não Possui Camera</div> : <></>}
      {/* <Camera
        onTakePhoto={(dataUri) => {
          handleTakePhoto(dataUri);
        }}
      /> */}
    </div>
  );
}

export default Anime;
