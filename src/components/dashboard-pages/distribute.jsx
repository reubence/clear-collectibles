"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Icons } from "../ui/icons";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Progress } from "../ui/progress";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import NftDistribute from "./nft-distribute";


function Distribute({orientation="horizontal", xp, nfts, profileDetails, getNft, wallets, getData}) {
  const [progress, setProgress] = useState(13);
  const [openDialog, setOpenDialog] = useState();
  const [openPopover, setOpenPopover] = useState();
  const [max, setMax] = useState(15000)
  const [submitLoading, setSubmitLoading] = useState(false)
  const [selectedNft, setSelectedNft] = useState("")
  const [level, setLevel] = useState(0)
  const [details, setDetails] = useState({
    number: null,
    xp: 0
  });

  async function handleSubmit(){
    const token = localStorage.getItem("token");
    const expiry = localStorage.getItem("expiry");

    if (token && Date.now() < expiry) {
      setSubmitLoading(true)
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API}/api/v1/distributeXp`,
          {
            method: "POST",
  
            body: JSON.stringify({
              number: Number(details.number),
              xp: Number(details.xp),
            }),
  
            headers: {
              Authorization: `Bearer ${token}`,
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        );
  
        const data = await response.text();
  
        if (data.length) {
          await getData(token)
          await getNft(wallets)
          setSubmitLoading(false);
          setDetails({...details, xp: 0})
        }
      } catch (error) {
        console.log(error);
        setSubmitLoading(false);
      }


    }

  }


  useEffect(() => {
    const timer = setTimeout(() => setProgress(40), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // This code will run whenever nfts changes.
    const set = nfts.filter((item) => item.number === details.number);
    if (set.length > 0) {
      setSelectedNft(set[0]);
    }
  }, [nfts, details.number]);


  useEffect(() => {

    if ((Number(details.xp) + Number(selectedNft.xp)) >= 300 && (Number(details.xp) + Number(selectedNft.xp)) < 800) {
      setLevel(1);
    }else if((Number(details.xp) + Number(selectedNft.xp)) >= 800 && (Number(details.xp) + Number(selectedNft.xp)) < 1600){
      setLevel(2);
    }else if((Number(details.xp) + Number(selectedNft.xp)) >= 1600 && (Number(details.xp) + Number(selectedNft.xp)) < 2700){
      setLevel(3);
    }else if((Number(details.xp) + Number(selectedNft.xp)) >= 2700 && (Number(details.xp) + Number(selectedNft.xp)) < 4200){
      setLevel(4);
    }else if((Number(details.xp) + Number(selectedNft.xp)) >= 4200 && (Number(details.xp) + Number(selectedNft.xp)) < 6300){
      setLevel(5);
    }else if((Number(details.xp) + Number(selectedNft.xp)) >= 6300 && (Number(details.xp) + Number(selectedNft.xp)) < 9200){
      setLevel(6);
    }else if((Number(details.xp) + Number(selectedNft.xp)) >= 9200 && (Number(details.xp) + Number(selectedNft.xp)) < 13000){
      setLevel(7);
    }else if((Number(details.xp) + Number(selectedNft.xp)) >= 13000 && (Number(details.xp) + Number(selectedNft.xp)) < 17000){
      setLevel(8);
    }else if((Number(details.xp) + Number(selectedNft.xp)) >= 17000 && (Number(details.xp) + Number(selectedNft.xp)) < 23000){
      setLevel(9);
    }else if((Number(details.xp) + Number(selectedNft.xp)) == 23000){
      setLevel(10);
    }else if((Number(details.xp) + Number(selectedNft.xp)) < 300){
      setLevel(0)
    }else{
      setLevel(0)
    }

  

  }, [details, selectedNft, level])

  return (
   
    <Dialog open={openDialog} 
    onOpenChange={() => {
      setOpenDialog(!openDialog)
    }} >
      <DialogTrigger 
      onClick={() => {
        setSelectedNft(nfts[0])
      }}
      
      className={cn(buttonVariants(), "2xl:text-base text-sm")}>
        Level Up
      </DialogTrigger>

      <DialogContent className=" p-5 pr-2 lg:py-7 lg:px-10 bg-white/80 rounded-xl lg:rounded-2xl">
        <ScrollArea className="w-full tallXS:h-[calc(100vh-100px)] lg:h-fit">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
            <div className="hidden lg:flex w-full h-full flex-col gap-3 text-base text-muted-foreground/50 font-semibold">
              <NftDistribute 
              orientation={"horizontal"} 
              nfts={nfts}
              setSelectedNft={setSelectedNft}
              selectedNft={selectedNft}
              submitLoading={submitLoading}
              />
            
            </div>
            <div className="flex lg:hidden w-full h-full flex-col gap-3 text-base text-muted-foreground/50 font-semibold">
              <NftDistribute 
              orientation={"vertical"} 
              nfts={nfts}
              setSelectedNft={setSelectedNft}
              selectedNft={selectedNft}
              submitLoading={submitLoading}
              />
            
            </div>
            <div className="flex flex-col gap-3 mt-2 lg:mt-10">
              <div className="flex gap-2.5 items-center">
                <p className="text-xl uppercase">{profileDetails.nickname}</p>
                <div className="text-sm lg:text-base">
                  <span
                    className={cn(
                      "bg-primary text-white font-semibold px-2 py-1 rounded-l-md"
                    )}
                  >
                    Lv.{selectedNft.level}
                  </span>
                  <span className="bg-primary/70 text-white font-bold px-2 py-1 rounded-r-md">
                    +{
                    
                    (Number(level) - Number(selectedNft.level))}
                  </span>
                </div>
              </div>

              <p className="font-medium">Clear Collectibles #{selectedNft.number}</p>

              <Separator className="w-full bg-white" />

              <div className="lg:mt-5 flex flex-col gap-3.5">
                <p className="text-xl">EXP</p>
                <Progress value={selectedNft.xp} max={max} className="w-full" />
                <div className="flex justify-between w-full">
                  <span className="text-sm font-normal text-muted-foreground/50 flex">
                    Current XP:
                    <p className="font-extrabold text-foreground">{selectedNft.xp}</p>
                  </span>
                  <span className="text-sm font-normal text-muted-foreground/50 flex">
                    XP:<p className="font-extrabold text-foreground"> {max}</p>
                  </span>
                </div>
              </div>

              <div className="lg:mt-6 flex flex-col gap-5">
                <span className="text-sm font-normal text-muted-foreground/50 flex">
                  Available Bubbles:
                  <p className="font-extrabold text-foreground"> {xp} </p>
                </span>
                <div className="flex gap-3 lg:flex-col lg:gap-5">
                  <Input
                  type="number"
                  disabled={submitLoading}
                    className={cn(
                      buttonVariants({
                        variant: "secondary",
                        size: "sm",
                        className: "justify-start lg:text-xl",
                      })
                    )}
                    min={0}
                    max={xp}
                    value={details.xp}
                    onChange={(e) => {
                      if ((e.target.value == '' || e.target.value == 0) || (Number(e.target.value) <= Number(xp) && Number(e.target.value) > 0)) {
                        setDetails({ number: selectedNft.number, xp: e.target.value });
                      }
                    }}
                    
                  />

                  
                </div>
              </div>

              <Popover
                open={openPopover}
                onOpenChange={() => {
                  setOpenPopover(!openPopover);
                }}
              >
                
                  <PopoverTrigger 
                  disabled={Number(details.xp) <= 0 || submitLoading}
                  className={cn(
                    buttonVariants(),
                    "text-base lg:text-xl lg:w-fit lg:ml-auto"
                  )}>
                   {submitLoading ?
                   <svg
                   aria-hidden="true"
                   class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
                 </svg>:
                   "Level Up"
                   
                   }
                  </PopoverTrigger>
                 
             
                <PopoverContent className="z-50 border shadow-lg px-8 pt-6 pb-7 flex flex-col gap-4 items-start lg:w-[400px]">
                  <div 
               
                  className="flex w-full h-full justify-between items-center text-base font-bold whitespace-nowrap">
                    <span>Confirm purchase?</span>
                    <Icons.skullLogo className="w-8 h-8 fill-primary" />
                  </div>
                  <Separator className="w-full bg-muted" />
                  <div className="w-full flex items-center justify-end gap-5">
                    <Button
                      variant="outline"
                      className="min-w-fit gap-3.5 py-4 text-xs lg:text-base capitalize lg:uppercase"
                    >
                      No
                    </Button>
                    <Button
                      className="min-w-fit gap-3.5 py-4 text-xs lg:text-base text-white capitalize lg:uppercase"
                      onClick={() => {
                        setOpenPopover(false);
                        handleSubmit()
                      }}
                    >
                      Yes
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  
  );
}

export default Distribute;
