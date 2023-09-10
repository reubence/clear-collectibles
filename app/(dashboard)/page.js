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
  const [selected, setSelected] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current = document.body;
    setSelected("tasks");
  }, []);
  return (
    <main className="flex flex-col lg:flex-row lg:items-end justify-between p-5 mb-20 lg:pb-36 lg:px-10 relative h-screen w-full">
      {/* Desktop View */}
      <div className="lg:bg-white/50 lg:rounded-2xl relative w-full h-full lg:h-fit hidden lg:flex flex-col lg:flex-row justify-between ">
        <div className="bg-white/50 lg:bg-transparent border lg:border-none rounded-xl flex gap-3 py-5 px-5 lg:p-3 h-full w-full">
          {/* <div className="lg:hidden">
            <Popover>
              <PopoverTrigger asChild>
                {
                  <Icons.profile
                    className={cn(
                      buttonVariants({ variant: "secondary", size: "sm" }),
                      "w-fit h-fit cursor-pointer bg-white group lg:p-2.5 data-[state=open]:bg-primary fill-gray-300 data-[state=open]:fill-white"
                    )}
                  />
                }
              </PopoverTrigger>
              <PopoverContent
                className="lg:p-8 bg-transparent lg:bg-white/50 relative border-none lg:border"
                align="center"
                collisionPadding={40}
              >
                <ProfileStat />
                <PopoverArrow className="w-6 h-3 fill-transparent lg:fill-[#EBF4F7] -translate-y-0.5 z-50" />
              </PopoverContent>
            </Popover>
          </div> */}
          {data
            .filter((item) => item.value !== "profile")
            .map((item, index) => (
              <Popover
                key={index}
                defaultOpen={selected === item.value}
                open={selected === item.value}
                container={containerRef.current}
                onOpenChange={(open) => {
                  if (open) {
                    setSelected(item.value);
                  } else {
                    setSelected("");
                  }
                }}
              >
                <PopoverTrigger
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "sm" }),
                    "w-fit h-fit cursor-pointer bg-white group lg:p-2.5 data-[state=open]:bg-primary",
                    { "bg-primary": selected === item.value }
                  )}
                  onClick={() => setSelected(item.value)}
                >
                  {
                    <div className="flex items-center gap-2 group transition-all ease-in-out text-white">
                      <item.icon
                        className={cn("fill-gray-300", {
                          "fill-white": selected === item.value,
                        })}
                      />
                      <AnimatePresence mode="wait">
                        {selected === item.value && (
                          <motion.p
                            initial={{
                              width: 0,
                              opacity: 0,
                            }}
                            animate={{
                              width: "auto",
                              opacity: 1,
                              transition: {
                                width: {
                                  duration: 0.4,
                                },
                                opacity: {
                                  duration: 0.25,
                                  delay: 0.5,
                                },
                              },
                            }}
                            exit={{
                              width: 0,
                              opacity: 0,
                              transition: {
                                width: {
                                  duration: 0.4,
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
                  className="lg:p-8 bg-transparent lg:bg-white/50 relative border-none lg:border"
                  align="center"
                  collisionPadding={40}
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
      {/* Mobile View */}
      <div className="lg:hidden -mt-20">
        <Image
          src="/images/nft-1.png"
          alt="Dashboard Nft Image"
          width={341}
          height={374}
          className="mx-auto w-full"
        />
        <div className="bg-white/50 rounded-xl p-5 w-full flex flex-col gap-5">
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
        {selected === "profile" && (
          <div className="flex flex-col gap-2 bg-white/50 mt-5 rounded-xl p-5">
            <ProfileStat />{" "}
          </div>
        )}

        <div className="z-50 fixed left-0 right-0 bottom-0 w-full justify-end flex gap-3 py-2.5 px-5 bg-white/50">
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
    </main>
  );
}
