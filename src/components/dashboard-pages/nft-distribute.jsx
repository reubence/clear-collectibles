import Image from "next/image";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import { background } from "@/constants";
import { useEffect, useState } from "react";

function NftDistribute({ orientation = "vertical", nfts, setSelectedNft, selectedNft, submitLoading}) {


  return (
    <div 
    className="flex flex-col justify-start gap-4 w-[calc(100vw-80px)] sm:w-[calc(768px-368px)] h-full">
      <span className="uppercase text-xl ml-2 col-span-2 text-left whitespace-nowrap text-foreground">
        ALL NFT {`(${nfts ? nfts.length : "0"})`}
      </span>
      <Separator className="col-span-2" />

      <ScrollArea
        className={cn("lg:pr-2.5", {
          "h-[430px]": orientation === "vertical",
          "h-[calc(360px)] lg:h-[430px]": orientation === "horizontal",
        })}
      >
        <ScrollBar orientation={orientation} />
        <div
          className={cn("grid gap-3", {
            "grid-cols-2 w-full": orientation === "vertical",
            "grid-cols-6 w-[100vh] lg:grid-cols-2 lg:w-full":
              orientation === "horizontal",
          })}
        >
          {(nfts && nfts.length > 0) &&
          <>
            {nfts.map((item, i) => {
              return(
            <div
              key={i}
              className={cn(
                `flex flex-col gap-4 items-center p-2 mx-auto group ${(selectedNft && selectedNft.number == item.number)&& "!border-primary bg-primary/20"} hover:border-primary hover:bg-primary/20 hover:cursor-pointer border-2 border-transparent rounded-2xl transition-all duration-500 ease-in-out`,
                
                {
                  "w-full": orientation === "horizontal",
                }
              )}
              onClick={() => {
                if(!submitLoading){
                  setSelectedNft(item)
                }
                
              }}
            >
              <Image
                src={item.img}
                alt="Clock Icon"
                height={120}
                width={120}
                className="rounded-2xl h-[90] w-[90px] lg:h-[120] lg:w-[120px] aspect-square object-cover"
                unoptimized
              />
              <div className="uppercase text-sm flex flex-col items-center gap-1">
                cc #{item.number}
                <p className="text-muted-foreground/50 font-normal">
    
                  LV.{item.level}</p>
              </div>
            </div>
              )
            })}
          
          </>
          
          
          }
        
        </div>
      </ScrollArea>
    
    </div>
  );
}

export default NftDistribute;
