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
        <Button variant="ghost" className="text-base !p-0 font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
          >
            <path
              d="M14.1604 2.16005C14.8004 1.76014 15.3603 1.03995 15.6004 0.239947C14.9604 0.640035 14.2404 0.960668 13.5204 1.03995C12.9603 0.399912 12.0803 0 11.1202 0C9.28025 0 7.84004 1.52002 7.84004 3.44012C7.84004 3.68007 7.84004 4 7.92002 4.24012C5.19991 4.07998 2.79991 2.72011 1.11975 0.640035C0.879982 1.11993 0.720721 1.76014 0.720721 2.40018C0.720721 3.60009 1.20079 4.64021 2.08077 5.28025C1.52072 5.28025 0.560756 5.12011 0.560756 4.88016V4.96014C0.560756 6.64012 1.76084 8.00018 3.28069 8.32028C3.04074 8.40026 2.72081 8.48025 2.48086 8.48025C2.24091 8.48025 2.08077 8.48025 1.84083 8.40026C2.24074 9.76014 3.44047 10.8003 4.88086 10.8003C3.76005 11.7601 2.32037 12.3203 0.8 12.3203C0.560053 12.3203 0.239947 12.3203 0 12.2403C1.49413 13.2313 3.2472 13.76 5.04012 13.7603C11.0402 13.7603 14.4004 8.48025 14.4004 3.92002V3.44012C15.0404 2.96005 15.6004 2.32002 16 1.67998C15.5199 1.92011 14.8801 2.08007 14.1601 2.16005H14.1604Z"
              fill="#424141"
            />
          </svg>
          Share us on Twitter!
        </Button>
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
        <Button variant="ghost" className="text-base !p-0 font-bold">
          <Icons.copy className="w-4 lg:w-6 h-4 lg:h-6 fill-primary" />
          Refer a friend{" "}
        </Button>

        <Button
          variant="secondary"
          size="sm"
          className="p-2.5 text-sm font-normal justify-start w-full gap-2"
        >
          Referral code: <span className="font-bold">09202</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9.1665 16.2498H13.9165C13.67 16.8657 13.2444 17.3935 12.6947 17.765C12.145 18.1364 11.4965 18.3343 10.8331 18.3331H4.99982C4.56205 18.3333 4.12854 18.2471 3.72407 18.0797C3.3196 17.9122 2.95209 17.6667 2.64254 17.3571C2.33298 17.0476 2.08746 16.68 1.91999 16.2756C1.75252 15.8711 1.66638 15.4376 1.6665 14.9998V8.33314C1.66749 7.52142 1.96412 6.73785 2.50092 6.12896C3.03773 5.52008 3.77794 5.12758 4.58314 5.02486V11.6665C4.58314 14.1915 6.64147 16.2498 9.1665 16.2498ZM16.2498 5.20814H18.0165C17.9653 5.13304 17.9066 5.06325 17.8415 4.99982L14.9998 2.15803C14.9385 2.09315 14.8683 2.03714 14.7915 1.99162V3.74982C14.7933 4.13603 14.9476 4.50589 15.2207 4.77898C15.4938 5.05207 15.8636 5.20631 16.2498 5.20814ZM16.2498 6.45814C15.532 6.45676 14.8439 6.17098 14.3363 5.66337C13.8287 5.15576 13.5429 4.46769 13.5415 3.74982V1.6665H9.1665C8.72873 1.66638 8.29522 1.75252 7.89075 1.91999C7.48627 2.08746 7.11876 2.33298 6.8092 2.64253C6.49965 2.95209 6.25412 3.3196 6.08664 3.72407C5.91917 4.12854 5.83303 4.56205 5.83314 4.99982V11.6665C5.83303 12.1043 5.91917 12.5378 6.08665 12.9423C6.25413 13.3467 6.49966 13.7142 6.80921 14.0238C7.11877 14.3333 7.48628 14.5789 7.89075 14.7463C8.29522 14.9138 8.72873 14.9999 9.1665 14.9998H14.9998C15.4376 14.9999 15.8711 14.9138 16.2756 14.7463C16.68 14.5789 17.0476 14.3333 17.3571 14.0238C17.6667 13.7142 17.9122 13.3467 18.0797 12.9422C18.2471 12.5378 18.3333 12.1043 18.3331 11.6665V6.45814H16.2498Z"
              fill="#6CD2FF"
            />
          </svg>
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
