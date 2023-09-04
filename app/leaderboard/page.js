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
    <main className="">
      <ImageSlider />
      <div className="p-4 -translate-y-5 lg:-translate-y-7 lg:px-8 xl:px-28">
        <Table className="relative">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Rank</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Bubbles</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="round">
            {data.map((item, index) => (
              <TableRow key={index} className="">
                <TableCell className="">{item.rank}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell className="text-right">{item.bubbles}</TableCell>
              </TableRow>
            ))}
          </TableBody>

          {/* Changing this structure may cause errors */}
          <TableHeader>
            <TableRow className="w-full h-8 relative">
              <TableHead className="absolute w-full h-8 p-0">
                <div className="absolute top-1/2 w-full h-[1px] bg-white" />
              </TableHead>
            </TableRow>
          </TableHeader>

          {/* Fixed Row for User rank */}
          <TableBody className="round-fixed">
            <TableRow>
              <TableCell className="">232</TableCell>
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
