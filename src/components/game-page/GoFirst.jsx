import React from "react";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

function GoFirst({ setStep }) {
  const [seconds, setSeconds] = React.useState(5);

  React.useEffect(() => {
    // Only set the interval if seconds > 0
    if (seconds > 0) {
      // Set an interval to countdown
      const intervalId = setInterval(() => {
        // Decrement the seconds by 1 every second
        setSeconds((seconds) => seconds - 0.1);
      }, 100);

      // Clear the interval when the component unmounts or when the countdown is complete
      return () => clearInterval(intervalId);
    } else {
      // Set playerFound to true after 2 seconds
      const timeoutId = setTimeout(() => {
        setStep(4);
      }, 1000);
      // Clear the timeout when the component unmounts or when playerFound is set to true
      return () => clearTimeout(timeoutId);
    }
  }, [seconds]);

  return (
    <div
      className={cn(
        "h-full w-full flex flex-col items-center justify-between animate-fadein"
      )}
    >
      <div className="w-full lg:w-3/4 h-8 lg:h-16 rounded-lg lg:rounded-xl text-sm lg:text-[28px] font-bold overflow-hidden shadow-xl animate-bounce">
        <div
          className={cn(
            "bg-white w-full h-full flex flex-col justify-center items-center text-center text-blue-700",
            "animate-in transition-all duration-500"
          )}
        >
          Would you like to go first
        </div>

        <div
          className={cn(
            "whitespace-nowrap bg-green-400 w-full h-full flex flex-col justify-center items-center text-center text-blue-700",
            "animate-in transition-all duration-500"
          )}
        >
          Wait for the game to start{" "}
        </div>
      </div>
      <Image
        src="/images/game-goFirst.png"
        alt="Logo"
        width={240}
        height={240}
        className="w-24 h-24 lg:w-fit lg:h-fit"
      />

      <div
        className={cn(
          "text-sm lg:text-3xl font-bold text-center text-white flex flex-col gap-7 items-center justify-center",
          { hidden: false } // true if opponent choosing whether to go first or not else False
        )}
      >
        <Progress
          fill="!bg-[#F9DD6D]"
          className="h-2 lg:h-3.5 rounded-3xl w-40 lg:w-56"
          max={100}
          value={seconds > 0 ? (7 - seconds) * 10 : 100}
        />
        Waiting player to choose starting sequence
      </div>

      {/* ENABLE THIS IF USER IS CHOOSING WHETHER TO GO FIRST OR NOT */}
      <div
        className={cn("flex flex-col items-center gap-6 lg:gap-8", {
          hidden: true, // true if user is choosing whether to go first or not else False
        })}
      >
        <Progress
          fill="!bg-[#F9DD6D]"
          className={cn("h-2 lg:h-3.5 rounded-3xl w-40 lg:w-56", {})}
          max={100}
          value={seconds > 0 ? (7 - seconds) * 10 : 100}
        />

        <div className={cn("flex gap-6")}>
          <Button
            className="text-base lg:text-[28px] font-bold !py-2.5 !px-7 lg:!px-16 lg:!py-5"
            variant="game"
            onClick={() => {
              setGoFirstResult(false);
              setStep(4);
            }}
          >
            No
          </Button>
          <Button
            className="text-base lg:text-[28px] font-bold !py-2.5 !px-7 lg:!px-16 lg:!py-5"
            variant="game"
            onClick={() => {
              setGoFirstResult(true);
              setStep(4);
            }}
          >
            Yes
          </Button>
        </div>
      </div>
    </div>
  );
}

export default GoFirst;
