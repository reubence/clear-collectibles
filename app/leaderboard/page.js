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
    <main className="p-4">
      <Table className="border-none [box-shadow:0_0_0_1px_white] overflow-clip">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Rank</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="text-right">Bubbles</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="[&_tr:last-child]:rounded-r-lg [&_tr:first-child]:rounded-l-lg lg:[&_tr:last-child]:rounded-r-md lg:[&_tr:first-child]:rounded-l-md">
          {data.map((item, index) => (
            <TableRow key={index} className="border-none">
              <TableCell className="font-medium">{item.rank}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell className="text-right">{item.bubbles}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}

export default Leaderboard;
