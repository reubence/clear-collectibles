import React from "react";
import NFT_3 from "@/public/images/nft-3.png";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";

function AllNFT() {
  return (
    <div className="flex flex-col justify-start gap-4 w-full">
      <span className="uppercase text-xl ml-2 col-span-2 text-left whitespace-nowrap">
        ALL NFT
      </span>
      <Separator className="col-span-2" />

      <ScrollArea className="h-[230px]">
        <div className="grid grid-cols-3 w-full gap-3">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="flex items-center p-2 mx-auto group  hover:border-primary hover:bg-primary/20 hover:cursor-pointer border-2 border-transparent rounded-2xl transition-all duration-500 ease-in-out"
            >
              <Image
                src={NFT_3}
                alt="Clock Icon"
                height={90}
                width={90}
                className="rounded-2xl h-[90] w-[90px] lg:h-[90px] aspect-square object-cover"
                unoptimized
              />
            </div>
          ))}
        </div>
      </ScrollArea>
      <Separator className="" />
      <div class="uppercase inline-flex justify-center items-center gap-3 lg:hidden">
        <span className="">cc #852</span>
        <span className="font-normal">lv.2</span>
      </div>
    </div>
  );
}

export default AllNFT;
