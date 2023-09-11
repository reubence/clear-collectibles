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
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";

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
    <ScrollArea className="w-full h-[calc(100vh-200px)] lg:h-fit">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="w-full flex flex-col gap-3 text-base text-muted-foreground/50 font-semibold">
          <p>
            Total Pixel Multiplier:{" "}
            <span className="font-bold text-foreground">60%</span>
          </p>{" "}
          <div className="flex justify-between w-full">
            <p>
              Level: <span className="font-bold text-foreground">10%</span>
            </p>
            <p>
              Booster: <span className="font-bold text-foreground">20%</span>
            </p>
          </div>{" "}
          <Separator className="w-full bg-white lg:hidden" />
          <ScrollArea className="lg:h-[250px]">
            <p className="font-normal text-sm lg:">
              There are two methods by which a user can acquire a multiplier to
              expedite their pixel acquisition in Zulpverse. Firstly, the user
              can attain a higher level booster based on the tier of the
              individual Zulpverse. The level of the booster is directly
              proportional to the level of the Zulpverse, thus higher level
              Zulpverses will yield greater level boosters. Secondly, users can
              purchase Booster packs which come in various tiers, such as
              bronze, silver, gold, and diamond. These Booster packs will also
              provide a multiplier to expedite pixel acquisition in Zulpverse.
              It is important to note that the multiplier gained from either
              method is dependent on the individual tier level of the Zulpverse,
              and the type of Booster pack purchased.
            </p>
          </ScrollArea>
          <Separator className="w-full bg-white lg:hidden" />
        </div>
        <div className="mt-4 lg:mt-0">
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
      </div>
    </ScrollArea>
  );
}

export default Multiplier;
