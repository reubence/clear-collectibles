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
        <div className="h-full w-full py-5 px-4 lg:p-[30px] border border-white rounded-2xl bg-white/25">
          <div className="flex flex-col gap-4 lg:flex-row lg:justify-between items-start lg:items-center text-xl lg:text-2xl">
            <div className="flex items-center justify-between w-full lg:w-fit">
              <div className="gap-1.5 lg:gap-4 flex items-center uppercase font-extrabold text-xl lg:text-[32px]">
                <Image
                  src={SHOP}
                  alt="Shop Icon"
                  height={50}
                  width={50}
                  className="w-6 h-6 lg:w-[50px] lg:h-[50px] mb-1 lg:pb-1.5"
                  unoptimized
                />
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

              <Command className="hidden lg:block rounded-lg border shadow-md">
                <CommandInput placeholder="Search..." />
              </Command>

              <Button className="min-w-fit gap-3.5 text-xs lg:text-xl text-white capitalize lg:uppercase">
                <Image
                  src={CLOCK}
                  alt="Clock Icon"
                  height={24}
                  width={24}
                  className="hidden lg:block"
                  unoptimized
                />
                History
              </Button>
            </div>
          </div>
          <Separator className="my-5 lg:my-6 mr-2.5 bg-white" />
          <div className="lg:h-[calc(100vh-348px)] relative flex flex-col lg:flex-row gap-7">
            <div
              className={cn(
                "hidden lg:block h-full w-full lg:w-[425px] lg:bg-white rounded-2xl col-span-2 lg:p-8 text-2xl",
                { block: openFilterMobile }
              )}
            >
              <span class="hidden lg:block">Type filtering</span>
              <Separator className="hidden lg:block my-7 bg-[#E6E6E6]" />
              {/* FILTERING OPTIONS */}
              <ScrollArea className="lg:h-[calc(100vh-500px)] pr-2.5">
                {filtering.map((filter, index) => (
                  <div
                    className="flex items-center justify-between mb-10"
                    key={index}
                  >
                    <label
                      htmlFor={filter.label}
                      className="text-base font-semibold lg:text-xl lg:font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {filter.name}
                    </label>
                    <Checkbox id={filter.label} />
                  </div>
                ))}
              </ScrollArea>
            </div>
            <div className="h-full rounded-2xl flex flex-grow flex-col bg-white">
              <ScrollArea className="w-full lg:h-[calc(100vh-258px)] lg:border-b lg:border-white pb-44 lg:pb-4 lg:mb-5">
                <div className="flex flex-col gap-3 lg:gap-5 p-8">
                  {[...Array(16)].map((_, index) => (
                    <div
                      key={index}
                      className="flex flex-col w-full border-t-2 border-t-primary border-b"
                    >
                      <div className="flex bg-primary/10 p-5 justify-between items-center gap-3">
                        {/* ORDER PLACED */}
                        <div className="flex flex-col gap-1.5">
                          <h2 className="font-normal text-muted-foreground/50">
                            Order placed
                          </h2>
                          <p className="font-semibold">2023-09-08 18:00</p>
                        </div>
                        {/* Total */}
                        <div className="flex flex-col gap-1.5">
                          <h2 className="font-normal text-muted-foreground/50">
                            Total
                          </h2>
                          <p className="font-semibold">5930</p>
                        </div>
                        {/* Quantity purchased */}
                        <div className="flex flex-col gap-1.5">
                          <h2 className="font-normal text-muted-foreground/50">
                            Quantity purchased
                          </h2>
                          <p className="font-semibold">1</p>
                        </div>
                        {/* Delivery method */}
                        <div className="flex flex-col gap-1.5">
                          <h2 className="font-normal text-muted-foreground/50">
                            Delivery method
                          </h2>
                          <p className="font-semibold">Manual</p>
                        </div>
                        {/* Support Ticket */}
                        <div className="flex flex-col items-end gap-1.5 2xl:w-56">
                          <h2 className="font-semibold text-primary">
                            TX9Z18Y45G5
                          </h2>
                          <Button
                            className={cn(
                              "w-fit !uppercase !text-sm !px-2 !py-2 !font-medium"
                            )}
                          >
                            Get Support
                          </Button>
                        </div>
                      </div>
                      <div class="flex gap-5 justify-between p-5">
                        <div class="flex gap-5">
                          <Image
                            src={NFT_3}
                            alt="Clock Icon"
                            height={80}
                            width={80}
                            className="rounded-2xl h-[136px] w-[80px] lg:h-[80px] aspect-square object-cover"
                            unoptimized
                          />
                          <div class="flex flex-col gap-2">
                            <div class="flex items-center justify-between">
                              <div class="flex flex-col gap-2">
                                <p className="text-base font-semibold">
                                  Merch Pack
                                </p>
                                <p className="text-base font-normal text-muted-foreground/50">
                                  September Merch Pack
                                </p>
                              </div>
                              <div className="flex flex-col gap-2">
                                <p className="flex items-center font-normal gap-3">
                                  Code:{" "}
                                  <span className="font-semibold">
                                    0382chjidwliajd012jn39123
                                  </span>
                                  <Button variant="ghost" size="ghost">
                                    <svg
                                      className="mb-1.5"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 20 20"
                                      fill="none"
                                    >
                                      <path
                                        d="M9.1665 16.2501H13.9165C13.67 16.866 13.2444 17.3938 12.6947 17.7652C12.145 18.1366 11.4965 18.3345 10.8331 18.3334H4.99982C4.56205 18.3335 4.12854 18.2474 3.72407 18.0799C3.3196 17.9124 2.95209 17.6669 2.64254 17.3574C2.33298 17.0478 2.08746 16.6803 1.91999 16.2758C1.75252 15.8713 1.66638 15.4378 1.6665 15.0001V8.33339C1.66749 7.52166 1.96412 6.73809 2.50092 6.12921C3.03773 5.52032 3.77794 5.12782 4.58314 5.02511V11.6667C4.58314 14.1917 6.64147 16.2501 9.1665 16.2501ZM16.2498 5.20839H18.0165C17.9653 5.13328 17.9066 5.0635 17.8415 5.00007L14.9998 2.15827C14.9385 2.09339 14.8683 2.03739 14.7915 1.99187V3.75007C14.7933 4.13627 14.9476 4.50613 15.2207 4.77922C15.4938 5.05232 15.8636 5.20655 16.2498 5.20839ZM16.2498 6.45839C15.532 6.457 14.8439 6.17122 14.3363 5.66361C13.8287 5.156 13.5429 4.46793 13.5415 3.75007V1.66675H9.1665C8.72873 1.66663 8.29522 1.75276 7.89075 1.92023C7.48627 2.0877 7.11876 2.33323 6.8092 2.64278C6.49965 2.95233 6.25412 3.31984 6.08664 3.72431C5.91917 4.12879 5.83303 4.56229 5.83314 5.00007V11.6667C5.83303 12.1045 5.91917 12.538 6.08665 12.9425C6.25413 13.347 6.49966 13.7145 6.80921 14.024C7.11877 14.3336 7.48628 14.5791 7.89075 14.7466C8.29522 14.914 8.72873 15.0002 9.1665 15.0001H14.9998C15.4376 15.0002 15.8711 14.914 16.2756 14.7466C16.68 14.5791 17.0476 14.3336 17.3571 14.024C17.6667 13.7145 17.9122 13.347 18.0797 12.9425C18.2471 12.538 18.3333 12.1045 18.3331 11.6667V6.45839H16.2498Z"
                                        fill="#6CD2FF"
                                      />
                                    </svg>
                                  </Button>
                                </p>
                                <p className="flex items-center font-normal gap-3">
                                  Code:{" "}
                                  <span className="font-semibold">
                                    0382chjidwliajd012jn39123
                                  </span>
                                  <Button variant="ghost" size="ghost">
                                    <svg
                                      className="mb-1.5"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 20 20"
                                      fill="none"
                                    >
                                      <path
                                        d="M9.1665 16.2501H13.9165C13.67 16.866 13.2444 17.3938 12.6947 17.7652C12.145 18.1366 11.4965 18.3345 10.8331 18.3334H4.99982C4.56205 18.3335 4.12854 18.2474 3.72407 18.0799C3.3196 17.9124 2.95209 17.6669 2.64254 17.3574C2.33298 17.0478 2.08746 16.6803 1.91999 16.2758C1.75252 15.8713 1.66638 15.4378 1.6665 15.0001V8.33339C1.66749 7.52166 1.96412 6.73809 2.50092 6.12921C3.03773 5.52032 3.77794 5.12782 4.58314 5.02511V11.6667C4.58314 14.1917 6.64147 16.2501 9.1665 16.2501ZM16.2498 5.20839H18.0165C17.9653 5.13328 17.9066 5.0635 17.8415 5.00007L14.9998 2.15827C14.9385 2.09339 14.8683 2.03739 14.7915 1.99187V3.75007C14.7933 4.13627 14.9476 4.50613 15.2207 4.77922C15.4938 5.05232 15.8636 5.20655 16.2498 5.20839ZM16.2498 6.45839C15.532 6.457 14.8439 6.17122 14.3363 5.66361C13.8287 5.156 13.5429 4.46793 13.5415 3.75007V1.66675H9.1665C8.72873 1.66663 8.29522 1.75276 7.89075 1.92023C7.48627 2.0877 7.11876 2.33323 6.8092 2.64278C6.49965 2.95233 6.25412 3.31984 6.08664 3.72431C5.91917 4.12879 5.83303 4.56229 5.83314 5.00007V11.6667C5.83303 12.1045 5.91917 12.538 6.08665 12.9425C6.25413 13.347 6.49966 13.7145 6.80921 14.024C7.11877 14.3336 7.48628 14.5791 7.89075 14.7466C8.29522 14.914 8.72873 15.0002 9.1665 15.0001H14.9998C15.4376 15.0002 15.8711 14.914 16.2756 14.7466C16.68 14.5791 17.0476 14.3336 17.3571 14.024C17.6667 13.7145 17.9122 13.347 18.0797 12.9425C18.2471 12.538 18.3333 12.1045 18.3331 11.6667V6.45839H16.2498Z"
                                        fill="#6CD2FF"
                                      />
                                    </svg>
                                  </Button>
                                </p>
                              </div>
                            </div>
                            <p className="text-base font-normal text-muted-foreground/50">
                              A code will be sent your order history,which can
                              you redeem in a google form for next steps.
                            </p>
                          </div>
                        </div>
                        {/* ORDER STATUS */}
                        <div className="flex flex-col gap-4">
                          <p>Some Status</p>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-fit !uppercase !text-sm !px-2 !py-2 !font-medium"
                            )}
                          >
                            Reddem code
                          </Button>
                        </div>
                      </div>
                    </div>
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
