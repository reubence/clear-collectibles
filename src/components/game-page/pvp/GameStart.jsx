/**
 * Starts a timer that executes a callback function every 3 seconds until the iteration reaches 3.
 * The callback function will set the turn to the player that is supposed to go first.
 * After 3 seconds, the callback function will stop executing and the step will be set to 5.
 * Dummy function to simulate the game play.
 */
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../../ui/button";

export default function GameStart({ setStep, setTurn }) {
  const [countdown, setCountdown] = useState(3);
  const [victory, setVictory] = useState();

  useEffect(() => {
    let iteration = 1;
    let intervalId;

    const countdownIntervalId = setInterval(() => {
      if (countdown === 0) {
        clearInterval(countdownIntervalId);

        // Start the main game logic immediately after the countdown
        intervalId = setInterval(() => {
          if (iteration === 5) {
            setTurn();
            clearInterval(intervalId);
            setVictory("lose");
            return;
          }
          setTurn(iteration % 2 === 0 ? "p2" : "p1");
          iteration++;
        }, 6000);

        return;
      }
      setCountdown(countdown - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      clearInterval(countdownIntervalId);
    };
  }, [setStep, setTurn, countdown]);

  return (
    <div className="flex flex-col items-center justify-center">
      {countdown > 0 && (
        <div className="absolute left-0 top-0 w-full h-full z-40 flex flex-col justify-center items-center bg-black/50 rounded-md lg:rounded-lg xl:rounded-2xl animate-fadein">
          <Image
            width={371}
            height={371}
            alt="Logo"
            src="/images/game-versus.png"
            className="w-40 h-40 xl:w-72 xl:h-72 2xl:w-96 2xl:h-96"
          />
          <p className="text-white text-sm 2xl:text-2xl 2xl:-translate-y-20">
            Game starts in {countdown}...
          </p>
        </div>
      )}

      {victory == "lose" && (
        <div className="absolute left-0 top-0 w-full h-full z-40 flex flex-col p-16 justify-between items-center bg-black/50 rounded-md lg:rounded-lg xl:rounded-2xl animate-fadein">
          <div className="flex flex-col gap-2 2xl:gap-4 items-center justify-center">
            <Image
              width={860}
              height={859}
              alt="Logo"
              src="/images/game-defeat.png"
              className="absolute left-0 top-0 w-full h-full"
            />
            <p className="text-white text-sm 2xl:text-2xl z-40">
              You lost the nft{" "}
            </p>
          </div>
          <div className="flex gap-6">
            <Button
              className="text-base lg:text-[28px] font-bold !py-2.5 !px-7 lg:!px-16 lg:!py-5"
              variant="game"
              onClick={() => {
                setStep(1);
              }}
            >
              Back
            </Button>
            <Button
              className="text-base lg:text-[28px] font-bold !py-2.5 !px-7 lg:!px-16 lg:!py-5"
              variant="game"
              onClick={() => {
                setStep(1);
              }}
            >
              Play again
            </Button>
          </div>
        </div>
      )}

      {victory === "win" && (
        <div className="absolute left-0 top-0 w-full h-full z-40 flex flex-col justify-between items-center bg-black/50 rounded-md lg:rounded-lg xl:rounded-2xl animate-fadein">
          <Image
            width={860}
            height={859}
            alt="Logo"
            src="/images/game-versus.png"
            className="absolute left-0 top-0 w-full h-full"
          />
          <p className="text-white text-sm 2xl:text-2xl">
            Won the opponent&apos;s nft{" "}
          </p>
          <div className="flex gap-6">
            <Button
              className="text-base lg:text-[28px] font-bold !py-2.5 !px-7 lg:!px-16 lg:!py-5"
              variant="game"
              onClick={() => {
                setStep(1);
              }}
            >
              Back
            </Button>
            <Button
              className="text-base lg:text-[28px] font-bold !py-2.5 !px-7 lg:!px-16 lg:!py-5"
              variant="game"
              onClick={() => {
                setStep(1);
              }}
            >
              Play again
            </Button>
          </div>
        </div>
      )}

      <Image
        width={2000}
        height={2000}
        alt="Logo"
        src="/background/game-square-bg.png"
        className="absolute top-0 left-0 animate-fadein"
      />
    </div>
  );
}
