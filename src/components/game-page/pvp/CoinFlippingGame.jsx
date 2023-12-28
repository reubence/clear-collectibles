import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import CoinFlippingAnimation from "./CoinFlippingAnimation";

function CoinFlippingGame() {
  const [coinFlipResult, setCoinFlipResult] = React.useState(null); // true = head, false = tail
  const [isFlipping, setIsFlipping] = React.useState(false);
  const [sliderValue, setSliderValue] = React.useState([50]);
  const [select, setSelect] = React.useState("head");
  const [win, setWin] = React.useState();
  return (
    <div
      className={cn(
        "animate-fadein h-full w-full flex justify-center items-center"
      )}
    >
      <div className="relative w-full h-full p-7 2xl:p-14 flex flex-col justify-between items-center">
        <div className="w-full h-8 lg:h-16 rounded-lg lg:rounded-xl text-sm lg:text-[28px] font-bold overflow-hidden shadow-xl animate-bounce">
          <div
            className={cn(
              "bg-white w-full h-full flex flex-col justify-center items-center text-center text-blue-700 whitespace-nowrap px-3",
              "animate-fadein",
              { hidden: coinFlipResult }
            )}
          >
            Call the coin flip
          </div>
          <div
            className={cn(
              "flex bg-green-400 w-full h-full flex-col justify-center items-center text-center text-blue-700 whitespace-nowrap px-3",
              "animate-fadein",
              { hidden: coinFlipResult !== "head" }
            )}
          >
            You won the coin flip{" "}
          </div>
          <div
            className={cn(
              "flex bg-red-300 w-full h-full flex-col justify-center items-center text-center text-blue-700 whitespace-nowrap px-3",
              "animate-fadein",
              { hidden: coinFlipResult !== "tail" }
            )}
          >
            You lost the coin flip{" "}
          </div>
        </div>
        {win === false && coinFlipResult !== null && (
          <Image
            unoptimized
            width={860}
            height={859}
            alt="Logo"
            src="/images/game-defeat.png"
            className="left-0 top-0 absolute w-full h-full animate-fadein"
          />
        )}

        <Button
          className={cn(
            "text-base lg:text-[28px] font-bold !py-2.5 !px-7 lg:!px-16 lg:!py-5",
            { hidden: coinFlipResult === null }
          )}
          variant="game"
          onClick={() => {
            setCoinFlipResult(null);
            setWin(null);
          }}
        >
          Flip
        </Button>

        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 ">
          {isFlipping ? (
            <CoinFlippingAnimation />
          ) : win !== true && win !== false ? (
            <Image
              unoptimized
              src={
                coinFlipResult === null
                  ? "/images/bitcoin_1.png"
                  : "/images/bitcoin_1_back.png"
              }
              alt="Coin Flip"
              width={250}
              height={250}
              className="w-fit h-fit xl:w-full xl:h-full animate-fadein"
            />
          ) : null}
        </div>
      </div>
      <Separator className="h-full w-0.5 2xl:w-1 bg-white/20 rounded-xl my-5" />

      <div className="w-full h-full flex flex-col p-7 2xl:p-14 justify-center gap-8 2xl:gap-14 items-center">
        <p className="whitespace-nowrap text-base 2xl:text-2xl font-bold text-white">
          {" "}
          Total Bubbles :{" "}
          <span className="px-2.5 py-1.5 bg-black/30 rounded-lg ">
            🫧{sliderValue}
          </span>
        </p>
        <Slider
          onValueChange={(newValue) => setSliderValue([newValue])}
          defaultValue={sliderValue}
          max={100}
          step={1}
        />
        <Tabs className="">
          <TabsList className="grid w-full grid-cols-2 h-full gap-2 rounded-[10px] p-2 text-white bg-black/30">
            <TabsTrigger
              value="head"
              className="gap-2 px-6 py-1 2xl:px-10 2xl:py-3 rounded-md data-[state=active]:text-primary data-[state=active]:bg-white"
              onClick={() => setSelect("head")}
              // data-state={head === "PVP" ? "active" : ""}
            >
              Head
            </TabsTrigger>
            <TabsTrigger
              value="tail"
              className="gap-2 px-6 py-1 2xl:px-10 2xl:py-3 rounded-md data-[state=active]:text-primary data-[state=active]:bg-white"
              onClick={() => setSelect("tail")}
              // data-state={head === "Coin Flip" ? "active" : ""}
            >
              Tail
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <Button
          className={cn(
            "2xl:absolute 2xl:bottom-16 2xl:right-16 text-base lg:text-[28px] font-bold !py-2.5 !px-7 lg:!px-16 lg:!py-5",
            { hidden: coinFlipResult !== null }
          )}
          variant="game"
          onClick={() => {
            setIsFlipping(true);
            // Do the same for the "Tail" button
            setTimeout(() => {
              setCoinFlipResult("tail");
              setIsFlipping(false);
              setTimeout(() => {
                select === coinFlipResult ? setWin(true) : setWin(false);
              }, 1500);
            }, 3000); // Wait for 3 second before showing result
          }}
        >
          Start
        </Button>
      </div>
    </div>
  );
}

export default CoinFlippingGame;
