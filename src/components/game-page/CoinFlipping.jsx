import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

function CoinFlipping({ setStep }) {
  const [coinFlipResult, setCoinFlipResult] = React.useState(null); // true = head, false = tail
  const [buttonsDisabled, setButtonsDisabled] = React.useState(false);
  const [isFlipping, setIsFlipping] = React.useState(false);
  return (
    <div
      className={cn(
        "animate-fadein h-full w-full flex flex-col  justify-between items-center"
      )}
    >
      <div className="w-full lg:w-3/4 h-8 lg:h-16 rounded-lg lg:rounded-xl text-sm lg:text-[28px] font-bold overflow-hidden shadow-xl animate-bounce">
        <div
          className={cn(
            "bg-white w-full  h-full flex flex-col justify-center items-center text-center text-blue-700",
            "animate-fadein",
            { hidden: coinFlipResult }
          )}
        >
          Call the coin flip
        </div>

        <div
          className={cn(
            "hidden bg-green-400 w-full h-full flex-col justify-center items-center text-center text-blue-700",
            "animate-fadein",
            { flex: coinFlipResult === "head" }
          )}
        >
          You won the coin flip{" "}
        </div>

        <div
          className={cn(
            "hidden bg-red-300 w-full h-full flex-col justify-center items-center text-center text-blue-700",
            "animate-fadein",
            { flex: coinFlipResult === "tail" }
          )}
        >
          You lost the coin flip{" "}
        </div>
      </div>
      <div>
        {isFlipping ? (
          <CoinAnimation />
        ) : (
          <Image
            src="/images/bitcoin_1.png"
            alt="Coin Flip"
            width={250}
            height={250}
            className="w-fit h-fit"
          />
        )}
      </div>
      <div className="flex gap-6">
        <Button
          className="text-base lg:text-[28px] font-bold !py-2.5 !px-7 lg:!px-16 lg:!py-5"
          disabled={buttonsDisabled}
          variant="game"
          onClick={() => {
            setButtonsDisabled(true);
            setIsFlipping(true);
            // Do the same for the "Tail" button
            setTimeout(() => {
              setCoinFlipResult("head");
              setIsFlipping(false);
              setTimeout(() => {
                setStep(3);
              }, 3000); // Wait for 3s before moving to the next step
            }, 3000); // Wait for 3 second before showing result
          }}
        >
          Head
        </Button>
        <Button
          className="text-base lg:text-[28px] font-bold !py-2.5 !px-7 lg:!px-16 lg:!py-5"
          disabled={buttonsDisabled}
          variant="game"
          onClick={() => {
            setButtonsDisabled(true);
            setIsFlipping(true);
            // Do the same for the "Tail" button
            setTimeout(() => {
              setCoinFlipResult("tail");
              setIsFlipping(false);
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

function CoinAnimation() {
  const [isFlipping, setIsFlipping] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsFlipping(false);
    }, 3000); // Wait for 3 seconds before stopping the animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="spinningasset coin">
      <div>
        <div></div>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <em></em>
        <em></em>
        <div></div>
      </div>
    </div>
  );
}
