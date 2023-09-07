import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Icons } from "../ui/icons";

function ShopItem({
  index,
  selected,
  setSelected,
  image,
  unreleased,
  unreleasedTimer,
  limited,
  name,
  price,
}) {
  return (
    <div
      className={cn(
        "relative col-span-1 bg-white rounded-2xl max-h-[219px] lg:max-h-[264px] max-w-[200px] p-3 cursor-pointer hover:scale-95 transition-all",
        {
          "ring ring-offset-4 lg:ring-offset-8 ring-ring ring-offset-white/50 hover:scale-100":
            selected === index,
        }
      )}
      onClick={() => {
        setSelected(index);
      }}
    >
      <div className="relative">
        <Image
          src={image}
          alt="Clock Icon"
          height={176}
          width={176}
          className="rounded-2xl h-[136px] w-[176px] lg:h-[176px] aspect-square object-cover"
          unoptimized
        />
        {unreleased && (
          <div className="bg-foreground/50 absolute left-0 top-0 rounded-xl lg:rounded-2xl w-full h-full text-white flex flex-col gap-1 items-center justify-center z-30">
            {/* use unreleased timer object to create a countdown */}
            <Icons.hourglass className="" />
            <p className="text-xs lg:text-sm font-bold uppercase">
              {unreleasedTimer.days}d {unreleasedTimer.hours}h{" "}
              {unreleasedTimer.minutes}m {unreleasedTimer.seconds}s
            </p>
          </div>
        )}

        {limited && (
          <div className="absolute left-0 top-0 w-full h-full text-white flex items-center justify-center">
            <div className="absolute w-full h-7 flex items-center gap-1 -top-2.5 lg:top-auto lg:bottom-0 left-0 bg-[#03B1FF] rounded-sm">
              <Icons.limited />
              <p className="whitespace-nowrap text-[8px] uppercase lg:text-[11px] font-bold text-white">
                Limit 1 per person
              </p>
            </div>
          </div>
        )}
      </div>
      <p className="text-xs font-bold uppercase mt-2.5">{name}</p>
      <p className="text-xl uppercase">{price}</p>
    </div>
  );
}

export default ShopItem;
