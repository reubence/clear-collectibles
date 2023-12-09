import Image from "next/image";
import React, { useState } from "react";
import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import RewardItem from "./reward-item";
import { Button, buttonVariants } from "./button";
import { cn } from "@/lib/utils";
import { RewardProgress } from "./reward-progress";

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
      style={{ position: "relative", overflowY: "visible" }}
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
              "w-full border-r border-r-white bg-gray-950 h-[60px] relative -translate-x-1/2 translate-y-28",
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
                {i + 1}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}

      {/* <RewardProgress /> */}
    </Swiper>
  );
}

function SwiperButton({ nextSlide }) {
  const swiperInst = useSwiper();
  var content = <div></div>;

  if (nextSlide) {
    content = (
      <Button
        className={cn(
          buttonVariants(),
          "!bg-[#11A7FC] !w-fit transform !border-b-8 !border-blue-500 !py-8",
          "transform active:translate-y-0.5 active:border-none transition duration-150 ease-in-out z-10"
        )}
        onClick={() => swiperInst.slideNext()}
      >
        <svg
          width="42"
          height="32"
          viewBox="0 0 42 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.1999 14.4683L39.1999 14.4682L27.5332 2.80156L27.5332 2.8015L27.527 2.79547C27.1184 2.40079 26.5711 2.1824 26.003 2.18734C25.4349 2.19227 24.8914 2.42014 24.4897 2.82186C24.088 3.22358 23.8601 3.767 23.8552 4.3351C23.8503 4.90319 24.0686 5.45049 24.4633 5.85913L24.4633 5.85918L24.4694 5.86533L32.4375 13.8334H4.33464C3.76 13.8334 3.2089 14.0617 2.80257 14.468C2.39624 14.8744 2.16797 15.4255 2.16797 16.0001C2.16797 16.5747 2.39624 17.1258 2.80257 17.5322C3.2089 17.9385 3.76 18.1668 4.33464 18.1668H32.4375L24.4722 26.1321C24.2669 26.3313 24.103 26.5692 23.9901 26.8321C23.8765 27.0964 23.8167 27.3807 23.8142 27.6684C23.8117 27.9561 23.8666 28.2414 23.9755 28.5077C24.0844 28.774 24.2453 29.0159 24.4488 29.2193C24.6522 29.4228 24.8941 29.5836 25.1604 29.6926C25.4267 29.8015 25.712 29.8563 25.9997 29.8538C26.2873 29.8513 26.5717 29.7916 26.836 29.678C27.0989 29.5651 27.3368 29.4012 27.5361 29.1958L39.1999 17.532L39.1999 17.5319C39.6061 17.1256 39.8343 16.5746 39.8343 16.0001C39.8343 15.4256 39.6061 14.8746 39.1999 14.4683Z"
            fill="white"
            stroke="white"
          />
        </svg>
      </Button>
    );
  } else {
    content = (
      <Button
        className={cn(
          buttonVariants(),
          "!bg-[#11A7FC] !w-fit transform !border-b-8 !border-blue-500 !py-8",
          "transform active:translate-y-0.5 active:border-none transition duration-150 ease-in-out z-10"
        )}
        onClick={() => swiperInst.slidePrev()}
      >
        <svg
          width="42"
          height="32"
          viewBox="0 0 42 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.80009 14.4683L2.80014 14.4682L14.4668 2.80156L14.4668 2.8015L14.473 2.79547C14.8816 2.40079 15.4289 2.1824 15.997 2.18734C16.5651 2.19227 17.1086 2.42014 17.5103 2.82186C17.912 3.22358 18.1399 3.767 18.1448 4.3351C18.1497 4.90319 17.9314 5.45049 17.5367 5.85913L17.5367 5.85918L17.5306 5.86533L9.56247 13.8334H37.6654C38.24 13.8334 38.7911 14.0617 39.1974 14.468C39.6038 14.8744 39.832 15.4255 39.832 16.0001C39.832 16.5747 39.6038 17.1258 39.1974 17.5322C38.7911 17.9385 38.24 18.1668 37.6654 18.1668H9.56247L17.5278 26.1321C17.7331 26.3313 17.897 26.5692 18.0099 26.8321C18.1235 27.0964 18.1833 27.3807 18.1858 27.6684C18.1883 27.9561 18.1334 28.2414 18.0245 28.5077C17.9156 28.774 17.7547 29.0159 17.5512 29.2193C17.3478 29.4228 17.1059 29.5836 16.8396 29.6926C16.5733 29.8015 16.288 29.8563 16.0003 29.8538C15.7127 29.8513 15.4283 29.7916 15.164 29.678C14.9011 29.5651 14.6632 29.4012 14.4639 29.1958L2.80014 17.532L2.80009 17.5319C2.3939 17.1256 2.16572 16.5746 2.16572 16.0001C2.16572 15.4256 2.3939 14.8746 2.80009 14.4683Z"
            fill="white"
            stroke="white"
          />
        </svg>
      </Button>
    );
  }
  return content;
}

export default RewardSlider;
