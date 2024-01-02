import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";

function SelectNFT({ data, activeNFT, setActiveNFT }) {
  return (
    <ScrollArea className="w-full !h-full relative overflow-visible">
      {/* FADE OUT BOTTOM DIV */}
      <div
        className="absolute bottom-0 w-[400px] h-40 translate-y-[110px] bg-gradient-to-b from-[#9886FE] to-transparent blur-lg z-40
        lg:translate-y-[150px]
        xl:translate-y-[200px]
        2xl:w-[560px] 2xl:left-0 2xl:-translate-y-2 2xl:from-[#9C93FF] 2xl:blur-lg
      "
      />

      <div className="relative">
        {/* SELECT FROM AVAILABLE NFTs MOBILE */}
        <div
          className={cn(
            "absolute 2xl:hidden grid grid-cols-2 gap-3 w-fit pb-28 ml-7 md:ml-14 top-8 z-30"
          )}
        >
          {
            //adding empty divs to make the grid 4x4
            data
              .concat(Array.from({ length: data.length % 2 }))
              .map((nft, i) => (
                <div
                  className={cn(
                    "w-20 h-20 lg:w-28 lg:h-28 xl:w-40 xl:h-40 rounded-xl border border-black/30 bg-black/20 relative overflow-hidden transition-all duration-150 ease-in cursor-pointer",
                    {
                      "border-2 bg-clip-content inset-0 p-1 bg-transparent border-yellow-400":
                        activeNFT.id === nft?.id,
                      "pointer-events-none": nft?.src == null,
                      step1m: i === 2,
                    }
                  )}
                  key={i}
                  onClick={() => setActiveNFT(nft)}
                >
                  {nft?.src && (
                    <Image
                      unoptimised
                      src={nft?.src || "/images/nft-pvp.png"}
                      alt="Dashboard Nft Image"
                      width={70}
                      height={70}
                      key={i}
                      className="w-full h-full rounded-lg 
                              bg-white/90
                      "
                    />
                  )}
                </div>
              ))
          }
        </div>

        {/* SELECT FROM AVAILABLE NFTs DESKTOP */}
        <div
          className={cn(
            "hidden absolute z-30 space-y-6 pl-[40px] h-fit w-fit translate-y-6",
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
