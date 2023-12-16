import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import React from "react";
import { set } from "react-hook-form";

function Game() {
  const [searching, setSearching] = React.useState(false);
  const [playerFound, setPlayerFound] = React.useState(false);
  const [seconds, setSeconds] = React.useState(5);
  const [coinFlip, setCoinFlip] = React.useState(null);
  const [goFirst, setGoFirst] = React.useState(null);

  React.useEffect(() => {
    // Only set the interval if seconds > 0
    if (seconds > 0) {
      // Set an interval to countdown
      const intervalId = setInterval(() => {
        // Decrement the seconds by 1 every second
        setSeconds((seconds) => seconds - 1);
      }, 1000);

      // Clear the interval when the component unmounts or when the countdown is complete
      return () => clearInterval(intervalId);
    } else {
      // Set playerFound to true after 2 seconds
      const timeoutId = setTimeout(() => {
        setPlayerFound(true);
      }, 2000);

      // Clear the timeout when the component unmounts or when playerFound is set to true
      return () => clearTimeout(timeoutId);
    }
  }, [seconds]); // Dependency array, so the effect reruns when 'seconds' changes

  return (
    <main className="h-screen w-screen px-10 pb-12 pt-10 flex gap-3.5 2xl:gap-6 bg-gradient-to-b from-[#5E58FF] to-[#00C6FF]">
      {/* LEFT SIDEBAR */}
      <div
        className={cn(
          "w-full h-full flex flex-col-reverse justify-start rounded-lg 2xl:rounded-2xl border-4 border-gray-700/20 relative overflow-y-hidden",
          { "justify-between flex-col": playerFound }
        )}
      >
        <div
          className={cn(
            "w-full flex flex-col relative p-4 2xl:p-8 bg-gray-800/50 left-0 bottom-0 h-64 rounded-b-lg 2xl:rounded-b-2xl",
            { "bg-transparent mt-0": playerFound }
          )}
        >
          <div className="relative">
            <Image
              src="/background/mythic-badge.svg"
              alt="Dashboard Nft Image"
              width={220}
              height={70}
              className="w-28 h-8 xl:w-56 xl:h-20 z-10"
            />
            <span className="absolute translate-x-10 top-3 xl:translate-x-20 xl:top-9 text-[#B28AF8] text-[10px] xl:text-base">
              Mythic
            </span>
          </div>

          <div className="flex gap-2 xl:gap-4 my-3 xl:my-4 font-g8 font-bold text-xl xl:text-6xl text-white items-baseline z-40">
            #852
            <Separator className="h-4 xl:h-6 rounded-full w-0.5 bg-white/80" />
            <span className="text-base xl:text-3xl font-normal">LV.2</span>
          </div>
          <Separator
            className={cn(
              "h-0.5 rounded-full w-full bg-gray-700/20 absolute left-0 bottom-2.5 xl:bottom-6",
              {
                hidden: !playerFound,
              }
            )}
          />
        </div>

        {/* nft-image */}
        <Image
          src="/images/nft-pvp.png"
          alt="Dashboard Nft Image"
          width={1000}
          height={1000}
          // mirrored
          className={cn({ relative: !playerFound })}
        />
      </div>

      {/* GAME SQUARE */}
      <div className="w-full h-full p-5 2xl:p-12 rounded-lg 2xl:rounded-2xl border-4 border-gray-700/20 aspect-square">
        {/* PLAYER SEARCHING STARTS*/}
        <div
          className={cn(
            "h-full w-full flex flex-col items-center justify-center gap-12 ",
            { hidden: playerFound }
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
            className=" h-20 rounded-3xl max-w-xl"
            max={100}
            value={seconds > 0 ? (5 - seconds) * 10 : 100}
          />
          <Button disabled={!seconds > 0 && true} className="" variant="game">
            Cancel{seconds > 0 && "..." + seconds}
          </Button>
        </div>
        {/* PLAYER SEARCHING ENDS*/}

        {/* COIN FLIPPING STARTS*/}
        <div
          className={cn(
            "h-full w-full flex flex-col items-center justify-between",
            { hidden: !playerFound || goFirst !== null || goFirst }
          )}
        >
          <div className="w-full 2xl:w-9 h-16 rounded-xl text-sm 2xl:text-[28px] font-bold overflow-hidden">
            <div
              className={cn(
                "bg-white w-full h-full flex flex-col justify-center items-center text-center text-blue-700",
                "animate-in transition-all duration-500",
                { hidden: coinFlip !== null }
              )}
            >
              Call the coin flip
            </div>

            <div
              className={cn(
                "bg-green-400 w-full h-full flex flex-col justify-center items-center text-center text-blue-700",
                "animate-in transition-all duration-500",
                { hidden: coinFlip !== true }
              )}
            >
              You won the coin flip{" "}
            </div>

            <div
              className={cn(
                "bg-red-300 w-full h-full flex flex-col justify-center items-center text-center text-blue-700",
                "animate-in transition-all duration-500",
                { hidden: coinFlip !== false }
              )}
            >
              You lost the coin flip{" "}
            </div>
          </div>

          <div className="flex gap-6">
            <Button
              className=""
              disabled={coinFlip !== null}
              variant="game"
              onClick={() => {
                setCoinFlip(true);
                // Assuming the coin flip is determined here and you need to set goFirst to true after some time
                setTimeout(() => {
                  setGoFirst(true);
                }, 1000); // Wait for 1 second before showing who goes first
              }}
            >
              Head
            </Button>
            <Button
              className=""
              disabled={coinFlip !== null}
              variant="game"
              onClick={() => {
                setCoinFlip(false);
                // Do the same for the "Tail" button
                setTimeout(() => {
                  setGoFirst(false);
                }, 1000); // Wait for 1 second before showing who goes first
              }}
            >
              Tail
            </Button>
          </div>
        </div>
        {/* COIN FLIPPING ENDS*/}

        {/* WHO GOES FIRST STARTS*/}
        <div
          className={cn(
            "h-full w-full flex flex-col items-center justify-between",
            { hidden: goFirst == null }
          )}
        >
          <div className="w-96 h-16 rounded-xl text-[28px] font-bold overflow-hidden">
            <div
              className={cn(
                "bg-white w-full h-full flex flex-col justify-center items-center text-center text-blue-700",
                "animate-in transition-all duration-500",
                { hidden: !goFirst }
              )}
            >
              Would you like to go first
            </div>

            <div
              className={cn(
                "bg-green-400 w-full h-full flex flex-col justify-center items-center text-center text-blue-700",
                "animate-in transition-all duration-500",
                { hidden: goFirst }
              )}
            >
              Wait for the game to start{" "}
            </div>
          </div>

          <Icons.gameCoin className="w-24 h-24 2xl:w-full 2xl:h-full" />

          <div className="flex gap-6">
            <Button
              className=""
              variant="game"
              onClick={() => setGoFirst(true)}
            >
              Head
            </Button>
            <Button
              className=""
              variant="game"
              onClick={() => setGoFirst(false)}
            >
              Tail
            </Button>
          </div>
        </div>
        {/* WHO GOES FIRST ENDS*/}
      </div>

      {/* RIGHT SIDEBAR */}
      <div
        className={cn(
          "relative w-full h-full flex flex-col-reverse justify-start rounded-lg 2xl:rounded-2xl border-4 border-gray-700/20 overflow-y-hidden",
          { "justify-between flex-col": playerFound }
        )}
      >
        <div
          className={cn(
            "w-full flex flex-col relative p-4 2xl:p-8 bg-gray-800/50 left-0 bottom-0 h-64 rounded-b-lg 2xl:rounded-b-2xl",
            {
              "bg-transparent mt-0 items-end": playerFound,
              "animate-pulse justify-center": !playerFound,
            }
          )}
        >
          <div
            className={cn("text-white font-semibold text-[28px] text-center", {
              hidden: playerFound,
            })}
          >
            Searching...
          </div>
          <div className={cn("relative", { hidden: !playerFound })}>
            <Image
              src="/background/mythic-badge.svg"
              alt="Dashboard Nft Image"
              width={220}
              height={70}
              className="w-28 h-8 xl:w-56 xl:h-20 z-10"
            />
            <span className="absolute translate-x-10 top-3 xl:translate-x-20 xl:top-9 text-[#B28AF8] text-[10px] xl:text-base">
              Mythic
            </span>
          </div>

          <div
            className={cn(
              "flex gap-2 2xl:gap-4 my-3 xl:my-4 font-g8 font-bold text-xl xl:text-6xl text-white items-baseline z-40",
              { hidden: !playerFound }
            )}
          >
            #852
            <Separator className="h-4 xl:h-6 rounded-full w-0.5 bg-white/80" />
            <span className="text-base xl:text-3xl font-normal">LV.2</span>
          </div>
          <Separator
            className={cn(
              "h-0.5 rounded-full w-full bg-gray-700/20 absolute left-0 bottom-2.5 xl:bottom-6",
              {
                hidden: !playerFound,
              }
            )}
          />
        </div>

        {/* nft-image */}
        <div className="relative flex">
          <Image
            src={
              playerFound ? "/images/nft-pvp.png" : "/images/nft-searching.png"
            }
            alt="Dashboard Nft Image"
            width={1000}
            height={1000}
            // mirrored
            className={cn({
              "-scale-x-100": playerFound,
              "animate-pulse": !playerFound,
            })}
          />
        </div>
      </div>
    </main>
  );
}

export default Game;
