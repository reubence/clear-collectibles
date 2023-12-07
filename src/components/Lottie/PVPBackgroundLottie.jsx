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
    // Set the Lottie animation style to cover the container
    anim.setSubframe(true);
    anim.resize();
    anim.play();
    anim.addEventListener("DOMLoaded", () => {
      animationContainer.current.querySelector("svg").style.width = "100%";
      animationContainer.current.querySelector("svg").style.height = "100%";
      animationContainer.current.querySelector("svg").style.objectFit = "cover";
      animationContainer.current.querySelector("svg").style.position =
        "absolute";
      animationContainer.current
        .querySelector("svg")
        .setAttribute("preserveAspectRatio", "xMidYMid slice");
    });

    return () => anim.destroy(); // optional clean up for unmounting
  });

  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden"
      ref={animationContainer}
    />
  );
};

export default PVPBackgroundLottie;
