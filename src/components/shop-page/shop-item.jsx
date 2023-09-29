"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
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
  const [time, setTime] = useState(
    unreleasedTimer && unreleasedTimer.getTime()
  );
  useEffect(() => {
    unreleasedTimer &&
      setInterval(() => {
        var now = new Date().getTime();
        var timeleft = time - now;

        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

        setTime({ days, hours, minutes, seconds });
      }, 1000);
  }, []);

  return (
    <div
      className={cn(
        "relative col-span-1 bg-white rounded-2xl max-w-fit p-3 cursor-pointer hover:scale-95 transition-all ease-in-out",
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
          className="rounded-2xl w-[136px] h-[136px] lg:w-[176px] lg:h-[176px] aspect-square object-cover"
          unoptimized
        />
        {unreleased && (
          <div className="bg-foreground/50 backdrop-blur-md absolute left-0 top-0 rounded-xl lg:rounded-2xl w-full h-full text-white flex flex-col gap-1 items-center justify-center z-30">
            <Icons.hourglass />
            <p className="text-xs lg:text-sm font-bold uppercase">
              {time.days}d {time.hours}h {time.minutes}m {time.seconds}s
            </p>
          </div>
        )}

        {limited && (
          <div className="absolute left-0 top-0 w-full h-full text-white flex items-center justify-center">
            <div className="absolute w-full h-7 flex items-center gap-1 -top-2.5 lg:top-auto lg:bottom-0 left-0 bg-[#03B1FF] rounded-sm">
              <Icons.limited />
              <p className="whitespace-nowrap text-[8px] uppercase lg:text-[10px] font-bold text-white">
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
