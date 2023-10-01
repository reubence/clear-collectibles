"use client";

import AddressConfirmation from "@/components/confirmation-pages/address-confirmation";
import CheckboxConfirmation from "@/components/confirmation-pages/checkbox-confirmation";
import EmailConfirmation from "@/components/confirmation-pages/email-confirmation";
import StandardConfirmation from "@/components/confirmation-pages/standard-confirmation";
import ShopItem from "@/components/shop-page/shop-item";
import { Button, buttonVariants } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Command, CommandInput } from "@/components/ui/command";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Icons } from "@/components/ui/icons";
import NavBar from "@/components/layout/navbar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, {useState, useEffect} from "react";
import Head from "next/head";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
const filtering = [
  {
    name: "Items",
    label: "items",
  },
 
  
];

const shopData = [
  {
    image: "/images/nft-2.png",
    name: "Iphone 15 Pro Max",
    price: 52343,
    description: "Iphone 15 Pro Max",
    unreleased: true,
    unreleasedTimer: new Date("Sep 30, 2023 16:37:52"),
    label: "items"
  },
 
 
];

function Shop() {
  const [openFilterMobile, setOpenFilterMobile] = useState(false);
  const [selected, setSelected] = useState(0);
  const [filter, setFilter] = useState(shopData)
  const [popoverOpen, setPopoverOpen] = useState(-1);
  const [searchTerm, setSearchTerm] = useState('');
  const [xp, setXp] = useState(0);
  const [avatar, setAvatar] = useState(null);
  const router = useRouter();
  const { data: session, status } = useSession({
    required: false,
    onUnauthenticated() {
      router.push("/login");
    },
  });

  const filteredData = shopData.filter(item =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );


  async function getData(token) {
    try {
      //  Block of code to try
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/v1/my`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.text();
      if (data.length) {
        const result = JSON.parse(data);
        setXp(result?.totalXp);
        if (result.twitter.pfp) {
          setAvatar(result.twitter.url);
        }

      }
    } catch (e) {
      console.log(e);
    }
  }

  async function getToken(accessToken) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/v1/login`, {
      method: "POST",

      body: JSON.stringify({ accessToken: accessToken }),

      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });

    const resultText = await res.text();

    if (resultText.length) {
      const result = JSON.parse(resultText);

      if (result.token !== null && typeof result.token !== "undefined") {
        const expiry = Date.now() + 3600 * 1000;
        localStorage.setItem("token", result?.token);
        localStorage.setItem("expiry", expiry);
        await getData(result.token);
        
      }
    }
  }

  useEffect(() => {

    if(session?.accessToken){

   

    const token = localStorage.getItem("token");
    const expiry = localStorage.getItem("expiry");
    
    if (token && token !== null && typeof token !== "undefined" && Date.now() < expiry) {
      getData(token);
    }else{
      getToken(session?.accessToken)
    }
  }
    if (session?.error === "RefreshAccessTokenError") {
      localStorage.clear();
      signOut({ callbackUrl: "/login" });
    }
  }, [session]);
  return (
    <>
    <Head>
        <title>The Clearverse!</title>
        <meta
          name="description"
          content="A premier premint experience aimed at creating the strongest community supported by amazing contribution based technology. Built by Interlace."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="msapplication-TileColor" content="#6cd2ff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div
        className={cn(
          `h-screen font-g8 lg:overflow-y-hidden tallXS:!h-full bg-[#D7E8EF] overflow-y-auto `
        )}
            
        >
      <NavBar avatar={avatar}/>
      <div className="px-4 lg:px-12 pb-12 pt-4 w-full lg:h-[calc(100vh-112px)] flex flex-col relative">
        <div className="h-full w-full py-5 px-4 lg:p-[30px] border rounded-2xl bg-white/25">
          <div className="flex flex-col gap-4 lg:flex-row lg:justify-between items-start lg:items-center text-base lg:text-xl">
            <div className="flex items-center justify-between w-full lg:w-fit">
              <div className="gap-1.5 lg:gap-3 flex items-center uppercase font-extrabold text-xl lg:text-2xl">
                <Icons.shop className="w-6 h-6 lg:w-[40px] lg:h-[40px] mb-1 lg:pb-1 fill-foreground" />
                Shop
              </div>
              <Button
                variant="ghost"
                onClick={() => {
                  setOpenFilterMobile(!openFilterMobile);
                }}
                className=""
              >
                <Icons.filter className="lg:hidden w-5 h-5 fill-gray-400 stroke-gray-400" />
              </Button>
            </div>
            <div className="flex items-center justify-between w-full lg:w-fit whitespace-nowrap gap-[30px]">
              <span>
                <span className="font-normal lg:font-extrabold">Bubbles:</span>{" "}
                {xp}
              </span>

              

              <button
               disabled={true}
                className={cn(
                  buttonVariants(),
                  "min-w-fit !py-3.5 gap-3.5 text-sm lg:text-xl text-white capitalize lg:uppercase"
                )}
              >
                <Icons.clock className="hidden lg:block w-6 h-6 fill-white" />
                History
              </button>
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
              <ScrollArea className="lg:h-[calc(100vh-500px)] lg:pr-2.5">
                {filtering.map((filter, index) => (
                  <div
                    className="flex items-center justify-between mb-10 gap-8"
                    key={index}
                    onClick={() => {
                      const newData = shopData.filter((item) => item.label == filter.label)
                      setFilter(newData)
                    }}
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
                <div className="p-3 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-5">
                  {filteredData.map((item, index) => (
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
              
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE BOTTOM STICKY SHOP NAV */}
 
      </div>
    </>
  );
}

export default Shop;
