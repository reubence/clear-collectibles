"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow } from "swiper/modules";

export default function ImageSlider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          depth: 600,
          slideShadows: true,
          stretch: 0,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <div className="flex flex-col lg:flex-row w-full p-5 gap-3 justify-center lg:justify-between items-center bg-white/50 -translate-y-5 lg:-translate-y-3">
          <div className="hidden text-2xl font-black text-foreground/50 uppercase">
            leaderboard
          </div>
          <div className="flex justify-between items-center w-full">
            <SwiperButton nextSlide={false} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M14.999 29.0646C-0.000934703 29.0646 0.00536119 14.4943 0.0177904 14.2438C0.41157 6.31096 6.96829 0 14.999 0C23.0297 0 29.5864 6.31096 29.9802 14.2439C29.9926 14.4944 29.9989 29.0646 14.999 29.0646Z"
                fill="#FFE27A"
              />
              <path
                d="M14.9999 28.4881C6.96922 28.4881 0.412746 22.1771 0.018886 14.2441C0.00645681 14.4946 0 14.7466 0 15.0001C0 23.2844 6.71571 30.0001 14.9999 30.0001C23.2841 30.0001 29.9999 23.2844 29.9999 15.0001C29.9999 14.7466 29.9934 14.4946 29.981 14.2441C29.5871 22.1771 23.0306 28.4881 14.9999 28.4881Z"
                fill="#F9CF58"
              />
              <path
                d="M14.9996 25.8368C3.20661 25.8368 3.19079 14.2404 3.20661 13.9904C3.59651 7.81645 8.72735 2.92969 14.9996 2.92969C21.2718 2.92969 26.4026 7.81645 26.7925 13.9904C26.8083 14.2403 26.7925 25.8368 14.9996 25.8368Z"
                fill="#FFBA57"
              />
              <path
                d="M14.9989 25.3049C8.72676 25.3049 3.59681 20.418 3.20691 14.2441C3.19109 14.4942 3.18213 14.7462 3.18213 15.0001C3.18213 21.5264 8.47268 26.8169 14.9989 26.8169C21.5251 26.8169 26.8157 21.5264 26.8157 15.0001C26.8157 14.7461 26.8067 14.4942 26.7909 14.2441C26.401 20.418 21.271 25.3049 14.9989 25.3049Z"
                fill="#FFAC3E"
              />
              <path
                d="M15.6743 22.0214C14.8539 22.0214 14.1888 21.3564 14.1888 20.5359V19.7502V12.2107C14.1888 12.2107 13.2999 13.1021 12.2364 12.5672C11.4072 12.1502 11.4072 11.0769 11.4072 11.0769L13.2388 7.98523C13.5062 7.53375 13.9921 7.25684 14.5169 7.25684H15.6743C16.4947 7.25684 17.1598 7.92188 17.1598 8.74237V19.7502V20.5359C17.1598 21.3564 16.4947 22.0214 15.6743 22.0214Z"
                fill="#FFE27A"
              />
              <path
                d="M13.9859 11.0404C13.5916 11.706 12.7533 11.9946 12.0541 11.6633C11.7711 11.5292 11.553 11.3209 11.4079 11.0749C10.9954 11.7727 11.2188 12.6704 11.9056 13.0946C12.6139 13.532 13.5604 13.2708 13.9846 12.5545L14.1901 12.2076V11.0961C14.1901 10.9846 14.0428 10.9443 13.9859 11.0404Z"
                fill="#F9CF58"
              />
              <path
                d="M15.6757 21.2346C14.8553 21.2346 14.1902 20.5695 14.1902 19.749V21.2611C14.1902 22.0816 14.8553 22.7466 15.6757 22.7466C16.4961 22.7466 17.1612 22.0816 17.1612 21.2611V19.749C17.1612 20.5695 16.4961 21.2346 15.6757 21.2346Z"
                fill="#F9CF58"
              />
            </svg>
            <SwiperButton nextSlide={true} />
          </div>
          <div className="flex justify-between w-full">
            <div className="text-base font-bold text-center uppercase">
              <span className="text-foreground/50">Name</span> <br /> Supersimon
            </div>
            <div className="text-base font-bold text-center uppercase">
              <span className="text-foreground/50">Points</span> <br /> 10,921
            </div>
          </div>
        </div>
      </Swiper>
    </>
  );
}

function SwiperButton({ nextSlide }) {
  const swiperInst = useSwiper();
  var content = <div></div>;

  if (nextSlide && swiperInst.slides.length - 1 !== swiperInst.activeIndex) {
    content = (
      <button
        className={`bg-[#EEEAC8] rounded-full px-5 py-1`}
        onClick={() => swiperInst.slideNext()}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.3905 22.276C12.8712 22.7566 13.6275 22.7936 14.1505 22.3869L14.2761 22.276L19.6095 16.9426C20.0901 16.462 20.1271 15.7057 19.7204 15.1826L19.6095 15.057L14.2761 9.72369C13.7554 9.203 12.9112 9.203 12.3905 9.72369C11.9099 10.2043 11.8729 10.9606 12.2796 11.4837L12.3905 11.6093L16.78 15.9998L12.3905 20.3904C11.9099 20.871 11.8729 21.6273 12.2796 22.1504L12.3905 22.276Z"
            fill="black"
          />
        </svg>
      </button>
    );
  } else {
    content = (
      <button
        className={`bg-[#EEEAC8] rounded-full px-5 py-1`}
        onClick={() => swiperInst.slidePrev()}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.6095 22.276C19.1288 22.7566 18.3725 22.7936 17.8495 22.3869L17.7239 22.276L12.3905 16.9426C11.9099 16.462 11.8729 15.7057 12.2796 15.1826L12.3905 15.057L17.7239 9.72369C18.2446 9.203 19.0888 9.203 19.6095 9.72369C20.0901 10.2043 20.1271 10.9606 19.7204 11.4837L19.6095 11.6093L15.22 15.9998L19.6095 20.3904C20.0901 20.871 20.1271 21.6273 19.7204 22.1504L19.6095 22.276Z"
            fill="black"
          />
        </svg>
      </button>
    );
  }
  return content;
}
