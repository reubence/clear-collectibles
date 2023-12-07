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
          "w-full h-full flex flex-col p-8 rounded-lg lg:rounded-2xl border-4 border-gray-700/20 relative",
          { "flex-col-reverse": !playerFound }
        )}
      >
        {/* background color when player searching */}
        <div
          className={cn(
            "absolute w-full bg-gray-800/50 left-0 bottom-0 h-64 rounded-b-lg lg:rounded-b-2xl",
            { hidden: playerFound }
          )}
        />

        <div className={cn("flex flex-col relative")}>
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
        </div>

        <Separator
          className={cn("h-[1px] rounded-full w-full bg-white/60 my-8", {
            hidden: !playerFound,
          })}
        />

        {/* nft-image */}
        <Image
          src="/images/nft-pvp.png"
          alt="Dashboard Nft Image"
          width={1000}
          height={1000}
          // mirrored
          className={cn("", {
            "!block mb-[60px]": !playerFound,
            "absolute bottom-0 left-0": playerFound,
          })}
        />
      </div>
      <div className="w-full h-full p-5 rounded-lg lg:rounded-2xl border-4 border-gray-700/20 aspect-square"></div>
      {/* RIGHT SIDEBAR */}
      <div
        className={cn(
          "w-full h-full flex flex-col items-end p-8 rounded-lg lg:rounded-2xl border-4 border-gray-700/20 relative",
          { "flex-col-reverse": !playerFound }
        )}
      >
        {/* background color when player searching */}
        <div
          className={cn(
            "absolute w-full bg-gray-800/50 left-0 bottom-0 h-64 rounded-b-lg lg:rounded-b-2xl",
            { hidden: playerFound }
          )}
        />

        <div className="relative">
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
          className={cn("h-[1px] rounded-full w-full bg-white/60 my-8", {
            hidden: !playerFound,
          })}
        />

        {/* nft-image */}
        <Image
          src="/images/nft-pvp.png"
          alt="Dashboard Nft Image"
          width={1000}
          height={1000}
          // mirrored
          className={cn("-scale-x-100 a", {
            "!block mb-[60px]": !playerFound,
            "absolute bottom-0 right-0": playerFound,
          })}
        />
      </div>
    </main>
  );
}

export default Game;
