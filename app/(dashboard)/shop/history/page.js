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
import { Icons } from "@/components/ui/icons";

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
                <Icons.clock className="mb-1 w-5 h-5 lg:w-8 lg:h-8 fill-foreground" />
                History
              </div>
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
                <Icons.shop className="mb-2 fill-white" />
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
              <span className="hidden lg:block">Type filtering</span>
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
                    <ListItem
                      // status="refunded"
                      status="fulfilled"
                      // status="pending"
                      key={index}
                    />
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
