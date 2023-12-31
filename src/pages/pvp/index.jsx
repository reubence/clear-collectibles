import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/pvp-page/game-mode-select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TourProvider, useTour, withTour } from "@reactour/tour";
import TourButton from "@/components/ui/tour-button";
import PVPBackgroundLottie from "@/components/Lottie/PVPBackgroundLottie";
import { Separator } from "@/components/ui/separator";
import NavBar from "@/components/layout/navbar";
import Link from "next/link";
import RewardsPointsButton from "@/components/rewards-page/rewards-badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SelectNFT from "@/components/pvp-page/select-nft";
import { ScrollArea } from "@/components/ui/scroll-area";

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

export default function PVP() {
  const [activeNFT, setActiveNFT] = useState(selectData[2]);
  const [gameMode, setGameMode] = useState("PVP");
  const [rarity, setRarity] = useState("Mythic");
  const [rewardPointsNeeded, setRewardPointsNeeded] = useState(300);
  const [rewardProgress, setRewardProgress] = useState(346);
  const [claimable, setClaimable] = useState(
    rewardPointsNeeded <= rewardProgress
  );
  const [rewardsLevel, setRewardsLevel] = useState(6);

  const [avatar, setAvatar] = useState(null);
  const { setIsOpen, isOpen } = useTour();

  useEffect(() => {
    setIsOpen(true);
  }, []);
  return (
    <main
      className={
        "h-screen w-screen overflow-clip bg-gradient-to-b relative from-[#7E2EF7] to-[#9C93FF]"
      }
    >
      {/* DESKTOP NAVIGATION */}
      <div className="hidden 2xl:block">
        <NavBar avatar={avatar} />
      </div>

      <SelectNFT
        data={selectData}
        activeNFT={activeNFT}
        setActiveNFT={setActiveNFT}
      />

      {/* MOBILE NAVIGATION */}
      <div
        className={cn(
          "group absolute w-fit flex gap-4 2xl:hidden items-center right-8 top-8 transition-all duration-150 ease-in cursor-pointer"
        )}
      >
        <Link
          href={"/dashboard"}
          className={cn(
            buttonVariants({ variant: "gameSecondary" }),
            "!py-2 !px-5 ",
            "active:scale-95"
          )}
        >
          Home
        </Link>
        <Icons.skullLogo className="w-12 h-12 fill-white" />
      </div>
      {/* BACKGROUND VIDEO ANIMATION */}
      <PVPBackgroundLottie />

      {/* NFT IMAGE  */}
      <Image
        unoptimised
        src={activeNFT?.src}
        alt="Dashboard Nft Image"
        width={1000}
        height={1000}
        className="step3 step3m absolute left-1/2 -translate-x-1/2 bottom-0 xl:-mb-10 z-40 w-[352px] h-[352px] lg:w-[600px] lg:h-[600px]
                  xl:w-[calc(100vw-750px)] xl:h-[calc(100vw-750px)] 2xl:bottom-[40px]
                  2xl:w-[calc(100vw-700px)] 2xl:max-w-[800px] 2xl:max-h-[800px]
                  3xl:h-[calc(100vw-700px)] 3xl:max-w-[850px] 3xl:max-h-[850px] 
                  "
      />

      {/* REWARD BUTTON */}
      <RewardsPointsButton
        rewardPointsNeeded={rewardPointsNeeded}
        rewardProgress={rewardProgress}
        rewardsLevel={rewardsLevel}
        claimable={claimable}
      />

      {/* GAME MODE BUTTONS */}
      <div className="absolute flex gap-3 right-8 bottom-8 2xl:right-12 2xl:bottom-12 ">
        <div className="absolute flex flex-col gap-1.5 2xl:gap-2.5 items-end bottom-20 md:bottom-28 lg:bottom-36 2xl:bottom-60 right-0">
          <div className="flex gap-4 items-baseline font-bold text-3xl 2xl:text-6xl text-white">
            <span className="text-base 2xl:text-3xl font-normal">
              LV.{activeNFT.level}
            </span>
            <Separator className="h-4 2xl:h-6 rounded-full w-0.5 bg-white/80" />
            #{activeNFT.id}
          </div>
          <div className="bg-black/30 rounded-lg 2xl:rounded-2xl py-2.5 px-4 font-bold text-xs 2xl:text-2xl text-white">
            Total Bubbles 🫧: {activeNFT.bubbles.toLocaleString()}
          </div>
        </div>

        <Button
          variant="game"
          className={cn(
            "text-xs 2xl:text-xl font-semibold font-g8 bg-[#E8ECF9] hover:bg-gray-300 border-[#ABB2CB] text-[#B28AF8] relative z-40 !py-1.5 2xl:!pt-2 2xl:!pb-4 group"
          )}
        >
          {/* grid background mask */}
          <Image
            unoptimised
            src="/background/grid-mask.png"
            alt="Dashboard Nft Image"
            width={234}
            height={234}
            className="absolute right-0 bottom-0 w-full h-full object-cover"
          />
          {/* rarity badge bg */}
          <Image
            unoptimised
            src="/background/mythic-badge.svg"
            alt="Dashboard Nft Image"
            width={220}
            height={70}
            className="w-32 h-10 2xl:w-full 2xl:h-full z-10"
          />
          <span className="absolute top-6 2xl:top-10 transform group-active:translate-y-[1px] 2xl:group-active:translate-y-1 z-20">
            {rarity}
          </span>
        </Button>

        {/* MOBILE PLAY BUTTON WITH POPUP */}
        <Dialog>
          <DialogTrigger
            className={cn(
              "step2m 2xl:hidden py-3",
              buttonVariants({ variant: "game" })
            )}
          >
            {" "}
            <Icons.controller className="w-7 h-7 fill-[#353533]" />
            PLAY!
          </DialogTrigger>
          <DialogContent className="h-fit w-fit p-5 bg-primary border-none !rounded-xl">
            <DialogHeader className="">
              <DialogTitle className="text-white text-sm font-bold text-center">
                Choose a game type{" "}
              </DialogTitle>
            </DialogHeader>
            <Tabs className="-mt-1">
              <TabsList className="grid w-full grid-cols-2 h-full gap-2 rounded-[10px] p-2 text-white bg-black/30">
                <TabsTrigger
                  value="head"
                  className="gap-2 px-6 py-1 2xl:px-10 2xl:py-3 rounded-md data-[state=active]:text-primary data-[state=active]:bg-white"
                  onClick={() => setGameMode("PVP")}
                  data-state={gameMode === "PVP" ? "active" : ""}
                >
                  <Icons.controller className="w-7 h-7 rotate-12 fill-primary" />
                  PVP
                </TabsTrigger>
                <TabsTrigger
                  value="tail"
                  className="gap-2 px-6 py-1 2xl:px-10 2xl:py-3 rounded-md data-[state=active]:text-primary data-[state=active]:bg-white"
                  onClick={() => setGameMode("Coin Flip")}
                  data-state={gameMode === "Coin Flip" ? "active" : ""}
                >
                  <Icons.coin className="w-full h-full mr-2.5" />
                  Coin Flip
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <p className="text-center mt-3 whitespace-nowrap text-base 2xl:text-2xl font-bold text-white">
              {" "}
              Play Need :{" "}
              <span className="px-2.5 py-1.5 bg-black/30 rounded-lg ">
                🫧243
              </span>
            </p>

            <Button variant="game" className="w-fit mx-auto">
              Play
            </Button>
          </DialogContent>
        </Dialog>

        {/* DESKTOP PLAY BUTTON */}
        <div className="hidden 2xl:flex relative">
          {/* bubbles required green */}
          <div className="hidden w-[calc(100%-2px)] 2xl:block whitespace-nowrap absolute -top-11 text-xl font-bold text-white bg-green-500 pt-2 pb-6 px-3 rounded-t-2xl">
            Bubbles required:{" "}
            <span className="px-2.5 py-1.5 bg-black/30 rounded-lg">🫧234</span>
          </div>

          <Button
            variant="game"
            className={cn(
              "step2 text-base 2xl:text-[40px] font-semibold font-g8 text-[#353533] !rounded-r-none z-40"
            )}
          >
            <Icons.controller className="w-16 h-16 fill-[#353533]" />
            {gameMode}
          </Button>
          <Select className="relative z-0">
            <SelectTrigger
              className={cn(
                "!rounded-l-none",
                buttonVariants({ variant: "gameSecondary" })
              )}
            ></SelectTrigger>
            <SelectContent
              className={cn("", {
                "data-[side=top]:!w-[428px]": gameMode === "Coin Flip",
              })}
            >
              <Tabs className="">
                <TabsList className="grid w-full grid-cols-2 h-full gap-2 rounded-[10px] p-2 text-white bg-[#0085CF]">
                  <TabsTrigger
                    value="pvp"
                    className="gap-2 p-1 rounded-[10px] data-[state=active]:text-primary data-[state=active]:bg-white"
                    onClick={() => setGameMode("PVP")}
                    data-state={gameMode === "PVP" ? "active" : ""}
                  >
                    <Icons.controller className="w-7 h-7 rotate-12 fill-primary" />
                    PVP
                  </TabsTrigger>
                  <TabsTrigger
                    value="coin-flip"
                    className="gap-2 p-1 px-2 rounded-[10px] data-[state=active]:text-primary data-[state=active]:bg-white"
                    onClick={() => setGameMode("Coin Flip")}
                    data-state={gameMode === "Coin Flip" ? "active" : ""}
                  >
                    <Icons.coin className="w-full h-full mr-2.5" />
                    Coin Flip
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* REACT-TOURS BUTTONS */}
      <TourButton />
    </main>
  );
}
