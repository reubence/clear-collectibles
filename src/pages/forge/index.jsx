import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TourProvider, useTour, withTour } from "@reactour/tour";
import PVPBackgroundLottie from "@/components/Lottie/PVPBackgroundLottie";
import { Separator } from "@/components/ui/separator";
import NavBar from "@/components/layout/navbar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const selectData = [
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
    id: 7423,
    bubbles: 7952,
    level: 4,
    src: "/images/nft-1.png",
  },
  {
    id: 74223,
    bubbles: 7952,
    level: 4,
    src: "/images/nft-1.png",
  },

  {
    id: 5432,
    bubbles: 5952,
    level: 3,
    src: "/images/nft-pvp.png",
  },
  {
    id: 6434,
    bubbles: 6952,
    level: 10,
    src: "/images/nft-1.png",
  },
  {
    id: 74312,
    bubbles: 7952,
    level: 4,
    src: "/images/nft-1.png",
  },
];

let tabs = [
  { id: "emote", label: "Emote" },
  { id: "soul", label: "Soul" },
  { id: "body", label: "Body" },
  { id: "scarf", label: "Scarf" },
];

export default function Forge() {
  const [activeNFT, setActiveNFT] = useState(selectData[2]);
  const [rarity, setRarity] = useState("Mythic");
  const [rewardPointsNeeded, setRewardPointsNeeded] = useState(300);
  const [rewardProgress, setRewardProgress] = useState(346);
  const [claimable, setClaimable] = useState(
    rewardPointsNeeded <= rewardProgress
  );
  const [rewardsLevel, setRewardsLevel] = useState(6);

  const [avatar, setAvatar] = useState(null);

  return (
    <main
      className={
        "h-screen w-screen overflow-clip bg-gradient-to-b relative p-7 lg:p-14 xl:p-0 from-[#5E58FF] to-[#00C6FF]"
      }
    >
      {/* DESKTOP NAVIGATION */}
      <div className="hidden xl:block">
        <NavBar avatar={avatar} />
      </div>

      {/* SELECT OPTIONS */}
      <div className="p-3 xl:p-6 xl:m-14 w-fit h-full xl:h-[77vh] rounded-2xl bg-black/30 border-white/20 border-4 z-50">
        <SelectForge />
      </div>

      {/* BACKGROUND VIDEO ANIMATION */}
      <PVPBackgroundLottie />

      {/* Forge IMAGE  */}
      <div className="absolute left-[40vw] top-[20vh] xl:left-1/2 xl:-translate-x-1/2">
        <div className="">
          {/* <Image
            unoptimised
            src={"/images/forge/forge-none.png"}
            alt="Dashboard Nft Image"
            width={1000}
            height={1000}
            className="invisible -translate-x-[1vw] translate-y-[0.5vw] z-50
                     w-[25.5vw]
                    "
          />
          <Image
            unoptimised
            src={"/images/forge/forge-none.png"}
            alt="Dashboard Nft Image"
            width={1000}
            height={1000}
            className="absolute left-0 top-0 -translate-x-[1vw] translate-y-[0.5vw] z-50
                     w-[25.5vw]
                    "
          /> */}
          <Image
            unoptimised
            src={"/images/forge/forge-dotted.png"}
            alt="Dashboard Nft Image"
            width={1000}
            height={1000}
            className="w-[25vw] animate-pulse"
          />
          <Image
            unoptimised
            src={"/images/forge/forge-emote.png"}
            alt="Dashboard Nft Image"
            width={1000}
            height={1000}
            className="absolute z-40
            left-[7vw] top-[4vw] 
            w-[12vw]
                    "
          />
          <Image
            unoptimised
            src={"/images/forge/forge-scarf.png"}
            alt="Dashboard Nft Image"
            width={1000}
            height={1000}
            className="absolute z-50
            left-[7.3vw] top-[14.2vw]
            w-[10.8vw]
                    "
          />
          <Image
            unoptimised
            src={"/images/forge/forge-soul.png"}
            alt="Dashboard Nft Image"
            width={1000}
            height={1000}
            className="absolute z-30
            left-[0.5vw] top-[1vw]
            w-[22.5vw]
                    "
          />
        </div>
      </div>

      {/* GAME MODE BUTTONS */}
      <div className="absolute flex gap-3 right-8 bottom-8 xl:right-12 xl:bottom-12 ">
        <div className="absolute flex flex-col gap-1.5 xl:gap-2.5 items-end bottom-20 md:bottom-28 lg:bottom-36 xl:bottom-60 right-0">
          <div className="bg-black/30 rounded-lg xl:rounded-2xl py-2.5 px-4 font-bold text-xs xl:text-2xl text-white whitespace-nowrap">
            Total Bubbles 🫧: {activeNFT.bubbles.toLocaleString()}
          </div>
        </div>

        {/* DESKTOP PLAY BUTTON */}
        <div className="flex w-48 xl:w-96 relative">
          {/* bubbles required green */}
          <div className="hidden w-full xl:block whitespace-nowrap absolute -top-11 text-xl font-bold text-white bg-green-500 pt-2 pb-6 px-3 rounded-t-2xl">
            Bubbles required:{" "}
            <span className="px-2.5 py-1.5 bg-black/30 rounded-lg">🫧234</span>
          </div>

          <div className="flex w-full">
            <Button
              variant="game"
              className={cn(
                "!w-full !justify-center bg-yellow-400 hover:bg-yellow-500 border-yellow-600 !py-2.5 xl:!py-10",
                "text-base xl:text-[40px] !font-bold font-g8 text-[#353533] justify-between z-40 w-full !rounded-r-none"
              )}
            >
              Forge{" "}
            </Button>
            <Button
              variant="game"
              className={cn(
                "flex w-fit  items-center justify-center !rounded-l-none !py-1.5 xl:!py-5"
              )}
            >
              <Icons.controller className="w-8 h-8 xl:w-16 xl:h-16 fill-[#353533]" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

function SelectForge() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <>
      <h2 className="text-white text-xl xl:text-3xl font-bold">All Buddy</h2>
      <Separator className="my-3 xl:my-7" />

      <Tabs defaultValue="profile" className="relative z-50">
        <ScrollArea className="w-[30vw] 2xl:w-full overflow rounded-lg bg-black/20">
          <ScrollBar className="" orientation="horizontal" />
          <TabsList className=" gap-4 xl:gap-10 mx-1.5 py-2.5 xl:mx-4 xl:my-3.5">
            {tabs.map((tab) => (
              <div className="relative" key={tab.id}>
                <TabsTrigger
                  className={cn(
                    "relative font-bold text-white text-xs xl:text-xl p-1.5 px-2.5 xl:p-2.5 leading-none !z-20 data-[state=active]:text-primary",
                    {
                      "text-primary": activeTab === tab.id,
                    }
                  )}
                  value={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="dot2"
                      transition={{
                        type: "spring",
                        xbounce: 0.2,
                        duration: 0.6,
                      }}
                      className="absolute w-full h-full rounded-md xl:rounded-lg bg-white -z-10"
                      onClick={() => setActiveTab(tab.id)}
                    />
                  )}
                  {tab.label}
                </TabsTrigger>
              </div>
            ))}
          </TabsList>
        </ScrollArea>
        <TabsContent
          value="profile"
          className="flex flex-col gap-5 font-medium text-foreground/50"
        ></TabsContent>
        <TabsContent
          value="stat"
          className="flex flex-col gap-5 font-bold text-foreground/50"
        ></TabsContent>
      </Tabs>
    </>
  );
}
