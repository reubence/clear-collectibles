import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function RewardsPointsButton({
  claimable,
  rewardProgress,
  rewardPointsNeeded,
  rewardsLevel,
  position = "right",
}) {
  return (
    <Link
      href="/reward"
      className={cn(
        "group absolute w-fit flex items-center transition-all duration-75 ease-in cursor-pointer",
        "hover:scale-105 active:scale-95",
        {
          "right-8 top-28 lg:top-36 2xl:right-12 2xl:top-[16%] translate-x-6 2xl:translate-x-12 ":
            position === "right",
          "left-1/2 -translate-x-1/2 top-7 lg:top-36 2xl:top-24":
            position === "center",
        }
      )}
    >
      <Image
        src="/icons2/hexagon_rewards.png"
        alt="Dashboard Nft Image"
        width={116}
        height={110}
        className={cn(
          "w-20 h-16 2xl:w-32 2xl:h-28 z-40 transition-all duration-150 ease-in-out",
          "group-hover:rotate-12 group-hover:scale-110 2xl:group-hover:scale-125"
        )}
      />

      <div
        className={cn(
          "relative bg-black/25 p-1 2xl:p-2 w-full h-fit flex flex-col text-white text-xs 2xl:text-2xl font-bold rounded-lg lg:rounded-lg 2xl:rounded-2xl -translate-x-6 2xl:-translate-x-12",
          {
            "border 2xl:border-2 border-green-500 bg-clip-content inset-0 p-0.5 2xl:p-[3px] bg-[#56E600] gap-0":
              claimable,
          }
        )}
      >
        {/* LEVEL BADGE */}
        <div className="absolute right-0 -translate-y-1/2 px-2 py-1 2xl:px-4 2xl:py-2.5 rounded-full bg-white text 2xl:text-3xl text-primary">
          {rewardsLevel}
        </div>

        <div className="ml-5 2xl:ml-11 flex place-items-end p-[1px] 2xl:p-1">
          <span className={cn({ "text-yellow-400": !claimable })}>
            {rewardProgress}
          </span>
          /{rewardPointsNeeded}
        </div>

        {/* progress bar */}
        <div className="min-w-[124px] 2xl:min-w-[267px] h-4 2xl:h-8 bg-black/30 relative rounded-md 2xl:rounded-xl">
          <div
            className={cn(
              "absolute top-0 left-0 h-full bg-yellow-400 rounded-md 2xl:rounded-xl overflow-hidden",
              {
                "!rounded-tr-none bg-green-500 pl-5 2xl:pb-2.5 2xl:pl-12":
                  claimable,
              }
            )}
            style={{
              width: `${
                rewardPointsNeeded <= rewardProgress
                  ? 100
                  : (rewardProgress / rewardPointsNeeded) * 100
              }%`,
            }}
          >
            {claimable && "Claim Reward"}
            <div
              className={cn(
                "absolute bottom-0 left-0 w-full h-1/2 bg-yellow-600/50",
                { hidden: claimable }
              )}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RewardsPointsButton;
