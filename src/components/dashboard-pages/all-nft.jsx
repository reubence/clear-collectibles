import Image from "next/image";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import { background } from "@/constants";
import { useEffect, useState } from "react";

function AllNFT({ orientation = "vertical", nfts, setBackground, setFavNft, setSelectedNft, wrapperRef, selectedNft, submitLoading, setCustombg }) {
 const [data, setData] = useState([])
  useEffect(() => {
    if(nfts && nfts.length > 0){
      setData(nfts)
    }
  }, [nfts])
  return (
    <div 
    ref={wrapperRef}
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
          {(data && data.length > 0) &&
          <>
            {data.map((item, i) => {
              return(
            <div
              key={i}
              className={cn(
                `flex flex-col gap-4 items-center p-2 mx-auto group ${selectedNft && selectedNft.number == item.number && "!border-primary bg-primary/20"} hover:border-primary hover:bg-primary/20 hover:cursor-pointer border-2 border-transparent rounded-2xl transition-all duration-500 ease-in-out`,
                
                {
                  "w-full": orientation === "horizontal",
                }
              )}
              onClick={() => {
                if(!submitLoading){
                  const foundObject = background.find(b => b.number === item.number);
                  if(foundObject){
                    if(item.number > 8876){
                      setCustombg(true)
                    }else{
                      setCustombg(false)
                    }
                    
                    setBackground(foundObject.background)
                    setFavNft(`https://shdw-drive.genesysgo.net/4ogWuz5n4TB2NFdPdtTT9uAsuudNE242EnpM4VwEmBHM/${item.number}.png`)
                   
                  }
                  
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
              />
              <div className="uppercase text-sm flex flex-col items-center gap-1">
                cc #{item.number}
                <p className="text-muted-foreground font-[600]">
    
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

export default AllNFT;
