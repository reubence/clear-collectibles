import React from "react";
import { Icons } from "../../ui/icons";
import { Progress } from "../../ui/progress";
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";
import { steps } from "framer-motion";

function PlayerSearching({ setStep, setSearching }) {
  const [seconds, setSeconds] = React.useState(3);

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
      // Set Next step to true after 2 seconds
      setTimeout(() => {
        setSearching(false);
        setStep(2);
      }, 1000);
    }
  }, [seconds]);

  return (
    <div
      className={cn(
        "h-full w-full flex flex-col items-center justify-center gap-12 "
      )}
    >
      <Icons.gamepad className="" />
      <Progress
        fill="!bg-green-400"
        placeholder={
          seconds > 0
            ? "Searching for players..."
            : "The player has been matched"
        }
        className="h-12 lg:h-20 rounded-lg lg:rounded-2xl max-w-xs lg:max-w-xl"
        max={100}
        value={seconds > 0 ? (5 - seconds) * 10 : 100}
      />
      <Button
        disabled={!seconds > 0 && true}
        className="text-base lg:text-[28px] font-bold !py-2.5 !px-7 lg:!px-16 lg:!py-5"
        variant="game"
      >
        Cancel{"..." + Math.abs(seconds.toFixed(0))}
      </Button>
    </div>
  );
}

export default PlayerSearching;
