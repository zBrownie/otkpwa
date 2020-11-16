import React from "react";
// import { useLocation } from "react-router-dom";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
// import { Container } from './styles';

function Anime() {
  // const { state } = useLocation();
  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...
    console.log("takePhoto");
  }
  return (
    <div className="container">
      {/* Anime
      <img src={state.imgUrl} alt="" />
      <h3>{state.title}</h3>
      <p>{state.desc}</p> */}

      <Camera
        onTakePhoto={(dataUri) => {
          handleTakePhoto(dataUri);
        }}
      />
    </div>
  );
}

export default Anime;
