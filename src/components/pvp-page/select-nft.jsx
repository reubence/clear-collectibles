import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
const data = [
  {
    id: 842,
    bubbles: 8952,
    level: 2,
    src: "/images/nft-1.png",
  },
  {
    id: 443,
    bubbles: 4952,
    level: 1,
    src: "/images/nft-1.png",
  },
  {
    id: 543,
    bubbles: 5952,
    level: 3,
    src: "/images/nft-pvp.png",
  },
  {
    id: 643,
    bubbles: 6952,
    level: 10,
    src: "/images/nft-1.png",
  },
  {
    id: 743,
    bubbles: 7952,
    level: 4,
    src: "/images/nft-1.png",
  },
];

function SelectNFT() {
  const [activeNFT, setActiveNFT] = useState(data[2]);
  return (
    <>
      {/* SELECT FROM AVAILABLE NFTs MOBILE */}
      <div className="step1m absolute 2xl:hidden grid grid-cols-2 gap-3 w-fit ml-7 md:ml-14 top-1/2 -translate-y-1/2">
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
      <div className="hidden 2xl:block tallXL:scale-90 tallXL:3xl:scale-100 space-y-6 pl-[40px] tallXL:pt-20 h-fit absolute w-fit top-1/2  -translate-y-1/2">
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
              className={cn("w-[460px] h-[150px] rounded-2xl overflow-hidden")}
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
    </>
  );
}

export default SelectNFT;
