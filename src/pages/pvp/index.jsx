import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export default function PVP() {
  const [editProfile, setEditProfile] = useState(false);
  const [activeNFTIndex, setActiveNFTIndex] = useState(2); // null indicates no active div

  return (
    <main className="h-screen w-screen bg-gradient-to-b from-[#7E2EF7] to-[#9C93FF]">
      {/* BACKGROUND ELLIPSE SVGs */}
      <div className="absolute -z-0">
        <svg
          width="1920"
          height="1080"
          viewBox="0 0 1920 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="object-cover"
        >
          <g filter="url(#filter0_f_1_8072)">
            <circle cx="959.5" cy="581.5" r="374.5" fill="#C5ACFF" />
          </g>
          <circle
            cx="959.5"
            cy="567.5"
            r="464"
            stroke="white"
            stroke-opacity="0.1"
            stroke-width="41"
          />
          <circle
            cx="960"
            cy="585"
            r="602.5"
            stroke="white"
            stroke-opacity="0.06"
            stroke-width="9"
          />
          <circle
            cx="960"
            cy="585"
            r="958"
            stroke="white"
            stroke-opacity="0.05"
            stroke-width="90"
          />
          <defs>
            <filter
              id="filter0_f_1_8072"
              x="367"
              y="-11"
              width="1185"
              height="1185"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="109"
                result="effect1_foregroundBlur_1_8072"
              />
            </filter>
          </defs>
        </svg>
      </div>
      {/* DESKTOP NFT IMAGE  */}
      <Image
        src="/images/nft-pvp.png"
        alt="Dashboard Nft Image"
        width={1000}
        height={1000}
        className="hidden lg:block absolute left-0 xl:left-1/2  xl:-translate-x-1/2 -mb-10 z-10 w-[600px] h-[600px] 
                  lg:bottom-[262px]
                  xl:w-[calc(100vw-750px)] xl:h-[calc(100vw-750px)] xl:bottom-[136px]
                  2xl:w-[calc(100vw-700px)] 2xl:max-w-[800px] 2xl:max-h-[800px] 2xl:bottom-[40px]
                  3xl:h-[calc(100vw-700px)] 3xl:max-w-[850px] 3xl:max-h-[850px] 
                  tallXS:!bottom-[138px]"
      />

      {/* SELECT FROM AVAILABLE NFTs */}
      <div className=" pl-6 space-y-6 lg:pl-[40px] h-fit absolute w-fit xl:top-1/2  xl:-translate-y-1/2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "rounded-2xl transition-colors duration-300 ease-in hover:opacity-100 cursor-pointer p-1",
              {
                "opacity-100 border-4 bg-clip-content border-yellow-400 bg-white":
                  activeNFTIndex === i,
                " inset-0 bg-gradient-to-r from-white to-transparent ":
                  activeNFTIndex !== i,
              }
            )} // Adjust hover and border color as needed
            onClick={() => setActiveNFTIndex(i)}
          >
            <div className={cn("w-[460px] h-[150px] rounded-2xl")}></div>
          </div>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="absolute flex gap-3 right-12 bottom-12 ">
        <div className="flex">
          <Button
            variant="game"
            className={cn(
              "text-[40px] font-semibold font-g8 text-[#353533] !rounded-r-none"
            )}
          >
            <Icons.controller className="w-14 h-14 mr-2" />
            PVP
          </Button>
          <Select>
            <SelectTrigger
              className={cn(
                "w-[180px] !rounded-l-none",
                "border-b-8 border-b-blue-500 ",
                buttonVariants(),
                "bg-[#11A7FC] !w-fit"
              )}
            ></SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </main>
  );
}
