import Image from "next/image";
import React, { useState } from "react";
import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import RewardItem from "./reward-item";
import { Button, buttonVariants } from "./button";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";

function RewardSlider() {
  const [coin, setCoin] = useState(1);
  const [points, setPoints] = useState(166);
  return (
    <Swiper
      initialSlide={2}
      grabCursor={true}
      centeredSlides={true}
      breakpoints={{
        // Adjust the number of slides per view based on screen size
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
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
      <div className="w-full flex justify-between px-12 absolute -top-36">
        <SwiperButton nextSlide={false} />
        <SwiperButton nextSlide={true} />
      </div>

      {/* reward item goes here - one per slide */}
      {Array.from({ length: 15 }).map((_, i) => (
        <SwiperSlide className="w-fit h-fit" key={i}>
          <RewardItem claimable={i >= 3 ? true : false} />
          {/* Progress bar */}
          <div
            className={cn(
              "w-full border-r border-r-white bg-gray-950 h-[60px] relative ml-24 translate-y-28",
              {
                "rounded-l-lg overflow-x-hidden overflow-y-auto": i === 0,
              }
            )}
          >
            {/* bg div */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gray-800 border-b-8 border-b-gray-950" />
            {/* progress bar div */}
            <div
              className={cn(
                "absolute bottom-0 w-full left-0 h-full bg-yellow-300",
                {
                  "rounded-r-lg": i === 3,
                  hidden: i >= 4,
                  "w-1/2": i == 3,
                }
              )}
            />

            <div className="absolute bottom-0 left-0 w-full h-full flex justify-between text-3xl font-bold text-white">
              {/* progress bar numbering 50-100-150-200-250 */}
              <div className="absolute -bottom-20 left-0 w-full h-full flex justify-between">
                <div
                  className={cn("-translate-x-1/2 text-white/50", {
                    "text-white": i === 3,
                  })}
                  key={i}
                >
                  {50 * i}
                </div>
              </div>
              {/* progress bar step nos */}
              <div
                className={cn(
                  "w-[72px] h-[72px] -translate-x-1/2 translate-y-36 bg-yellow-300 border-4 border-yellow-400 rounded-full flex items-center justify-center font-outline-2 font-bold"
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
