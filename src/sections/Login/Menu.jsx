import React, { useState } from "react";
import Image from "next/image";
import { links } from "@/constants";
import { FaCopy } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";




const Menu = ({code, counter}) => {

  const router = useRouter()

  const [copied, setCopied] = useState(false);
  return (
    <>
     <div className="flex flex-col w-full justify-start items-center gap-7">
    {router.pathname !== "/activation"
    ?
   <>
    {links.map((link) => (
      <div
        key={link.name}
        onClick={() => {
          if(link.path !== "/logout"){
            router.push(link.path)
          }else{
            localStorage.clear();
            signOut({ callbackUrl: "/login" }); 
          }
        }}
        className="flex w-full justify-start items-center gap-3 text-[#1FBCFF] font-semibold text-base font-montserrat"
      >
        {link.icon}
        {link.name}
      </div>
    ))}
</>
    :
<>
{links.map((link) => {
  if(link.path == "/logout"){
    return(
      <div
        key={link.name}
        onClick={() => {
            localStorage.clear();
            signOut({ callbackUrl: "/login" }); 
        }}
        className="flex w-full justify-start items-center gap-3 text-[#1FBCFF] font-semibold text-base font-montserrat"
      >
        {link.icon}
        {link.name}
      </div>


    )


  }
      
    })}

</>


    }
       </div>
      <div className="flex flex-col justify-start items-center w-full gap-5 mt-20">
      <div className="flex justify-center items-center gap-4">
                <a href="https://twitter.com/ClearCollectNFT" target="_blank">
              <Image src="/icons2/twitter_blue.png" width={20} height={20} alt="/" unoptimized priority/>
                </a>
                <Image src="/icons2/rectangle_blue.png" width={2} height={17} alt="/" unoptimized priority />
                <a href="https://discord.gg/clearcollectibles" target="_blank">
              <Image src="/icons2/discord_blue.png" width={20} height={20} alt="/" unoptimized priority />
                </a>
                <Image src="/icons2/rectangle_blue.png" width={2} height={17} alt="/" unoptimized priority />
                <a href="https://matrica.io/settings" target="_blank">
              <Image src="/icons2/matrica_blue.png" width={20} height={20} alt="/" unoptimized priority />
                </a>


            </div>
      {router.pathname !== "/activation"
        &&
        <div className="flex flex-col justify-start items-center w-full py-4 border-t border-b border-[#f2f2f2]">
          <div className="flex w-full justify-start items-center">
            <span className="text-[#1FBCFF] font-montserrat font-bold text-base">
              Referral code:
            </span>
          </div>
          <div className="flex w-full justify-start items-center gap-3">
            <span className="text-[#1FBCFF] font-montserrat font-bold text-[28px]">
              {copied ? "Copied" : code !== null ? code : 'Loading'}
            </span>
            {!copied ? (
              <FaCopy
                className="text-[#1FBCFF] w-5 h-5 opacity-80 cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(code);
                  setCopied(true);
                  setTimeout(() => {
                    setCopied(false);
                  }, 2000);
                }}
              />
            ) : (
              <AiFillCheckCircle className="text-[#1FBCFF] w-5 h-5 opacity-80 cursor-pointer" />
            )}
             <span className="text-[#1FBCFF] font-montserrat font-medium text-sm">
              {counter}/3
            </span>
          </div>
       
          
    
        </div>
         }
         <a href="https://interlace.app" target="_blank">
        <div className="flex justify-center items-center w-full gap-2 pb-3">
          <span className="text-[#6cd2ff] font-normal font-montserrat text-sm">
            Powered by:
          </span>
          <Image src="/interlace.png" width={100} height={25} alt="logo"  priority
        unoptimized/>
        </div>
        </a>
      </div>
    </>
  );
};

export default Menu;
