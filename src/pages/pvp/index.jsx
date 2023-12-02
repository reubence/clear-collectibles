import AllNFT from "@/components/dashboard-pages/all-nft";
import Distribute from "@/components/dashboard-pages/distribute";
import Multiplier from "@/components/dashboard-pages/multiplier";
import ProfileStat from "@/components/dashboard-pages/profile-stat";
import TaskCompleted from "@/components/dashboard-pages/task-comlpeted";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const emblemData = [
  {
    icon: "/images/emblem.svg",
    label: "SMB Inception",
    subheading: "subheading",
  },
  {
    icon: "/images/emblem.svg",
    label: "SMB Inception",
    subheading: "subheading",
  },
  {
    icon: "/images/emblem.svg",
    label: "SMB Inception",
    subheading: "subheading",
  },
  {
    icon: "/images/emblem.svg",
    label: "SMB Inception",
    subheading: "subheading",
  },
  {
    icon: "/images/emblem.svg",
    label: "SMB Inception",
    subheading: "subheading",
  },
  {
    icon: "/images/emblem.svg",
    label: "SMB Inception",
    subheading: "subheading",
  },
  {
    icon: "/images/emblem.svg",
    label: "SMB Inception",
    subheading: "subheading",
  },
  {
    icon: "/images/emblem.svg",
    label: "SMB Inception",
    subheading: "subheading",
  },
  {
    icon: "/images/emblem.svg",
    label: "SMB Inception",
    subheading: "subheading",
  },
];
const data = [
  {
    icon: Icons.profile,
    label: "Profile",
    children: <ProfileStat />,
    value: "profile",
  },
  {
    icon: Icons.tasks,
    label: "Tasks",
    children: <TaskCompleted />,
    value: "tasks",
  },
  {
    icon: Icons.allNFT,
    label: "All NFTs",
    children: <AllNFT />,
    value: "nfts",
  },
  {
    icon: Icons.emblems,
    label: "Emblems",
    children: <AllNFT />,
    value: "emblems",
  },
];
let tabs = [
  { id: "level", label: "Level" },
  { id: "booster", label: "Booster Pack" },
];

let tableData = [
  {
    level: "5",
    booster: "5%",
  },
  {
    level: "10",
    booster: "10%",
  },
  {
    level: "15",
    booster: "15%",
  },
  {
    level: "20",
    booster: "20%",
  },
  {
    level: "25",
    booster: "25%",
  },
];
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
    </main>
  );
}
