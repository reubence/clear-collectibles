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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import RotatingLight from "@/components/Lottie/RotatingLight";
import { ScrollArea } from "@/components/ui/scroll-area";
import { animate } from "framer-motion";
import Link from "next/link";

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
  {
    id: "common",
    label: "Common",
    data: [
      {
        id: "common-1",
        bubbles: 792,
        src: "/images/chest/chest-bronze.png",
      },
      {
        id: "common-2",
        bubbles: 952,
        src: "/images/chest/chest-bronze.png",
      },
    ],
  },

  {
    id: "rare",
    label: "Rare",
    data: [
      {
        id: "rare-1",
        bubbles: 792,
        src: "/images/chest/chest-silver.png",
      },
      {
        id: "rare-2",
        bubbles: 795,
        src: "/images/chest/chest-silver.png",
      },
    ],
  },
  {
    id: "epic",
    label: "Epic",
    data: [
      {
        id: "epic-1",
        bubbles: 552,
        src: "/images/chest/chest-gold.png",
      },
      {
        id: "epic-2",
        bubbles: 852,
        src: "/images/chest/chest-gold.png",
      },
    ],
  },
];

export default function Chest() {
  const [selectedChest, setSelectedChest] = useState(null);
  const [forgeNFT, setForgeNFT] = useState(null);
  const [float, setFloat] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [isEditing, setIsEditing] = useState(true);
  const [nftData, setNftData] = useState({
    // emote: "/images/forge/forge-emote.png",
    // soul: "/images/forge/forge-soul.png",
    // body: "/images/forge/forge-none.png",
    // scarf: "/images/forge/forge-none.png",
  });

  useEffect(() => {
    if (forgeNFT === "forging") {
      setTimeout(() => {
        setForgeNFT("forged");
        setTimeout(() => {
          setFloat("reveal-light");
          setTimeout(() => {
            setIsEditing(false);
            setFloat("float");
            setForgeNFT("treasure");
          }, 500);
        }, 500);
      }, 500);
    }
  }, [forgeNFT]);

  return (
    <main
      className={cn(
        "h-screen w-screen overflow-clip bg-gradient-to-b relative p-7 lg:p-14 xl:p-0 z-0",
        {
          "from-[#C9CCD7] to-[#6D7496]":
            nftData.id?.split("-")[0] === "common" || true,
          "from-[#4CE0BC] to-[#4C8280]": nftData.id?.split("-")[0] === "rare",
          "from-[#F9C406] to-[#A96B0E]": nftData.id?.split("-")[0] === "epic",
        }
      )}
    >
      {/* DESKTOP NAVIGATION */}
      <div className="hidden xl:block">
        <NavBar avatar={avatar} />
      </div>

      {/* SELECT NFT ITEMS */}
      <div
        className={cn(
          "p-3 pt-8 xl:p-6 xl:m-14 w-fit h-full xl:h-[77vh] rounded-2xl xl:bg-black/30 xl:border-white/20 xl:border-4 z-50",
          {
            "hidden animate-fadeout": forgeNFT !== null,
          }
        )}
      >
        <SelectForge
          setIsEditing={setIsEditing}
          data={nftData}
          setNftData={setNftData}
        />
      </div>

      {/* BACKGROUND HALO ANIMATION */}
      <div className="pointer-events-none fixed top-0 left-0 w-full h-full overflow-hidden -z-50">
        <PVPBackgroundLottie />
      </div>

      {/* ROTATING LIGHT ANIMATION */}
      {forgeNFT === "treasure" && (
        <motion.div
          animate={{ opacity: 1 }}
          style={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full overflow-hidden -z-50"
        >
          <RotatingLight />
        </motion.div>
      )}

      {/* REVEAL LIGHT */}
      {float === "reveal-light" && (
        <Image
          unoptimised
          src="/background/revealLight.gif"
          alt="Dashboard Nft Image"
          width={1000}
          height={1000}
          className="absolute top-0 left-0 w-full h-full z-[99] animate-fadein duration-200"
        />
      )}

      {/* CHEST IMAGE  */}
      <div className="absolute z-50 w-[25vw] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <motion.div
          className={cn("", { "animate-float": float === "float" })}
          animate={{
            scale: forgeNFT === "forging" ? 0.5 : 1,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          {/* NOT EDITING */}
          {!isEditing && forgeNFT !== "treasure" && (
            <Image
              unoptimised
              src={nftData.src || "/images/chest/chest-bronze.png"}
              alt="Dashboard Nft Image"
              width={2000}
              height={2000}
              className="scale-150"
            />
          )}

          {/* IS EDITING OUTLINE */}
          {isEditing && (
            <Image
              unoptimised
              src={"/images/chest/chest-none.png"}
              alt="Dashboard Nft Image"
              width={1000}
              height={1000}
              className=""
            />
          )}

          {/* TREASURE OPENED */}
          {!isEditing && forgeNFT === "treasure" && (
            <motion.div
              animate={{
                scale: 1.5,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <Image
                unoptimised
                src={"/images/chest/treasure.png"}
                alt="Dashboard Nft Image"
                width={1000}
                height={1000}
                className={cn("")}
              />
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* GAME MODE BUTTONS */}
      <div className="absolute flex gap-3 right-8 bottom-8 xl:right-12 xl:bottom-12 ">
        <div className="absolute flex flex-col gap-1.5 xl:gap-2.5 items-end bottom-28 md:bottom-28 lg:bottom-36 xl:bottom-60 right-0">
          <div className="bg-black/30 rounded-lg xl:rounded-2xl py-2.5 px-4 font-bold text-xs xl:text-2xl text-white whitespace-nowrap">
            Total Bubbles 🫧: 21321
          </div>
        </div>

        {/* DESKTOP PLAY BUTTON */}
        <div className="flex w-48 xl:w-96 relative">
          {/* bubbles required green */}
          <div className="w-full whitespace-nowrap absolute -top-10 xl:-top-11 right-[1.5vw] xl:right-0 text-xs xl:text-xl font-bold text-white xl:bg-green-500 pt-2 pb-5 px-3 rounded-t-2xl">
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
              onClick={() => setForgeNFT("forging")}
              disabled={Object.keys(nftData).length < 1}
            >
              Open{" "}
            </Button>
            <Button
              disabled={Object.keys(nftData).length < 1}
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

      {/* MOBILE NAVIGATION */}
      <div
        className={cn(
          "hidden group absolute w-fit gap-4 items-center left-8 top-8 lg:left-14 lg:top-40 transition-all duration-150 ease-in cursor-pointer",
          {
            flex: !isEditing && forgeNFT === "treasure",
          }
        )}
      >
        <Button
          variant="gameSecondary"
          href={"/pvp"}
          className={cn(
            "!py-2.5 !px-3 2xl:!py-3 2xl:!px-3.5",
            "active:scale-95"
          )}
          onClick={() => {
            setForgeNFT(null);
            setFloat(null);
            setAvatar(null);
            setIsEditing(true);
            setNftData({});
          }}
        >
          <Icons.arrowLeft className="w-6 h-6 lg:w-8 lg:h-8 fill-white" />
        </Button>
      </div>
    </main>
  );
}

function SelectForge({ setIsEditing, setNftData }) {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  let [activeEmote, setActiveEmote] = useState({
    emote: null,
    soul: null,
    body: null,
    scarf: null,
  });

  return (
    <div className="z-50">
      <div className="hidden xl:block">
        <h2 className="text-white text-xl xl:text-3xl font-bold">
          Treasure chest
        </h2>
        <Separator className="my-3 xl:my-7" />
        <Tabs defaultValue="common" className="relative z-50">
          <TabsList className="w-full flex justify-between gap-4 xl:gap-10 px-1.5 py-2.5 xl:px-4 xl:h-14 2xl:h-20 rounded-lg bg-black/20">
            {tabs.map((tab) => (
              <div className="relative" key={tab.id}>
                <TabsTrigger
                  className={cn(
                    "relative font-bold w-20 2xl:w-32 text-white text-xs 2xl:text-xl p-1.5 px-2.5 xl:p-2.5 leading-none !z-20 data-[state=active]:text-primary",
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
                  {activeTab === tab.id && (
                    <motion.div
                      initial={{ scale: 0 }} // Set initial scale to 0
                      animate={{ scale: 1 }} // Animate scale to 1
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                      className="absolute -right-2 -top-2.5 "
                    >
                      <Icons.claimedIcon className="w-5 h-5" />
                    </motion.div>
                  )}

                  {tab.label}
                </TabsTrigger>
              </div>
            ))}
          </TabsList>
          <div className="pt-7">
            {tabs.map((tab, i) => (
              <TabsContent
                key={i}
                value={tab.id}
                className="grid grid-cols-2 xl:grid-cols-3 gap-7"
              >
                {tab.data.map((item) => (
                  <div
                    key={item.id}
                    className={cn(
                      "bg-black/20 border border-black/30 p-0.5 h-24 w-24 2xl:h-36 2xl:w-36 cursor-pointer",
                      "hover:scale-95 hover:outline-offset-4 hover:outline hover:outline-yellow-500 rounded-3xl transition-all duration-300 ease-in-out",
                      {
                        "outline outline-offset-4 outline-yellow-500":
                          activeEmote[tab.id] === item?.id,
                      }
                    )}
                    onClick={() => {
                      setIsEditing(false);
                      setActiveEmote({
                        ...activeEmote,
                        [activeTab]: item?.id,
                      });
                      setNftData(() => ({
                        id: item.id,
                        src: item.src,
                      }));
                    }}
                  >
                    <div className="flex items-center justify-center h-full">
                      <Image
                        src={item.src}
                        width={1000}
                        height={1000}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>

      {/* MOBILE */}
      <div className="flex flex-col h-full w-full gap-5 xl:hidden">
        <Select className="" onValueChange={(e) => setActiveTab(e)}>
          <SelectTrigger className="w-[180px] rounded-xl border-black/30 bg-black/20 text-white font-semibold ">
            <SelectValue placeholder={activeTab} />
          </SelectTrigger>
          <SelectContent className="rounded-xl text-[#3562CC] font-semibold">
            {tabs.map((tab) => (
              <SelectItem
                className="focus:bg-[#3562CC] focus:text-white rounded-xl"
                key={tab.id}
                value={tab.id}
                onClick={() => {
                  console.log(activeTab);
                }}
              >
                {tab.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* SELECT FROM AVAILABLE NFTs MOBILE */}
        <ScrollArea className="w-full h-[calc(100vh-122px)] lg:h-[calc(100vh-150px)]">
          <div className={cn("2xl:hidden grid grid-cols-2 gap-5 w-full ")}>
            {
              //adding empty divs to make the grid 4x4
              tabs.map((tab, i) =>
                tab.data.map((item, i) => (
                  <div
                    className={cn(
                      "hidden p-0.5 w-20 h-20 rounded-xl border border-black/30 bg-black/20 relative overflow-hidden transition-all duration-150 ease-in cursor-pointer",
                      {
                        "scale-90 outline outline-1 outline-offset-2 outline-yellow-500":
                          activeEmote[tab.id] === item?.id,
                        "pointer-events-none": item?.src == null,
                        step1m: i === 2,
                        block: activeTab === tab.id,
                      }
                    )}
                    key={i}
                    onClick={() => {
                      setIsEditing(false);
                      setActiveEmote({
                        ...activeEmote,
                        [activeTab]: item?.id,
                      });
                      setNftData(() => ({
                        id: item.id,
                        src: item.src,
                      }));
                    }}
                  >
                    {item?.src && (
                      <Image
                        unoptimised
                        src={item?.src || "/images/nft-pvp.png"}
                        alt="Dashboard Nft Image"
                        width={70}
                        height={70}
                        key={i}
                        className="w-full h-full rounded-lg object-contain"
                      />
                    )}
                  </div>
                ))
              )
            }
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
