import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import React from "react";

function Game() {
  const [searching, setSearching] = React.useState(false);
  const [playerFound, setPlayerFound] = React.useState(false);
  return (
    <main className="h-screen w-screen px-10 pb-12 pt-10 flex gap-6 bg-gradient-to-b from-[#5E58FF] to-[#00C6FF]">
      {/* LEFT SIDEBAR */}
      <div
        className={cn(
          "w-full h-full flex flex-col-reverse justify-start rounded-lg lg:rounded-2xl border-4 border-gray-700/20 relative",
          { "justify-between flex-col": playerFound }
        )}
      >
        <div
          className={cn(
            "w-full flex flex-col relative p-8 bg-gray-800/50 left-0 bottom-0 h-64 rounded-b-lg lg:rounded-b-2xl",
            { "bg-transparent mt-0": playerFound }
          )}
        >
          <div>
            <Image
              src="/background/mythic-badge.svg"
              alt="Dashboard Nft Image"
              width={220}
              height={70}
              className="z-10"
            />
            <span className="absolute translate-x-20 top-8 text-[#B28AF8]">
              Mythic
            </span>
          </div>

          <div className="flex gap-4 my-4 font-g8 font-bold text-6xl text-white items-baseline z-40">
            #852
            <Separator className="h-6 rounded-full w-0.5 bg-white/80" />
            <span className="text-3xl font-normal">LV.2</span>
          </div>
          <Separator
            className={cn(
              "h-0.5 rounded-full w-full bg-gray-700/20 absolute left-0 bottom-6",
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
          className={cn("", { "": !playerFound })}
        />
      </div>

      {/* GAME SQUARE */}
      <div className="w-full h-full p-5 rounded-lg lg:rounded-2xl border-4 border-gray-700/20 aspect-square"></div>

      {/* RIGHT SIDEBAR */}
      <div
        className={cn(
          "w-full h-full flex flex-col-reverse justify-start rounded-lg lg:rounded-2xl border-4 border-gray-700/20 relative",
          { "justify-between flex-col": playerFound }
        )}
      >
        <div
          className={cn(
            "w-full flex flex-col relative p-8 bg-gray-800/50 left-0 bottom-0 h-64 rounded-b-lg lg:rounded-b-2xl",
            {
              "bg-transparent mt-0": playerFound,
              "animate-pulse justify-center": !playerFound,
            }
          )}
        >
          {/* PLAYER SEARCHING */}
          <div className="text-white font-semibold text-[28px] text-center">
            Searching...
          </div>
          <div className={cn({ hidden: !playerFound })}>
            <Image
              src="/background/mythic-badge.svg"
              alt="Dashboard Nft Image"
              width={220}
              height={70}
              className="z-10"
            />
            <span className="absolute translate-x-20 top-8 text-[#B28AF8]">
              Mythic
            </span>
          </div>

          <div
            className={cn(
              "flex gap-4 my-4 font-g8 font-bold text-6xl text-white items-baseline z-40",
              { hidden: !playerFound }
            )}
          >
            #852
            <Separator className="h-6 rounded-full w-0.5 bg-white/80" />
            <span className="text-3xl font-normal">LV.2</span>
          </div>
          <Separator
            className={cn(
              "h-0.5 rounded-full w-full bg-gray-700/20 absolute left-0 bottom-6",
              {
                hidden: !playerFound,
              }
            )}
          />
        </div>

        {/* nft-image */}
        <Image
          src={
            playerFound ? "/images/nft-pvp.png" : "/images/nft-searching.png"
          }
          alt="Dashboard Nft Image"
          width={1000}
          height={1000}
          // mirrored
          className={cn("", {
            "-scale-x-100": playerFound,
            "animate-pulse": !playerFound,
          })}
        />
      </div>
    </main>
  );
}

export default Game;
