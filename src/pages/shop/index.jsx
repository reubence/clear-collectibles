"use client";
import CheckboxConfirmation from "@/components/confirmation-pages/checkbox-confirmation";
import StandardConfirmation from "@/components/confirmation-pages/standard-confirmation";
import ShopItem from "@/components/shop-page/shop-item";
import { Button, buttonVariants } from "@/components/ui/button";
import { Command } from "@/components/ui/command";
import { Icons } from "@/components/ui/icons";
import {motion, AnimatePresence} from 'framer-motion'
import {getLevel } from "@/lib/utils";
import { Search} from "lucide-react";
import NavBar from "@/components/layout/navbar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import  {BsCheckLg} from 'react-icons/bs'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, {useState, useEffect} from "react";
import Head from "next/head";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { Connection } from "@solana/web3.js";
import { getParsedNftAccountsByOwner } from "@nfteyez/sol-rayz";

export default function Shop() {

  const [openFilterMobile, setOpenFilterMobile] = useState(false);
  const [selected, setSelected] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null)
  const [filteredData, setFilterData] = useState([])
  const [shopData, setShopData] = useState([])
  const [category, setCategory] = useState([])
  const [popoverOpen, setPopoverOpen] = useState(0);
  const [selectedType, setSelectedType] = useState('all');
  const [nfts, setResult] = useState([])
  const [loading, setLoading] = useState(true)
  const [xp, setXp] = useState(0);
  const [avatar, setAvatar] = useState(null);
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [quantity, setQuantity] = useState(1)
  const [process1, setProcess] = useState(false)
  const [wallets, setWallets] = useState([])
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });

    const handleSearchChange = (event) => {
        const inputValue = event.target.value;
        setSearchTerm(inputValue);
        filterItems(inputValue, selectedType);
       
    };

    const handleTypeChange = (event) => {
      const type = event.target.value;
      setSelectedType(type);
      filterItems(searchTerm, type);
  };

  const filterItems = (term, type) => {
    let filtered = shopData.filter(item => 
        item.name.toLowerCase().includes(term.toLowerCase())
    );

    if (type !== 'all') {
        filtered = filtered.filter(item => item.label === type);
    }

    setFilterData(filtered);
};

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
      setWallets(wallets)
      getNft(wallets);
       
    }
  } catch (err) {
    console.log(err);
  }
}

async function getNft(walletsArray) {
  const rpc = new Connection(process.env.NEXT_PUBLIC_RPC_URL);
  
  // Using Promise.all to handle all the wallets in parallel
  const allWalletData = await Promise.all(walletsArray.map(async wallet => {
      const nftArray = await getParsedNftAccountsByOwner({
          publicAddress: wallet.id,
          connection: rpc,
      });
      
      const numbers = nftArray.filter(nft => nft.updateAuthority === 'AhmGDKrY2dPbSFNgRh6rurHC2CGGFiZP7McXGQcLK2EV')
          .map(nft => {
              const number = nft.data.name.replace("Clear Collectibles #", "");
              return {
                  number: Number(number),
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
      return numbers.map(info => {
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
  }));

  // Flatten the array of arrays into a single array
  const data = [].concat(...allWalletData);
  
  setResult(data);
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
        setXp(result?.totalXp);
        if (result.twitter.pfp) {
          setAvatar(result.twitter.url);
        }

      }
    } catch (e) {
      console.log(e);
    }
  }
  async function getCategory(token) {
    try {
      //  Block of code to try
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API}/api/v1/getMyCategory`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );



      const data = await res.text();
      if(data.length){
        const result = JSON.parse(data);
        setCategory(result)
      }

     
    } catch (e) {
      console.log(e)
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
        await getCategory(result.token)
        await getAllItems(result.token)
        setLoading(false)
        
      }
    }
  }


  async function getAllItems(token){

    try{
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API}/api/v1/items`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );
  
  
  
      const data = await res.text();
      if(data.length){
        const result = JSON.parse(data);
        setShopData(result)
        setFilterData(result)
        setLoading(false)
        
      }
  

    }catch(err){
      console.log(err)
    }
    

  }


  useEffect(() => {

    if(session?.accessToken){
      getWallets(session?.accessToken)
   
    const token = localStorage.getItem("token");
    const expiry = localStorage.getItem("expiry");
    
    if (token && token !== null && typeof token !== "undefined" && Date.now() < expiry) {
      getData(token);
      getCategory(token)
      getAllItems(token)
      
    }else{
      getToken(session?.accessToken)
    }
  }
    if (session?.error === "RefreshAccessTokenError") {
      localStorage.clear();
      signOut({ callbackUrl: "/login" });
    }
  }, [session]);
  
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
      </Head>
      <div
        className={cn(
          `h-screen font-g8 lg:overflow-y-hidden tallXS:!h-full bg-[#D7E8EF] overflow-y-auto `
        )}
            
        >
      <NavBar avatar={avatar}/>
      <div className="px-4 lg:px-12 pb-12 pt-4 w-full lg:h-[calc(100vh-112px)] flex flex-col relative">
        <div className="h-full w-full py-5 px-4 lg:p-[30px] border rounded-2xl bg-white/25">
          <div className="flex flex-col gap-4 lg:flex-row lg:justify-between items-start lg:items-center text-base lg:text-xl">
            <div className="flex items-center justify-between w-full lg:w-fit">
              <div className="gap-1.5 lg:gap-3 flex items-center uppercase font-extrabold text-xl lg:text-2xl">
                <Icons.shop className="w-6 h-6 lg:w-[40px] lg:h-[40px] mb-1 lg:pb-1 fill-foreground" />
                Shop
              </div>
              <Button
                variant="ghost"
                onClick={() => {
                  setOpenFilterMobile(!openFilterMobile);
                }}
                className=""
              >
                <Icons.filter className="lg:hidden w-5 h-5 fill-gray-400 stroke-gray-400" />
              </Button>
            </div>
            <div className="flex items-center justify-between w-full lg:w-fit whitespace-nowrap gap-[30px]">
              <span>
                <span className="font-normal lg:font-extrabold">Bubbles:</span>{" "}
                {xp}
              </span>

              <Command className="hidden lg:block rounded-lg border ">
              
    <div className="flex items-center px-5" cmdk-input-wrapper="">
    <Search className="mr-2 mb-1 h-6 w-6 shrink-0 text-muted-foreground opacity-50" />
                
    <input type="text" className={cn(
        "flex w-full rounded-md bg-transparent py-3.5 text-sm md:text-xl outline-none font-extrabold placeholder:text-muted-foreground placeholder:opacity-50 disabled:cursor-not-allowed disabled:opacity-50")} value={searchTerm} placeholder="Search..." onChange={(e) => {handleSearchChange(e)}}/>

  </div>


          
              </Command>

              

              <button
                onClick={() => router.push('/shop/history')}
                disabled={process1}
                className={cn(
                  buttonVariants(),
                  "min-w-fit !py-3.5 gap-3.5 text-sm lg:text-xl text-white capitalize lg:uppercase"
                )}
              >
                <Icons.clock className="hidden lg:block w-6 h-6 fill-white" />
                History
              </button>
            </div>
          </div>
          <Separator className="my-5 lg:my-6 mr-2.5 bg-white" />
          <div className="lg:h-[calc(100vh-348px)] relative flex w-full flex-col lg:flex-row gap-7">
            <div
              className={cn(
                "hidden lg:block h-full w-full lg:w-[240px] xl:!w-[350px] tallXS:overflow-y-auto flex-none  lg:bg-white rounded-2xl col-span-2 lg:p-8 tallXS:p-5 text-base lg:text-xl",
                { block: openFilterMobile }
              )}
            >
              <span className="hidden lg:block  ">Type filtering</span>
              <Separator className="hidden lg:block my-6 bg-[#E6E6E6]" />
              {/* FILTERING OPTIONS */}
              <ScrollArea className=" lg:pr-2.5">
              <div
                    className="flex items-center justify-between mb-10 gap-8"
                    
                  >
                    <label
                      htmlFor="all"
                      className="whitespace-nowrap text-sm font-semibold lg:text-[15px] lg:font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      All
                    </label>

                    <input 
                    id="all"
                    className={cn(
                      "sr-only"
                    )}
                        type="radio" 
                        value="all"
                        checked={selectedType === "all"} 
                        onChange={handleTypeChange}
                    />

                <label htmlFor={"all"} className="flex items-center cursor-pointer">
                <div className={`w-6 h-6 mr-2 border rounded-xl ${selectedType === "all" ? 'bg-primary' : 'bg-white border-primary'}`}>
                    {selectedType === "all" &&  <BsCheckLg className="pt-1 text-[20px] text-white" />}
                </div>
               
            </label>
                    
                 </div>
                {category && category.length > 1
                &&
                <>
                {category.map((filter, index) => {
                  return(
                                 <div
                    className="flex items-center justify-between mb-10 gap-8"
                    key={index}
                  >
                    <label
                      htmlFor={filter.label}
                      className="whitespace-nowrap text-sm font-semibold lg:text-[15px] lg:font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {filter.title}
                    </label>

                    <input 
                    id={filter.label}
                    className={cn(
                      "sr-only"
                    )}
                        type="radio" 
                        value={filter.label} 
                        checked={selectedType === filter.label} 
                        onChange={handleTypeChange}
                    />

                <label htmlFor={filter.label} className="flex items-center cursor-pointer">
                <div className={`w-6 h-6 mr-2 border rounded-xl ${selectedType === filter.label ? 'bg-primary' : 'bg-white border-primary'}`}>
                    {selectedType === filter.label &&  <BsCheckLg className="pt-1 text-[20px] text-white" />}
                </div>
               
            </label>
                    
                 </div>
                    )})}
</>
                }
              </ScrollArea>
            </div>
            <div className="h-full rounded-2xl flex flex-grow flex-col">

              {loading ?

<>
<div className="flex justify-center items-center h-full w-full  my-20 lg:mt-0">
<motion.div
animate={{
rotate: 360,
}}
transition={{
repeat: Infinity,
duration: 2,
}}
>
<Image src="/images/logo-desktop.svg" width={60} height={60} alt="loading" priority unoptimized />
</motion.div>
</div>

</>

:
<ScrollArea className="w-full lg:h-[calc(100vh-100px)] lg:border-b pb-64 lg:pb-4 lg:mb-5">
                <div className="p-3 grid xs:grid-cols-1 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-5">
                 
                 {filteredData && filteredData.length > 0
                  &&
                  <>
                  
                  {filteredData.map((item, index) => (
                    <ShopItem
                      key={index}
                      setSelected={() => setSelected(index)}
                      setSelectedItem={setSelectedItem}
                      nfts={nfts}
                      process1={process1}
                      selected={selected}
                      item={item}
                      image={item.image}
                      name={item.name}
                      price={item.price}
                      index={index}
                      limited={item.limited}
                      unreleased={item.unreleased || false}
                      unreleasedTimer={item.unreleasedTimer || null}
                    />
                  ))}
                  
                  </>
                  
                 }
                 
                
                </div>
              </ScrollArea>
              }
              

              {/* DESKTOP BOTTOM SHOP NAV HIDDEN ON MOBILE */}
              {selectedItem !== null &&
               <AnimatePresence>
               <motion.div
               initial={{opacity:0}}
               animate={{opacity:1}}
               transition={{duration:1}}
               
               className="hidden lg:flex justify-between items-end gap-x-7 w-full">
                 <div className="flex items-center gap-x-6">
                   <Image
                     src={selectedItem.image}
                     alt="Clock Icon"
                     height={94}
                     width={94}
                     className="rounded-2xl w-[64px] h-[64px] transition-opacity opacity-0 duration-[2s] aspect-square object-cover "
                     onLoadingComplete={(image) => image.classList.remove("opacity-0")}
     
                   />
 
                   <div className="flex flex-col">
                     <h3 className="inline-block text-base font-bold uppercase">
                       {selectedItem.name}
                     </h3>
                     <p className="inline-block text-sm font-normal pr-4 w-full">
                       {selectedItem.description}
                     </p>
                   </div>
                 </div>
                 <div className="flex flex-col xl:flex-row gap-2 xl:gap-6 items-center">
                   <div className="flex flex-col gap-y-1.5 justify-center flex-none lg:w-[200px]">
                     <p className="text-xs uppercase font-bold whitespace-nowrap text-[red]">
                       {xp < selectedItem.price && "Insufficient Bubbles!"}
                     </p>
                     <p className="text-md uppercase font-[600]">
                       Price: {selectedItem.price}
                     </p>
                     <p className="text-md uppercase font-normal">
                       My Bubbles: {xp}
                     </p>
                   </div>
                   {/* ADDRESS DIALOG FULL SCREEN */}
                 
                   {/* REMAINING POPUPS */}
                   {selectedItem.variant == "standard" ? (
                     <Popover
                     onOpenChange={(open) => {
                      if(open){
                        setQuantity(1)
                        setPopoverOpen(1)
                      }
                     
                    }}
                    open={popoverOpen === 1}
                     >
                       <PopoverTrigger
                        disabled={xp < selectedItem.price || !nfts.some((item) => Number(item.level) >= selectedItem.requirement)}
                         className={cn(
                           buttonVariants(),
                           "text-xl font-bold text-white uppercase h-14 rounded-2xl"
                         )}
                         onClick={() => {
                          if(xp >= selectedItem.price){
                            setPopoverOpen(1);
                          }
                          
                         }}
                       >
                         <Icons.shop className="fill-white mb-1.5" />
                         Buy
                       </PopoverTrigger>
                       <PopoverContent
                      
                       >
                        <StandardConfirmation setPopoverOpen={setPopoverOpen} item={selectedItem} quantity={quantity} setQuantity={setQuantity} process1={process1} setProcess={setProcess}/>
            
                       </PopoverContent>
                     </Popover>
                   )
                   :
                   <Popover
                   onOpenChange={(open) => {
                    if(open){
                      setPopoverOpen(2)
                    }
                   
                  }}
                  open={popoverOpen === 2}
                   >
                       <PopoverTrigger
                        disabled={xp < selectedItem.price}
                         className={cn(
                           buttonVariants(),
                           "text-xl font-bold text-white uppercase h-14 rounded-2xl"
                         )}
                         onClick={() => {
                          if(xp >= selectedItem.price){
                            setPopoverOpen(2);
                          }
                          
                         }}
                       >
                         <Icons.shop className="fill-white mb-1.5" />
                         Buy
                       </PopoverTrigger>
                       <PopoverContent>
                        <CheckboxConfirmation setPopoverOpen={setPopoverOpen} item={selectedItem} quantity={quantity} setQuantity={setQuantity} process1={process1} setProcess={setProcess} wallets={wallets}/>
            
                       </PopoverContent>
                     </Popover>
                   
                   }
                 </div>
               </motion.div>
               </AnimatePresence>
              
              }
           
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE BOTTOM STICKY SHOP NAV */}
      {selectedItem !== null &&
      <div className="bg-[#E7F1F5] bottom-0 block lg:hidden fixed w-full z-50">
        <div className="w-full border-t border-b border-t-white border-b-white h-full p-5">
          <div className="flex gap-y-6 flex-col lg:flex-row w-full justify-between items-start lg:items-center">
            <div className="flex gap-x-3 lg:gap-x-6 w-full justify-between items-start">
              <div className="flex gap-x-3">
              <Image
                src={selectedItem.image}
                alt="Clock Icon"
                height={44}
                width={44}
                className="rounded-2xl w-[40px] h-[40px]"
                unoptimized
              />

              

              <div className="flex flex-col justify-center gap-0.5 lg:gap-0">
                <h3 className="inline-block text-base lg:text-xl font-bold uppercase">
                  {selectedItem.name}
                </h3>
             
                <p className="inline-block text-sm font-normal">
                 {selectedItem.description}
                </p>
              </div>
              </div>
              <p className="text-md lg:text-2xl uppercase font-[900]">
                  {selectedItem.price}
              </p>
            </div>
            <div className="flex  gap-6 w-full justify-end">
             
                <p className="text-md lg:text-2xl uppercase font-[600] w-full text-right">
                  My Bubbles: {xp}
                </p>
            </div>
          </div>
        </div>
        <div className="p-5 bg">
          <Sheet>
            <SheetTrigger
              className={cn(
                buttonVariants(),
                "lg:hidden gap-1 text-base font-bold text-white uppercase py-3 h-fit w-full rounded-2xl"
              )}
              onClick={() => {
                selectedItem.variant == "standard" ?
                setPopoverOpen(1)
                :
                setPopoverOpen(2)
              }}
              disabled={xp < selectedItem.price}
            >
              
              {xp < selectedItem.price ? <p>Insufficient Bubbles!</p> : <><Icons.shop className="fill-white mb-1.5" /><p>Buy</p></>}  
            </SheetTrigger>
            <SheetContent side="bottom" className="">
              {popoverOpen === 1 && <StandardConfirmation setPopoverOpen={setPopoverOpen} item={selectedItem} quantity={quantity} setQuantity={setQuantity} process1={process1} setProcess={setProcess}/>}
              {popoverOpen === 2 && <CheckboxConfirmation setPopoverOpen={setPopoverOpen} item={selectedItem} quantity={quantity} setQuantity={setQuantity} process1={process1} setProcess={setProcess} wallets={wallets}/>}
       
            </SheetContent>
          </Sheet>
        </div>
      </div>
}
      </div>
         
    </>
  );
}

