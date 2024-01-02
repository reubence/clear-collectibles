import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";

function SelectNFT({ data, activeNFT, setActiveNFT }) {
  return (
    <ScrollArea className="w-full !h-full relative overflow-visible">
      {/* <div className="absolute top-0 w-[560px] h-[150px] -translate-y-2 bg-gradient-to-b from-[#7E2EF7] to-transparent blur-lg z-50" /> */}
      <div className="absolute bottom-0 w-[560px] h-[150px] -translate-y-2 bg-gradient-to-b from-[#9C93FF] to-transparent blur-lg z-50" />
      <div className="relative">
        {/* SELECT FROM AVAILABLE NFTs MOBILE */}
        <div className="step1m absolute 2xl:hidden grid grid-cols-2 gap-3 w-fit ml-7 md:ml-14 top-1/2 -translate-y-1/2 !z-[999999]">
          {
            //adding empty divs to make the grid 4x4
            data.concat(Array.from({ length: 3 })).map((nft, i) => (
              <div
                className={cn(
                  "w-20 h-20 lg:w-28 lg:h-28 xl:w-40 xl:h-40 rounded-xl border border-black/30 bg-black/20 relative overflow-hidden transition-all duration-150 ease-in cursor-pointer",
                  {
                    "border-2 bg-clip-content inset-0 p-1 bg-transparent border-yellow-400":
                      activeNFT.id === nft?.id,
                    "pointer-events-none": i > 2,
                  }
                )}
                key={i}
                onClick={() => setActiveNFT(nft)}
              >
                <Image
                  unoptimised
                  src={nft?.src || "/images/nft-pvp.png"}
                  alt="Dashboard Nft Image"
                  width={70}
                  height={70}
                  key={i}
                  className={cn("w-full h-full rounded-lg", "bg-white/90", {
                    hidden: i > 2,
                  })}
                />
              </div>
            ))
          }
        </div>

        {/* SELECT FROM AVAILABLE NFTs DESKTOP */}
        <div
          className={cn(
            "hidden absolute z-40 space-y-6 pl-[40px] h-fit w-fit translate-y-6",
            "",
            "2xl:block 2xl:pb-[50vh]"
          )}
        >
          {data.map((nft, i) => (
            <div
              key={i}
              className={cn(
                "rounded-2xl transition-all duration-150 ease-in cursor-pointer p-1 bg-gradient-to-r border-yellow-400 hover:scale-110",
                {
                  "border-4 bg-clip-content inset-0 p-1 from-white to-white hover:scale-100":
                    activeNFT.id === nft?.id,
                  "inset-0 from-white to-transparent": activeNFT.id !== nft?.id,
                  step1: i == 2,
                }
              )} // Adjust hover and border color as needed
              onClick={() => setActiveNFT(nft)}
            >
              <div
                className={cn(
                  "rounded-2xl overflow-hidden",
                  "w-[460px] h-[150px]"
                )}
              >
                <Image
                  unoptimised
                  src={nft?.src || "/images/nft-pvp.png"}
                  alt="Dashboard Nft Image"
                  width={900}
                  height={900}
                  className={cn("-translate-y-1/4", { step1: i == 2 })}
                  // dummy interaction to start tour guide - delete later
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}

export default SelectNFT;
