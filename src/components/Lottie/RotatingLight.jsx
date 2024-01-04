import React from "react";
import Lottie from "lottie-react";
import sampleAnimation from "../../../public/background/rotating_light.json";

const RotatingLight = ({
  lottieFile = sampleAnimation,
  width = "100%",
  height = "100%",
}) => {
  return (
    <Lottie
      animationData={lottieFile}
      style={{ width, height }}
      options={{
        loop: true,
        autoplay: true,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      }}
    />
  );
};

export default RotatingLight;
