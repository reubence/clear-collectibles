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
          <div className="h-full rounded-2xl col-span-5 flex flex-grow flex-col bg-white"></div>
        </div>
      </div>
    </div>
  );
}

export default History;
