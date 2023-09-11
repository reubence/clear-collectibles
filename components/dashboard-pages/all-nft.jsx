import React from "react";
import NFT_3 from "@/public/images/nft-3.png";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";

function AllNFT() {
  return (
    <div className="flex flex-col justify-start gap-4 w-[calc(100vw-80px)] sm:w-[calc(768px-368px)] lg:w-[35vw] xl:w-[27vw]">
      <span className="uppercase text-xl ml-2 col-span-2 text-left whitespace-nowrap text-foreground">
        ALL NFT
      </span>
      <Separator className="col-span-2" />

      <ScrollArea className="h-[430px]">
        <div className="grid grid-cols-3 w-full gap-3">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 items-center p-2 mx-auto group hover:border-primary hover:bg-primary/20 hover:cursor-pointer border-2 border-transparent rounded-2xl transition-all duration-500 ease-in-out"
            >
              <Image
                src={"/images/nft-3.png"}
                alt="Clock Icon"
                height={120}
                width={120}
                className="rounded-2xl h-[90] w-[90px] lg:h-[120] lg:w-[120px] aspect-square object-cover"
                unoptimized
              />
              <div className="uppercase text-sm flex flex-col items-center gap-1">
                cc #852
                <p className="text-muted-foreground/50 font-normal">LV.2</p>
              </div>
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
