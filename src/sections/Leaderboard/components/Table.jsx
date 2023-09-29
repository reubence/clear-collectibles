import React from "react";
import Image from "next/image";


/**
 * @component Table
 * @description Represents a data grid with an overflow scrolling functionality.
 * This table has a responsive design and consists of rows representing data records. Each row displays a ranking, an avatar, a name, and a score.
 * The avatar is represented by a static image, and the other fields are static text.
 * The design includes responsive text size adjustments for small (sm) screens.
 * The table header and each row are styled with a white, bold, uppercase font.
 * The rows have a white background with a rounded border design.
 */

const Table = ({rank, selfRank,pfp}) => {
  return (
    <>
      <div className="relative overflow-x-auto w-full sm:w-[95%] h-full pb-2 border-b-[1.5px] border-[#ffffff4d]">
        <div className="w-full text-sm text-left">
          <div className="grid grid-cols-4 sm:grid-cols-4 text-[#c3edff] font-montserrat font-bold text-sm xl:text-base uppercase">
            <div className="px-3 sm:px-6 py-3">Ranking</div>
            <div className="px-3 sm:px-6 py-3 hidden sm:block lg:whitespace-nowrap">
             
            </div>
            <div className="px-3 sm:px-6 py-3 opacity-0 block sm:hidden">
              Matrica
            </div>
            <div className="px-3 sm:px-6 py-3">Name</div>
            <div className="px-3 sm:px-6 py-3">Bubbles</div>
          </div>
          
          {rank.map((option, index) => {

        

                return(

<div
            className="grid grid-cols-4 bg-white rounded-md my-2 items-center w-full"
            id="table-row"
            key={index}
          >
            <div className="px-4 sm:px-6 py-2 text-white font-montserrat font-bold text-xs sm:text-base whitespace-nowrap">
              {option?.rank}
            </div>
            <div className="px-4 sm:px-6 py-2 text-white font-montserrat font-bold text-xs sm:text-base">

              {(option.matricaPfp !== "https://matricalabs.io/people/nakamoto.png" && option.matricaPfp !== null && option.matricaPfp !== "https://matrica.io/assets/default_square.jpg")

                  ?
                <img src={option.matricaPfp} alt="/" className="rounded-[10px] w-[45px] h-[45px]"/>
                  :

                  <Image
                  src="/background/avatar.png"
                  width={45}
                  height={45}
                  alt="avatar"
                  priority
                  unoptimized
                  className="rounded-[10px]"
                />

              }
             
            </div>
            <div className="px-4 sm:px-6 py-2 text-white font-montserrat font-bold text-xs sm:text-base overflow-hidden overflow-ellipsis whitespace-nowrap">
              {option?.discord_name}
            </div>
            <div className="px-4 sm:px-6 py-2 text-white font-montserrat font-bold text-xs sm:text-base">
            {option?.totalXp}
            </div>
          </div>


                )

              



          })  

          }
      
        </div>
      </div>
      {/* hero row */}
      <div
        className="grid grid-cols-4 bg-white rounded-md my-2 items-center w-full sm:w-[95%]"
        id="table-row"
      >
        <div className="px-4 sm:px-6 py-2 text-white font-montserrat font-bold text-xs sm:text-base whitespace-nowrap">
          {(selfRank.rank !== null && selfRank.rank < 50 )
          ?
          selfRank.rank
          :
          <>--</>
        
        }
        </div>
        <div className="px-4 sm:px-6 py-2 text-white font-montserrat font-bold text-xs sm:text-base">
        {(pfp !== "https://matricalabs.io/people/nakamoto.png" && pfp !== null )

?
<img src={pfp} alt="/" className="rounded-[10px] w-[45px] h-[45px]"/>
:

<Image
src="/background/avatar.png"
width={45}
height={45}
alt="avatar"
priority
unoptimized
className="rounded-[10px]"
/>

}
        </div>
        <div className="px-4 sm:px-6 py-2 text-white font-montserrat font-bold text-xs sm:text-base overflow-hidden overflow-ellipsis whitespace-nowrap">
          {selfRank?.name}
        </div>
        <div className="px-4 sm:px-6 py-2 text-white font-montserrat font-bold text-xs sm:text-base">
        {selfRank?.totalXp}
        </div>
      </div>
    </>
  );
};

export default Table;
