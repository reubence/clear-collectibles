"use client";

import ListItem from "@/components/history-pages/list-item";
import { Button, buttonVariants } from "@/components/ui/button";
import { Command} from "@/components/ui/command";
import { Icons } from "@/components/ui/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import NavBar from "@/components/layout/navbar";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, {useState, useEffect} from "react";
import Head from 'next/head'
import  {BsCheckLg} from 'react-icons/bs'
import { Search } from "lucide-react";



function History() {
  const [openFilterMobile, setOpenFilterMobile] = useState(false);
  const [status, setStatus] = useState("All");
  const [selectedType, setSelectedType] = useState('all');
  const [loading, setLoading] = useState(true)
  const [filteredItems, setFilterData] = useState([])
  const [avatar, setAvatar] = useState(null);
  const [category, setCategory] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [transactions, setTransactions] = useState([])
  const [xp, setXp] = useState(0)
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });


  const handleTypeChange = (event) => {
    const type = event.target.value;
    setSelectedType(type);
    filterItems(searchTerm, type, status);
};

const handleSearchChange = (event) => {
  const inputValue = event.target.value;
  setSearchTerm(inputValue);
  filterItems(inputValue, selectedType, status);
 
};

const handleStatusChange = (value) => {
  setStatus(value);
  filterItems(searchTerm, selectedType, value);
 
};

const filterItems = (term, type, status) => {
  let filtered = transactions.filter(item => 
      item.title.toLowerCase().includes(term.toLowerCase())
  );

  if (type !== 'all') {
      filtered = filtered.filter(item => item.filter.toLowerCase() === type);
      console.log(type)
  }

  if(status !== 'All'){
    filtered = filtered.filter(item => item.status === status);
    
  }

  setFilterData(filtered);
};



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

  async function getAllOrders(token){

    try{
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API}/api/v1/orders`,
        {
          headers:{
            Authorization: `Bearer ${token}`
          }
        }
      );
  
  
  
      const data = await res.text();
      if(data.length){
        const result = JSON.parse(data);
        setTransactions(result)
        setFilterData(result)
      }
  

    }catch(err){
      console.log(err)
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
        await getAllOrders(result.token)
        setLoading(false)
        
      }
    }
  }

  
  useEffect(() => {

    if(session?.accessToken){
    
    const token = localStorage.getItem("token");
    const expiry = localStorage.getItem("expiry");
    
    if (token && token !== null && typeof token !== "undefined" && Date.now() < expiry) {
      getData(token);
      getCategory(token)
      getAllOrders(token)
      setLoading(false)
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

              <Link
                href="/shop"
                className={cn(
                  buttonVariants(),
                  "min-w-fit gap-3.5 !py-2 text-sm lg:text-xl text-white capitalize lg:uppercase"
                )}
              >
                <Icons.shop className="mb-2 fill-white" />
                Shop
              </Link>
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
            <div className="h-full rounded-2xl flex flex-grow flex-col lg:bg-white">
              <div className="hidden w-full lg:flex justify-end items-center pr-8 pt-8">
                <Button
                  size="sm"
                  variant="ghost"
                  className={cn(
                    "uppercase lg:rounded-lg text-base font-medium text-foreground/50",
                    {
                      "text-foreground font-bold": status === "All",
                    }
                  )}
                  onClick={()=> {
                    handleStatusChange(`All`)
                   }
                  }
                >
                  All
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className={cn(
                    "uppercase lg:rounded-lg text-base font-medium text-foreground/50",
                    {
                      "text-foreground font-bold": status === "Pending",
                    }
                  )}
                  onClick={()=> {
                    handleStatusChange(`Pending`)
                   }
                  }
                >
                  Pending
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className={cn(
                    "uppercase lg:rounded-lg text-base font-medium text-foreground/50",
                    {
                      "text-foreground font-bold": status === "Fulfilled",
                    }
                  )}
                  onClick={()=> {
                    handleStatusChange(`Fulfilled`)
                   }
                  }
                >
                  Fulfilled
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className={cn(
                    "uppercase lg:rounded-lg text-base font-medium text-foreground/50",
                    {
                      "text-foreground font-bold": status === "Refunded",
                    }
                  )}
                   onClick={()=> {
                    handleStatusChange(`Refunded`)
                   }
                  }
                >
                  Refunded
                </Button>
              </div>

              <ScrollArea className="w-full lg:h-[calc(100vh-258px)] lg:border-bpb-44 lg:pb-4 lg:mb-5">
                <div className="flex flex-col gap-3 lg:gap-5 lg:p-8">
                  {filteredItems.map((item, index) => (
                    <ListItem
                      image={item.image}
                      orderPlaced={item.orderPlaced || null}
                      total={item.total || null}
                      quantityPurchased={item.quantityPurchased || null}
                      deliveryMethod={item.deliveryMethod || null}
                      supportTicket={item.supportTicket || null}
                      status={item.status || null}
                      title={item.title || null}
                      subtitle={item.subtitle || null}
                      description={item.description || null}
                      airdropWallet={item.airdropWallet || null}
                      code={item.code || null}
                      email={item.email || null}
                      details={item.details || false}
                      redeemCode={item.redeemCode || false}
                      solscan={item.solscan || false}
                      key={index}
                    />
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default History;
