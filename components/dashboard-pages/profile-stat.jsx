"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button, buttonVariants } from "../ui/button";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { ScrollArea } from "../ui/scroll-area";
import { Icons } from "../ui/icons";
import { Toggle } from "../ui/toggle";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Total Bubbles", value: 9921 },
  { label: "Total Clear Collectibles", value: 97 },
  { label: "Rank", value: 7 },
  { label: "Join Date", value: "23.09.08" },
];

function ProfileStat({ profileDetails, setProfileDetails, editProfile }) {
  const [data, setData] = React.useState(profileDetails);
  return (
    <Tabs
      defaultValue="profile"
      className="w-[calc(100vw-80px)] sm:w-[calc(768px-368px)] lg:w-[35vw] xl:w-[27vw]"
    >
      <TabsList>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="stat">Stat</TabsTrigger>
      </TabsList>
      <Separator className="mt-4 mb-7" />
      <TabsContent
        value="profile"
        className="flex flex-col gap-5 font-medium text-foreground/50"
      >
        <div className="flex justify-between">
          <div className="flex gap-4">
            <Button size="sm" variant="secondary">
              <Icons.xLogo className="w-4 lg:w-6 h-4 lg:h-6 fill-primary" />
            </Button>
            <Button size="sm" variant="secondary">
              <Icons.discordLogo className="w-4 lg:w-6 h-4 lg:h-6 fill-primary" />
            </Button>
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
        <ScrollArea className="lg:h-[120px]">
          <Textarea
            className="disabled:border-none disabled:opacity-100 p-0 pl-1 text-foreground bg-white disabled:cursor-default disabled:text-foreground disabled:bg-transparent"
            rows={data && data.bio.length / 50 + 1}
            placeholder={data && data.bio}
            disabled={!editProfile}
            value={data && data.bio}
            onChange={(e) => {
              setData({
                ...data,
                bio: e.target.value,
              });
              setProfileDetails({
                ...profileDetails,
                bio: e.target.value,
              });
            }}
          />
        </ScrollArea>

        <div className="flex flex-col gap-1">
          <span className="flex gap-2 items-start text-sm">
            <Icons.location className="w-4 h-4 fill-muted-foreground/50" />
            <span className="flex flex-col">
              <span>Location</span>
              <span className="uppercase font-bold text-base text-foreground">
                Canada
              </span>
            </span>
          </span>
        </div>
      </TabsContent>
      <TabsContent
        value="stat"
        className="flex flex-col gap-5 font-bold text-foreground/50"
      >
        {stats.map((stat, index) => (
          <div className="flex w-full justify-between items-center" key={index}>
            <span className="text-sm lg:text-base uppercase">{stat.label}</span>
            <span className="text-base lg:text-[28px] text-foreground">
              {stat.value}
            </span>
          </div>
        ))}
      </TabsContent>
    </Tabs>
  );
}

export default ProfileStat;
