import React from "react";
import EMBLEM from "@/public/images/emblem.svg";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import { Tilt } from "react-tilt";
import { set } from "zod";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 700, // Transform perspective, the lower the more extreme the tilt gets.
  // scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

function Emblems({ emblemData }) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(0);
  return (
    <div className="flex flex-col justify-start gap-4 w-[calc(100vw-80px)] sm:w-[calc(768px-368px)] lg:w-[35vw] xl:w-[27vw]">
      <span className="uppercase text-xl ml-2 col-span-2 text-left whitespace-nowrap flex items-center justify-between">
        emblems
        {open && (
          <span className="">
            <Button
              variant="secondary"
              size="sm"
              className="!px-3 mr-2"
              onClick={() => {
                setOpen(false);
              }}
            >
              <Icons.backArrow className="fill-none stroke-foreground" />
            </Button>
            Back
          </span>
        )}
      </span>
      <Separator className="col-span-2" />

      <ScrollArea className="h-[430px]">
        <div className="grid grid-cols-2 w-full h-full gap-8 relative p-3.5">
          {!open ? (
            emblemData.map((item, i) => (
              <Tilt key={i} options={defaultOptions}>
                <div
                  onClick={() => {
                    setSelected(i);
                    setOpen(true);
                  }}
                  className="flex flex-col items-center mx-auto group p-1 hover:border-primary hover:shadow-2xl hover:cursor-pointer border-2 border-transparent rounded-2xl transition-all duration-500 ease-in-out"
                >
                  <Image
                    src={item.icon}
                    alt="Emblem Icon"
                    height={120}
                    width={120}
                    className="rounded-2xl h-[80] w-[80px] xl:h-[120px] xl:w-[120px] aspect-square object-cover"
                    unoptimized
                  />
                  <h3 className="text-center text-sm font-bold uppercase mt-3">
                    {item.label}
                  </h3>
                  <p className="text-sm font-normal uppercase text-foreground/50">
                    {item.subheading}
                  </p>
                </div>
              </Tilt>
            ))
          ) : (
            <div className="col-span-2 flex flex-col gap-3 w-full h-full justify-center items-center">
              <Image
                src={"/images/emblem.svg"}
                alt="Emblem Icon"
                height={160}
                width={160}
                className="rounded-2xl h-[120] w-[120px] lg:h-[160px] lg:w-[160px] aspect-square object-cover mb-3"
                unoptimized
              />
              <h3 className="text-2xl font-bold uppercase mt-3">
                SMB Inception
              </h3>
              <p className="text-xl font-normal uppercase text-foreground/50">
                subheading
              </p>
              <p className="text-base text-center font-medium text-foreground/50 mt-7">
                Attain this prestigious badge by securing a position among the
                top 100 holders of Bananas
              </p>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}

export default Emblems;
