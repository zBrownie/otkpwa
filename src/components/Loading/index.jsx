import React from "react";

import "./styles.css";
import Lottie from "react-lottie";
import animationData from "../../lottiefiles/loading.json";
function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="container-loading">
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
}

export default Loading;
