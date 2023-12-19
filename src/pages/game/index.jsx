import CoinFlipping from "@/components/game-page/pvp/CoinFlipping";
import GameStart from "@/components/game-page/pvp/GameStart";
import GoFirst from "@/components/game-page/pvp/GoFirst";
import PlayerSearching from "@/components/game-page/pvp/PlayerSearching";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import { set } from "react-hook-form";
import { useState, useEffect } from "react";
import CoinFlippingGame from "@/components/game-page/coin-flipping/CoinFlippingGame";

function Game() {
  const [step, setStep] = useState(1);
  const [searching, setSearching] = useState(true);
  const [turn, setTurn] = useState(""); // p1 = player 1, p2 = player 2
  const [timer, setTimer] = useState(5);

  const [gameMode, setGameMode] = useState("pvp");
  useEffect(() => {
    let countdownInterval;

    if (turn) {
      countdownInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => {
      clearInterval(countdownInterval);
      setTimer(5);
    };
  }, [turn]);

  return (
    <main className="h-screen w-screen px-[2vw] md:px-[6vw] py-[6vh] lg:px-[6vw] tallXS:px-[2vw] tallXS:py-[10vh] tallXL:py-[15vh] 2xl:px-[4vw] 2xl:!py-[8vh] flex gap-3.5 2xl:gap-6 bg-gradient-to-b from-[#5E58FF] to-[#00C6FF]">
      {/* LEFT SIDEBAR */}
      <div
        className={cn(
          "relative w-fit 2xl:w-full h-full flex flex-col-reverse justify-start rounded-xl 2xl:rounded-2xl border-2 2xl:border-4 border-gray-700/20 overflow-y-hidden bg-black/10",
          { "justify-between flex-col animate-fadein": !searching },
          { "!border-yellow-500": turn === "p1" },
          {
            "!max-w-[200px] lg:!max-w-[250px] 2xl:!max-w-md":
              gameMode === "coin-flipping",
          }
        )}
      >
        <div
          className={cn(
            "w-full flex flex-col relative p-4 2xl:p-8 bg-gray-800/50 left-0 bottom-0 h-64 rounded-b-xl 2xl:rounded-b-2xl",
            { "bg-transparent mt-0": !searching }
          )}
        >
          <div className="relative">
            <Image
              src="/background/mythic-badge.svg"
              alt="Dashboard Nft Image"
              width={220}
              height={70}
              className="w-28 h-8 2xl:w-56 2xl:h-20 z-10"
            />
            <span className="absolute translate-x-10 top-3 2xl:translate-x-20 2xl:top-9 text-[#B28AF8] text-[10px] 2xl:text-base">
              Mythic
            </span>
          </div>

          <div className="flex gap-2 2xl:gap-4 my-3 2xl:my-4 font-g8 font-bold text-xl 2xl:text-6xl text-white items-baseline z-40">
            #852
            <Separator className="h-4 2xl:h-6 rounded-full w-0.5 bg-white/80" />
            <span className="text-base 2xl:text-3xl font-normal">LV.2</span>
          </div>

          <Separator
            className={cn(
              "h-0.5 rounded-full w-full bg-gray-700/20 absolute left-0 bottom-2.5 2xl:bottom-6",
              {
                hidden: searching,
              }
            )}
          />

          {/* COUNTDOWN TIMER */}
          {step === 4 && (
            <div className="whitespace-nowrap relative text-sm 2xl:text-3xl !z-10 text-red-300 2xl:-bottom-14">
              <Icons.countdown className="w-7 h-7 2xl:h-16 2xl:w-16" />
              <span className="absolute -bottom-0 2xl:top-4 left-3 2xl:left-8 -z-10 bg-black/20 mt-1 px-2.5 py-0.5 2xl:py-1 !pl-5 2xl:!pl-8 font-semibold border border-black/10 rounded-lg 2xl:rounded-xl">
                <Progress
                  fill={turn == "p1" ? "!bg-red-500/90" : "!bg-green-500"}
                  className="absolute w-full h-full top-0 left-0 rounded-lg 2xl:rounded-xl -z-10 fill-black"
                  value={turn == "p1" ? timer : 5}
                  max={5}
                />

                {turn === "p1" ? (
                  "00 : " + Math.round(timer).toString().padStart(2, "0")
                ) : (
                  <span className="text-white"> 00 : 05</span>
                )}
              </span>
            </div>
          )}
        </div>

        {/* nft-image */}
        <Image
          src="/images/nft-pvp.png"
          alt="Dashboard Nft Image"
          width={1000}
          height={1000}
          // mirrored
          className={cn("!w-fit !h-fit", {
            relative: searching,
          })}
        />
      </div>

      {/* PVP GAME SQUARE */}
      <div
        className={cn(
          "relative w-full h-full p-5 2xl:p-12 rounded-xl 2xl:rounded-2xl border-2 2xl:border-4 border-gray-700/20 aspect-square bg-black/10",
          {
            hidden: gameMode === "coin-flipping",
          }
        )}
      >
        {/* PLAYER SEARCHING STARTS*/}
        {step === 1 && (
          <PlayerSearching setSearching={setSearching} setStep={setStep} />
        )}

        {/* COIN FLIPPING STARTS*/}
        {step === 2 && <CoinFlipping setStep={setStep} />}

        {/* WHO GOES FIRST STARTS*/}
        {step === 3 && <GoFirst setStep={setStep} />}

        {/* GAME STARTS*/}
        {step === 4 && <GameStart setStep={setStep} setTurn={setTurn} />}
      </div>

      {/* RIGHT SIDEBAR */}
      <div
        className={cn(
          "relative w-fit 2xl:w-full h-full flex flex-col-reverse justify-start rounded-xl 2xl:rounded-2xl border-2 2xl:border-4 border-gray-700/20 overflow-y-hidden bg-black/10",
          { "!hidden": gameMode === "coin-flipping" },
          { "justify-between flex-col animate-fadein": !searching },
          { "!border-yellow-500": turn === "p2" }
        )}
      >
        <div
          className={cn(
            "w-full flex flex-col relative p-4 2xl:p-8 bg-gray-800/50 left-0 bottom-0 h-64 rounded-b-xl 2xl:rounded-b-2xl",
            {
              "bg-transparent mt-0 items-end": !searching,
              "animate-pulse justify-center": searching,
            }
          )}
        >
          <div
            className={cn(
              "!text-white font-semibold text-xlw 2xl:text-[28px] text-center",
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
              className="w-28 h-8 2xl:w-56 2xl:h-20 z-10"
            />
            <span className="absolute translate-x-10 top-3 2xl:translate-x-20 2xl:top-9 text-[#B28AF8] text-[10px] 2xl:text-base">
              Mythic
            </span>
          </div>

          <div
            className={cn(
              "flex gap-2 2xl:gap-4 my-3 2xl:my-4 font-g8 font-bold text-xl 2xl:text-6xl text-white items-baseline z-40",
              { hidden: searching }
            )}
          >
            #852
            <Separator className="h-4 2xl:h-6 rounded-full w-0.5 bg-white/80" />
            <span className="text-base 2xl:text-3xl font-normal">LV.2</span>
          </div>

          <Separator
            className={cn(
              "h-0.5 rounded-full w-full bg-gray-700/20 absolute left-0 bottom-2.5 2xl:bottom-6",
              {
                hidden: searching,
              }
            )}
          />

          {/* COUNTDOWN TIMER */}
          {step === 4 && (
            <div className="whitespace-nowrap relative flex text-sm 2xl:text-3xl !z-10 text-red-300 -translate-x-20  2xl:-translate-x-36 2xl:-bottom-14">
              <span className="absolute -bottom-0 2xl:top-4 left-3 2xl:left-8 -z-10 bg-black/20 mt-1 px-2.5 py-0.5 2xl:py-1 !pl-5 2xl:!pl-8 font-semibold border border-black/10 rounded-lg 2xl:rounded-xl">
                <Progress
                  fill={turn == "p2" ? "!bg-red-500/90" : "!bg-green-500"}
                  className="absolute w-full h-full top-0 left-0 rounded-lg 2xl:rounded-xl -z-10 fill-black"
                  value={turn == "p2" ? timer : 5}
                  max={5}
                />
                {turn === "p2" ? (
                  "00 : " + timer.toString().padStart(2, "0")
                ) : (
                  <span className="text-white"> 00 : 05</span>
                )}
              </span>
              <Icons.countdown className="w-7 h-7 2xl:h-16 2xl:w-16" />
            </div>
          )}
        </div>

        {/* nft-image */}
        <Image
          src={!searching ? "/images/nft-pvp.png" : "/images/nft-searching.png"}
          alt="Dashboard Nft Image"
          width={1000}
          height={1000}
          // mirrored
          className={cn("!w-fit !h-fit", {
            "-scale-x-100": !searching,
            "animate-pulse": searching,
          })}
        />
      </div>

      <div
        className={cn(
          "relative w-full h-full p-5 2xl:p-12 rounded-xl 2xl:rounded-2xl border-2 2xl:border-4 border-gray-700/20 aspect-square bg-black/10",
          {
            hidden: gameMode !== "coin-flipping",
          }
        )}
      >
        <CoinFlippingGame />
      </div>
    </main>
  );
}

export default Game;
