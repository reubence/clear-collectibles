import Image from "next/image";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

function NftCharge({ orientation = "vertical", nfts, staked, getData, submitLoading, setSubmitLoading, accessToken }) {
  const [selectedNft, setSelectedNft] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  async function handleSubmit() {
    const token = localStorage.getItem("token");
    const expiry = localStorage.getItem("expiry");
    setSubmitLoading(true);
    if (token || Date.now() < expiry) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API}/api/v1/chargeNft`,

          {
            method: "POST",
            body: JSON.stringify({ assetNumbers: selectedNft, accessToken: accessToken }),
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        const data = await res.text();
        if (data.length) {
          const result = JSON.parse(data);
          await getData(token)
          setSelectedNft([])
          setSubmitLoading(false);
        }
      } catch (error) {
        setSubmitLoading(false);
      }
    }
  }

  return (
    <div className="flex flex-col justify-start gap-4 w-[calc(100vw-80px)] sm:w-[calc(768px-368px)] h-full">
      <span className="uppercase text-xl ml-2 col-span-2 text-left whitespace-nowrap text-foreground">
        Charge Your CC
      </span>
      <Separator className="col-span-2" />

      <ScrollArea
        className={cn("lg:pr-2.5 relative", {
          "h-[430px]": orientation === "vertical",
          "h-[calc(360px)] lg:h-[430px]": orientation === "horizontal",
        })}
      >
        <ScrollBar orientation={orientation} />
        <div
          className={cn("grid gap-3", {
            "grid-cols-3 w-full": orientation === "vertical",
            "grid-cols-6 w-[100vh] lg:grid-cols-2 lg:w-full":
              orientation === "horizontal",
          })}
        >
          {nfts && nfts.length > 0 && (
            <>
              {nfts.map((item, i) => {
                const isMatched = staked.some(
                  (stakedNft) => stakedNft.number === item.number
                );
                let number = 0
                if(isMatched){
                  if(((Number(staked.filter(stakeitem => stakeitem.number == item.number)[0]?.hours) / 120) *100).toFixed(2) > 100){
                    number = 100
                  }else{
                    number = ((Number(staked.filter(stakeitem => stakeitem.number == item.number)[0]?.hours) / 120) *100).toFixed(2)

                  }

                }
                return (
                  <div
                    key={i}
                    className={cn(
                      `flex flex-col gap-4 items-center relative p-2 mx-auto group  ${
                        selectedNft.some((nft) => nft === item.number) &&
                        !isMatched &&
                        "!border-primary bg-primary/20"
                      } hover:border-primary hover:bg-primary/20 hover:cursor-pointer border-2 border-transparent rounded-2xl transition-all duration-500 ease-in-out`,

                      {
                        "w-full": orientation === "horizontal",
                      }
                    )}
                    onClick={() => {
                      if (!isMatched && !submitLoading) {
                        if (selectedNft.some((nft) => nft === item.number)) {
                          setSelectedNft(
                            selectedNft.filter((nft) => nft !== item.number)
                          );
                        } else {
                          setSelectedNft([...selectedNft, Number(item.number)]);
                        }
                      }
                    }}
                  >
                    <div
                      className={`w-full h-full top-0 absolute left-0 rounded-2xl flex justify-center items-center ${
                        isMatched
                          ? "!border-[#25f9134d]/30 bg-[#25f9134d]/30"
                          : "hidden"
                      }`}>

                      {isMatched &&
                        <p className="text-white font-[800]">
                          {number}%
                        
                        </p>
                      
                      }



                    </div>
                    <Image
                      src={item.img}
                      alt="Clock Icon"
                      height={120}
                      width={120}
                      className="transition-opacity opacity-0 duration-[2s] rounded-2xl h-[90px] w-[90px] aspect-square object-cover"
                      onLoadingComplete={(image) => image.classList.remove("opacity-0")}
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
      <div className="w-full flex justify-end gap-4 items-center">
        <Button
          variant={selectAll ? "secondary" : "default"}
          disabled={nfts.length === staked.length || submitLoading}
          size="sm"
          onClick={() => {
            setSelectAll(!selectAll);
            if (selectAll !== true) {
              const array = nfts
                .filter((item) => {
                  return !staked.some(
                    (stakedNft) => stakedNft.number === item.number
                  );
                })
                .map((item) => Number(item.number));

              setSelectedNft(array);
            } else {
              setSelectedNft([]);
            }
          }}
        >
          {selectAll ? "Unselect All" : "Select All"}
        </Button>
        <Button
          size="sm"
          onClick={() => handleSubmit()}
          disabled={selectedNft.length == 0 || submitLoading}
        >
          Charge {`(${selectedNft.length})`}
          {submitLoading && (
            <svg
              aria-hidden="true"
              class="inline w-3 h-3 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
          )}
        </Button>
      </div>
    </div>
  );
}

export default NftCharge;
