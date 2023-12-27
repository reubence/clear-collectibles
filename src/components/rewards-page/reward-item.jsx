import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Icons } from "../ui/icons";

function RewardItem({
  onClick,
  reward = {
    name: "Golden Key",
    image: "/images/nft-pvp.png",
    price: 1,
    points: 166,
    id: 342,
    claimed: true,
    claimable: false,
  },
  claimable = reward.claimable,
  ...props
}) {
  return (
    <div
      className={cn(
        "relative font-g8 overflow-visible lg:m-6 transition-all duration-150 ease-in",
        {
          "cursor-pointer hover:scale-105 active:scale-95": reward.claimable,
          "opacity-40": !reward.claimable && !reward.claimed,
        }
      )}
      // do something on click
      onClick={() => null}
    >
      {" "}
      <div
        className={cn(
          "relative w-[111px] h-[137px] lg:w-[200px] lg:h-[268px] rounded-xl lg:rounded-3xl p-1 overflow-hidden",
          {
            "bg-[#F7AB16]": claimable,
            "bg-[#1A5DAB]": !claimable,
          }
        )}
      >
        <div className="bg-white flex aspect-square rounded-xl lg:rounded-3xl z-10 relative">
          <Image
            src={reward.image}
            alt="Dashboard Nft Image"
            width={340}
            height={340}
            className="w-full h-full"
          />
        </div>
        {/* bg accent divs start */}
        <div
          className={cn(
            "bg-[#FFDC30] w-1 lg:w-3.5 h-96 absolute rotate-45 -bottom-20 -right-24 lg:-right-12",
            { hidden: !claimable }
          )}
        />
        <div
          className={cn(
            "bg-[#FFDC30] w-7 lg:w-14 h-96 absolute rotate-45 -bottom-28 -right-12 lg:right-7",
            { hidden: !claimable }
          )}
        />
        {/* bg accent divs end */}
        {/* TEXT */}
        <span className="text-base lg:text-[28px] text-white font-bold absolute left-1/2 -translate-x-1/2 whitespace-nowrap bottom-1 lg:bottom-4">
          {window.innerWidth >= 1536 ? reward.name : "#" + reward.id}
        </span>
      </div>
      {/* CLAIMABLE / ALREADY CLAIMED BADGE */}
      {claimable && !reward.claimed ? (
        <div className="bg-[#56E600] w-20 h-6 lg:w-40 lg:h-11 absolute rounded-2xl -top-2 lg:-top-5 z-40 overflow-hidden">
          <div className="w-full h-1/2 bg-[#1CC800] absolute bottom-0" />
          <span className="text-white text-xs lg:text-2xl font-bold absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            Claimable
          </span>
        </div>
      ) : !claimable && reward.claimed ? (
        <div className="absolute -inset-24 lg:-inset-2 z-40 scale-50 lg:scale-100">
          <Icons.claimedIcon className="" />
        </div>
      ) : (
        <div className="absolute -inset-24 lg:-inset-2 z-40 scale-50 lg:scale-100">
          <Icons.padlock className="" />
        </div>
      )}
    </div>
  );
}

export default RewardItem;
