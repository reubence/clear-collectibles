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

function Shop() {
  return (
    <div className="px-12 pb-12 pt-4 w-full h-[calc(100vh-112px)] flex flex-col relative">
      <div className="h-full w-full p-[30px] border border-white rounded-2xl bg-white/25">
        <div className="flex justify-between items-center font-extrabold text-2xl">
          <div className="uppercase font-extrabold text-[32px] gap-4 flex items-center">
            <Image
              src={SHOP}
              alt="Shop Icon"
              height={50}
              width={50}
              className="pb-2.5"
              unoptimized
            />
            Shop
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
              History
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
          <div className="h-full rounded-2xl col-span-5 flex flex-grow flex-col">
            <ScrollArea className="bg-primary w-full h-[calc(100vh-458px)] border-b border-white pb-14 mb-5">
              T
            </ScrollArea>
            <div className="flex justify-between">
              <div className="flex gap-x-6">
                <Image
                  src={NFT_3}
                  alt="Clock Icon"
                  height={94}
                  width={94}
                  className="rounded-2xl w-[94px] h-[94px]"
                  unoptimized
                />

                <div className="flex flex-col">
                  <h3 className="inline-block text-xl font-bold uppercase">
                    SMB Inception
                  </h3>
                  <h2 className="inline-block text-[32px] uppercase">2343</h2>
                  <p className="inline-block text-sm font-normal">
                    A Banana icon badge for the MonkeDao Discord
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col gap-y-1.5">
                  <p className="text-2xl uppercase font-bold">
                    Insufficient Bubbles!
                  </p>
                  <p className="text-2xl uppercase font-normal">
                    My banana: 2932
                  </p>
                </div>
                <Button className="gap-2 text-3xl font-bold text-white uppercase py-2 w-48 h-fit rounded-2xl">
                  <Image
                    src={SHOP}
                    alt="Shop Icon"
                    height={40}
                    width={40}
                    className="pb-2.5 text-white"
                    unoptimized
                  />
                  Buy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
