import RewardItem from "@/components/ui/reward-item";
import RewardSlider from "@/components/ui/reward-slider";
import React from "react";

function Reward() {
  return (
    <main className="h-screen w-screen bg-gradient-to-b from-[#5E58FF] to-[#00C6FF] flex items-center">
      {/* <RewardItem /> */}
      <RewardSlider />
    </main>
  );
}

export default Reward;
