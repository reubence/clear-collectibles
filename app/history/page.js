import Image from "next/image";
import React from "react";
import SHOP from "@/public/images/icons/shop-icon.svg";
import CLOCK from "@/public/images/icons/clock-icon.svg";
import BUY from "@/public/images/icons/buy-icon.svg";
import NFT_3 from "@/public/images/nft-3.png";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { CalendarIcon } from "lucide-react";
import { RocketIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";

const filtering = [
  {
    name: "Banana Badge",
    label: "banana",
  },
  {
    name: "Merch Pack",
    label: "merch",
  },
  {
    name: "VIP Event Access",
    label: "vip",
  },
  {
    name: "Gen3 Specials",
    label: "gen3",
  },
  {
    name: "Monke Domains",
    label: "domains",
  },
  {
    name: "Monke Adspace",
    label: "adspace",
  },
  {
    name: "Monke Intros",
    label: "intros",
  },
];

function History() {
  return (
    <div className="px-12 pb-12 pt-4 w-full h-[calc(100vh-112px)] flex flex-col relative">
      <div className="h-full w-full p-[30px] border border-white rounded-2xl bg-white/25">
        <div className="flex justify-between items-center font-extrabold text-2xl">
          <div className="uppercase font-extrabold text-[32px] gap-4 flex items-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_2280)">
                <path
                  d="M20 40C8.955 40 0 31.045 0 20C0 8.955 8.955 0 20 0C31.045 0 40 8.955 40 20C40 31.045 31.045 40 20 40ZM21.6667 20.9817V11.6617C21.6667 10.755 20.92 10 20 10C19.0733 10 18.3333 10.7433 18.3333 11.6617V21.6717C18.3319 21.888 18.3733 22.1024 18.4551 22.3026C18.5369 22.5028 18.6575 22.6849 18.81 22.8383L23.5467 27.575C23.7012 27.7286 23.8845 27.8502 24.0862 27.9327C24.2878 28.0153 24.5037 28.0572 24.7216 28.0562C24.9395 28.0551 25.155 28.011 25.3558 27.9264C25.5566 27.8418 25.7387 27.7185 25.8917 27.5633C26.2021 27.2528 26.3775 26.8323 26.3797 26.3932C26.3819 25.9541 26.2107 25.5319 25.9033 25.2183L21.6667 20.9817Z"
                  fill="#252525"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_2280">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
            History
          </div>
          <div className="flex items-center whitespace-nowrap gap-[30px]">
            <span>Bubbles: 8,952</span>

            <Command className="rounded-lg border shadow-md">
              <CommandInput placeholder="Search..." />
            </Command>

            <Button className="min-w-fit gap-3.5 text-xl text-white uppercase">
              <Image
                src={CLOCK}
                alt="Clock Icon"
                height={24}
                width={24}
                className=""
                unoptimized
              />
              Shop
            </Button>
          </div>
        </div>
        <Separator className="my-6 mr-2.5 bg-white" />
        <div className="h-[calc(100vh-348px)] relative flex gap-7">
          <div className="h-full w-[425px] bg-white rounded-2xl col-span-2 p-8 text-2xl">
            Type filtering
            <Separator className="my-7 bg-[#E6E6E6]" />
            {/* FILTERING OPTIONS */}
            <ScrollArea className="h-[calc(100vh-500px)] pr-2.5">
              {filtering.map((filter, index) => (
                <div
                  className="flex items-center justify-between mb-10"
                  key={index}
                >
                  <label
                    htmlFor={filter.label}
                    className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {filter.name}
                  </label>
                  <Checkbox id={filter.label} />
                </div>
              ))}
            </ScrollArea>
          </div>
          <div className="h-full rounded-2xl col-span-5 flex flex-grow flex-col bg-white"></div>
        </div>
      </div>
    </div>
  );
}

export default History;
