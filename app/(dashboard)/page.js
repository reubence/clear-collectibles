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
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const data = [
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
  return (
    <main className="flex flex-col lg:flex-row items-end justify-between p-5 mb-20 lg:pb-36 lg:px-10 relative h-screen w-full">
      {/* Desktop View */}
      <div className="lg:bg-white/50 lg:rounded-2xl relative w-full h-full lg:h-fit flex flex-col lg:flex-row justify-between ">
        <div className="bg-white/50 lg:bg-transparent border lg:border-none rounded-xl flex gap-3 py-5 px-5 lg:p-3 h-full w-full">
          <div className="lg:hidden">
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
          </div>
          {data.map((item, index) => (
            <Popover key={index}>
              <PopoverTrigger asChild>
                {
                  <item.icon
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
                {item.children}{" "}
                <PopoverArrow className="w-6 h-3 fill-transparent lg:fill-[#EBF4F7] -translate-y-0.5 z-50" />
              </PopoverContent>
            </Popover>
          ))}
        </div>

        <div class="z-50 lg:z-0 fixed left-0 right-0 bottom-0 lg:relative w-full lg:w-fit justify-end lg:justify-normal flex gap-3 py-2.5 px-5 lg:p-3 bg-white/50 lg:bg-transparent">
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
      <div></div>
    </main>
  );
}
