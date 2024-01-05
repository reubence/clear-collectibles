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
    id: "emote",
    label: "Emote",
    data: [
      {
        id: "emote1",
        src: "/images/forge/forge-emote.png",
      },
      {
        id: "emote2",
        src: "/images/forge/forge-emote.png",
      },
    ],
  },

  {
    id: "soul",
    label: "Soul",
    data: [
      {
        id: "soul1",
        src: "/images/forge/forge-soul.png",
      },
      {
        id: "soul2",
        src: "/images/forge/forge-soul.png",
      },
    ],
  },
  {
    id: "body",
    label: "Body",
    data: [
      {
        id: "body1",
        src: "/images/forge/forge-emote.png",
      },
      {
        id: "body2",
        src: "/images/forge/forge-emote.png",
      },
    ],
  },
  {
    id: "scarf",
    label: "Scarf",
    data: [
      {
        id: "scarf1",
        src: "/images/forge/forge-scarf.png",
      },
      {
        id: "scarf2",
        src: "/images/forge/forge-scarf.png",
      },
    ],
  },
];

export default function Forge() {
  const [activeNFT, setActiveNFT] = useState(selectData[2]);
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
          }, 500);
        }, 500);
      }, 500);
    }
  }, [forgeNFT]);

  return (
    <main
      className={
        "h-screen w-screen overflow-clip bg-gradient-to-b relative p-7 lg:p-14 xl:p-0 from-[#5E58FF] to-[#00C6FF] z-0"
      }
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
        <SelectForge data={nftData} setNftData={setNftData} />
      </div>

      {/* BACKGROUND HALO ANIMATION */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-50">
        <PVPBackgroundLottie />
      </div>

      {/* ROTATING LIGHT ANIMATION */}
      {forgeNFT === "forged" && (
        <motion.div
          animate={{ opacity: 1 }}
          style={{ opacity: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full h-full overflow-hidden -z-50"
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

      {/* Forge IMAGE  */}
      <div className="absolute left-[38vw] top-[15vh] xl:top-[20vh] xl:left-1/2 xl:-translate-x-1/2 overflow-visible">
        <motion.div
          className={cn({ "animate-float": float === "float" })}
          animate={{
            scale: forgeNFT === "forging" ? 0.5 : 1,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          {/* BODY ITEM - FORGING COMPLETE */}
          {forgeNFT === "forged" && !isEditing && (
            <div className="fadeIn">
              <Image
                unoptimised
                src={"/images/forge/forge-none.png"}
                alt="Dashboard Nft Image"
                width={1000}
                height={1000}
                className="animate-fadein duration-200 ease-out invisible -translate-x-[1vw] translate-y-[0.5vw] z-50 w-[25.5vw]"
              />
              <Image
                unoptimised
                src={"/images/forge/forge-none.png"}
                alt="Dashboard Nft Image"
                width={1000}
                height={1000}
                className="animate-fadein duration-200 ease-out absolute left-0 top-0 -translate-x-[1vw] translate-y-[0.5vw] z-50 w-[25.5vw]"
              />
            </div>
          )}

          {/* IS EDITING OUTLINE */}
          {isEditing && (
            <Image
              unoptimised
              src={"/images/forge/forge-dotted.png"}
              alt="Dashboard Nft Image"
              width={1000}
              height={1000}
              className={cn("w-[25vw]", {
                // "animate-pulse": isEditing,
              })}
            />
          )}
          {/* EMOTE ITEM */}
          {nftData.emote && (
            <Image
              unoptimised
              src={"/images/forge/forge-emote.png"}
              alt="Dashboard Nft Image"
              width={1000}
              height={1000}
              className="animate-fadein absolute z-40 left-[7vw] top-[4vw] w-[12vw]"
            />
          )}
          {/* SCARF ITEM */}
          {nftData.scarf && (
            <Image
              unoptimised
              src={"/images/forge/forge-scarf.png"}
              alt="Dashboard Nft Image"
              width={1000}
              height={1000}
              className="animate-fadein absolute z-50 left-[7.3vw] top-[14.2vw] w-[10.8vw]"
            />
          )}
          {/* SOUL ITEM */}
          {nftData.soul && (
            <Image
              unoptimised
              src={"/images/forge/forge-soul.png"}
              alt="Dashboard Nft Image"
              width={1000}
              height={1000}
              className="animate-fadein absolute z-30 left-[0.5vw] top-[1vw] w-[22.5vw]"
            />
          )}
        </motion.div>
      </div>
      {/* GAME MODE BUTTONS */}
      <div className="absolute flex gap-3 right-8 bottom-8 xl:right-12 xl:bottom-12 ">
        <div className="absolute flex flex-col gap-1.5 xl:gap-2.5 items-end bottom-28 md:bottom-28 lg:bottom-36 xl:bottom-60 right-0">
          <div className="bg-black/30 rounded-lg xl:rounded-2xl py-2.5 px-4 font-bold text-xs xl:text-2xl text-white whitespace-nowrap">
            Total Bubbles 🫧: {activeNFT.bubbles.toLocaleString()}
          </div>
        </div>

        {/* DESKTOP PLAY BUTTON */}
        <div className="flex w-48 xl:w-96 relative">
          {/* bubbles required green */}
          <div className="w-full whitespace-nowrap absolute -top-10 xl:-top-11 right-[1.5vw] xl:right-0 text-xs xl:text-xl font-bold text-white xl:bg-green-500 pt-2 pb-6 px-3 rounded-t-2xl">
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

function SelectForge({ data, setNftData }) {
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
        <h2 className="text-white text-xl xl:text-3xl font-bold">All Buddy</h2>
        <Separator className="my-3 xl:my-7" />
        <Tabs defaultValue="emote" className="relative z-50">
          <TabsList className="gap-4 xl:gap-10 px-1.5 py-2.5 xl:px-4 xl:h-14 2xl:h-20  rounded-lg bg-black/20">
            {tabs.map((tab) => (
              <div className="relative" key={tab.id}>
                <TabsTrigger
                  className={cn(
                    "relative font-bold text-white text-xs 2xl:text-xl p-1.5 px-2.5 xl:p-2.5 leading-none !z-20 data-[state=active]:text-primary",
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
                      "bg-black/20 border border-black/30 px-2.5 py-5 h-24 w-24 3xl:h-36 3xl:w-36 cursor-pointer",
                      "hover:scale-95 hover:outline-offset-4 hover:outline hover:outline-yellow-500 rounded-3xl transition-all duration-300 ease-in-out",
                      {
                        "outline outline-offset-4 outline-yellow-500":
                          activeEmote[item.id] === item?.id,
                      }
                    )}
                    onClick={() => {
                      setActiveEmote({
                        ...activeEmote,
                        [activeTab]: item?.id,
                      });
                      setNftData((prev) => ({
                        ...prev,
                        [activeTab]: item.src,
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
                      "hidden p-2.5 w-20 h-20 rounded-xl border border-black/30 bg-black/20 relative overflow-hidden transition-all duration-150 ease-in cursor-pointer",
                      {
                        "scale-90 outline outline-1 outline-offset-2 outline-yellow-500":
                          activeEmote[item.id] === item?.id,
                        "pointer-events-none": item?.src == null,
                        step1m: i === 2,
                        block: activeTab === tab.id,
                      }
                    )}
                    key={i}
                    onClick={() => {
                      setActiveEmote({
                        ...activeEmote,
                        [activeTab]: item?.id,
                      });
                      setNftData((prev) => ({
                        ...prev,
                        [activeTab]: item.src,
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
