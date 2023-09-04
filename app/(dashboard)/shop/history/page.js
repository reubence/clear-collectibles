"use client";

import Image from "next/image";
import React from "react";
import SHOP from "@/public/images/icons/shop-icon.svg";
import CLOCK from "@/public/images/icons/clock-icon.svg";
import BUY from "@/public/images/icons/buy-icon.svg";
import NFT_3 from "@/public/images/nft-3.png";
import { Command, CommandInput } from "@/components/ui/command";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import StandardConfirmation from "@/components/confirmation-pages/standard-confirmation";
import CheckboxConfirmation from "@/components/confirmation-pages/checkbox-confirmation";
import EmailConfirmation from "@/components/confirmation-pages/email-confirmation";
import AddressConfirmation from "@/components/confirmation-pages/address-confirmation";
import ListItem from "@/components/history-pages/list-item";
import Link from "next/link";

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
  const [openFilterMobile, setOpenFilterMobile] = React.useState(false);
  return (
    <>
      <div className="px-4 lg:px-12 pb-12 pt-4 w-full lg:h-[calc(100vh-112px)] flex flex-col relative">
        <div className="h-full w-full py-5 px-4 lg:p-[30px] border rounded-2xl bg-white/25">
          <div className="flex flex-col gap-4 lg:flex-row lg:justify-between items-start lg:items-center text-base lg:text-xl">
            <div className="flex items-center justify-between w-full lg:w-fit">
              <div className="gap-1.5 lg:gap-3 flex items-center uppercase font-extrabold text-xl lg:text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 40 40"
                  fill="none"
                  className="mb-1.5"
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
                </svg>{" "}
                History
              </div>
              <Button
                variant="ghost"
                onClick={() => {
                  setOpenFilterMobile(!openFilterMobile);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="lg:hidden"
                >
                  <path
                    d="M2.5 3.75L8.5 10.7574V16.0185L11.5 17.5V10.7574L17.5 3.75H2.5Z"
                    stroke="#333333"
                    stroke-width="1.66667"
                    stroke-linejoin="round"
                  />
                </svg>
              </Button>
            </div>
            <div className="flex items-center justify-between w-full lg:w-fit whitespace-nowrap gap-[30px]">
              <span>
                <span className="font-normal lg:font-extrabold">Bubbles:</span>{" "}
                8,952
              </span>

              <Command className="hidden lg:block rounded-lg border">
                <CommandInput placeholder="Search..." />
              </Command>

              <Link
                href="/shop"
                className={cn(
                  buttonVariants(),
                  "min-w-fit gap-3.5 !py-2 text-sm lg:text-xl text-white capitalize lg:uppercase"
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="hidden lg:block mb-2"
                >
                  <path
                    d="M24.1971 9.5535H21.8547C21.8547 6.3183 19.232 3.69238 16 3.69238C12.768 3.69238 10.1452 6.3183 10.1452 9.5535H7.80285C6.51517 9.5535 5.47325 10.6089 5.47325 11.8985L5.46045 25.9663C5.4618 26.5874 5.70894 27.1826 6.14786 27.622C6.58678 28.0614 7.18179 28.3092 7.80285 28.3113H24.1964C24.8175 28.3092 25.4125 28.0614 25.8514 27.622C26.2904 27.1826 26.5375 26.5874 26.5388 25.9663V11.8991C26.5375 11.278 26.2904 10.6828 25.8514 10.2434C25.4125 9.80396 24.8175 9.55617 24.1964 9.55414L24.1971 9.5535ZM16 6.0367C16.4618 6.03628 16.9191 6.12698 17.3458 6.30361C17.7725 6.48023 18.1601 6.73931 18.4865 7.066C18.8129 7.39269 19.0717 7.78058 19.2479 8.20743C19.4241 8.63428 19.5144 9.0917 19.5136 9.5535H12.4864C12.4855 9.0917 12.5758 8.63428 12.752 8.20743C12.9283 7.78058 13.187 7.39269 13.5134 7.066C13.8398 6.73931 14.2274 6.48023 14.6541 6.30361C15.0808 6.12698 15.5382 6.03628 16 6.0367ZM16 17.7602C12.768 17.7602 10.1452 15.1343 10.1452 11.8978H12.487C12.4861 12.3597 12.5763 12.8172 12.7525 13.2441C12.9287 13.671 13.1874 14.059 13.5138 14.3857C13.8402 14.7125 14.2279 14.9716 14.6546 15.1483C15.0814 15.325 15.5388 15.4157 16.0006 15.4153C16.4623 15.4155 16.9195 15.3247 17.346 15.148C17.7726 14.9713 18.1601 14.7122 18.4863 14.3855C18.8126 14.0588 19.0712 13.671 19.2474 13.2442C19.4235 12.8175 19.5138 12.3602 19.5129 11.8985H21.8553C21.8553 15.1343 19.232 17.7602 16 17.7602Z"
                    fill="white"
                  />
                </svg>{" "}
                Shop
              </Link>
            </div>
          </div>
          <Separator className="my-5 lg:my-6 mr-2.5 bg-white" />
          <div className="lg:h-[calc(100vh-348px)] relative flex flex-col lg:flex-row gap-7">
            <div
              className={cn(
                "hidden lg:block h-full  w-full lg:w-fit 2xl:min-w-[425px] lg:bg-white rounded-2xl col-span-2 lg:p-8 text-base lg:text-xl",
                { block: openFilterMobile }
              )}
            >
              <span class="hidden lg:block">Type filtering</span>
              <Separator className="hidden lg:block my-7 bg-[#E6E6E6]" />
              {/* FILTERING OPTIONS */}
              <ScrollArea className="lg:h-[calc(100vh-500px)] pr-2.5">
                {filtering.map((filter, index) => (
                  <div
                    className="flex items-center justify-between mb-10 gap-8"
                    key={index}
                  >
                    <label
                      htmlFor={filter.label}
                      className="whitespace-nowrap text-sm font-semibold lg:text-base lg:font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {filter.name}
                    </label>
                    <Checkbox id={filter.label} />
                  </div>
                ))}
              </ScrollArea>
            </div>
            <div className="h-full rounded-2xl flex flex-grow flex-col bg-white">
              <ScrollArea className="w-full lg:h-[calc(100vh-258px)] lg:border-bpb-44 lg:pb-4 lg:mb-5">
                <div className="flex flex-col gap-3 lg:gap-5 p-8">
                  {[...Array(16)].map((_, index) => (
                    <ListItem key={index} />
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default History;
