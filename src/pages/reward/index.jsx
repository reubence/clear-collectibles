import NavBar from "@/components/layout/navbar";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import RewardItem from "@/components/ui/reward-item";
import RewardSlider from "@/components/ui/reward-slider";
import RewardsPointsButton from "@/components/ui/rewards-badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";

function Reward() {
  const [rewardPointsNeeded, setRewardPointsNeeded] = useState(300);
  const [rewardProgress, setRewardProgress] = useState(146);
  const [claimable, setClaimable] = useState(
    rewardPointsNeeded <= rewardProgress
  );
  const [rewardsLevel, setRewardsLevel] = useState(6);

  const [avatar, setAvatar] = React.useState(null);
  return (
    <main className="relative h-screen w-screen bg-gradient-to-b from-[#5E58FF] to-[#00C6FF] ">
      {/* DESKTOP NAVIGATION */}
      <div className="hidden lg:block">
        <NavBar avatar={avatar} />
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        className={cn(
          "group absolute w-fit flex gap-4 lg:hidden items-center right-8 top-8 transition-all duration-150 ease-in cursor-pointer"
        )}
      >
        <Link
          href={"/pvp"}
          className={cn(
            buttonVariants({ variant: "gameSecondary" }),
            "!py-2 !px-5 ",
            "active:scale-95"
          )}
        >
          Back
        </Link>
        <Icons.skullLogo className="w-12 h-12 fill-white" />
      </div>

      {/* REWARDS BADGE */}
      <RewardsPointsButton
        claimable={claimable}
        rewardProgress={rewardProgress}
        rewardPointsNeeded={rewardPointsNeeded}
        rewardsLevel={rewardsLevel}
        position="center"
      />
      {/* SLIDER */}
      <div className="relative pt-32 lg:pt-48">
        <RewardSlider />
      </div>

      {/* STYLING */}
      {/* <div className="bg-[#1815B647] h-[17vh] left-0 right-0 bottom-0 absolute z-0" /> */}
    </main>
  );
}

export default Reward;
