import React, { useState } from "react";
import { useScreenSize } from "@/hooks";
import PrizeRow from "./components/PrizeRow";
import Table from "./components/Table";
import { AnimatePresence, motion } from "framer-motion";

const Hero = ({rank, selfRank, pfp}) => {
  const { isMobileScreen } = useScreenSize();
  const [visibleView, setVisibleView] = useState('table'); // * "table" or "prizes" -> determines which view is visible on mobiles, set to "both" on larger screens * //

  return (
    <div className="flex flex-col w-full justify-center items-center h-[55%] z-[40] bg-transparent relative pt-0 sm:py-0">
      <div className="flex flex-col lg:flex-row w-full px-4 md:px-16 justify-center items-center h-full pt-4 gap-5">
        
        <div
          className={`${visibleView == "table" && 'hidden lg:flex'} flex flex-col justify-start items-center p-6 rounded-t-lg w-full lg:w-[35%] 2xl:w-[24%] h-full gap-8 order-1 lg:-order-none relative overflow-y-auto`}
          id="prizes-container"
        >
          <h1 className="text-white font-black font-montserrat text-base xl:text-[24px] uppercase text-left sm:text-center w-full">
            Leaderboard Prizes
          </h1>

          <PrizeRow division="5" description="10 SOL" top={false} number="1st" />
          <PrizeRow division="5" description="5 SOL" top={false} number="2nd"/>
          <PrizeRow division="5" description="3 SOL" top={false} number="3rd"/>
          <PrizeRow division="5" description="Get 3 Free Mints" top={true} />
          <PrizeRow division="10" description="Get 2 Free Mints" top={true} />
          <PrizeRow division="25" description="Get a Free Mint" top={true} />
        </div>
        <div className="flex lg:hidden w-full justify-start items-center gap-10">
          <button
            className={`font-montserrat uppercase font-bold ${
              visibleView === "table" ? "text-white" : "text-[#c4edff]"
            }`}
            onClick={() => setVisibleView("table")}
          >
            Rank
          </button>
          <button
            className={`font-montserrat uppercase font-bold ${
              visibleView === "prizes" ? "text-white" : "text-[#c4edff]"
            }`}
            onClick={() => setVisibleView("prizes")}
          >
            Prizes
          </button>
        </div>

       

        <AnimatePresence>

        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1}}
          className={`${visibleView == "prizes" && 'hidden lg:flex'} flex flex-col justify-start items-center p-4 rounded-t-lg w-full lg:w-[80%] h-full gap-2`}
          id="table-container"
        >
          <Table rank={rank} selfRank={selfRank} pfp={pfp} />
        </motion.div>
        </AnimatePresence>

        
      

      </div>
    </div>
  );
};

export default Hero;
