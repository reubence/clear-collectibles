"use client";
import AllNFT from "@/components/dashboard-pages/all-nft";
import NftCharge from "@/components/dashboard-pages/nft-charge";
import NavBar from "@/components/layout/navbar";
import Distribute from "@/components/dashboard-pages/distribute";
import { background as BackgroundNft } from "@/constants";
/* import Emblems from "@/components/dashboard-pages/emblems"; */
import ProfileStat from "@/components/dashboard-pages/profile-stat";
import TaskCompleted from "@/components/dashboard-pages/task-comlpeted";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/ui/icons";
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { cn, getLevel } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import { ProgressLottie as Character } from "@/components";
import { getParsedNftAccountsByOwner } from "@nfteyez/sol-rayz";
import { Connection } from "@solana/web3.js";

export default function Dashboard() {
  const effectRan = useRef(false);
  const countRanRef = useRef(0);
  const [tokens, setTokens] = useState(0);
  const [mdiscord, setDiscord] = useState(null);
  const [mtwitter, setTwitter] = useState(null);
  const [mwallets, setWallets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [avatar, setAvatar] = useState(null);
  const [completed, setCompleted] = useState([]);
  const [booster, setBooster] = useState(0)
  const [xp, setXp] = useState(0);
  const [task, setTask] = useState([]);
  const [taskLoading, setTaskLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const [tweet, setTweet] = useState(null);
  const [staked, setStaked] = useState([]);
  const [createdAt, setCreatedAt] = useState();
  const [submitLoading, setSubmitLoading] = useState(false);
  const [nfts, setResult] = useState([]);
  const [background, setBackground] = useState("#D7E8EF");
  const [favNft, setFavNft] = useState("/images/nft-1.png");
  const [favLevel, setFavLevel] = useState(0);
  const [selectedNft, setSelectedNft] = useState("");
  const [distribute, setDistribute] = useState(false);
  const [multiplier, setMultiplier] = useState(1);
  const [pfp, setPfp] = useState(false)
  const [handle, setHandle] = useState(false)
  const [errorProfile, setErrorProfile] = useState('')
  const [custombg, setCustombg] = useState(false);
  const [holder, setHolder] = useState(true);
  const [oldFavNft, setOldFavNft] = useState({
    number: null,
    background: "#D7E8EF",
  });
  //leon
  const [selectedDesktop, setSelectedDesktop] = useState("");
  const [selected, setSelected] = useState("");
  const [editProfile, setEditProfile] = useState(false);
  const [editAvatar, setEditAvatar] = useState(false);
  const [profileDetails1, setProfileDetails1] = useState({
    nickname: "",
    bio: "",
    visibility: true,
  });
  const [profileDetails, setProfileDetails] = useState({
    nickname: "Your Name",
    bio: "Please Add Bio",
    visibility: true,
  });

  const containerRef = useRef(null);
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });

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
      icon: Icons.charge,
      label: "Charge",
      children: <NftCharge />,
      value: "charge",
    },
  ];

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (
          ref?.current !== null &&
          !ref.current.contains(event.target) &&
          !submitLoading &&
          selectedDesktop !== "tasks" &&
          selectedDesktop !== "charge"
        ) {
          setSelectedDesktop("");
          if (oldFavNft.number > 8876) {
            setCustombg(true);
          } else {
            setCustombg(false);
          }
          setBackground(oldFavNft.background);

          if (oldFavNft.number !== null) {
            setFavNft(
              `https://shdw-drive.genesysgo.net/4ogWuz5n4TB2NFdPdtTT9uAsuudNE242EnpM4VwEmBHM/${oldFavNft.number}.png`
            );
            setSelectedNft({ number: oldFavNft.number, level: favLevel });
          } else {
            setFavNft(`/images/nft-1.png`);
          }
        }
        setDistribute(false);
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, oldFavNft, submitLoading, selectedDesktop]);
  }

  
  async function getNft(token) {
    
    const response = await fetch(
      "https://api.matrica.io/oauth2/user/nfts",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json()

      const numbers = data.filter(nft => nft.updateAuthority === process.env.NEXT_PUBLIC_AUTHORITY)
      .map(nft => {
          const number = nft.name.replace("Clear Collectibles #", "");
          return {
              number: Number(number),
              img: `https://shdw-drive.genesysgo.net/4ogWuz5n4TB2NFdPdtTT9uAsuudNE242EnpM4VwEmBHM/${number}-b.png`
          };
      });

  // Return early if there are no numbers
 

  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/v1/getAsset`, {
      method: "POST",
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ number: numbers.map(info => info.number) }),
  });
  
  const assets = await res.json();

  // map instead of nested loops
 const nftArray = numbers.map(info => {
      const asset = assets.find(asset => info.number == asset.number);
      if (asset) {
          const level = getLevel(asset.xp);
          return {
              ...info,
              xp: asset.xp,
              level: level,
          };
      }
      return info;  // If no matching asset is found, return info unchanged
  });
  

    const finalResult = nftArray.sort((a, b) => {
      // First, compare levels in descending order (higher levels come first)
      if (a.level !== b.level) {
          return b.level - a.level;
      }
  
      // If levels are the same, compare numbers in ascending order (lower numbers come first)
      return a.number - b.number;
  });
  
  setResult(finalResult);

          if (effectRan == false) {
            console.log(`check`)
            if (finalResult.length > 0) {
              const foundObject = BackgroundNft.find(
                (b) => b.number === finalResult[0].number
              );

       

              if (foundObject) {
                setBackground(foundObject.background);
              }
              if (Number(finalResult[0].number) > 8876) {
                setCustombg(true);
              } else {
                setCustombg(false);
              }
              setFavNft(
                `https://shdw-drive.genesysgo.net/4ogWuz5n4TB2NFdPdtTT9uAsuudNE242EnpM4VwEmBHM/${finalResult[0].number}.png`
              );
              setOldFavNft({
                number: Number(finalResult[0].number),
                background: foundObject.background,
              });

              setSelectedNft({
                number: Number(finalResult[0].number),
                level: Number(finalResult[0].level),
              });

              
              setFavLevel(finalResult[0].level);
  
            }
          }


  }

  async function handleSubmit() {
    setSubmitLoading(true);
    if (profileDetails.nickname == '' || profileDetails.bio == '') {
      setSubmitLoading(false);
      setErrorProfile(`Name or bio can't be empty!`)
      return;
    }

    const token = localStorage.getItem("token");

    if (token == null || typeof token == "undefined") {
      setSubmitLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/api/v1/infoChange`,
        {
          method: "POST",

          body: JSON.stringify({
            nickname: profileDetails.nickname,
            bio: profileDetails.bio,
          }),

          headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.text();

      if (data) {
        setEditProfile(false);
        setEditAvatar(false);
        setSubmitLoading(false);
      }
    } catch (error) {
      console.log(error);
      setEditProfile(false);
      setEditAvatar(false);
      setSubmitLoading(false);
    }
  }

  async function handleSubmitAvatar() {
    setSubmitLoading(true);
    if (!selectedNft) {
      setSubmitLoading(false);
      return;
    }

    const token = localStorage.getItem("token");

    if (token == null || typeof token == "undefined") {
      setSubmitLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/api/v1/avatarChange`,
        {
          method: "POST",

          body: JSON.stringify({
            avatar: Number(selectedNft.number),
          }),

          headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.text();

      if (data.length) {
        setEditProfile(false);
        setEditAvatar(false);
       
        setOldFavNft({
          number: selectedNft.number,
          background: background,
        });

        setSubmitLoading(false);
      }
    } catch (error) {
      console.log(error);
      setEditProfile(false);
      setEditAvatar(false);
      setSubmitLoading(false);
    }
  }

  async function getTwitter(token) {
    try {
      const response = await fetch(
        "https://api.matrica.io/oauth2/user/twitter",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 204) {

  
        router.push('/activation')
      

    }else if(response.status == 200){
      const data = await response.text();
      if (!data) {
        router.push('/activation')
      
      }else{
        const result = JSON.parse(data);
        setTwitter(result.externalName);
        localStorage.setItem("twitter", result.externalName);
      }
     
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function getDiscord(token) {
    try {
      const response = await fetch(
        "https://api.matrica.io/oauth2/user/discord",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );



      if (response.status === 204) {

  
        router.push('/activation')
      

    }else if(response.status == 200){
      const data = await response.text();
      if (!data) {
        router.push('/activation')
      
      }else{
        const result = JSON.parse(data);
        setDiscord(result.externalName);
        localStorage.setItem("discord", result.externalName);
      }
     
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function getWallets(token) {
    try {
      let wallets = [];
      const response = await fetch(
        "https://api.matrica.io/oauth2/user/wallets",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.text();
      if (data) {
        const results = JSON.parse(data);
        for (let result of results) {
          wallets.push({ id: result.id });
        }
        setWallets(wallets);
        getNft(token);
         
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function getData(token) {
    try {
      //  Block of code to try
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/v1/my`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.text();
      if (data.length) {
        const result = JSON.parse(data);
        setTask(result?.task);
        setXp(result?.totalXp);
        setCompleted(result?.completed);
        setCounter(result?.count);
        setMultiplier(result?.multiplier1);
        setBooster(result?.boostMultiplier)
        setPfp(result?.pfp)
        setHandle(result?.handle)

        if (result.assets && result.assets.length > 0) {
          setStaked(result.assets);
        }

        if (result.twitter.pfp) {
          setAvatar(result.twitter.url);
        }
        setCreatedAt(result.createdAt);
        setTweet(result?.tweet);
        if (
          (result.name !== null || result.bio !== null) && !editProfile
        ) {
          setProfileDetails({
            nickname: result.name,
            bio: result.bio,
          });
          setProfileDetails1({
            nickname: result.name,
            bio: result.bio,
          });
        }
        if (result.avatar) {
          const foundObject = BackgroundNft.find(
            (b) => b.number === result.avatar
          );
          if (foundObject) {
            setBackground(foundObject.background);
          }
          if (Number(result.avatar) > 8876) {
            setCustombg(true);
          } else {
            setCustombg(false);
          }
          setFavNft(
            `https://shdw-drive.genesysgo.net/4ogWuz5n4TB2NFdPdtTT9uAsuudNE242EnpM4VwEmBHM/${result.avatar}.png`
          );
          setOldFavNft({
            number: Number(result.avatar),
            background: foundObject.background,
          });

          setSelectedNft({
            number: Number(result.avatar),
            level: Number(result.avatarLevel),
          });
          setFavLevel(result.avatarLevel);
          effectRan.current = true;
        }

        setTimeout(() => {
          setLoading(false);
          setTaskLoading(false);
        }, 500);
      }
    } catch (e) {
      console.log(e);
    }
  }
  async function getToken(accessToken) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/v1/login`, {
      method: "POST",

      body: JSON.stringify({ accessToken: accessToken }),

      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });

    const resultText = await res.text();

    if (resultText.length) {
      const result = JSON.parse(resultText);

      if (result.token !== null && typeof result.token !== "undefined") {
        const expiry = Date.now() + 3600 * 1000;
        localStorage.setItem("token", result?.token);
        localStorage.setItem("expiry", expiry);
        await getData(result.token);
      }
    }
  }

  useEffect(() => {
    if (session?.accessToken) {
      console.log(session.accessToken)
      getTwitter(session?.accessToken);
      getDiscord(session?.accessToken);
      getWallets(session?.accessToken);
    }

    if (session?.error === "RefreshAccessTokenError") {
      localStorage.clear();
      signOut({ callbackUrl: "/login" });
    }

  }, [session]);

  useEffect(() => {
    /*  if (effectRan === false) { */
    if (
      mtwitter !== null &&
      mdiscord !== null &&
      typeof mtwitter !== "undefined" &&
      typeof mdiscord !== "undefined"
    ) {
      /* setNotConnect(false); */

      const token = localStorage.getItem("token");
      const expiry = localStorage.getItem("expiry");

      if (
        token &&
        token !== null &&
        typeof token !== "undefined" &&
        Date.now() < expiry
      ) {
        getData(token);
      }

      if (!token || Date.now() > expiry) {
        getToken(session.accessToken);
      }
    }

    /*  }

    return () => {
      effectRan.current = true;
    }; */
  }, [mtwitter, mdiscord]);


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
    <>
      <Head>
        <title>The Clearverse!</title>
        <meta
          name="description"
          content="A premier premint experience aimed at creating the strongest community supported by amazing contribution based technology. Built by Interlace."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="msapplication-TileColor" content="#6cd2ff" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        ></meta>
      </Head>
      <div
        className={cn(
          `h-screen font-g8 lg:overflow-y-hidden tallXS:!h-full  overflow-y-auto ${
            taskLoading && "!bg-[#D7E8EF]"
          }`
        )}
        style={
          taskLoading
            ? { backgroundColor: "#D7E8EF" }
            : !custombg && !taskLoading
            ? { backgroundColor: background }
            : custombg &&
              !taskLoading && {
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.1)), url('/background/${background}.png')`,
              }
        }
      >
        


        {taskLoading ? (
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, duration: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col overflow-hidden lg:flex-row lg:items-end justify-between tallXL:mb-20 tallXL:pb-36 tallXL:px-10 relative h-screen  w-full p-5"
            >
          
              <div
                className="block absolute left-1/2 xl:left-1/2 -translate-x-1/2  xl:-translate-x-1/2  -mb-10 z-10  
              w-[100vw] h-[100vw]
              lg:w-[600px] lg:h-[600px]
              xl:w-[calc(100vw-750px)] xl:h-[calc(100vw-750px)] 
              2xl:w-[calc(100vw-700px)] 3xl:h-[calc(100vw-700px)] 
              2xl:max-w-[800px] 2xl:max-h-[800px]
              3xl:max-w-[850px] 3xl:max-h-[850px]
              bottom-0
              "
              >
                <Character
                  percent={95}
                  width="100%"
                  height="100%"
                  loop={true}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <NavBar avatar={avatar} />
            </motion.div>

            <main className="flex flex-col lg:flex-row lg:items-end justify-between p-5 tallXL:mb-20 tallXL:pb-36 tallXL:px-10 relative h-full tallXS:h-[700px]  w-full">
              {/* EDIT PROFILE & AVATAR BUTTON */}
              {(editProfile || editAvatar) && (
                <div className="whitespace-nowrap text-xs lg:text-base fixed lg:absolute top-28 shadow-md lg:top-0 left-1/2 transform -translate-x-1/2 -translate-y-20 bg-primary p-2 pl-4 flex items-center gap-14 rounded-2xl z-50">
                  <p className="3xl:text-2xl">You are in editing mode</p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                  
                      onClick={() => {
                        if(profileDetails.nickname == '' || profileDetails.bio == ''){
                          setErrorProfile(`Name or bio can't be empty!`)
                          return
                        }else{
                          setErrorProfile('')
                        }
                       
                        if (editProfile) {
                          handleSubmit();
                        }
                     
                      }}
                    >
                      {submitLoading ? (
                        <svg
                          aria-hidden="true"
                          class="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                      ) : (
                        "Save"
                      )}
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      disabled={submitLoading}
                      onClick={() => {
                        setErrorProfile('')
                        setEditProfile(false);
                        setEditAvatar(false);
                        setProfileDetails({
                          nickname: profileDetails1.nickname,
                          bio: profileDetails1.bio,
                        });
                      }}
                    >
                      <Icons.close className="stroke-primary" />
                    </Button>
                  </div>
                </div>
              )}

              {/* DESKTOP NFT IMAGE  */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
                className="hidden lg:block absolute left-0 xl:left-1/2  xl:-translate-x-1/2  -mb-10 z-10  lg:bottom-[262px] xl:bottom-[136px]
                  w-[600px] h-[600px]
                  xl:w-[calc(100vw-750px)] xl:h-[calc(100vw-750px)] 
                  2xl:w-[calc(100vw-700px)] 3xl:h-[calc(100vw-700px)] 
                  2xl:max-w-[800px] 2xl:max-h-[800px]
                  3xl:max-w-[850px] 3xl:max-h-[850px] 
                  tallXS:!bottom-[138px]
                "
              >
                <div className="relative w-full h-full">
                  <Image
                    src={favNft}
                    alt="Dashboard Nft Image"
                    fill
                    style={{ objectFit: "cover" }}
                  
                  />
                 
                  
                </div>
              </motion.div>
              {/* BROOM PROFILE SECTION */}
              <div
                className={cn(
                  "absolute hidden lg:flex right-10 bottom-60 z-20 flex-col justify-start tallXS:!top-[20px] h-[calc(100vh-248px)] w-[40vw] xl:w-[30vw]",
                  {
                    "cursor-not-allowed pointer-events-none opacity-40":
                      editAvatar,
                  }
                )}
              >
                <div className="flex flex-col gap-2 tall2XL:gap-3.5 relative">
                  <div className="flex gap-2.5 items-center justify-between w-full">
                    <input
                      maxLength={10}
                      className="rounded-md 3xl:rounded-xl !w-full text-4xl xl:text-4xl flex flex-shrink disabled:opacity-100 p-0 pl-1 disabled:cursor-default disabled:text-foreground 
                                disabled:bg-transparent z-10
                                "
                      placeholder={profileDetails.nickname}
                      disabled={!editProfile || submitLoading}
                      value={profileDetails.nickname}
                      onChange={(e) => {
                        const isValid = /^[a-z0-9 ]*$/i.test(e.target.value);
                        if (isValid) {
                          setProfileDetails({
                            ...profileDetails,
                            nickname: e.target.value,
                          });
                        }
                      }}
                    />
                    <div className="font-semibold bg-primary text-white xl:text-3xl tall2XL:text-3xl px-2 tall2XL:px-3 rounded-xl">
                      Lv.{selectedNft.level}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-bold tall2XL:text-2xl mb-4">
                      Clear Collectibles #{selectedNft.number}
                    </p>
                  </div>
                </div>

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
                    <p className="text-xl 3xl:">Bubbles: {xp}</p>
                    <p className="font-bold flex items-center gap-1.5">
                      <span className="font-normal">Multiplier:</span>{multiplier} {Number(booster) !== 0 
                        && <>
                       
                        
                        <span>+ {booster}</span>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.849 20.5984L22.699 11.8484C22.949 11.4984 22.849 11.0484 22.499 10.7984C22.399 10.6984 22.249 10.6484 22.099 10.6484H17.499V5.14844C17.499 4.74844 17.149 4.39844 16.749 4.39844C16.499 4.39844 16.249 4.54844 16.149 4.74844L10.299 13.4984C10.049 13.8484 10.149 14.2984 10.499 14.5484C10.599 14.6484 10.749 14.6984 10.899 14.6984H15.499V20.1984C15.499 20.5984 15.849 20.9484 16.249 20.9484C16.499 20.9484 16.749 20.7984 16.849 20.5984Z" fill="#FFC700"/>
                        <path d="M3.5 6H8.5C9.35 6 10 6.65 10 7.5C10 8.35 9.35 9 8.5 9H3.5C2.65 9 2 8.35 2 7.5C2 6.65 2.65 6 3.5 6ZM3.5 18H8.5C9.35 18 10 18.65 10 19.5C10 20.35 9.35 21 8.5 21H3.5C2.65 21 2 20.35 2 19.5C2 18.65 2.65 18 3.5 18ZM1.5 12H5.5C6.35 12 7 12.65 7 13.5C7 14.35 6.35 15 5.5 15H1.5C0.65 15 0 14.35 0 13.5C0 12.65 0.65 12 1.5 12Z" fill="#FFC700" fillOpacity="0.4"/>
                        </svg>
                        </>}
                      {/* MULTIPLIER POP UP */}
                      {/* <span>
                      
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
                      </span> */}
                    </p>
                  </div>

                  {/* DISTRIBUTE BUBBLES BUTTON DIALOG */}
                  <Distribute
                    xp={xp}
                    nfts={nfts}
                    profileDetails={profileDetails}
                    wallets={mwallets}
                    getNft={getNft}
                    getData={getData}
                    accessToken={session?.accessToken || null}
                  />
                </div>
                {/* PROFILE / STAT COMPONENT */}
                <div className="flex flex-col gap-2 bg-white/25 border mt-5 rounded-xl p-5 z-20 grow">
                  <ProfileStat
                    profileDetails={profileDetails}
                    setProfileDetails={setProfileDetails}
                    editProfile={editProfile}
                    submitLoading={submitLoading}
                    mdiscord={mdiscord}
                    mtwitter={mtwitter}
                    count={counter}
                    xp={xp}
                    createdAt={createdAt}
                    errorProfile={errorProfile}
                    setErrorProfile={setErrorProfile}
                  />
                </div>
              </div>
              {/* DESKTOP VIEW STARTS HERE */}
              <div
                className={cn(
                  "hidden lg:bg-white/40 lg:rounded-2xl relative w-full h-full lg:h-fit lg:flex flex-col lg:flex-row justify-between items-start",
                  {
                    "cursor-not-allowed pointer-events-none opacity-40":
                      editProfile || editAvatar,
                  }
                )}
              >
                <div
                  className={cn(
                    "rounded-xl flex gap-3 py-5 px-5 lg:p-3 h-full w-full"
                  )}
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
                        usePortal={false}
                        onOpenChange={(open) => {
                          if (open) {
                            setSelectedDesktop(item.value);
                          } else {
                            setSelectedDesktop("");
                          }
                        }}
                      >
                        <PopoverTrigger
                          disabled={submitLoading}
                          className={cn(
                            buttonVariants({
                              variant: "secondary",
                              size: "sm",
                            }),
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
                                      width: "auto",
                                      opacity: 1,
                                      transition: {
                                        width: {
                                          duration: 0.5,
                                          ease: "easeInOut",
                                         // specify easing here
                                        },
                                        opacity: {
                                          duration: 0.25,
                                          delay: 0.3,
                                          ease: "easeInOut", // specify easing here
                                        },
                                      },
                                    }}
                                    exit={{
                                      width: 0,
                                      opacity: 0,
                                      transition: {
                                        width: {
                                          duration: 0.5,
                                          ease: "easeInOut", // specify easing here
                                        },
                                        opacity: {
                                          duration: 0.1,
                                          ease: "easeInOut", // specify easing here
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
                          style={
                            !custombg
                              ? {
                                  backgroundColor: background,
                                  filter: "brightness(99%)",
                                }
                              : {
                                  backgroundColor: "rgb(255 255 255 / 0.25)",
                                }
                          }
                          className={cn(
                            `${
                              item.value == "tasks" ? "p-0" : "p-8"
                            } hidden lg:block 2xl:bg-white/25 relative border lg:h-[calc(100vh-288px)]  grow min-h-[520px]`,
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
                          {item.value == "tasks" ? (
                            <TaskCompleted
                              task={task}
                              completed={completed}
                              taskLoading={taskLoading}
                              pfp={pfp}
                              handle={handle}
                            />
                          ) : item.value == "nfts" ? (
                            <AllNFT
                              nfts={nfts}
                              setBackground={setBackground}
                              setFavNft={setFavNft}
                              setSelectedNft={setSelectedNft}
                              wrapperRef={wrapperRef}
                              selectedNft={selectedNft}
                              distribute={distribute}
                              submitLoading={submitLoading}
                              setCustombg={setCustombg}
                              handleSubmitAvatar={handleSubmitAvatar}
                            />
                          ) : item.value == "charge" ? (
                            <NftCharge
                              nfts={nfts}
                              tokens={tokens}
                              staked={staked}
                              getData={(token) => getData(token)}
                              submitLoading={submitLoading}
                              setSubmitLoading={setSubmitLoading}
                              accessToken={session?.accessToken || null}
                            />
                          ) : (
                            <>{item.children}</>
                          )}{" "}
                          <PopoverArrow className="w-6 h-3 fill-transparent lg:fill-[#EBF4F7] -translate-y-0.5 z-50" />
                        </PopoverContent>
                      </Popover>
                    ))}
                </div>
                <div
                  className={`z-50 lg:z-0 fixed left-0 right-0 bottom-0 lg:relative w-full lg:w-fit justify-end lg:justify-normal flex gap-3 py-2.5 px-5 lg:p-3 bg-white/50 lg:bg-transparent`}
                >
             
                    <button
                    disabled={submitLoading}
                      className={cn(
                        buttonVariants({
                          variant: "secondary",
                          size: "sm",
                          className:
                            "lg:bg-primary lg:hover:bg-primary/70 group lg:p-2.5",
                        })
                      )}
                      onClick={() => {
                        setEditProfile(true);
                        setSelectedDesktop("");
                      }}
                    >
                      <Icons.settings className="lg:fill-current lg:text-white" />
                    </button>
                    {/* <DropdownMenuContent
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
                    </DropdownMenuContent> */}
                 
                  <Button
                    disabled={true}
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
              <div className="lg:hidden mx-auto md:max-w-md w-full pb-28">
                <Image
                  src={favNft}
                  alt="Dashboard Nft Image"
                  width={341}
                  height={374}
                  className="mx-auto w-full -mt-5 ml-2"
                  priority
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
                        disabled={submitLoading}
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
                  {data.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={cn(
                          `${
                            selected !== item.value ? "hidden" : "block"
                          } w-full h-full`
                        )}
                      >
                        {item.value == "tasks" ? (
                          <TaskCompleted
                            task={task}
                            completed={completed}
                            taskLoading={taskLoading}
                            pfp={pfp}
                            handle={handle}
                          />
                        ) : item.value == "charge" ? (
                          <NftCharge
                            nfts={nfts}
                            tokens={tokens}
                            staked={staked}
                            getData={(token) => getData(token)}
                            submitLoading={submitLoading}
                            setSubmitLoading={setSubmitLoading}
                            accessToken={session?.accessToken || null}
                          />
                        ) : (
                          item.value == "nfts" && (
                            <AllNFT
                              nfts={nfts}
                              setBackground={setBackground}
                              setFavNft={setFavNft}
                              setSelectedNft={setSelectedNft}
                              wrapperRef={wrapperRef}
                              selectedNft={selectedNft}
                              distribute={distribute}
                              submitLoading={submitLoading}
                              setCustombg={setCustombg}
                              handleSubmitAvatar={handleSubmitAvatar}
                            />
                          )
                        )}
                      </div>
                    );
                  })}

                  {/* BROOM PROFILE SECTION */}
                  {selected === "profile" && (
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex gap-2.5 items-center justify-between w-full">
                        <input
                          maxLength={10}
                          className="rounded-md 3xl:rounded-xl !w-full text-4xl xl:text-4xl flex flex-shrink disabled:opacity-100 p-0 pl-1 disabled:cursor-default disabled:text-foreground 
                                disabled:bg-transparent z-10
                                "
                          placeholder={profileDetails.nickname}
                          disabled={!editProfile || submitLoading}
                          value={profileDetails.nickname}
                          onChange={(e) => {
                            const isValid = /^[a-z0-9 ]*$/i.test(
                              e.target.value
                            );
                            if (isValid) {
                              setProfileDetails({
                                ...profileDetails,
                                nickname: e.target.value,
                              });
                            }
                          }}
                        />{" "}
                        <span className="font-semibold bg-primary text-white px-2 rounded-xl">
                          Lv.{selectedNft.level}
                        </span>
                      </div>
                      <p className="font-medium">
                        Clear Collectibles #{selectedNft.number}
                      </p>
                      <Separator className="w-full bg-white my-3" />
                      <p className="text-xl">Bubbles: {xp}</p>
                      <p className="font-bold flex items-center gap-1.5">
                        <span className="font-normal">Multiplier:</span>{multiplier} {Number(booster) !== 0 
                        && <>
                       
                        
                        <span>+ {booster}</span>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.849 20.5984L22.699 11.8484C22.949 11.4984 22.849 11.0484 22.499 10.7984C22.399 10.6984 22.249 10.6484 22.099 10.6484H17.499V5.14844C17.499 4.74844 17.149 4.39844 16.749 4.39844C16.499 4.39844 16.249 4.54844 16.149 4.74844L10.299 13.4984C10.049 13.8484 10.149 14.2984 10.499 14.5484C10.599 14.6484 10.749 14.6984 10.899 14.6984H15.499V20.1984C15.499 20.5984 15.849 20.9484 16.249 20.9484C16.499 20.9484 16.749 20.7984 16.849 20.5984Z" fill="#FFC700"/>
                        <path d="M3.5 6H8.5C9.35 6 10 6.65 10 7.5C10 8.35 9.35 9 8.5 9H3.5C2.65 9 2 8.35 2 7.5C2 6.65 2.65 6 3.5 6ZM3.5 18H8.5C9.35 18 10 18.65 10 19.5C10 20.35 9.35 21 8.5 21H3.5C2.65 21 2 20.35 2 19.5C2 18.65 2.65 18 3.5 18ZM1.5 12H5.5C6.35 12 7 12.65 7 13.5C7 14.35 6.35 15 5.5 15H1.5C0.65 15 0 14.35 0 13.5C0 12.65 0.65 12 1.5 12Z" fill="#FFC700" fillOpacity="0.4"/>
                        </svg>
                        </>}
                        {/* <span>
                          <Dialog className="p-5">
                            <DialogTrigger
                              className={cn(
                                buttonVariants({ variant: "ghost", size: "sm" })
                              )}
                            >
                              <Icons.info className="fill-white/50 w-5 h-5" />
                            </DialogTrigger>

                            <DialogContent className="w-[90vw] lg:max-w-7xl  p-5 bg-[#E7F1F5] rounded-xl lg:rounded-2xl">
                              <DialogHeader
                                className={"items-start text-start"}
                              >
                                <DialogTitle className="text-xl lg:text-3xl w-full">
                                  Multiplier
                                  <Separator className="w-full bg-white my-7 hidden lg:block" />
                                </DialogTitle>
                              </DialogHeader>
                              <Multiplier />
                            </DialogContent>
                          </Dialog>
                        </span> */}
                      </p>
                      <Distribute
                        xp={xp}
                        nfts={nfts}
                        profileDetails={profileDetails}
                        wallets={mwallets}
                        getNft={getNft}
                        getData={getData}
                        accessToken={session?.accessToken || null}
                      />
                    </div>
                  )}
                </div>

                {/* PROFILE / STAT COMPONENT */}
                {selected === "profile" && (
                  <div className="flex flex-col gap-2 bg-white/25 border mt-5 rounded-xl p-5 grow">
                    <ProfileStat
                      profileDetails={profileDetails}
                      setProfileDetails={setProfileDetails}
                      editProfile={editProfile}
                      submitLoading={submitLoading}
                      mdiscord={mdiscord}
                      mtwitter={mtwitter}
                      count={counter}
                      xp={xp}
                      createdAt={createdAt}
                      errorProfile={errorProfile}
                      setErrorProfile={setErrorProfile}
                    />
                  </div>
                )}

                {/* MOBILE BOTTOM STICKY SHOP NAV */}
                <div className="z-50 fixed left-0 right-0 bottom-0 w-full justify-end flex gap-3 py-2.5 px-5 bg-[#E7F1F5]">
                 
                <button
                    disabled={submitLoading}
                      className={cn(
                        buttonVariants({
                          variant: "secondary",
                          size: "sm",
                          className:
                            "bg-primary hover:bg-primary/70 group lg:p-2.5",
                        })
                      )}
                      onClick={() => {
                        setEditProfile(true);
                        setSelectedDesktop("");
                      }}
                    >
                      <Icons.settings className="lg:fill-current lg:text-white" />
                    </button>
                   {/*  <DropdownMenuContent
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
                    </DropdownMenuContent> */}
             
                  <Button size="sm" disabled={true} className="gap-3 text-sm px-4">
                    Share Profile
                    <Icons.profile className="fill-white w-7 h-7" />
                  </Button>
                </div>
              </div>
              {/* MOBILE VIEW ENDS HERE */}
            </main>
          </>
        )}
        
      </div>
    </>
  );
}
