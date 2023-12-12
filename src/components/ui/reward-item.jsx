import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Icons } from "./icons";

function RewardItem({ claimable = false, onClick, reward, ...props }) {
  return (
    <div className="relative font-g8 overflow-visible m-6 translate-x-full">
      <div
        className={cn(
          "relative w-[236px] h-[304px] rounded-2xl lg:rounded-3xl p-1 overflow-hidden",
          {
            "bg-[#F7AB16]": claimable,
            "bg-[#1A5DAB]": !claimable,
          }
        )}
      >
        <div className="bg-white flex aspect-square rounded-2xl lg:rounded-3xl z-10 relative">
          <Image
            src="/images/nft-pvp.png"
            alt="Dashboard Nft Image"
            width={340}
            height={340}
            className="w-full h-full"
          />
        </div>
        <div
          className={cn(
            "bg-[#FFDC30] w-3.5 h-96 absolute rotate-45 -bottom-20 -right-12",
            { hidden: !claimable }
          )}
        />
        <div
          className={cn(
            "bg-[#FFDC30] w-14 h-96 absolute rotate-45 -bottom-28 right-7",
            { hidden: !claimable }
          )}
        />
        {/* TEXT */}
        <span className="text-[28px] text-white font-bold absolute left-1/2 -translate-x-1/2 whitespace-nowrap bottom-4">
          Golden Key
        </span>
      </div>
      {/* CLAIMABLE / ALREADY CLAImED BADGE */}
      {claimable ? (
        <div className="bg-[#56E600] w-40 h-11 absolute rounded-lg -top-5 z-40 overflow-hidden">
          <div className="w-full h-1/2 bg-[#1CC800] absolute bottom-0" />
          <span className="text-white text-2xl font-bold absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            Claimable
          </span>
        </div>
      ) : (
        <div className="absolute -inset-2 z-40">
          <Icons.claimedIcon className="" />
        </div>
      )}
    </div>
  );
}

export default RewardItem;
