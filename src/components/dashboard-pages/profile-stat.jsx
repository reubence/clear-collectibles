"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { Separator } from "../ui/separator";
import { Textarea } from "../ui/textarea";
import { Toggle } from "../ui/toggle";

const stats = [
  { label: "Total Bubbles", value: 9921 },
  { label: "Total Clear Collectibles", value: 97 },
  { label: "Rank", value: 7 },
  { label: "Join Date", value: "23.09.08" },
];
let tabs = [
  { id: "profile", label: "Profile" },
  { id: "stat", label: "Stat" },
];

function ProfileStat({ profileDetails, setProfileDetails, editProfile, mtwitter, count, xp, createdAt, submitLoading }) {
  
  let [activeTab, setActiveTab] = React.useState(tabs[0].id);

  return (
    <Tabs
      defaultValue="profile"
      className="w-full "
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
                  layoutId="dot2"
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
        value="profile"
        className="flex flex-col gap-5 font-medium text-foreground/50"
      >
        <div className="flex justify-between">
          <div className="flex gap-4">
            <a href={`https://twitter.com/${mtwitter}`} target="_blank">
            <Button size="sm" variant="secondary">
              <Icons.xLogo className="w-4 lg:w-6 h-4 lg:h-6 fill-primary" />
            </Button>
            </a>
         
          </div>
          {editProfile && (
            <Toggle
              aria-label="Toggle italic"
              className={cn("bg-muted data-[state=on]:bg-white")}
            >
              <Icons.eye className="w-4 lg:w-6 h-4 lg:h-6 fill-white" />
            </Toggle>
          )}
        </div>
        <Textarea
          className="w-full disabled:border-none disabled:opacity-100 p-0 pl-1 font-[16px] text-foreground bg-white disabled:cursor-default disabled:text-foreground disabled:bg-transparent"
          rows={7}
          maxLength={200}
          style={{resize:'none'}}
          placeholder={profileDetails ? profileDetails.bio : ''}
          disabled={!editProfile || submitLoading}
          value={profileDetails ? profileDetails.bio : ''}
          onChange={(e) => {
            const isValid = /^[a-z0-9 ]*$/i.test(e.target.value);
            if(isValid){
              setProfileDetails({
                ...profileDetails,
                bio: e.target.value,
              });
            }
          }}
        />

       {/*  <div className="flex flex-col gap-1">
          <span className="flex gap-2 items-start text-sm">
            <Icons.location className="w-4 h-4 fill-muted-foreground/50" />
            <span className="flex flex-col">
              <span>Location</span>
              <span className="uppercase font-bold text-base text-foreground">
                Canada
              </span>
            </span>
          </span>
        </div> */}
      </TabsContent>
      <TabsContent
        value="stat"
        className="flex flex-col gap-5 font-bold text-foreground/50"
      >
        <div className="flex w-full justify-between items-center" >
            <span className="text-sm lg:text-base uppercase">Total Bubbles</span>
            <span className="text-base lg:text-[28px] text-foreground">
              {xp}
            </span>
          </div>
          <div className="flex w-full justify-between items-center" >
            <span className="text-sm lg:text-base uppercase">Total Clear Collectibles</span>
            <span className="text-base lg:text-[28px] text-foreground">
              {count}
            </span>
          </div>
          <div className="flex w-full justify-between items-center" >
            <span className="text-sm lg:text-base uppercase">Join Date</span>
            <span className="text-base lg:text-[28px] text-foreground">
              {new Date(createdAt).getFullYear()}-{new Date(createdAt).getMonth()}
            </span>
          </div>


        
      </TabsContent>
    </Tabs>
  );
}

export default ProfileStat;
