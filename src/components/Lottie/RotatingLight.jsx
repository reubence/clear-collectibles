import React from "react";
import Lottie from "lottie-react";
import sampleAnimation from "../../../public/background/rotating_light.json";

const RotatingLight = ({
  lottieFile = sampleAnimation,
  width = "100%",
  height = "100%",
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieFile,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Lottie
      style={{
        width: width,
        height: height,
        objectFit: "cover",
        position: "absolute",
        zIndex: -1,
        preserveAspectRatio: "xMidYMid slice",
      }}
      animationData={lottieFile}
      options={defaultOptions}
    />
  );
};

export default RotatingLight;
