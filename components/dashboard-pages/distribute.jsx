"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Icons } from "../ui/icons";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Progress } from "../ui/progress";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import AllNFT from "./all-nft";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function Distribute() {
  const [progress, setProgress] = useState(13);
  const [editBubble, setEditBubble] = useState(2343);
  const [openDialog, setOpenDialog] = useState();
  const [openPopover, setOpenPopover] = useState();
  useEffect(() => {
    const timer = setTimeout(() => setProgress(40), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log(openPopover);
  }, [openPopover]);

  return (
    <Dialog open={openDialog} onOpenChange={() => setOpenDialog(!openDialog)}>
      <DialogTrigger className={cn(buttonVariants(), "text-base w-fit")}>
        Distribute Bubbles
      </DialogTrigger>

      <DialogContent className="w-[90vw] max-w-md lg:max-w-5xl p-5 pr-2 lg:py-7 lg:px-10 bg-[#E7F1F5] rounded-xl lg:rounded-2xl">
        <ScrollArea className="w-full tallXS:h-[calc(100vh-100px)] lg:h-fit">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
            <div className="w-full h-full flex flex-col gap-3 text-base text-muted-foreground/50 font-semibold">
              <AllNFT orientation={"horizontal"} />
            </div>
            <div className="flex flex-col gap-3 mt-2 lg:mt-10">
              <div className="flex gap-2.5 items-center">
                <p className="text-xl uppercase">Broom</p>
                <span className="font-semibold bg-primary text-white px-2 rounded-xl">
                  Lv.5
                </span>
              </div>

              <p className="font-medium">Clear Collectibles #852</p>

              <Separator className="w-full bg-white" />

              <div className="lg:mt-5 flex flex-col gap-3.5">
                <p className="text-xl">EXP</p>
                <Progress value={editBubble} max={10000} className="w-full" />
                <div className="flex justify-between w-full">
                  <span className="text-sm font-normal text-muted-foreground/50 flex">
                    Current XP:
                    <p className="font-extrabold text-foreground">2434</p>
                  </span>
                  <span className="text-sm font-normal text-muted-foreground/50 flex">
                    XP:<p className="font-extrabold text-foreground"> 10000</p>
                  </span>
                </div>
              </div>

              <div className="lg:mt-6 flex flex-col gap-5">
                <span className="text-sm font-normal text-muted-foreground/50 flex">
                  Available Bubbles:
                  <p className="font-extrabold text-foreground"> 5,000 </p>
                </span>
                <div className="flex gap-3 lg:flex-col lg:gap-5">
                  <Input
                    className={cn(
                      buttonVariants({
                        variant: "secondary",
                        size: "sm",
                        className: "justify-start lg:text-xl",
                      })
                    )}
                    placeholder={"2343"}
                    max={5000}
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
                    max={5000}
                    value={editBubble}
                    onChange={(e) => {
                      setEditBubble(e.target.value);
                    }}
                    type="number"
                  />
                </div>
              </div>

              <Popover
                open={openPopover}
                onOpenChange={() => {
                  setOpenPopover(!openPopover);
                }}
              >
                <PopoverTrigger
                  className={cn(
                    buttonVariants(),
                    "text-base lg:text-xl lg:w-fit lg:ml-auto"
                  )}
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
