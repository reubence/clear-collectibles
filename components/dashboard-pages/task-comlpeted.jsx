import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Icons } from "../ui/icons";
import { motion } from "framer-motion";

const stats = [
  { label: "Total Bubbles", value: 9921 },
  { label: "Total Clear Collectibles", value: 97 },
  { label: "Rank", value: 7 },
  { label: "Join Date", value: "23.09.08" },
];
let tabs = [
  { id: "tasks", label: "Tasks" },
  { id: "completed", label: "Completed" },
];

function TaskCompleted() {
  let [activeTab, setActiveTab] = React.useState(tabs[0].id);
  return (
    <Tabs
      defaultValue="tasks"
      className="w-[calc(100vw-80px)] sm:w-[calc(768px-368px)] lg:w-[35vw] xl:w-[27vw] h-[460px]"
    >
      <TabsList>
        {tabs.map((tab) => (
          <div className="relative" key={tab.id}>
            <TabsTrigger
              className="relative font-bold text-xl leading-none"
              value={tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="dot"
                  transition={{ type: "spring", xbounce: 0.2, duration: 0.6 }}
                  className="absolute w-1.5 h-1.5 rounded-full bg-foreground right-1/2 mt-10"
                />
              )}
              {tab.label}
            </TabsTrigger>
          </div>
        ))}
      </TabsList>
      <Separator className="mt-4 mb-7" />
      <TabsContent
        value="tasks"
        className="flex flex-col items-start gap-4 font-normal text-foreground/50"
      >
        <div className="flex gap-3 items-center text-base !p-0 font-bold">
          <Icons.xLogo className="w-4 h-4 fill-foreground" />
          Share us on Twitter!
        </div>
        <span className="">
          Earn X points for retweeting our posts on Twitter. You can only do
          this once every 24 hours, take a look at the eligible tweets for our
          latest Tweets.{" "}
        </span>
        <div className="flex w-full gap-2">
          <Button
            size="sm"
            variant="secondary"
            className="text-primary w-full justify-start px-5 pointer-events-none "
          >
            <Icons.skullLogo className="w-4 lg:w-6 h-4 lg:h-6 fill-primary" />
            200 Bubbles{" "}
          </Button>
          <Button size="sm" className="">
            Select avatar
          </Button>
        </div>
        <Separator className="my-2" />
        <div className="flex gap-3 items-center text-base !p-0 font-bold">
          <Icons.key className="w-5 h-5" />
          Refer a friend{" "}
        </div>

        <Button
          variant="secondary"
          size="sm"
          className="p-2.5 text-sm font-normal justify-start w-full gap-2"
        >
          Referral code: <span className="font-bold">09202</span>
          <Icons.copy className="w-4 lg:w-6 h-4 lg:h-6 fill-primary" />
        </Button>

        <Button
          variant="secondary"
          size="sm"
          className="p-2.5 text-sm font-normal justify-start w-full gap-2"
        >
          Referred Users: <span className="font-bold">1/3</span>
        </Button>
      </TabsContent>
      <TabsContent
        value="completed"
        className="flex flex-col gap-5 font-bold text-foreground/50"
      >
        {stats.map((stat, index) => (
          <div className="flex w-full justify-between items-center" key={index}>
            <span className="uppercase">{stat.label}</span>
            <span className="text-[28px] text-foreground">{stat.value}</span>
          </div>
        ))}
      </TabsContent>
    </Tabs>
  );
}

export default TaskCompleted;
