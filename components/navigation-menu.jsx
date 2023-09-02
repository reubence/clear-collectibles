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
      ? "shop-history"
      : ""
  );

  React.useEffect(() => {
    if (pathname === "/") {
      setActive("");
    } else if (pathname === "/leaderboard") {
      setActive("leaderboard");
    } else if (pathname === "/shop/history") {
      setActive("shop-history");
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
                className="h-fit flex flex-col mt-40 mx-4 rounded-xl"
                side="top"
              >
                <div className="flex flex-col p-8 gap-6">
                  {frameworks.map((framework, index) => (
                    <Link
                      key={index}
                      href={framework.route}
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
                <div className="flex flex-col h-full w-full items-center justify-end py-28">
                  <Image
                    src={LOGO_MOBILE}
                    alt="DKS Logo"
                    className="w-10 h-10 opacity-50"
                    unoptimized
                  />
                  <div className="px-6 py-4">
                    <p className="flex items-center gap-2 text-muted-foreground/40 font-gilroy text-[10px] whitespace-nowrap">
                      Powered by:
                      <Image
                        src={INTERLACE_LOGO}
                        alt="DKS Logo"
                        className="w-20"
                        unoptimized
                      />
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Link href="#">
                      <Image
                        src={SQUARE}
                        alt="Web Icon"
                        className="w-6 h-6"
                        unoptimized
                      />
                    </Link>
                    <Link href="#">
                      <Image
                        src={X}
                        alt="Web Icon"
                        className="w-6 h-6"
                        unoptimized
                      />
                    </Link>
                    <Link href="#">
                      <Image
                        src={DISCORD}
                        alt="Web Icon"
                        className="w-6 h-6"
                        unoptimized
                      />
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
