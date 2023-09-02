"use client";

import Image from "next/image";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import LOGO_DESKTOP from "@/public/images/logo-desktop.svg";
import LOGO_MOBILE from "@/public/images/logo-mobile.svg";
import INTERLACE_LOGO from "@/public/images/interlace-logo.svg";

import X from "@/public/images/icons/x-icon.svg";
import DISCORD from "@/public/images/icons/discord-icon.svg";
import SQUARE from "@/public/images/icons/square-icon.svg";

import DISCONNECT from "@/public/images/icons/disconnect-icon.svg";
import HOME from "@/public/images/icons/home-icon.svg";
import LEADERBOARD from "@/public/images/icons/leaderboard-icon.svg";
import SHOP from "@/public/images/icons/shop-icon.svg";

import COPY from "@/public/images/icons/copy-icon.svg";
import { ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/command";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const navItems = [
  { name: "X", href: "#", icon: X },
  { name: "Discord", href: "#", icon: DISCORD },
  { name: "Square", href: "#", icon: SQUARE },
];

const frameworks = [
  {
    icon: HOME,
    route: "/",
    label: "DASHBOARD",
  },
  {
    icon: LEADERBOARD,
    route: "leaderboard",
    label: "LEADERBOARD",
  },
  {
    icon: SHOP,
    route: "shop",
    label: "SHOP",
  },
  {
    icon: DISCONNECT,
    route: "disconnect",
    label: "DISCONNECT",
  },
];

function classNames() {
  return classes.filter(Boolean).join(" ");
}

export default function NavigationMenu() {
  const pathname = usePathname();
  const [sheetOpen, setSheetOpen] = React.useState();
  const [open, setOpen] = React.useState(false);
  const [route, setRoute] = React.useState("");
  const [active, setActive] = React.useState(
    pathname === "/shop"
      ? "shop"
      : pathname === "/leaderboard"
      ? "leaderboard"
      : pathname === "/shop/history"
      ? "history"
      : ""
  );

  React.useEffect(() => {
    if (pathname === "/") {
      setActive("");
    } else if (pathname === "/leaderboard") {
      setActive("leaderboard");
    } else if (pathname === "/history") {
      setActive("history");
    } else if (pathname === "/shop") {
      setActive("shop");
    }
  }, [pathname]);

  if (sheetOpen) {
    document.body.style.pointerEvents = "auto";
  }

  return (
    <nav className="w-full">
      <div className="px-[30px] pb-3 pt-6 relative justify-between flex items-center">
        <div className="lg:hidden">
          <Image
            src={LOGO_MOBILE}
            alt="DKS Logo"
            height={29}
            width={80}
            className="lg:pt-4 lg:pl-2.5"
            unoptimized
          />
        </div>
        <div className="flex items-center text-2xl gap-2 font-waves">
          <Image
            src={LOGO_DESKTOP}
            alt="DKS Logo"
            height={70}
            width={70}
            className="lg:pt-4 lg:pl-2.5 w-8 h-8 lg:w-[70px] lg:h-[70px]"
            unoptimized
          />
        </div>
        <div className="relative flex items-start leading-none gap-2 text-xl font-wavesTiny">
          {/* DESKTOP VIEW */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-9">
              <div className="flex [&>*:last-child]:!border-none mr-2">
                {navItems.map((item, index) => (
                  <div className="px-4 border-r border-r-white" key={index}>
                    <Link href="#">
                      <Image key={item.name} src={item.icon} alt={item.name} />
                    </Link>
                  </div>
                ))}
              </div>
              <div className="hidden lg:flex items-center">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>MD</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div className="hidden lg:block relative mr-2">
              <DropdownMenu>
                <DropdownMenuTrigger>Open</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          {/* MOBILE VIEW */}
          <div className="ml-4 lg:hidden relative">
            <Sheet
              open={sheetOpen}
              onOpenChange={() => {
                setSheetOpen(!sheetOpen);
              }}
            >
              <SheetTrigger>
                {!sheetOpen ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_105_130)">
                      <path
                        d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_105_130">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 17H18V16H17V15H16V14H15V13H14V12H13V11H12V10H11V9H10V8H9V7H8V6H6V8H7V9H8V10H9V11H10V12H11V13H12V14H13V15H14V16H15V17H16V18H17V19H19V17Z"
                      fill="white"
                    />
                    <path
                      d="M6 17H7V16H8V15H9V14H10V13H11V12H12V11H13V10H14V9H15V8H16V7H17V6H19V8H18V9H17V10H16V11H15V12H14V13H13V14H12V15H11V16H10V17H9V18H8V19H6V17Z"
                      fill="white"
                    />
                  </svg>
                )}
              </SheetTrigger>
              <SheetContent
                className="h-fit flex flex-col tallXS:mt-10 mt-40 mx-4 rounded-xl"
                side="top"
              >
                <div className="flex flex-col p-8 gap-6">
                  {frameworks.map((framework, index) => (
                    <Link
                      key={index}
                      href={framework.route}
                      onClick={() => {
                        setSheetOpen(false);
                      }}
                      className={cn(
                        buttonVariants({ variant: "ghost" }),
                        `font-semibold text-base w-full text-left justify-start items-center p-0`,
                        {
                          "text-primary-foreground": active === "dashboard",
                        }
                      )}
                    >
                      <Image
                        src={framework.icon}
                        alt={`${framework.route} icon`}
                        className="w-6 h-6 mr-3 mb-1.5"
                        unoptimized
                      />
                      <span className="">{framework.label}</span>
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col h-full w-full items-center justify-end mt-28">
                  <div className="flex gap-6">
                    <Link href="#">
                      <Image
                        src={SQUARE}
                        alt="Web Icon"
                        className="w-5 h-5"
                        unoptimized
                      />
                    </Link>
                    <Link href="#">
                      <Image
                        src={X}
                        alt="Web Icon"
                        className="w-5 h-5"
                        unoptimized
                      />
                    </Link>
                    <Link href="#">
                      <Image
                        src={DISCORD}
                        alt="Web Icon"
                        className="w-5 h-5"
                        unoptimized
                      />
                    </Link>
                  </div>
                </div>
                <div className="px-5 flex flex-col">
                  <Separator className="bg-foreground/10 mt-4" />
                  <div className="flex flex-col mt-5">
                    <p className="text-base font-bold">Referral code:</p>
                    <div className="flex justify-between items-baseline">
                      <span className="flex text-[28px] font-bold items-center gap-2">
                        87921
                        <Button variant="ghost" size="ghost">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M9.16675 16.2498H13.9167C13.6703 16.8657 13.2447 17.3935 12.695 17.765C12.1453 18.1364 11.4968 18.3343 10.8334 18.3331H5.00007C4.5623 18.3333 4.12879 18.2471 3.72432 18.0797C3.31984 17.9122 2.95233 17.6667 2.64278 17.3571C2.33323 17.0476 2.0877 16.68 1.92023 16.2756C1.75276 15.8711 1.66663 15.4376 1.66675 14.9998V8.33314C1.66773 7.52142 1.96437 6.73785 2.50117 6.12896C3.03797 5.52008 3.77819 5.12758 4.58339 5.02486V11.6665C4.58339 14.1915 6.64171 16.2498 9.16675 16.2498ZM16.2501 5.20814H18.0167C17.9655 5.13304 17.9069 5.06325 17.8417 4.99982L15.0001 2.15803C14.9387 2.09315 14.8686 2.03714 14.7917 1.99162V3.74982C14.7936 4.13603 14.9478 4.50589 15.2209 4.77898C15.494 5.05207 15.8639 5.20631 16.2501 5.20814ZM16.2501 6.45814C15.5322 6.45676 14.8441 6.17098 14.3365 5.66337C13.8289 5.15576 13.5431 4.46769 13.5417 3.74982V1.6665H9.16675C8.72897 1.66638 8.29547 1.75252 7.89099 1.91999C7.48652 2.08746 7.119 2.33298 6.80945 2.64253C6.49989 2.95209 6.25436 3.3196 6.08689 3.72407C5.91941 4.12854 5.83327 4.56205 5.83339 4.99982V11.6665C5.83328 12.1043 5.91942 12.5378 6.0869 12.9423C6.25437 13.3467 6.4999 13.7142 6.80946 14.0238C7.11901 14.3333 7.48652 14.5789 7.891 14.7463C8.29547 14.9138 8.72898 14.9999 9.16675 14.9998H15.0001C15.4378 14.9999 15.8713 14.9138 16.2758 14.7463C16.6803 14.5789 17.0478 14.3333 17.3573 14.0238C17.6669 13.7142 17.9124 13.3467 18.0799 12.9422C18.2474 12.5378 18.3335 12.1043 18.3334 11.6665V6.45814H16.2501Z"
                              fill="#424141"
                              fill-opacity="0.5"
                            />
                          </svg>
                        </Button>
                      </span>
                      <p className="text-sm font-normal">1/3</p>
                    </div>
                  </div>
                  <Separator className="bg-foreground/10 mt-4" />
                  <Image
                    src={INTERLACE_LOGO}
                    alt="DKS Logo"
                    width={179}
                    height={22}
                    className="mx-auto my-5"
                    unoptimized
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
