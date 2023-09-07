"use client";

import Image from "next/image";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { Button, buttonVariants } from "@/components/ui/button";
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

import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Icons } from "../ui/icons";

const socialLinks = [
  { name: "X", href: "#", icon: "/images/icons/x-icon.svg" },
  { name: "Discord", href: "#", icon: "/images/icons/discord-icon.svg" },
  { name: "Square", href: "#", icon: "/images/icons/square-icon.svg" },
];

const navItems = [
  {
    icon: Icons.dashboard,
    route: "/",
    label: "Dashboard",
  },
  {
    icon: Icons.leaderboard,
    route: "/leaderboard",
    label: "Leaderboard",
  },
  {
    icon: Icons.shop,
    route: "/shop",
    label: "Shop",
  },
  {
    icon: Icons.disconnect,
    route: "/disconnect",
    label: "Disconnect",
  },
];

function classNames() {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar({ page }) {
  const pathname = usePathname();
  const [sheetOpen, setSheetOpen] = React.useState();
  const [active, setActive] = React.useState(
    pathname === "/shop"
      ? "/shop"
      : pathname === "/leaderboard"
      ? "/leaderboard"
      : pathname === "/shop/history"
      ? "/shop"
      : "/"
  );

  React.useEffect(() => {
    if (pathname === "/") {
      setActive("/");
    } else if (pathname === "/leaderboard") {
      setActive("/leaderboard");
    } else if (pathname === "/shop/history") {
      setActive("/shop");
    } else if (pathname === "/shop") {
      setActive("/shop");
    }
  }, [pathname]);

  var route = navItems.find((item) => item.route === active);

  if (sheetOpen) {
    document.body.style.pointerEvents = "auto";
  }

  return (
    <nav className="w-full">
      <div className="px-6 lg:px-[40px] pb-3 pt-6 relative justify-between flex items-center">
        <div className="lg:hidden">
          <Image
            src="/images/logo-mobile.svg"
            alt="DKS Logo"
            height={29}
            width={80}
            className="lg:pt-4 lg:pl-2.5"
            unoptimized
          />
        </div>
        <div className="flex items-center text-2xl gap-2 font-waves">
          {page === "leaderboard" ? (
            <Image
              src={`/images/logo-mobile.svg`}
              alt="Rank #2"
              width={200}
              height={70}
              className="mb-1 hidden lg:block"
              unoptimized
            />
          ) : (
            <Image
              src="/images/logo-desktop.svg"
              alt="DKS Logo"
              height={70}
              width={70}
              className="lg:pt-4 lg:pl-2.5 w-8 h-8 lg:w-[70px] lg:h-[70px]"
              unoptimized
            />
          )}
        </div>
        <div className="relative flex items-start leading-none gap-2 text-xl font-wavesTiny">
          {/* DESKTOP VIEW */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-9">
              <div className="flex [&>*:last-child]:!border-none mr-2">
                {socialLinks.map((item, index) => (
                  <div className="px-4 border-r border-r-white" key={index}>
                    <Link href="#">
                      <Image
                        width={20}
                        height={20}
                        key={item.name}
                        src={item.icon}
                        alt={item.name}
                      />
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
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className="w-[240px]">
                    <NavigationMenuTrigger>
                      <div className="flex gap-4 items-center pl-1 text-base">
                        <route.icon className="w-6 h-6 mb-1" />
                        {navItems.find((item) => item.route === active)?.label}
                      </div>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="w-full">
                      {navItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.route}
                          legacyBehavior
                          passHref
                        >
                          <NavigationMenuLink
                            className={cn(
                              navigationMenuTriggerStyle(),
                              "py-3 px-5 justify-normal gap-4 text-xs hover:bg-foreground group hover:text-white"
                            )}
                          >
                            <item.icon className="w-6 h-6 mb-1 group-hover:fill-white" />
                            <p>{item.label}</p>
                          </NavigationMenuLink>
                        </Link>
                      ))}
                      <div className="px-3 flex flex-col">
                        <Separator className="bg-foreground/10 mt-16 mb-4" />
                        <div className="flex flex-col">
                          <p className="text-base font-bold">Referral code:</p>
                          <div className="flex justify-between items-baseline">
                            <span className="flex text-[28px] font-bold items-center gap-2">
                              87921
                              <Button variant="ghost" size="ghost">
                                <Icons.copy className="fill-foreground/50" />
                              </Button>
                            </span>
                            <p className="text-sm font-normal">1/3</p>
                          </div>
                        </div>
                        <Separator className="bg-foreground/10 mt-4" />
                        <Image
                          src="/images/interlace-logo.svg"
                          alt="DKS Logo"
                          width={179}
                          height={22}
                          className="mx-auto my-5"
                          unoptimized
                        />
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
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
                  {navItems.map((framework, index) => (
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
                      <framework.icon className="w-6 h-6 mr-3 mb-1.5" />
                      <span className="">{framework.label}</span>
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col h-full w-full items-center justify-end mt-28">
                  <div className="flex gap-6">
                    <Link href="#">
                      <Image
                        src="/images/icons/square-icon.svg"
                        alt="Web Icon"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                        unoptimized
                      />
                    </Link>
                    <Link href="#">
                      <Image
                        src="/images/icons/x-icon.svg"
                        width={20}
                        height={20}
                        alt="Web Icon"
                        className="w-5 h-5"
                        unoptimized
                      />
                    </Link>
                    <Link href="#">
                      <Image
                        src="/images/icons/discord-icon.svg"
                        alt="Web Icon"
                        width={20}
                        height={20}
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
                          <Icons.copy className="fill-foreground/50" />
                        </Button>
                      </span>
                      <p className="text-sm font-normal">1/3</p>
                    </div>
                  </div>
                  <Separator className="bg-foreground/10 mt-4" />
                  <Image
                    src="images/interlace-logo.svg"
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
