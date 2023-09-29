/**
 * @file index.js
 * @description This file exports an array of JSON data for a set of Lottie animations.
 * Each animation represents a different stage of progress, from 0 to 100 (step by 5).
 * The animations are intended to be used with the `ProgressLottie` component to display a progress animation.
 *
 * @example
 * import { animations } from '@/assets';
 *
 * const ProgressLottie = () => {
 *  const [animation, setAnimation] = useState(animations[0]);
 *  const [progress, setProgress] = useState(0); // Update this based on your specific needs.
 *
 *  useEffect(() => {
 *    const index = progress / 5; // This will give us a range from 0 to 20.
 *    setAnimation(animations[index]);
 *  }, [progress]);
 *
 *  //... use animations in the ProgressLottie component
 * };
 */

import progress0 from "./progress/0.json";
import progress5 from "./progress/5.json";
import progress10 from "./progress/10.json";
import progress15 from "./progress/15.json";
import progress20 from "./progress/20.json";
import progress25 from "./progress/25.json";
import progress30 from "./progress/30.json";
import progress35 from "./progress/35.json";
import progress40 from "./progress/40.json";
import progress45 from "./progress/45.json";
import progress50 from "./progress/50.json";
import progress55 from "./progress/55.json";
import progress60 from "./progress/60.json";
import progress65 from "./progress/65.json";
import progress70 from "./progress/70.json";
import progress75 from "./progress/75.json";
import progress80 from "./progress/80.json";
import progress85 from "./progress/85.json";
import progress90 from "./progress/90.json";
import progress95 from "./progress/95.json";
import progress100 from "./progress/100.json";

import claim0 from "./claim/0.png";
import claim5 from "./claim/5.png";
import claim10 from "./claim/10.png";
import claim15 from "./claim/15.png";
import claim20 from "./claim/20.png";
import claim25 from "./claim/25.png";
import claim30 from "./claim/30.png";
import claim35 from "./claim/35.png";
import claim40 from "./claim/40.png";
import claim45 from "./claim/45.png";
import claim50 from "./claim/50.png";
import claim55 from "./claim/55.png";
import claim60 from "./claim/60.png";
import claim65 from "./claim/65.png";
import claim70 from "./claim/70.png";
import claim75 from "./claim/75.png";
import claim80 from "./claim/80.png";
import claim85 from "./claim/85.png";
import claim90 from "./claim/90.png";
import claim95 from "./claim/95.png";
import claim100 from "./claim/100.png";


export const animations = [
  progress0,
  progress5,
  progress10,
  progress15,
  progress20,
  progress25,
  progress30,
  progress35,
  progress40,
  progress45,
  progress50,
  progress55,
  progress60,
  progress65,
  progress70,
  progress75,
  progress80,
  progress85,
  progress90,
  progress95,
  progress100,
];

export const claim = [
  claim0,
  claim5,
  claim10,
  claim15,
  claim20,
  claim25,
  claim30,
  claim35,
  claim40,
  claim45,
  claim50,
  claim55,
  claim60,
  claim65,
  claim70,
  claim75,
  claim80,
  claim85,
  claim90,
  claim95,
  claim100
]
