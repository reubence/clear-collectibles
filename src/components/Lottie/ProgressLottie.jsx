import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import { animations } from "@/assets";

/**
 * @component ProgressLottie
 * @description Represents a Lottie animation component that displays a progress animation.
 * The animation's progress is determined by a state variable `progress` that should be updated based on your specific needs.
 * The component initially loads the first animation (progress0) and then updates the animation based on the `progress` state.
 * The range for the progress is 0 to 100, stepping by 5.
 * Each step corresponds to a different animation.
 * @param {number} percent - The progress of the animation. Should be a number between 0 and 100 {inclusive} and in steps of 5.
 * @param {number} width - The width of the animation.
 * @param {number} height - The height of the animation.
 */

const ProgressLottie = ({ percent, width, height, loop }) => {
  const [animation, setAnimation] = useState();

  useEffect(() => {


      let lastDigit = percent % 10;
      let index;
      let result;
      if(lastDigit >= 5){
        index = Math.floor(percent / 5) * 5
      }else{
        index = Math.floor(percent / 10) * 10
      }
      result = index / 5
      setAnimation(animations[result]);
    
   
    
  }, [percent]);

  const defaultOptions = {
    loop: loop,
    autoplay: false,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} width={width} height={height} isClickToPauseDisabled={true} />;
};

export default ProgressLottie;
