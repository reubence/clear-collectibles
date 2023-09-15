"use client";
import AllNFT from "@/components/dashboard-pages/all-nft";
import Distribute from "@/components/dashboard-pages/distribute";
import Emblems from "@/components/dashboard-pages/emblems";
import Multiplier from "@/components/dashboard-pages/multiplier";
import ProfileStat from "@/components/dashboard-pages/profile-stat";
import TaskCompleted from "@/components/dashboard-pages/task-comlpeted";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const emblemData = [
  {
    icon: "/images/emblem.svg",
    label: "SMB Inception",
    subheading: "subheading",
  },
  {
    icon: "/images/emblem.svg",
    label: "SMB Inception",
    subheading: "subheading",
  },
  {
    icon: "/images/emblem.svg",
    label: "SMB Inception",
    subheading: "subheading",
  },
  {
    icon: "/images/emblem.svg",
    label: "SMB Inception",
    subheading: "subheading",
  },
  {
    icon: "/images/emblem.svg",
    label: "SMB Inception",
    subheading: "subheading",
  },
  {
    icon: "/images/emblem.svg",
    label: "SMB Inception",
    subheading: "subheading",
  },
  {
    icon: "/images/emblem.svg",
    label: "SMB Inception",
    subheading: "subheading",
  },
  {
    icon: "/images/emblem.svg",
    label: "SMB Inception",
    subheading: "subheading",
  },
  {
    icon: "/images/emblem.svg",
    label: "SMB Inception",
    subheading: "subheading",
  },
];
const data = [
  {
    icon: Icons.profile,
    label: "Profile",
    children: <ProfileStat />,
    value: "profile",
  },
  {
    icon: Icons.tasks,
    label: "Tasks",
    children: <TaskCompleted />,
    value: "tasks",
  },
  {
    icon: Icons.allNFT,
    label: "All NFTs",
    children: <AllNFT />,
    value: "nfts",
  },
  {
    icon: Icons.emblems,
    label: "Emblems",
    children: <Emblems emblemData={emblemData} />,
    value: "emblems",
  },
];
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
export default function Home() {
  const [selectedDesktop, setSelectedDesktop] = useState("");
  const [selected, setSelected] = useState("");
  const [editProfile, setEditProfile] = useState(false);
  const [editAvatar, setEditAvatar] = useState(false);
  const [profileDetails, setProfileDetails] = useState({
    nickname: "BROOM",
    location: "Canada",
    bio: "At MonkeDAO, our mission is to create a more inclusive, transparent, and decentralized world by harnessing the power of blockchain technology and community-driven governance. We believe in the potential of decentralized decision-making to drive meaningful change and unlock new ",
    visibility: true,
  });

  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current = document.body;
    // if window width is less than 1024px then set selected to tasks
    if (window.innerWidth >= 1280 && !editProfile) {
      // Removing for ease of testing
      setSelectedDesktop("tasks");
    } else {
      setSelected("profile");
    }
  }, [editProfile]);

  return (
    <main className="flex flex-col lg:flex-row lg:items-end justify-between p-5 tallXL:mb-20 tallXL:pb-36 tallXL:px-10 relative h-screen tallXS:h-[700px] w-full">
      {/* EDIT PROFILE & AVATAR BUTTON */}
      {(editProfile || editAvatar) && (
        <div className="whitespace-nowrap text-xs lg:text-base fixed lg:absolute top-28 shadow-md lg:top-0 left-1/2 transform -translate-x-1/2 -translate-y-20 bg-primary p-2 pl-4 flex items-center gap-14 rounded-2xl z-50">
          <p className="3xl:text-2xl">You are in editing mode</p>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="secondary"
              onClick={() => {
                setEditProfile(false);
                setEditAvatar(false);
              }}
            >
              Save
            </Button>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => {
                setEditProfile(false);
                setEditAvatar(false);
              }}
            >
              <Icons.close className="stroke-primary" />
            </Button>
          </div>
        </div>
      )}
      {/* DESKTOP NFT IMAGE  */}
      <div className="hidden lg:block absolute left-0 xl:left-1/2 xl:-translate-x-1/2 tallXL:bottom-36 mb-[76px] xl:-mb-10 z-10 w-[48vw] xl:w-[37vw] 3xl:w-[750px] max-w-[650px]">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-8 xl:hidden tall2XL:hidden">
          <div className="flex gap-2.5 items-center">
            <Input
              className="rounded-md 3xl:rounded-xl w-fit text-4xl tall2XL:text-6xl flex flex-shrink disabled:opacity-100 p-0 pl-1 disabled:cursor-default disabled:text-foreground disabled:bg-transparent z-10"
              size={profileDetails.nickname.length + 1}
              placeholder={profileDetails.nickname}
              disabled={!editProfile}
              value={profileDetails.nickname}
              onChange={(e) => {
                setProfileDetails({
                  ...profileDetails,
                  nickname: e.target.value,
                });
              }}
            />
            <span className="font-semibold bg-primary text-white tall2XL:text-3xl px-2 tall2XL:px-3 rounded-xl">
              Lv.5
            </span>
          </div>
          <p className="font-bold tall2XL:text-3xl">Clear Collectibles #852</p>
        </div>

        <Image
          src="/images/nft-1.png"
          alt="Dashboard Nft Image"
          width={1000}
          height={1000}
          className=""
        />
      </div>
      {/* BROOM PROFILE SECTION */}
      <div
        className={cn(
          "absolute hidden lg:block right-10 bottom-32 tallXL:bottom-60 z-20",
          {
            "cursor-not-allowed pointer-events-none opacity-40": editAvatar,
          }
        )}
      >
        <div className="flex flex-col gap-2 tall2XL:gap-3.5 relative">
          <div className="absolute hidden tall2XL:flex xl:flex flex-col items-center whitespace-nowrap right-[63vw] xl:right-[40vw] tall2XL:right-0 tall2XL:relative tall2XL:items-start justify-between tall2XL:justify-start tall2XL:flex-col gap-2">
            <div className="flex gap-2.5 items-center">
              <Input
                className="rounded-md 3xl:rounded-xl w-fit text-4xl tall2XL:text-6xl flex flex-shrink disabled:opacity-100 p-0 pl-1 disabled:cursor-default disabled:text-foreground disabled:bg-transparent z-10"
                size={profileDetails.nickname.length + 1}
                placeholder={profileDetails.nickname}
                disabled={!editProfile}
                value={profileDetails.nickname}
                onChange={(e) => {
                  setProfileDetails({
                    ...profileDetails,
                    nickname: e.target.value,
                  });
                }}
              />
              <span className="font-semibold bg-primary text-white tall2XL:text-3xl px-2 tall2XL:px-3 rounded-xl">
                Lv.5
              </span>
            </div>
            <p className="font-bold tall2XL:text-3xl">
              Clear Collectibles #852
            </p>
          </div>
          <Separator className="hidden tall2XL:3xl:block w-full bg-white my-3" />

          <div
            className={cn(
              "flex items-center justify-between gap-3 bg-white/25 p-5 rounded-2xl border",
              {
                "cursor-not-allowed pointer-events-none opacity-40":
                  editProfile || editAvatar,
              }
            )}
          >
            <div className="flex flex-col gap-2">
              <p className="text-xl 3xl:">Bubbles: 8,952</p>
              <p className="font-bold flex items-center gap-1.5">
                <span className="font-normal">Multiplier:</span> 60%
                <span>
                  {/* MULTIPLIER POP UP */}
                  <Dialog className="p-5">
                    <DialogTrigger
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "sm" })
                      )}
                    >
                      <Icons.info className="fill-white/50 w-5 h-5" />
                    </DialogTrigger>

                    <DialogContent className="w-[90vw] max-w-md lg:max-w-7xl  p-5 bg-[#E7F1F5] rounded-xl lg:rounded-2xl">
                      <DialogHeader className={"items-start text-start"}>
                        <DialogTitle className="text-xl lg:text-3xl w-full">
                          Multiplier
                          <Separator className="w-full bg-white my-7 hidden lg:block" />
                        </DialogTitle>
                      </DialogHeader>
                      <Multiplier />
                    </DialogContent>
                  </Dialog>
                </span>
              </p>
            </div>

            {/* DISTRIBUTE BUBBLES BUTTON DIALOG */}
            <Distribute />
          </div>
        </div>
        {/* PROFILE / STAT COMPONENT */}
        <div className="flex flex-col gap-2 bg-white/25 border mt-5 rounded-xl p-5 z-20">
          <ProfileStat
            profileDetails={profileDetails}
            setProfileDetails={() => setProfileDetails}
            editProfile={editProfile}
          />
        </div>
      </div>
      {/* DESKTOP VIEW STARTS HERE */}
      <div
        className={cn(
          "hidden lg:bg-white/40 lg:rounded-2xl relative w-full h-full lg:h-fit lg:flex flex-col lg:flex-row justify-between",
          {
            "cursor-not-allowed pointer-events-none opacity-40":
              editProfile || editAvatar,
          }
        )}
      >
        <div
          className={cn("rounded-xl flex gap-3 py-5 px-5 lg:p-3 h-full w-full")}
        >
          {/* TASKS / ALL-NFTs / EMBLEMS COMPONENTS SECTION */}
          {data
            .filter((item) => item.value !== "profile")
            .map((item, index) => (
              <Popover
                key={index}
                defaultOpen={selectedDesktop === item.value}
                open={selectedDesktop === item.value}
                container={containerRef.current}
                onOpenChange={(open) => {
                  if (open) {
                    setSelectedDesktop(item.value);
                  } else {
                    setSelectedDesktop("");
                  }
                }}
              >
                <PopoverTrigger
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "sm" }),
                    "w-fit h-fit cursor-pointer bg-white group lg:p-2.5 data-[state=open]:bg-primary",
                    {
                      "bg-primary": selectedDesktop === item.value,

                      "cursor-not-allowed pointer-events-none opacity-40":
                        editProfile || editAvatar,
                    }
                  )}
                  onClick={() => setSelectedDesktop(item.value)}
                >
                  {
                    <div className="flex items-center gap-2 group text-white">
                      <item.icon
                        className={cn("fill-gray-300", {
                          "fill-white": selectedDesktop === item.value,
                        })}
                      />
                      <AnimatePresence mode="wait">
                        {selectedDesktop === item.value && (
                          <motion.p
                            initial={{
                              width: 0,
                              opacity: 0,
                            }}
                            animate={{
                              animation: "ease-in-out",
                              width: "auto",
                              opacity: 1,
                              transition: {
                                width: {
                                  duration: 0.3,
                                },
                                opacity: {
                                  duration: 0.25,
                                  delay: 0.3,
                                },
                              },
                            }}
                            exit={{
                              width: 0,
                              opacity: 0,
                              transition: {
                                width: {
                                  duration: 0.3,
                                },
                                opacity: {
                                  duration: 0.1,
                                },
                              },
                            }}
                            key="test"
                          >
                            {item.label}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  }
                </PopoverTrigger>
                <PopoverContent
                  className={cn(
                    "p-8 bg-[#E7F1F5] 2xl:bg-white/25 relative border",
                    {
                      "cursor-not-allowed pointer-events-none opacity-40":
                        editProfile,
                    }
                  )}
                  onOpenAutoFocus={(e) => e.preventDefault()}
                  onPointerDownOutside={(e) => e.preventDefault()}
                  onFocusOutside={(e) => e.preventDefault()}
                  onInteractOutside={(e) => e.preventDefault()}
                  align="center"
                  collisionPadding={40}
                  sideOffset={20}
                >
                  {item.children}{" "}
                  <PopoverArrow className="w-6 h-3 fill-transparent lg:fill-[#EBF4F7] -translate-y-0.5 z-50" />
                </PopoverContent>
              </Popover>
            ))}
        </div>
        <div className="z-50 lg:z-0 fixed left-0 right-0 bottom-0 lg:relative w-full lg:w-fit justify-end lg:justify-normal flex gap-3 py-2.5 px-5 lg:p-3 bg-white/50 lg:bg-transparent">
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                buttonVariants({
                  variant: "secondary",
                  size: "sm",
                  className:
                    "lg:bg-primary lg:hover:bg-primary/70 group lg:p-2.5",
                })
              )}
            >
              <Icons.hexagon className="lg:fill-current lg:text-white" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              sideOffset={20}
              className="w-80 bg-[#E7F1F5] flex flex-col gap-3 p-2"
            >
              <DropdownMenuItem
                className={cn(
                  buttonVariants(
                    {
                      variant: "ghost",
                      size: "sm",
                      className: "text-primary cursor-pointer",
                    },
                    "text-primary"
                  )
                )}
                onClick={() => {
                  setEditProfile(true);
                  setSelectedDesktop("");
                }}
              >
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "sm",
                    className: "text-primary cursor-pointer",
                  })
                )}
                onClick={() => {
                  setEditAvatar(true);
                  setSelectedDesktop("nfts");
                  setSelected("nfts");
                }}
              >
                Avatar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            size="sm"
            className="gap-3 lg:py-2.5 lg:px-2.5 text-sm lg:text-xl"
          >
            Share Profile
            <Icons.profile className="fill-white w-8 h-8" />
          </Button>
        </div>
      </div>
      {/* DESKTOP VIEW ENDS HERE */}

      {/* MOBILE VIEW STARTS HERE */}
      <div className="lg:hidden mx-auto md:max-w-md pb-28">
        <Image
          src="/images/nft-1.png"
          alt="Dashboard Nft Image"
          width={341}
          height={374}
          className="mx-auto w-full -mt-5 ml-2"
        />
        <div className="bg-white/25 border rounded-xl p-5 w-full flex flex-col gap-5">
          <div className="flex gap-3">
            {data.map((item, index) => (
              <Button
                key={index}
                variant="secondary"
                size="sm"
                className={cn({
                  "cursor-pointer bg-white": selected !== item.value,
                  "!bg-primary": selected === item.value,
                })}
                onClick={() => setSelected(item.value)}
              >
                {
                  <item.icon
                    className={cn("fill-gray-300", {
                      "fill-white": selected === item.value,
                    })}
                  />
                }
              </Button>
            ))}
          </div>

          {/* TASKS / ALL-NFTs / EMBLEMS COMPONENTS SECTION */}
          {data.map((item, index) => (
            <div
              key={index}
              className={cn({
                "hidden ": selected !== item.value || selected === "profile",
                "block ": selected === item.value && selected !== "profile",
              })}
            >
              {item.children}
            </div>
          ))}

          {/* BROOM PROFILE SECTION */}
          {selected === "profile" && (
            <div className="flex flex-col gap-2">
              <div className="flex gap-2.5 items-center">
                <Input
                  className={cn(
                    "rounded-md w-fit text-2xl disabled:opacity-100 p-0 pl-1 disabled:cursor-default disabled:text-foreground disabled:bg-transparent z-10"
                  )}
                  size={profileDetails.nickname.length + 1}
                  placeholder={profileDetails.nickname}
                  disabled={!editProfile}
                  value={profileDetails.nickname}
                  onChange={(e) => {
                    setProfileDetails({
                      ...profileDetails,
                      nickname: e.target.value,
                    });
                  }}
                />{" "}
                <span className="font-semibold bg-primary text-white px-2 rounded-xl">
                  Lv.5
                </span>
              </div>
              <p className="font-medium">Clear Collectibles #852</p>
              <Separator className="w-full bg-white my-3" />
              <p className="text-xl">Bubbles: 8,952</p>
              <p className="font-bold flex items-center gap-1.5">
                <span className="font-normal">Multiplier:</span> 60%
                <span>
                  <Dialog className="p-5">
                    <DialogTrigger
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "sm" })
                      )}
                    >
                      <Icons.info className="fill-white/50 w-5 h-5" />
                    </DialogTrigger>

                    <DialogContent className="w-[90vw] lg:max-w-7xl  p-5 bg-[#E7F1F5] rounded-xl lg:rounded-2xl">
                      <DialogHeader className={"items-start text-start"}>
                        <DialogTitle className="text-xl lg:text-3xl w-full">
                          Multiplier
                          <Separator className="w-full bg-white my-7 hidden lg:block" />
                        </DialogTitle>
                      </DialogHeader>
                      <Multiplier />
                    </DialogContent>
                  </Dialog>
                </span>
              </p>
              <Distribute />
            </div>
          )}
        </div>

        {/* PROFILE / STAT COMPONENT */}
        {selected === "profile" && (
          <div className="flex flex-col gap-2 bg-white/25 border mt-5 rounded-xl p-5">
            <ProfileStat
              profileDetails={profileDetails}
              setProfileDetails={() => setProfileDetails}
              editProfile={editProfile}
            />
          </div>
        )}

        {/* MOBILE BOTTOM STICKY SHOP NAV */}
        <div className="z-50 fixed left-0 right-0 bottom-0 w-full justify-end flex gap-3 py-2.5 px-5 bg-[#E7F1F5]">
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                buttonVariants({
                  variant: "secondary",
                  size: "sm",
                })
              )}
            >
              <Icons.hexagon className="fill-primary" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              sideOffset={20}
              className="w-80 bg-[#E7F1F5] flex flex-col gap-3 p-2"
            >
              <DropdownMenuItem
                className={cn(
                  buttonVariants(
                    {
                      variant: "ghost",
                      size: "sm",
                      className: "text-primary cursor-pointer",
                    },
                    "text-primary"
                  )
                )}
                onClick={() => {
                  setEditProfile(true), setSelected("profile");
                }}
              >
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "sm",
                    className: "text-primary cursor-pointer",
                  })
                )}
                onClick={() => {
                  setEditAvatar(true);
                  setSelected("nfts");
                }}
              >
                Avatar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" className="gap-3 text-sm px-4">
            Share Profile
            <Icons.profile className="fill-white w-7 h-7" />
          </Button>
        </div>
      </div>
      {/* MOBILE VIEW ENDS HERE */}
    </main>
  );
}
