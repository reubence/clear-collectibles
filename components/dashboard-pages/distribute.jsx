"use client";
import React, { useEffect } from "react";
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
import AllNFT from "./all-nft";
import { Progress } from "../ui/progress";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import StandardConfirmation from "../confirmation-pages/standard-confirmation";
import { Icons } from "../ui/icons";
import { Input } from "../ui/input";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { set } from "zod";

function Distribute() {
  const [progress, setProgress] = React.useState(13);
  const [editBubble, setEditBubble] = React.useState(2343);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openPopover, setOpenPopover] = React.useState(false);
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(40), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={openDialog} onOpenChange={() => setOpenDialog(!openDialog)}>
      <DialogTrigger className={cn(buttonVariants(), "text-base w-fit")}>
        Distribute Bubbles
      </DialogTrigger>

      <DialogContent className="w-[90vw] max-w-md lg:max-w-5xl p-5 lg:py-7 lg:px-10 bg-[#E7F1F5] rounded-xl lg:rounded-2xl">
        <ScrollArea className="w-full h-[calc(100vh-200px)] lg:h-fit">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
            <div className="w-full h-full flex flex-col gap-3 text-base text-muted-foreground/50 font-semibold">
              <AllNFT />
            </div>
            <div className="flex flex-col gap-3 mt-10">
              <div className="flex gap-2.5 items-center">
                <p className="lg:text-xl">Broom</p>
                <span className="font-semibold bg-primary text-white px-2 rounded-xl">
                  Lv.5
                </span>
              </div>

              <p className="font-medium">Clear Collectibles #852</p>

              <Separator className="w-full bg-white" />

              <div className="mt-5 flex flex-col gap-3.5">
                <p className="lg:text-xl">EXP</p>
                <Progress value={progress} className="w-full" />
                <div className="flex justify-between w-full">
                  <span className="text-sm font-normal text-muted-foreground/50 flex">
                    Current XP:
                    <p className="font-extrabold text-foreground"> 4989</p>
                  </span>
                  <span className="text-sm font-normal text-muted-foreground/50 flex">
                    XP:<p className="font-extrabold text-foreground"> 4989</p>
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-5">
                <span className="text-sm font-normal text-muted-foreground/50 flex">
                  Available Bubbles:
                  <p className="font-extrabold text-foreground"> 5,000 </p>
                </span>
                <Input
                  className={cn(
                    buttonVariants({
                      variant: "secondary",
                      size: "sm",
                      className: "justify-start lg:text-xl",
                    })
                  )}
                  placeholder={"2343"}
                  disabled={!editBubble}
                  value={editBubble}
                  onChange={(e) => {
                    setEditBubble(e.target.value);
                  }}
                  type="number"
                />
                <Input
                  className={cn(
                    buttonVariants({
                      variant: "secondary",
                      size: "sm",
                      className: "justify-start lg:text-xl",
                    })
                  )}
                  placeholder={"2343"}
                  disabled={!editBubble}
                  value={editBubble}
                  onChange={(e) => {
                    setEditBubble(e.target.value);
                  }}
                  type="number"
                />
              </div>

              <Popover
                open={openPopover}
                onOpenChange={() => setOpenPopover(!openPopover)}
              >
                <PopoverTrigger
                  className={cn(buttonVariants(), "w-fit ml-auto")}
                >
                  Distribute
                </PopoverTrigger>
                <PopoverContent className="z-50 border shadow-lg px-8 pt-6 pb-7 flex flex-col gap-4 items-start lg:w-[400px]">
                  <div className="flex w-full h-full justify-between items-center text-base font-bold whitespace-nowrap">
                    <span>Confirm purchase?</span>
                    <Icons.skullLogo className="w-8 h-8 fill-primary" />
                  </div>
                  <Separator className="w-full bg-muted" />
                  <div className="w-full flex items-center justify-end gap-5">
                    <Button
                      variant="outline"
                      className="min-w-fit gap-3.5 py-4 text-xs lg:text-base capitalize lg:uppercase"
                    >
                      No
                    </Button>
                    <Button
                      className="min-w-fit gap-3.5 py-4 text-xs lg:text-base text-white capitalize lg:uppercase"
                      onClick={() => {
                        setOpenPopover(false);
                        setOpenDialog(false);
                      }}
                    >
                      Yes
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export default Distribute;
