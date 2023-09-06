"use client";
import React, { useState } from "react";

function TestPage() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => prevValue + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <input
        type="number"
        value={value}
        min={0}
        onChange={(e) => setCount(+e.target.value)}
      />
      <Counter value={value} />;
    </>
  );
}

export default TestPage;

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const fontSize = 30;
const padding = 15;
const height = fontSize + padding;

const images = [
  "/images/image1.png",
  "/images/image2.png",
  "/images/image3.png",
  "/images/image4.png",
  "/images/image5.png",
  "/images/image6.png",
];

function Counter({ value }) {
  return (
    <div
      style={{ fontSize }}
      className="flex space-x-3 overflow-hidden rounded bg-white px-2 leading-none text-gray-900"
    >
      <Digit place={100} value={value} />
      <Digit place={10} value={value} />
      <Digit place={1} value={value} />
    </div>
  );
}

function Digit({ place, value }) {
  let valueRoundedToPlace = Math.floor(value / place);
  let animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div style={{ height }} className="relative w-[1ch] tabular-nums">
      {images.map((src, i) => (
        <Image key={i} mv={animatedValue} src={src} index={i} />
      ))}
    </div>
  );
}

function Image({ mv, src, index }) {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % images.length;
    let offset = (images.length + index - placeValue) % images.length;

    let memo = offset * height;

    if (offset > images.length / 2) {
      memo -= images.length * height;
    }

    return memo;
  });

  return (
    <motion.img
      style={{ y }}
      className="absolute inset-0 flex items-center justify-center"
      src={src}
    />
  );
}
