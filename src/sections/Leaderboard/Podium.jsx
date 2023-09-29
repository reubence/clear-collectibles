import React, { useState } from "react";
import Image from "next/image";
import { rankIcons } from "@/constants";
import { useScreenSize } from "@/hooks";
import BubbleVectors from "./components/BubbleVectors";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Podium = ({rank}) => {
  const [activeRank, setActiveRank] = useState(1); // * <1, 2, 3> as number * //
  const top3 = rank.filter((item) => item.rank <= 3)

  const handleLeftMove = () => {
    setActiveRank((prevRank) => (prevRank === 1 ? 3 : prevRank - 1));
  };

  const handleRightMove = () => {
    setActiveRank((prevRank) => (prevRank === 3 ? 1 : prevRank + 1));
  };

  return (
    <div className="flex flex-col w-full justify-end items-center max-h-[full] md:max-h-full z-[40] bg-transparent sm:bg-[#51caff] relative">
     
        <div className="lg:block hidden">
        <BubbleVectors />

        </div>
       
      
      <div className="flex flex-col  justify-end items-center h-full">
        <div className="flex w-full justify-center items-center h-full">
        <div  className={`!w-[35%] md:!w-[280px] lg:!w-[330px] relative top-[19px] md:top-[42px] -right-[23px] transition duration-500 ${activeRank == 2 ? 'scale-[1.05] lg:scale-[1.1]' : 'sacle-0'}`} 
          style={{
            backgroundImage:`url('/background/2.png')`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'contain',
            width:'100%'
        }}
          >
             {(top3[1].matricaPfp !== "https://matricalabs.io/people/nakamoto.png" && top3[1].matricaPfp !== null && top3[1].matricaPfp !== "https://matrica.io/assets/default_square.jpg")
          
          ?
          <img src={top3[1].matricaPfp} alt="/"  className="object-cover rounded-[17px] p-[5%] sm:rounded-[27px] sm:p-[13px] md:rounded-[35px] lg:rounded-[39px]  md:p-[16px] lg:p-[19px]"/>

          :
          <Image
            src="/background/avatar.png"
            alt="leaderboard-item"
            className="object-cover rounded-[17px] p-[5%] sm:rounded-[27px] sm:p-[13px] md:rounded-[35px] lg:rounded-[39px]  md:p-[16px] lg:p-[19px]"
            width={330}
            height={330}
            unoptimized
            priority
          />
          }
          </div>
          <div  className={`!w-[35%] md:!w-[280px] lg:!w-[350px] relative top-[4px] md:top-[14px] z-[999] transition duration-500 ${activeRank == 1 ? 'scale-105 lg:scale-105' : 'scale-[1]'}`}
          style={{
            backgroundImage:`url('/background/1.png')`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'contain',
            width:'100%'
        }}>
          {(top3[0].matricaPfp !== "https://matricalabs.io/people/nakamoto.png" && top3[0].matricaPfp !== null && top3[0].matricaPfp !== "https://matrica.io/assets/default_square.jpg")
          
        ?
        <img src={top3[0].matricaPfp} alt="/" className="object-cover rounded-[18px] p-[5%] sm:rounded-[27px] sm:p-[12px] md:rounded-[35px] lg:rounded-[42px]  md:p-[16px] lg:p-[20px]"/>

        :
        <Image
            src="/background/avatar.png"
            alt="leaderboard-item"
            width={350}
            height={350}
            unoptimized
            priority
            className="object-cover rounded-[18px] p-[5%] sm:rounded-[27px] sm:p-[12px] md:rounded-[35px] lg:rounded-[42px]  md:p-[16px] lg:p-[20px]"
          />

        }
      
          </div>
          <div  className={`!w-[35%] md:!w-[280px] lg:!w-[330px] relative top-[19px] md:top-[42px] -left-[23px] transition duration-500 ${activeRank == 3 ? 'scale-[1.05] lg:scale-[1.1]' : 'sacle-0'} `}
          style={{
            backgroundImage:`url('/background/3.png')`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'contain',
            width:'100%'
        }}>

{(top3[2].matricaPfp !== "https://matricalabs.io/people/nakamoto.png" && top3[2].matricaPfp !== null && top3[2].matricaPfp !== "https://matrica.io/assets/default_square.jpg")
          
          ?
          <img src={top3[2].matricaPfp} alt="/"  className="object-cover rounded-[17px] p-[5%] sm:rounded-[27px] sm:p-[13px] md:rounded-[35px] lg:rounded-[39px]  md:p-[16px] lg:p-[19px]"/>

          :
          <Image
            src="/background/avatar.png"
            alt="leaderboard-item"
            className="object-cover rounded-[17px] p-[5%] sm:rounded-[27px] sm:p-[13px] md:rounded-[35px] lg:rounded-[39px]  md:p-[16px] lg:p-[19px]"
            width={330}
            height={330}
            unoptimized
            priority
          />
          }
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between items-center h-[115px] sm:h-[90px] py-4 border-t-[2.5px] border-b-[2.5px] border-[#ffffff7d] sm:border-[#FFFFFF4D] bg-[#29bdff] z-50 px-5 gap-8">
        <div className="hidden xl:flex justify-center items-center">
          <span className="text-white font-montserrat font-black text-[20px] 2xl:text-[27px] opacity-10 uppercase">
            Leaderboard
          </span>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row justify-between items-center w-full">
          <div className="flex justify-between w-full sm:w-auto sm:justify-center items-center gap-5">
            <button
              className={`flex justify-center items-center w-[70px] h-[40px] sm:w-[103px] sm:h-[56px] rounded-[38px] border-2 border-[#7bd6ff] bg-[#FFFFFF1E] ${
                activeRank === 1 ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              onClick={handleLeftMove}
              disabled={activeRank === 1}
            >
              <BsChevronLeft className="text-white w-5 h-5" />
            </button>
            <Image
              src={rankIcons[activeRank - 1]}
              width={35}
              height={35}
              alt="first-rank-icon"
              className="block sm:hidden"
              unoptimized
            />
            <div className="flex justify-center items-center gap-3">
              <Image
                src={rankIcons[activeRank - 1]}
                width={35}
                height={35}
                alt="first-rank-icon"
                className="hidden sm:block"
                unoptimized
              />
              <span className="hidden md:inline text-white font-montserrat text-[24px] uppercase font-bold">
                Champion
              </span>
              <button
                className={`flex sm:hidden justify-center items-center w-[70px] h-[40px] sm:w-[103px] sm:h-[56px] rounded-[38px] border-2 border-[#7bd6ff] bg-[#FFFFFF1E] ${
                  activeRank === 3 ? "cursor-not-allowed" : "cursor-pointer"
                }`}
                onClick={handleRightMove}
                disabled={activeRank === 3}
              >
                <BsChevronRight className="text-white w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <div className="flex justify-center items-center gap-10">
              <div className="flex flex-col justify-start items-start min-w-[150px]">
                <span className="text-[#a9e5ff] uppercase text-sm sm:text-base font-bold font-montserrat">
                  Name
                </span>
                <span className="text-white uppercase text-base sm:text-[20px] font-bold font-montserrat">
                  {activeRank === 1
                    ? top3[0]?.discord_name
                    : activeRank === 2
                    ? top3[1]?.discord_name
                    : top3[2]?.discord_name}
                </span>
              </div>
              <div className="flex flex-col justify-start items-start">
                <span className="text-[#a9e5ff] uppercase text-sm sm:text-base font-bold font-montserrat">
                  Bubbles
                </span>
                <span className="text-white uppercase text-base sm:text-[20px] font-bold font-montserrat">
                  {activeRank === 1
                    ? top3[0]?.totalXp
                    : activeRank === 2
                    ? top3[1]?.totalXp
                    : top3[2]?.totalXp}
                </span>
              </div>
            </div>
            <button
              className={`hidden sm:flex justify-center items-center w-[70px] h-[40px] sm:w-[103px] sm:h-[56px] rounded-[38px] border-2 border-[#7bd6ff] bg-[#FFFFFF1E] ${
                activeRank === 3 ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              onClick={handleRightMove}
              disabled={activeRank === 3}
            >
              <BsChevronRight className="text-white w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="hidden xl:flex justify-center items-center">
          <span className="text-white font-montserrat font-black text-[20px] 2xl:text-[27px] opacity-10 uppercase">
            Leaderboard
          </span>
        </div>
      </div>
    </div>
  );
};

export default Podium;
