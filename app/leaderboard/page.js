import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import ImageSlider from "@/components/ui/image-slider";
import Image from "next/image";

const data = [
  {
    rank: "1",
    name: "Evocator",
    bubbles: "2500",
  },
  {
    rank: "2",
    name: "Evocator",
    bubbles: "1500",
  },
  {
    rank: "3",
    name: "Evocator",
    bubbles: "3500",
  },
  {
    rank: "4",
    name: "Evocator",
    bubbles: "4500",
  },
  {
    rank: "5",
    name: "Evocator",
    bubbles: "5500",
  },
  {
    rank: "6",
    name: "Evocator",
    bubbles: "2000",
  },
  {
    rank: "7",
    name: "Evocator",
    bubbles: "3000",
  },
];

function Leaderboard() {
  return (
    <main className="relative">
      <ImageSlider />
      <div className="p-4 -translate-y-2 2xl:-translate-y-8 lg:px-8 xl:px-28 relative h-full w-full">
        <div className="hidden absolute lg:flex w-full h-screen top-0 left-0 -z-50 bg-repeat bg-[url(/images/bg-repeat.svg)] opacity-[0.15]" />
        <Table className="relative">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] lg:w-[260px]">Rank</TableHead>
              <TableHead className="invisible md:visible">
                Matrica pfp
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Bubbles</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="round">
            {data.map((item, index) => (
              <TableRow key={index} className="">
                <TableCell className="">{item.rank}</TableCell>
                <TableCell className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="46"
                    viewBox="0 0 42 46"
                    fill="none"
                    class="relative overflow-hidden"
                  >
                    <defs className="bg-black">
                      <clipPath id="cut-off-bottom">
                        <path d="M19.38 0.918444C20.3851 0.3488 21.6154 0.3488 22.6204 0.918444L31.0052 5.67095L39.3134 10.5562C40.3093 11.1417 40.9244 12.2072 40.9336 13.3624L41.0102 23.0001L40.9336 32.6378C40.9244 33.793 40.3093 34.8585 39.3134 35.4441L31.0052 40.3293L22.6204 45.0818C21.6154 45.6514 20.3851 45.6514 19.38 45.0818L10.9952 40.3293L2.68703 35.4441C1.6912 34.8585 1.07603 33.793 1.06685 32.6378L0.990234 23.0001L1.06685 13.3624C1.07603 12.2072 1.6912 11.1417 2.68703 10.5562L10.9952 5.67095L19.38 0.918444Z" />
                      </clipPath>
                    </defs>
                    {/* MATRICA PFP IMAGE GOES HERE */}
                    <image
                      width="42"
                      height="46"
                      xlinkHref="/images/nft-2.png"
                      clip-path="url(#cut-off-bottom)"
                      className="absolute top-0 left-0"
                    />
                  </svg>
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell className="text-right">{item.bubbles}</TableCell>
              </TableRow>
            ))}
          </TableBody>

          {/* Changing this structure may cause errors */}
          <TableHeader>
            <TableRow className="w-full h-8 relative">
              <TableHead className="absolute w-full h-8 p-0 lg:p-0">
                <div className="absolute top-1/2 w-full h-[1px] bg-white" />
              </TableHead>
            </TableRow>
          </TableHeader>

          {/* Fixed Row for User rank */}
          <TableBody className="round-fixed">
            <TableRow>
              <TableCell className="">232</TableCell>
              <TableCell className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="46"
                  viewBox="0 0 42 46"
                  fill="none"
                  class="relative overflow-hidden"
                >
                  <defs className="bg-black">
                    <clipPath id="cut-off-bottom">
                      <path d="M19.38 0.918444C20.3851 0.3488 21.6154 0.3488 22.6204 0.918444L31.0052 5.67095L39.3134 10.5562C40.3093 11.1417 40.9244 12.2072 40.9336 13.3624L41.0102 23.0001L40.9336 32.6378C40.9244 33.793 40.3093 34.8585 39.3134 35.4441L31.0052 40.3293L22.6204 45.0818C21.6154 45.6514 20.3851 45.6514 19.38 45.0818L10.9952 40.3293L2.68703 35.4441C1.6912 34.8585 1.07603 33.793 1.06685 32.6378L0.990234 23.0001L1.06685 13.3624C1.07603 12.2072 1.6912 11.1417 2.68703 10.5562L10.9952 5.67095L19.38 0.918444Z" />
                    </clipPath>
                  </defs>
                  {/* MATRICA PFP IMAGE GOES HERE */}
                  <image
                    width="42"
                    height="46"
                    xlinkHref="/images/nft-2.png"
                    clip-path="url(#cut-off-bottom)"
                    className="absolute top-0 left-0"
                  />
                </svg>
              </TableCell>

              <TableCell>EVOCATOR</TableCell>
              <TableCell className="text-right">7002</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </main>
  );
}

export default Leaderboard;
