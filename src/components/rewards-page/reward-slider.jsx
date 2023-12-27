import Image from "next/image";
import React, { useState } from "react";
import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import RewardItem from "./reward-item";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "../ui/icons";

const rewardsData = [
  // PREVIOUSLY CLAIMED STATE DATA
  {
    name: "Golden Key",
    image: "/images/nft-pvp.png",
    price: 1,
    points: 166,
    id: 342,
    claimed: true,
    claimable: false,
  }, // CLAIMABLE STATE DATA
  {
    name: "Golden Key",
    image: "/images/nft-pvp.png",
    price: 1,
    points: 166,
    id: 342,
    claimed: false,
    claimable: true,
  }, // DISABLED STATE DATA
  {
    name: "Golden Key",
    image: "/images/nft-pvp.png",
    price: 1,
    points: 166,
    id: 342,
    claimed: false,
    claimable: false,
  },
];

function RewardSlider() {
  const [coin, setCoin] = useState(1);
  const [points, setPoints] = useState(450);
  return (
    <Swiper
      initialSlide={2}
      centeredSlides={true}
      slideActiveClass="swiper-rewardSlide-active"
      breakpoints={{
        // Adjust the number of slides per view based on screen size
        400: {
          slidesPerView: 3,
        },
        640: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 5,
        },
        1024: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
        },
        1536: {
          slidesPerView: 6,
        },
      }}
      onActiveIndexChange={(swiper) => {
        setCoin(
          swiper.activeIndex === 0 ? 2 : swiper.activeIndex === 1 ? 1 : 3
        );
      }}
      className="mySwiper2"
      style={{
        position: "relative",
        overflowY: "visible",
      }}
    >
      {/* slider buttons go here */}
      <div className="hidden lg:flex w-full justify-between px-12 absolute -top-36">
        <SwiperButton nextSlide={false} />
        <SwiperButton nextSlide={true} />
      </div>
      <div
        className={cn({
          "sticky bg-[#1815B647] h-screen w-screen": true,
        })}
      />

      {/* reward item goes here - one per slide */}
      {Array.from({ length: 15 }).map((_, i) => (
        <SwiperSlide className={cn("w-fit h-fit", {})} key={i}>
          <RewardItem
            reward={
              i < 9
                ? // PREVIOUSLY CLAIMED STATE DATA
                  rewardsData[0]
                : i === 9
                ? // CLAIMABLE STATE DATA
                  rewardsData[1]
                : // DISABLED STATE DATA
                  rewardsData[2]
            }
          />
          {/* PROGRESS BAR */}
          <div
            className={cn(
              "w-full h-8 lg:h-[60px] relative translate-x-14 translate-y-5 tall2XL:translate-y-14 2xl:translate-y-14 2xl:translate-x-36 bg-[#252525] border-t-[5px] border-r-[4px] border-r-[#353533] border-t-[#353533] ",
              {
                "rounded-l-xl overflow-x-hidden overflow-y-auto": i === 0,
                // selecting last item, replace arr with data source
                "rounded-r-xl overflow-hidden":
                  i === Array.from({ length: 15 }).length - 1,
                "!border-none": i <= 9,
              }
            )}
          >
            {/* half bg bar */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#353533] border-l-[4px] border-b-[5px] border-l-[#252525] border-b-[#252525]" />
            {/* YELLOW progress bar div */}
            <div
              className={cn(
                "absolute bottom-0 w-full left-0 h-full bg-yellow-300 overflow-hidden border-l-[4px] border-l-[#F7AB16]",
                {
                  "!rounded-r-xl": i === 9,
                  hidden: i > 9,
                  [`w-32`]: i === 9 && points % 50 === 0,
                  "w-4": i === 9 && points % 50 > 0,
                }
              )}
            >
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#F7AB16] border-r-[4px] border-r-[#FFDC30]" />
            </div>

            {/* progress bar numbering 50-100-150-200-250 */}
            <div className="absolute bottom-0 left-0 w-full h-full flex justify-between text-base lg:text-3xl font-bold text-white">
              <div className="absolute -bottom-12 lg:-bottom-20 left-0 w-full h-full flex justify-between">
                <div
                  className={cn("-translate-x-1/2 text-white/50", {
                    "text-white": i === 9,
                  })}
                  key={i}
                >
                  {50 * i}
                </div>
              </div>
              {/* progress bar step nos */}
              <div
                className={cn(
                  "w-8 h-8 lg:w-[72px] lg:h-[72px] -translate-x-1/2 translate-y-20 lg:translate-y-36 text-white text-sm lg:text-3xl bg-[#FFDC30] border-2 lg:border-4 border-[#F7AB16] rounded-full flex items-center justify-center font-extrabold",
                  {
                    "font-outline-1 lg:font-outline-3": i < 9,
                    "bg-[#283A86] font-outline-none": i === 9,
                    "bg-[#353533] font-outline-none border-[#252525]": i > 9,
                  }
                )}
              >
                {i}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function SwiperButton({ nextSlide }) {
  const swiperInst = useSwiper();
  var content = <div></div>;

  if (nextSlide) {
    content = (
      <Button
        variant="gameSecondary"
        className={""}
        onClick={() => swiperInst.slideNext()}
      >
        <Icons.arrowRight />
      </Button>
    );
  } else {
    content = (
      <Button
        variant="gameSecondary"
        className={""}
        onClick={() => swiperInst.slidePrev()}
      >
        <Icons.arrowLeft />
      </Button>
    );
  }
  return content;
}

export default RewardSlider;
