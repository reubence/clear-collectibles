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
}) {
  return (
    <div
      className={cn(
        "relative col-span-1 bg-white rounded-2xl max-h-[219px] lg:max-h-[264px] max-w-[200px] p-3 cursor-pointer transition-all",
        {
          "ring ring-offset-4 lg:ring-offset-8 ring-ring ring-offset-white/50":
            selected === index,
        }
      )}
      onClick={() => {
        setSelected(index);
      }}
    >
      {unreleased && (
        <div className="bg-foreground/50 absolute left-0 top-0 rounded-xl lg:rounded-2xl w-full h-full text-white flex items-center justify-center">
          {/* use unreleased timer object to create a countdown */}
          <p className="text-base font-bold uppercase">
            {unreleasedTimer.days}d {unreleasedTimer.hours}h{" "}
            {unreleasedTimer.minutes}m {unreleasedTimer.seconds}s
          </p>
        </div>
      )}

      <div className="relative">
        <Image
          src={image}
          alt="Clock Icon"
          height={176}
          width={176}
          className="rounded-2xl h-[136px] w-[176px] lg:h-[176px] aspect-square object-cover"
          unoptimized
        />
        {limited && (
          <div className="absolute left-0 top-0 rounded-xl lg:rounded-2xl w-full h-full text-white flex items-center justify-center">
            <div className="absolute w-full h-7 flex items-center gap-1 -top-2.5 lg:top-auto lg:bottom-0 left-0 bg-[#03B1FF] rounded-md">
              <Icons.limited />
              <p className="whitespace-nowrap text-[8px] uppercase lg:text-[11px] font-bold text-white">
                Limit 1 per person
              </p>
            </div>
          </div>
        )}
      </div>
      <p className="text-xs font-bold uppercase mt-2.5">SMB Inception</p>
      <p className="text-xl uppercase">2343</p>
    </div>
  );
}

export default ShopItem;
