import Image from "next/image";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import { background } from "@/constants";
import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";

function AllNFT({
  orientation = "vertical",
  nfts,
  setBackground,
  setFavNft,
  setSelectedNft,
  wrapperRef,
  selectedNft,
  submitLoading,
  setCustombg,
  handleSubmitAvatar,
}) {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (nfts && nfts.length > 0) {
      setData(nfts);
    }
  }, [nfts]);
  return (
    <div
      ref={wrapperRef}
      className="flex flex-col justify-start gap-4 w-[calc(100vw-80px)] sm:w-[calc(768px-368px)] h-full"
    >
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
          {data && data.length > 0 && (
            <>
              {data.map((item, i) => {
                return (
                  <div
                    key={i}
                    className={cn(
                      `flex flex-col gap-4 items-center p-2 mx-auto group ${
                        selectedNft &&
                        selectedNft.number == item.number &&
                        "!border-primary bg-primary/20"
                      } hover:border-primary hover:bg-primary/20 hover:cursor-pointer border-2 border-transparent rounded-2xl transition-all duration-500 ease-in-out`,

                      {
                        "w-full": orientation === "horizontal",
                      }
                    )}
                    onClick={() => {
                      if (!submitLoading) {
                        const foundObject = background.find(
                          (b) => b.number === item.number
                        );
                        if (foundObject) {
                          if (item.number > 8876) {
                            setCustombg(true);
                          } else {
                            setCustombg(false);
                          }

                          setBackground(foundObject.background);
                          setFavNft(
                            `https://shdw-drive.genesysgo.net/4ogWuz5n4TB2NFdPdtTT9uAsuudNE242EnpM4VwEmBHM/${item.number}.png`
                          );
                        }

                        setSelectedNft(item);
                      }
                    }}
                  >
                    <Image
                      src={item.img}
                      alt="Clock Icon"
                      height={120}
                      width={120}
                      className="transition-opacity opacity-0 duration-[2s] rounded-2xl h-[90] w-[90px] lg:h-[120] lg:w-[120px] aspect-square object-cover "
                      onLoadingComplete={(image) =>
                        image.classList.remove("opacity-0")
                      }
                    />
                    <div className="uppercase text-sm flex flex-col items-center gap-1">
                      cc #{item.number}
                      <p className="text-muted-foreground font-[600]">
                        LV.{item.level}
                      </p>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </ScrollArea>

<div className="flex justify-end px-4 lg:px-0">
      <button
        disabled={submitLoading}
        className={cn(
          buttonVariants({
            variant: "secondary",
            size: "sm",
            className: "bg-primary hover:bg-primary/70 group ",
          }),
          "text-white border-none w-fit px-4 py-2.5"
        )}
        onClick={() => handleSubmitAvatar()}
      >
        {
          submitLoading ?
          <svg
          aria-hidden="true"
          class="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>

          :

          'Set as PFP'
        }
        
      </button>

      </div>
    </div>
  );
}

export default AllNFT;
