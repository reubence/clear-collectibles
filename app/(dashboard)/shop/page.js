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
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Icons } from "@/components/ui/icons";
import ShopItem from "@/components/shop-page/shop-item";

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

const shopData = [
  {
    image: "/images/nft-3.png",
    name: "SMB Inception",
    price: 6589,
    description: "A Banana icon badge for the MonkeDao Discord",
    limited: 1,
  },
  {
    image: "/images/nft-2.png",
    name: "SMB Inception",
    price: 2343,
    description: "A Banana icon badge for the MonkeDao Discord",
    unreleased: true,
    unreleasedTimer: new Date("Sep 10, 2023 16:37:52"),
  },
  {
    image: "/images/nft-3.png",
    name: "SMB Inception",
    price: 6589,
    description: "A Banana icon badge for the MonkeDao Discord",
  },
  {
    image: "/images/nft-3.png",
    name: "SMB Inception",
    price: 2343,
    description: "A Banana icon badge for the MonkeDao Discord",
  },
  {
    image: "/images/nft-2.png",
    name: "SMB Inception",
    price: 6589,
    description: "A Banana icon badge for the MonkeDao Discord",
  },
  {
    image: "/images/nft-3.png",
    name: "SMB Inception",
    price: 2343,
    description: "A Banana icon badge for the MonkeDao Discord",
  },
  {
    image: "/images/nft-3.png",
    name: "SMB Inception",
    price: 6589,
    description: "A Banana icon badge for the MonkeDao Discord",
  },
  {
    image: "/images/nft-3.png",
    name: "SMB Inception",
    price: 2343,
    description: "A Banana icon badge for the MonkeDao Discord",
  },
  {
    image: "/images/nft-2.png",
    name: "SMB Inception",
    price: 6589,
    description: "A Banana icon badge for the MonkeDao Discord",
  },
  {
    image: "/images/nft-3.png",
    name: "SMB Inception",
    price: 2343,
    description: "A Banana icon badge for the MonkeDao Discord",
  },
  {
    image: "/images/nft-3.png",
    name: "SMB Inception",
    price: 6589,
    description: "A Banana icon badge for the MonkeDao Discord",
  },
  {
    image: "/images/nft-3.png",
    name: "SMB Inception",
    price: 2343,
    description: "A Banana icon badge for the MonkeDao Discord",
  },
  {
    image: "/images/nft-2.png",
    name: "SMB Inception",
    price: 6589,
    description: "A Banana icon badge for the MonkeDao Discord",
  },
  {
    image: "/images/nft-3.png",
    name: "SMB Inception",
    price: 2343,
    description: "A Banana icon badge for the MonkeDao Discord",
  },
];

function Shop() {
  const [openFilterMobile, setOpenFilterMobile] = React.useState(false);
  const [selected, setSelected] = React.useState(0);
  return (
    <>
      <div className="px-4 lg:px-12 pb-12 pt-4 w-full lg:h-[calc(100vh-112px)] flex flex-col relative">
        <div className="h-full w-full py-5 px-4 lg:p-[30px] border rounded-2xl bg-white/25">
          <div className="flex flex-col gap-4 lg:flex-row lg:justify-between items-start lg:items-center text-base lg:text-xl">
            <div className="flex items-center justify-between w-full lg:w-fit">
              <div className="gap-1.5 lg:gap-3 flex items-center uppercase font-extrabold text-xl lg:text-2xl">
                <Image
                  src={SHOP}
                  alt="Shop Icon"
                  height={40}
                  width={40}
                  className="w-6 h-6 lg:w-[40px] lg:h-[40px] mb-1 lg:pb-1"
                  unoptimized
                />
                Shop
              </div>
              <Button
                variant="ghost"
                onClick={() => {
                  setOpenFilterMobile(!openFilterMobile);
                }}
              >
                <Icons.filter className="lg:hidden w-5 h-5 fill-primary stroke-primary" />
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
                href="shop/history"
                className={cn(
                  buttonVariants(),
                  "min-w-fit !py-3.5 gap-3.5 text-sm lg:text-xl text-white capitalize lg:uppercase"
                )}
              >
                <Image
                  src={CLOCK}
                  alt="Clock Icon"
                  height={24}
                  width={24}
                  className="hidden lg:block mb-1"
                  unoptimized
                />
                History
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
              <span className="hidden lg:block  ">Type filtering</span>
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
            <div className="h-full rounded-2xl flex flex-grow flex-col">
              <ScrollArea className="w-full lg:h-[calc(100vh-458px)] lg:border-b pb-44 lg:pb-4 lg:mb-5">
                <div className="p-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-5">
                  {shopData.map((item, index) => (
                    <ShopItem
                      key={index}
                      setSelected={() => setSelected(index)}
                      selected={selected}
                      image={item.image}
                      name={item.name}
                      price={item.price}
                      index={index}
                      unreleased={item.unreleased || false}
                      unreleasedTimer={item.unreleasedTimer || null}
                      limited={item.limited || null}
                    />
                  ))}
                </div>
              </ScrollArea>

              {/* DESKTOP BOTTOM SHOP NAV HIDDEN ON MOBILE */}
              <div className="hidden lg:flex justify-between items-end">
                <div className="flex items-end gap-x-6">
                  <Image
                    src={NFT_3}
                    alt="Clock Icon"
                    height={94}
                    width={94}
                    className="rounded-2xl w-[94px] h-[94px]"
                    unoptimized
                  />

                  <div className="flex flex-col">
                    <h3 className="inline-block text-base font-bold uppercase">
                      SMB Inception
                    </h3>
                    <h2 className="inline-block text-lg uppercase">2343</h2>
                    <p className="inline-block text-md font-normal">
                      A Banana icon badge for the MonkeDao Discord
                    </p>
                  </div>
                </div>
                <div className="flex flex-col xl:flex-row gap-2 xl:gap-6">
                  <div className="flex flex-col gap-y-1.5">
                    <p className="text-lg uppercase font-bold whitespace-nowrap">
                      Insufficient Bubbles!
                    </p>
                    <p className="text-md uppercase font-normal">
                      My banana: 2932
                    </p>
                  </div>
                  {/* <Dialog>
                    <DialogTrigger
                      className={cn(
                        buttonVariants(),
                        "text-xl font-bold text-white uppercase h-14 rounded-2xl"
                      )}
                    >
                      <Icons.shop className="fill-white mb-1.5" />
                      Buy
                    </DialogTrigger>
                    <DialogContent className="bg-white">
                      <AddressConfirmation />
                    </DialogContent>
                  </Dialog> */}

                  <Popover>
                    <PopoverTrigger
                      className={cn(
                        buttonVariants(),
                        "text-xl font-bold text-white uppercase h-14 rounded-2xl"
                      )}
                    >
                      <Icons.shop className="fill-white mb-1.5" />
                      Buy
                    </PopoverTrigger>
                    <PopoverContent>
                      {/* <StandardConfirmation /> */}
                      {/* <CheckboxConfirmation /> */}
                      <EmailConfirmation />
                      {/* <AddressConfirmation /> */}
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE BOTTOM STICKY SHOP NAV */}
      <div className="bg-[#E7F1F5] bottom-0 block lg:hidden fixed w-full z-50">
        <ScrollArea className="w-full border-t border-b border-t-white border-b-white h-28 p-5">
          <div className="flex flex-col gap-y-6 lg:flex-row justify-between items-start">
            <div className="flex gap-x-3 lg:gap-x-6">
              <Image
                src={NFT_3}
                alt="Clock Icon"
                height={94}
                width={94}
                className="rounded-2xl w-[70px] lg:w-[94px] h-[70px] lg:h-[94px]"
                unoptimized
              />

              <div className="flex flex-col justify-center gap-0.5 lg:gap-0">
                <h3 className="inline-block text-base lg:text-xl font-bold uppercase">
                  SMB Inception
                </h3>
                <h2 className="inline-block text-2xl lg:text-[32px] uppercase">
                  2343
                </h2>
                <p className="hidden lg:inline-block text-sm font-normal">
                  A Banana icon badge for the MonkeDao Discord
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col gap-y-1.5">
                <p className="text-base lg:text-2xl uppercase font-bold whitespace-nowrap">
                  Insufficient Bubbles!
                </p>
                <p className="text-base lg:text-2xl uppercase font-normal">
                  My banana: 2932
                </p>
              </div>
            </div>
          </div>
        </ScrollArea>
        <div className="p-5 bg">
          <Sheet>
            <SheetTrigger
              className={cn(
                buttonVariants(),
                "lg:hidden gap-0.5 text-base font-bold text-white uppercase py-3 h-fit w-full rounded-2xl"
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="mb-1.5"
              >
                <path
                  d="M18.1477 7.16342H16.3909C16.3909 4.73702 14.4239 2.76758 11.9999 2.76758C9.57585 2.76758 7.60881 4.73702 7.60881 7.16342H5.85201C4.88625 7.16342 4.10481 7.95494 4.10481 8.92214L4.09521 19.473C4.09623 19.9388 4.28158 20.3853 4.61077 20.7148C4.93996 21.0444 5.38622 21.2302 5.85201 21.2317H18.1472C18.613 21.2302 19.0593 21.0444 19.3885 20.7148C19.7176 20.3853 19.903 19.9388 19.904 19.473V8.92262C19.903 8.45682 19.7176 8.01036 19.3885 7.68081C19.0593 7.35126 18.613 7.16542 18.1472 7.1639L18.1477 7.16342ZM11.9999 4.52582C12.3462 4.5255 12.6892 4.59353 13.0092 4.726C13.3292 4.85847 13.62 5.05278 13.8648 5.29779C14.1096 5.54281 14.3036 5.83372 14.4358 6.15386C14.568 6.474 14.6357 6.81707 14.6351 7.16342H9.36465C9.36402 6.81707 9.43174 6.474 9.56391 6.15386C9.69609 5.83372 9.89014 5.54281 10.1349 5.29779C10.3797 5.05278 10.6705 4.85847 10.9905 4.726C11.3105 4.59353 11.6535 4.5255 11.9999 4.52582ZM11.9999 13.3185C9.57585 13.3185 7.60881 11.349 7.60881 8.92166H9.36513C9.36444 9.26805 9.43211 9.61117 9.56425 9.93136C9.6964 10.2516 9.89044 10.5425 10.1352 10.7876C10.38 11.0327 10.6708 11.227 10.9908 11.3595C11.3109 11.492 11.6539 11.5601 12.0003 11.5597C12.3466 11.5599 12.6895 11.4918 13.0094 11.3593C13.3293 11.2268 13.6199 11.0324 13.8646 10.7874C14.1093 10.5424 14.3033 10.2515 14.4354 9.93148C14.5675 9.6114 14.6352 9.26841 14.6346 8.92214H16.3914C16.3914 11.349 14.4239 13.3185 11.9999 13.3185Z"
                  fill="white"
                />
              </svg>{" "}
              Buy
            </SheetTrigger>
            <SheetContent side="bottom" className="">
              {/* <StandardConfirmation /> */}
              {/* <CheckboxConfirmation /> */}
              {/* <EmailConfirmation /> */}
              <AddressConfirmation />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
}

export default Shop;
