import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

export default function PVP() {
  const [activeNFT, setActiveNFT] = useState(data[2]);
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
      <div className="hidden 2xl:block">
        <NavBar avatar={avatar} />
      </div>

      {/* BACKGROUND VIDEO ANIMATION */}
      <PVPBackgroundLottie />

      {/* NFT IMAGE  */}
      <Image
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

      {/* SELECT FROM AVAILABLE NFTs MOBILE */}
      <div className="step1m absolute 2xl:hidden grid grid-cols-2 gap-3 w-fit ml-10 top-1/2 -translate-y-1/2">
        {
          //adding 3 empty divs to make the grid 2x3
          data.concat(Array.from({ length: 3 })).map((nft, i) => (
            <div
              className={cn(
                "w-20 h-20 rounded-xl border border-black/30 bg-black/20 relative overflow-hidden transition-all duration-150 ease-in cursor-pointer",
                {
                  "border-2 bg-clip-content inset-0 p-0.5 bg-transparent border-yellow-400":
                    activeNFT.id === nft?.id,
                  "pointer-events-none": i > 2,
                }
              )}
              key={i}
              onClick={() => setActiveNFT(nft)}
            >
              <Image
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
              "rounded-2xl transition-transform duration-150 ease-in cursor-pointer p-1 bg-gradient-to-r border-yellow-400",
              {
                "border-4 bg-clip-content inset-0 p-0.5 from-white to-white scale-105":
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

      {/* REWARD HEXAGON BADGE */}
      <Link
        href="/reward"
        className={cn(
          "group absolute w-fit flex items-center right-8 top-8 2xl:right-12 2xl:top-[16%] translate-x-6 2xl:translate-x-12 transition-all duration-75 ease-in cursor-pointer",
          "hover:scale-105 active:scale-95"
        )}
      >
        <Image
          src="/icons2/hexagon_rewards.png"
          alt="Dashboard Nft Image"
          width={116}
          height={110}
          className={cn(
            "w-1/2 h-1/2 2xl:w-32 2xl:h-28 z-40 transition-all duration-150 ease-in-out",
            "group-hover:rotate-12 group-hover:scale-110 2xl:group-hover:scale-125"
          )}
        />

        <div
          className={cn(
            "relative bg-black/25 p-1 2xl:p-2 w-full h-fit flex flex-col text-white text-xs 2xl:text-2xl font-bold rounded-lg lg:rounded-2xl -translate-x-6 2xl:-translate-x-12",
            {
              "border 2xl:border-2 border-green-500 bg-clip-content inset-0 p-0.5 2xl:p-[3px] bg-[#56E600] gap-0":
                claimable,
            }
          )}
        >
          {/* LEVEL BADGE */}
          <div className="absolute right-0 -translate-y-1/2 px-2 py-1 2xl:px-4 2xl:py-2.5 rounded-full bg-white text 2xl:text-3xl text-primary">
            {rewardsLevel}
          </div>

          <div className="ml-5 2xl:ml-11 flex place-items-end p-[1px] 2xl:p-1">
            <span className={cn({ "text-yellow-400": !claimable })}>
              {rewardProgress}
            </span>
            /{rewardPointsNeeded}
          </div>

          {/* progress bar */}
          <div className="min-w-[124px] 2xl:min-w-[267px] h-4 2xl:h-8 bg-black/30 relative rounded-md 2xl:rounded-xl">
            <div
              className={cn(
                "absolute top-0 left-0 h-full bg-yellow-400 rounded-md 2xl:rounded-xl overflow-hidden",
                {
                  "!rounded-tr-none bg-green-500 pl-5 2xl:pb-2.5 2xl:pl-12":
                    claimable,
                }
              )}
              style={{
                width: `${
                  rewardPointsNeeded <= rewardProgress
                    ? 100
                    : (rewardProgress / rewardPointsNeeded) * 100
                }%`,
              }}
            >
              {claimable && "Claim Reward"}
              <div
                className={cn(
                  "absolute bottom-0 left-0 w-full h-1/2 bg-yellow-600/50",
                  { hidden: claimable }
                )}
              />
            </div>
          </div>
        </div>
      </Link>

      {/* GAME MODE BUTTONS */}
      <div className="absolute flex gap-3 right-8 bottom-8 2xl:right-12 2xl:bottom-12 ">
        <div className="absolute flex flex-col gap-1.5 2xl:gap-2.5 items-end bottom-36 2xl:bottom-60 right-0 z-40">
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
            src="/background/grid-mask.png"
            alt="Dashboard Nft Image"
            width={234}
            height={234}
            className="absolute right-0 bottom-0 w-full h-full object-cover"
          />
          {/* rarity badge bg */}
          <Image
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
        <Button variant="game" className={cn("step2m 2xl:hidden py-3")}>
          <Icons.controller className="w-7 h-7 fill-[#353533]" />
          PLAY!
        </Button>

        {/* DESKTOP PLAY BUTTON */}
        <div className="hidden 2xl:flex relative">
          <div className="hidden w-full 2xl:block whitespace-nowrap absolute -top-11 text-xl font-bold text-white bg-green-500 pt-2 pb-6 px-3 rounded-t-2xl">
            Bubbles required:{" "}
            <span className="px-3 py-1.5 bg-black/30 rounded-lg">🫧234</span>
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
          <Select className="relative">
            <SelectTrigger
              className={cn(
                "!rounded-l-none",
                buttonVariants({ variant: "gameSecondary" })
              )}
            ></SelectTrigger>
            <SelectContent
              className={cn({
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
