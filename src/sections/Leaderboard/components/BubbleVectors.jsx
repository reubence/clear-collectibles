import React from "react";
import Image from "next/image";

/**
 * @component BubbleVectors
 * @description This renders a set of images with the same 'bubble.png' source but different styles and positions.
 *
 * @returns {React.ReactElement} JSX Fragment with four images rendered with absolute positioning and the 'bubble.png' source.
 *
 * Each of these images has different properties:
 *
 * @prop {string} src - Source path of the image, always "/bubble.png"
 * @prop {number} width - Width of the image, 140 or 100
 * @prop {number} height - Height of the image, 148 or 100
 * @prop {string} className - Classes applied to the image for positioning, z-index, and other stylings
 * @prop {string} alt - Alt text of the image for accessibility, always "bg-vector-bubble"
 */

const BubbleVectors = () => {
  return (
    <>
      <Image
        src="/bubble.png"
        width={140}
        height={148}
        className="absolute left-4 top-[12rem] z-40"
        alt="bg-vector-bubble"
        priority
        unoptimized
      />
      <Image
        src="/bubble.png"
        width={140}
        height={148}
        className="absolute right-4 top-[2rem] z-40"
        alt="bg-vector-bubble"
        priority
        unoptimized
      />
      <Image
        src="/bubble.png"
        width={100}
        height={100}
        className="absolute -top-5 transform -translate-x-1/2 left-[41.5%] z-40"
        alt="bg-vector-bubble"
        priority
        unoptimized
      />
      <Image
        src="/bubble.png"
        width={100}
        height={100}
        className="absolute right-[12.5rem] top-[16rem] z-40"
        alt="bg-vector-bubble"
        priority
        unoptimized
      />
    </>
  );
};

export default BubbleVectors;
