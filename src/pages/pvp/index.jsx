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
import { useState } from "react";
import { TourProvider, useTour, withTour } from "@reactour/tour";
import TourButton from "@/components/ui/tour-button";
import PVPBackgroundLottie from "@/components/Lottie/PVPBackgroundLottie";

export default function PVP() {
  const [editProfile, setEditProfile] = useState(false);
  const [activeNFTIndex, setActiveNFTIndex] = useState(2); // null indicates no active div
  const { setIsOpen, isOpen } = useTour();
  if (window.innerWidth <= 1024) {
    screen.orientation.lock("landscape");
  }
  return (
    <main
      className={
        "h-screen w-screen overflow-clip bg-gradient-to-b relative from-[#7E2EF7] to-[#9C93FF]"
      }
    >
      {/* BACKGROUND VIDEO ANIMATION */}
      <PVPBackgroundLottie />

      {/* DESKTOP NFT IMAGE  */}
      <Image
        src="/images/nft-pvp.png"
        alt="Dashboard Nft Image"
        width={1000}
        height={1000}
        className="step3 hidden lg:block absolute left-0 xl:left-1/2  xl:-translate-x-1/2 xl:-mb-10 z-40 w-[600px] h-[600px] 
                  xl:w-[calc(100vw-750px)] xl:h-[calc(100vw-750px)] lg:bottom-[40px]
                  2xl:w-[calc(100vw-700px)] 2xl:max-w-[800px] 2xl:max-h-[800px]
                  3xl:h-[calc(100vw-700px)] 3xl:max-w-[850px] 3xl:max-h-[850px] 
                  "
      />

      {/* SELECT FROM AVAILABLE NFTs */}
      <div className="tallXL:scale-75 tallXL:2xl:scale-90 tallXL:3xl:scale-100 pl-6 space-y-6 lg:pl-[40px] h-fit absolute w-fit xl:top-1/2  xl:-translate-y-1/2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "rounded-2xl transition-transform duration-150 ease-in cursor-pointer p-1 bg-gradient-to-r border-yellow-400",
              {
                "border-4 bg-clip-content inset-0 from-white to-white scale-105":
                  activeNFTIndex === i,
                "inset-0 from-white to-transparent": activeNFTIndex !== i,
                step1: i == 2,
              }
            )} // Adjust hover and border color as needed
            onClick={() => setActiveNFTIndex(i)}
          >
            <div
              className={cn("w-[460px] h-[150px] rounded-2xl overflow-hidden")}
            >
              <Image
                src={`/images/nft-${
                  i == 3 ? 3 : i == 1 ? 1 : i == 2 ? "pvp" : 1
                }.png`}
                alt="Dashboard Nft Image"
                width={900}
                height={900}
                className={cn("-translate-y-1/4", { step1: i == 2 })}
                // dummy interaction to start tour guide - delete later
                onClick={i == 2 ? () => setIsOpen(true) : null}
              />
            </div>
          </div>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="absolute flex gap-3 right-12 bottom-12 ">
        <Button
          variant="game"
          className={cn(
            "text-xl font-semibold font-g8 bg-[#E8ECF9] hover:bg-gray-300 border-[#ABB2CB] text-[#B28AF8] relative z-40 !pt-2 !pb-4 group"
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
          {/* mythic badge bg */}
          <Image
            src="/background/mythic-badge.svg"
            alt="Dashboard Nft Image"
            width={220}
            height={70}
            className="w-full h-full z-10"
          />
          <span className="absolute top-10 transform group-active:translate-y-1 z-20">
            Mythic
          </span>
        </Button>

        <div className="flex">
          <Button
            variant="game"
            className={cn(
              "step2 text-[40px] font-semibold font-g8 text-[#353533] !rounded-r-none z-40"
            )}
          >
            <Icons.controller className="w-16 h-16 fill-[#353533]" />
            PVP
          </Button>
          <Select className="relative">
            <SelectTrigger
              className={cn(
                "!rounded-l-none",
                buttonVariants(),
                "!bg-[#11A7FC] !w-fit transform !border-b-8 !border-blue-500 ",
                "transform active:translate-y-0.5 active:border-none transition duration-150 ease-in-out z-10"
              )}
            ></SelectTrigger>
            <SelectContent>
              <Tabs className="">
                <TabsList className="grid w-full grid-cols-2 h-full gap-2 rounded-[10px] p-2 text-white bg-[#0085CF]">
                  <TabsTrigger
                    value="pvp"
                    className="gap-2 p-1 rounded-[10px] data-[state=active]:text-primary data-[state=active]:bg-white"
                  >
                    <Icons.controller className="w-7 h-7 rotate-12 fill-primary" />
                    PVP
                  </TabsTrigger>
                  <TabsTrigger
                    value="coin-flip"
                    className="gap-2 p-1 px-2 rounded-[10px] data-[state=active]:text-primary data-[state=active]:bg-white"
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

// components/BackgroundVideo.js
const BackgroundVideo = ({ src }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="min-w-full min-h-full max-w-none"
        src={src}
      >
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
};
