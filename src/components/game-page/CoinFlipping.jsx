import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

function CoinFlipping({ setStep }) {
  const [coinFlipResult, setCoinFlipResult] = React.useState(null); // true = head, false = tail
  const [buttonsDisabled, setButtonsDisabled] = React.useState(false);
  console.log("coinFlipResult", coinFlipResult);
  return (
    <div
      className={cn(
        "h-full w-full flex flex-col  justify-between items-center"
      )}
    >
      <div className="w-3/4 h-8 lg:h-16 rounded-lg lg:rounded-xl text-sm lg:text-[28px] font-bold overflow-hidden shadow-xl animate-bounce">
        <div
          className={cn(
            "bg-white w-full  h-full flex flex-col justify-center items-center text-center text-blue-700",
            "animate-in transition-all duration-500",
            { hidden: coinFlipResult }
          )}
        >
          Call the coin flip
        </div>

        <div
          className={cn(
            "hidden bg-green-400 w-full h-full flex-col justify-center items-center text-center text-blue-700",
            "animate-in transition-all duration-500",
            { flex: coinFlipResult === "head" }
          )}
        >
          You won the coin flip{" "}
        </div>

        <div
          className={cn(
            "hidden bg-red-300 w-full h-full flex-col justify-center items-center text-center text-blue-700",
            "animate-in transition-all duration-500",
            { flex: coinFlipResult === "tail" }
          )}
        >
          You lost the coin flip{" "}
        </div>
      </div>

      <div className="flex gap-6">
        <Button
          className="text-base lg:text-3xl font-bold !py-2.5 !px-6"
          disabled={buttonsDisabled}
          variant="game"
          onClick={() => {
            setButtonsDisabled(true);
            // Do the same for the "Tail" button
            setTimeout(() => {
              setCoinFlipResult("head");
              setTimeout(() => {
                setStep(3);
              }, 3000); // Wait for 3s before moving to the next step
            }, 3000); // Wait for 3 second before showing result
          }}
        >
          Head
        </Button>
        <Button
          className="text-base lg:text-3xl font-bold !py-2.5 !px-6"
          disabled={buttonsDisabled}
          variant="game"
          onClick={() => {
            setButtonsDisabled(true);
            // Do the same for the "Tail" button
            setTimeout(() => {
              setCoinFlipResult("tail");
              setTimeout(() => {
                setStep(3);
              }, 3000); // Wait for 3s before moving to the next step
            }, 3000); // Wait for 3 second before showing result
          }}
        >
          Tail
        </Button>
      </div>
    </div>
  );
}

export default CoinFlipping;
