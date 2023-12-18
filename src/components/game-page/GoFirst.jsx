import React from "react";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

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
      className={cn("h-full w-full flex flex-col items-center justify-between")}
    >
      <div className="w-full lg:w-3/4 h-8 lg:h-16 rounded-lg lg:rounded-xl text-sm lg:text-[28px] font-bold overflow-hidden shadow-xl animate-bounce">
        <div
          className={cn(
            "hidden bg-white w-full h-full flex-col justify-center items-center text-center text-blue-700",
            "animate-in transition-all duration-500",
            { flex: false }
          )}
        >
          Would you like to go first
        </div>

        <div
          className={cn(
            "hidden whitespace-nowrap bg-green-400 w-full h-full flex-col justify-center items-center text-center text-blue-700",
            "animate-in transition-all duration-500",
            { flex: true }
          )}
        >
          Wait for the game to start{" "}
        </div>
      </div>

      <div
        className={cn(
          "hidden text-sm lg:text-3xl font-bold text-center text-white flex-col gap-7 items-center justify-center",
          {
            flex: true,
          }
        )}
      >
        <Progress
          fill="!bg-[#F9DD6D]"
          className="h-3.5 rounded-3xl w-56"
          max={100}
          value={seconds > 0 ? (7 - seconds) * 10 : 100}
        />
        Waiting player to choose starting sequence
      </div>

      {/* ENABLE THIS IF USER IS CHOOSING WHETHER TO GO FIRST OR NOT */}
      <div className={cn("hidden gap-6", { flex: false })}>
        <Button
          className="text-base lg:text-3xl font-bold !py-2.5 !px-6"
          variant="game"
          onClick={() => {
            setGoFirstResult("p2");
            setStep(4);
          }}
        >
          No
        </Button>
        <Button
          className="text-base lg:text-3xl font-bold !py-2.5 !px-6"
          variant="game"
          onClick={() => {
            setGoFirstResult("p1");
            setStep(4);
          }}
        >
          Yes
        </Button>
      </div>
    </div>
  );
}

export default GoFirst;
