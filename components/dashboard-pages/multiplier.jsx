"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { motion } from "framer-motion";

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

function Multiplier() {
  let [activeTab, setActiveTab] = React.useState(tabs[0].id);

  return (
    <div className="">
      <Tabs defaultValue="level" className="w-full">
        <TabsList className="flex justify-between items-center bg-[#D8E5EC] p-3 mb-7">
          {tabs.map((tab) => (
            <div className="relative w-full" key={tab.id}>
              <TabsTrigger
                className="relative font-bold text-sm lg:text-xl leading-none"
                value={tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="multiplier"
                    transition={{
                      type: "spring",
                      xbounce: 0.2,
                      duration: 0.6,
                    }}
                    className="absolute w-1 h-1 rounded-full bg-foreground right-1/2 mt-6"
                  />
                )}
                {tab.label}
              </TabsTrigger>
            </div>
          ))}
        </TabsList>
        <TabsContent value="level" className="w-full h-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="">Level</TableHead>
                <TableHead>%Booster</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.level}</TableCell>
                  <TableCell>{item.booster}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent
          value="booster"
          className="flex flex-col gap-5 font-bold text-foreground/50"
        ></TabsContent>
      </Tabs>
    </div>
  );
}

export default Multiplier;
