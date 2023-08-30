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
            <ScrollArea className="w-full h-[calc(100vh-458px)] border-b border-white pb-4 mb-5">
              <div className="grid grid-cols-6 gap-3">
                {[...Array(16)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl max-h-[264px] max-w-[200px] p-3"
                  >
                    <Image
                      src={NFT_3}
                      alt="Clock Icon"
                      height={176}
                      width={176}
                      className="rounded-2xl w-[176px] h-[176px]"
                      unoptimized
                    />
                    <p className="text-xs font-bold uppercase mt-2.5">
                      SMB Inception
                    </p>
                    <p className="text-2xl uppercase">2343</p>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="flex justify-between items-center">
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    className="mb-2.5"
                  >
                    <path
                      d="M30.2465 11.9421H27.3185C27.3185 7.89812 24.0401 4.61572 20.0001 4.61572C15.9601 4.61572 12.6817 7.89812 12.6817 11.9421H9.75368C8.14408 11.9421 6.84168 13.2613 6.84168 14.8733L6.82568 32.4581C6.82737 33.2345 7.1363 33.9786 7.68495 34.5278C8.23359 35.0771 8.97735 35.3868 9.75368 35.3893H30.2457C31.022 35.3868 31.7658 35.0771 32.3144 34.5278C32.8631 33.9786 33.172 33.2345 33.1737 32.4581V14.8741C33.172 14.0978 32.8631 13.3537 32.3144 12.8044C31.7658 12.2552 31.022 11.9455 30.2457 11.9429L30.2465 11.9421ZM20.0001 7.54612C20.5773 7.5456 21.149 7.65897 21.6824 7.87975C22.2157 8.10054 22.7003 8.42439 23.1083 8.83275C23.5163 9.24111 23.8397 9.72597 24.06 10.2595C24.2803 10.7931 24.3931 11.3649 24.3921 11.9421H15.6081C15.607 11.3649 15.7199 10.7931 15.9402 10.2595C16.1605 9.72597 16.4839 9.24111 16.8919 8.83275C17.2999 8.42439 17.7844 8.10054 18.3178 7.87975C18.8511 7.65897 19.4228 7.5456 20.0001 7.54612ZM20.0001 22.2005C15.9601 22.2005 12.6817 18.9181 12.6817 14.8725H15.6089C15.6077 15.4498 15.7205 16.0217 15.9408 16.5554C16.161 17.089 16.4844 17.574 16.8924 17.9824C17.3004 18.3909 17.785 18.7148 18.3184 18.9356C18.8518 19.1565 19.4236 19.2699 20.0009 19.2693C20.578 19.2696 21.1495 19.1561 21.6827 18.9352C22.2159 18.7144 22.7002 18.3905 23.1081 17.9821C23.5159 17.5738 23.8391 17.089 24.0593 16.5556C24.2795 16.0221 24.3923 15.4504 24.3913 14.8733H27.3193C27.3193 18.9181 24.0401 22.2005 20.0001 22.2005Z"
                      fill="#F3F8FA"
                    />
                  </svg>{" "}
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
