"use client";
import AllNFT from "@/components/dashboard-pages/all-nft";
import Emblems from "@/components/dashboard-pages/emblems";
import ProfileStat from "@/components/dashboard-pages/profile-stat";
import TaskCompleted from "@/components/dashboard-pages/task-comlpeted";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/ui/icons";
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const data = [
  {
    icon: Icons.profile,
    label: "Profile",
    children: <ProfileStat />,
    value: "profile",
  },
  {
    icon: Icons.tasks,
    label: "Tasks",
    children: <TaskCompleted />,
    value: "tasks",
  },
  {
    icon: Icons.allNFT,
    label: "All NFTs",
    children: <AllNFT />,
    value: "nfts",
  },
  {
    icon: Icons.emblems,
    label: "Emblems",
    children: <Emblems />,
    value: "emblems",
  },
];

export default function Home() {
  const [selectedDesktop, setSelectedDesktop] = useState("");
  const [selected, setSelected] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current = document.body;
    // if window width is less than 1024px then set selected to tasks
    if (window.innerWidth >= 1024) {
      setSelectedDesktop("tasks");
    } else {
      setSelected("profile");
    }
  }, []);
  return (
    <main className="flex flex-col lg:flex-row lg:items-end justify-between p-5 mb-20 lg:pb-36 lg:px-10 relative h-screen w-full">
      {/* DESKTOP NFT IMAGE  */}
      <Image
        src="/images/nft-1.png"
        alt="Dashboard Nft Image"
        width={341}
        height={374}
        className="hidden lg:block absolute left-[80vw] 3xl:left-[85vw] -translate-x-[50vw] -mb-10 z-10 w-[40vw] 3xl:w-[750px]"
      />
      {/* BROOM PROFILE SECTION */}
      <div className="absolute right-10 bottom-60">
        <div className="flex flex-col gap-2 tall2XL:gap-3.5 relative">
          <div className="absolute whitespace-nowrap right-[36vw] tall2XL:right-0 tall2XL:relative flex items-center tall2XL:items-start justify-between tall2XL:justify-start tall2XL:flex-col gap-2">
            <div className="flex gap-2.5 items-center">
              <p className="text-2xl tall2XL:text-6xl">BROOM</p>
              <span className="font-semibold bg-primary text-white tall2XL:text-3xl px-2 tall2XL:px-3 rounded-xl">
                Lv.5
              </span>
            </div>
            <p className="font-bold tall2XL:text-3xl">
              Clear Collectibles #852
            </p>
          </div>
          <Separator className="hidden 3xl:block w-full bg-white my-3" />

          <div className="flex items-center justify-between bg-white/25 p-5 rounded-2xl border">
            <div className="flex flex-col gap-2">
              <p className="text-xl 3xl:">Bubbles: 8,952</p>
              <p className="font-bold flex items-center gap-1.5">
                <span className="font-normal">Multiplier:</span> 60%
                <span>
                  <Icons.info className="fill-white/50 w-5 h-5" />
                </span>
              </p>
            </div>
            <Button className="text-base w-fit">Distribute Bubbles</Button>
          </div>
        </div>
        {/* PROFILE / STAT COMPONENT */}
        <div className="flex flex-col gap-2 bg-white/25 border mt-5 rounded-xl p-5">
          <ProfileStat />
        </div>
      </div>
      {/* DESKTOP VIEW STARTS HERE */}
      <div className="hidden lg:bg-white/40 lg:rounded-2xl relative w-full h-full lg:h-fit lg:flex flex-col lg:flex-row justify-between ">
        <div className="rounded-xl flex gap-3 py-5 px-5 lg:p-3 h-full w-full">
          {/* TASKS / ALL-NFTs / EMBLEMS COMPONENTS SECTION */}
          {data
            .filter((item) => item.value !== "profile")
            .map((item, index) => (
              <Popover
                key={index}
                defaultOpen={selectedDesktop === item.value}
                open={selectedDesktop === item.value}
                container={containerRef.current}
                onOpenChange={(open) => {
                  if (open) {
                    setSelectedDesktop(item.value);
                  } else {
                    setSelectedDesktop("");
                  }
                }}
              >
                <PopoverTrigger
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "sm" }),
                    "w-fit h-fit cursor-pointer bg-white group lg:p-2.5 data-[state=open]:bg-primary",
                    { "bg-primary": selectedDesktop === item.value }
                  )}
                  onClick={() => setSelectedDesktop(item.value)}
                >
                  {
                    <div className="flex items-center gap-2 group text-white">
                      <item.icon
                        className={cn("fill-gray-300", {
                          "fill-white": selectedDesktop === item.value,
                        })}
                      />
                      <AnimatePresence mode="wait">
                        {selectedDesktop === item.value && (
                          <motion.p
                            initial={{
                              width: 0,
                              opacity: 0,
                            }}
                            animate={{
                              animation: "ease-in-out",
                              width: "auto",
                              opacity: 1,
                              transition: {
                                width: {
                                  duration: 0.5,
                                },
                                opacity: {
                                  duration: 0.25,
                                  delay: 0.3,
                                },
                              },
                            }}
                            exit={{
                              width: 0,
                              opacity: 0,
                              transition: {
                                width: {
                                  duration: 0.5,
                                },
                                opacity: {
                                  duration: 0.1,
                                },
                              },
                            }}
                            key="test"
                          >
                            {item.label}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  }
                </PopoverTrigger>
                <PopoverContent
                  className="lg:p-8 bg-transparent lg:bg-white/25 relative border"
                  align="center"
                  collisionPadding={40}
                  sideOffset={20}
                >
                  {item.children}{" "}
                  <PopoverArrow className="w-6 h-3 fill-transparent lg:fill-[#EBF4F7] -translate-y-0.5 z-50" />
                </PopoverContent>
              </Popover>
            ))}
        </div>
        <div className="z-50 lg:z-0 fixed left-0 right-0 bottom-0 lg:relative w-full lg:w-fit justify-end lg:justify-normal flex gap-3 py-2.5 px-5 lg:p-3 bg-white/50 lg:bg-transparent">
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                buttonVariants({
                  variant: "secondary",
                  size: "sm",
                  className:
                    "lg:bg-primary lg:hover:bg-primary/70 group lg:p-2.5",
                })
              )}
            >
              <Icons.hexagon className="lg:fill-current lg:text-white" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              sideOffset={20}
              className="w-80 bg-white/50 flex flex-col gap-3 p-2"
            >
              <DropdownMenuItem
                className={cn(
                  buttonVariants(
                    {
                      variant: "ghost",
                      size: "sm",
                      className: "text-primary cursor-pointer",
                    },
                    "text-primary"
                  )
                )}
              >
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "sm",
                    className: "text-primary cursor-pointer",
                  })
                )}
              >
                Avatar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            size="sm"
            className="gap-3 lg:py-2.5 lg:px-2.5 text-sm lg:text-xl"
          >
            Share Profile
            <Icons.profile className="fill-white w-8 h-8" />
          </Button>
        </div>
      </div>
      {/* DESKTOP VIEW ENDS HERE */}

      {/* MOBILE VIEW STARTS HERE */}
      <div className="lg:hidden pb-28">
        <Image
          src="/images/nft-1.png"
          alt="Dashboard Nft Image"
          width={341}
          height={374}
          className="mx-auto w-full -mt-5 ml-2"
        />
        <div className="bg-white/25 border rounded-xl p-5 w-full flex flex-col gap-5">
          <div className="flex gap-3">
            {data.map((item, index) => (
              <Button
                key={index}
                variant="secondary"
                size="sm"
                className={cn({
                  "cursor-pointer bg-white": selected !== item.value,
                  "!bg-primary": selected === item.value,
                })}
                onClick={() => setSelected(item.value)}
              >
                {
                  <item.icon
                    className={cn("fill-gray-300", {
                      "fill-white": selected === item.value,
                    })}
                  />
                }
              </Button>
            ))}
          </div>

          {/* TASKS / ALL-NFTs / EMBLEMS COMPONENTS SECTION */}
          {data.map((item, index) => (
            <div
              key={index}
              className={cn({
                "hidden ": selected !== item.value || selected === "profile",
                "block ": selected === item.value && selected !== "profile",
              })}
            >
              {item.children}
            </div>
          ))}

          {/* BROOM PROFILE SECTION */}
          {selected === "profile" && (
            <div className="flex flex-col gap-2">
              <div className="flex gap-2.5 items-center">
                <p className="text-2xl">BROOM</p>
                <span className="font-semibold bg-primary text-white px-2 rounded-xl">
                  Lv.5
                </span>
              </div>
              <p className="font-medium">Clear Collectibles #852</p>
              <Separator className="w-full bg-white my-3" />
              <p className="text-xl">Bubbles: 8,952</p>
              <p className="font-bold flex items-center gap-1.5">
                <span className="font-normal">Multiplier:</span> 60%
                <span>
                  <Icons.info className="fill-white/50 w-5 h-5" />
                </span>
              </p>
              <Button className="text-base w-fit mt-3">
                Distribute Bubbles
              </Button>
            </div>
          )}
        </div>

        {/* PROFILE / STAT COMPONENT */}
        {selected === "profile" && (
          <div className="flex flex-col gap-2 bg-white/25 border mt-5 rounded-xl p-5">
            <ProfileStat />
          </div>
        )}

        {/* MOBILE BOTTOM STICKY SHOP NAV */}
        <div className="z-50 fixed left-0 right-0 bottom-0 w-full justify-end flex gap-3 py-2.5 px-5 bg-[#E7F1F5]">
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                buttonVariants({
                  variant: "secondary",
                  size: "sm",
                })
              )}
            >
              <Icons.hexagon className="fill-primary" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              sideOffset={20}
              className="w-80 bg-white/50 flex flex-col gap-3 p-2"
            >
              <DropdownMenuItem
                className={cn(
                  buttonVariants(
                    {
                      variant: "ghost",
                      size: "sm",
                      className: "text-primary cursor-pointer",
                    },
                    "text-primary"
                  )
                )}
              >
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "sm",
                    className: "text-primary cursor-pointer",
                  })
                )}
              >
                Avatar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" className="gap-3 text-sm px-4">
            Share Profile
            <Icons.profile className="fill-white w-7 h-7" />
          </Button>
        </div>
      </div>
      {/* MOBILE VIEW ENDS HERE */}
    </main>
  );
}
