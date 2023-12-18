/**
 * Starts a timer that executes a callback function every 3 seconds until the iteration reaches 3.
 * The callback function will set the turn to the player that is supposed to go first.
 * After 3 seconds, the callback function will stop executing and the step will be set to 5.
 * Dummy function to simulate the game play.
 */
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect } from "react";

export default function GameStart({ setStep, setTurn }) {
  useEffect(() => {
    let iteration = 1;
    const intervalId = setInterval(() => {
      if (iteration === 5) {
        setTurn(null);
        clearInterval(intervalId);
        return;
      }
      setTurn(iteration % 2 === 0 ? "p2" : "p1");
      iteration++;
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [setStep, setTurn]);

  return (
    <div className={cn("w-full h-full flex flex-col animate-fadein")}>
      <Image
        width={1000}
        height={1000}
        alt="Logo"
        src="/background/game-square-bg.png"
        className="absolute top-0 left-0 object-cover"
      />
    </div>
  );
}
