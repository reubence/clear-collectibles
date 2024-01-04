import React from "react";
import animationData from "../../../public/background/data.json";
import Lottie from "react-lottie";

const PVPBackgroundLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        position: "absolute",
        zIndex: -1,
        preserveAspectRatio: "xMidYMid slice",
      }}
    />
  );
};

export default PVPBackgroundLottie;
