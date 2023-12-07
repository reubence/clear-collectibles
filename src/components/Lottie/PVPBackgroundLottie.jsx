// components/PVPBackgroundLottie.js
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../../../public/background/data.json";

const PVPBackgroundLottie = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => anim.destroy(); // optional clean up for unmounting
  });

  return (
    <div
      className="fixed top-0 left-0 w-full h-full overflow-hidden"
      ref={animationContainer}
    />
  );
};

export default PVPBackgroundLottie;
