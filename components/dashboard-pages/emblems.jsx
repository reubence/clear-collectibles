import React from "react";
import EMBLEM from "@/public/images/emblem.svg";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";

function Emblems() {
  return (
    <div className="flex flex-col justify-start gap-4 w-[calc(100vw-80px)] sm:w-[calc(768px-368px)]  h-[calc(100vh-174px)] lg:w-[25vw] lg:h-[60vh]">
      <span className="uppercase text-xl ml-2 col-span-2 text-left whitespace-nowrap">
        emblems
      </span>
      <Separator className="col-span-2" />

      <ScrollArea className="h-[310px]">
        <div className="grid grid-cols-2 w-full gap-8">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col items-center mx-auto group  hover:border-primary hover:bg-primary/20 hover:cursor-pointer border-2 border-transparent rounded-2xl transition-all duration-500 ease-in-out"
            >
              <Image
                src={EMBLEM}
                alt="Emblem Icon"
                height={80}
                width={80}
                className="rounded-2xl h-[80] w-[80px] lg:h-[80px] aspect-square object-cover"
                unoptimized
              />
              <h3 className="text-sm font-bold uppercase mt-3">
                SMB Inception
              </h3>
              <p className="text-sm font-normal uppercase text-foreground/50">
                subheading
              </p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export default Emblems;
