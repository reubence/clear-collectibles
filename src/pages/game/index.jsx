import CoinFlipping from "@/components/game-page/CoinFlipping";
import GoFirst from "@/components/game-page/GoFirst";
import PlayerSearching from "@/components/game-page/PlayerSearching";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import React, { useEffect } from "react";
import { set } from "react-hook-form";

function Game() {
  const [step, setStep] = React.useState(1);
  const [searching, setSearching] = React.useState(true);
  const [turn, setTurn] = React.useState("p1"); // p1 = player 1, p2 = player 2
  const [totalTime, setTotalTime] = React.useState(90);
  const [gameStarted, setGameStarted] = React.useState(false);
  const [gameEnded, setGameEnded] = React.useState(false);
  const [gameResult, setGameResult] = React.useState("win"); // win, lose, draw

  return (
    <main className="h-screen w-screen px-10 pb-12 pt-10 flex gap-3.5 2xl:gap-6 bg-gradient-to-b from-[#5E58FF] to-[#00C6FF]">
      {/* LEFT SIDEBAR */}
      <div
        className={cn(
          "w-full h-full flex flex-col-reverse justify-start rounded-lg 2xl:rounded-2xl border-4 border-gray-700/20 relative overflow-y-hidden",
          { "justify-between flex-col": !searching }
        )}
      >
        <div
          className={cn(
            "w-full flex flex-col relative p-4 2xl:p-8 bg-gray-800/50 left-0 bottom-0 h-64 rounded-b-lg 2xl:rounded-b-2xl",
            { "bg-transparent mt-0": !searching }
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
                hidden: searching,
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
          className={cn({ relative: searching })}
        />
      </div>

      {/* GAME SQUARE */}
      <div className=" relative w-full h-full p-5 2xl:p-12 rounded-lg 2xl:rounded-2xl border-4 border-gray-700/20 aspect-square">
        {/* PLAYER SEARCHING STARTS*/}
        {step === 1 && (
          <PlayerSearching setSearching={setSearching} setStep={setStep} />
        )}

        {/* COIN FLIPPING STARTS*/}
        {step === 2 && <CoinFlipping setStep={setStep} />}

        {/* WHO GOES FIRST STARTS*/}
        {step === 3 && <GoFirst setStep={setStep} />}
      </div>

      {/* RIGHT SIDEBAR */}
      <div
        className={cn(
          "relative w-full h-full flex flex-col-reverse justify-start rounded-lg 2xl:rounded-2xl border-4 border-gray-700/20 overflow-y-hidden",
          { "justify-between flex-col": !searching }
        )}
      >
        <div
          className={cn(
            "w-full flex flex-col relative p-4 2xl:p-8 bg-gray-800/50 left-0 bottom-0 h-64 rounded-b-lg 2xl:rounded-b-2xl",
            {
              "bg-transparent mt-0 items-end": !searching,
              "animate-pulse justify-center": searching,
            }
          )}
        >
          <div
            className={cn(
              "!text-white font-semibold text-lgw lg:text-[28px] text-center",
              {
                hidden: !searching,
              }
            )}
          >
            Searching...
          </div>
          <div className={cn("relative", { hidden: searching })}>
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
              { hidden: searching }
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
                hidden: searching,
              }
            )}
          />
        </div>

        {/* nft-image */}
        <div className="relative flex">
          <Image
            src={
              !searching ? "/images/nft-pvp.png" : "/images/nft-searching.png"
            }
            alt="Dashboard Nft Image"
            width={1000}
            height={1000}
            // mirrored
            className={cn({
              "-scale-x-100": !searching,
              "animate-pulse": searching,
            })}
          />
        </div>
      </div>
    </main>
  );
}

export default Game;
