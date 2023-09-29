import React, { useState } from "react";
import Image from "next/image";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import {useRouter} from 'next/router'
import { limits } from "@/constants";
import {AiFillCheckCircle} from 'react-icons/ai'

const Activate = ({discord, twitter, spots, activate, activateReferral ,loadingActivate, loadingReferral, errorMsg}) => {
  const [activated, setActivated] = useState(false);
  const [refferal, setRefferal] = useState(false);
  const [code, setCode] = useState('');
  const router = useRouter();
  const total = limits.filter((name) => name.type == "spots")[0].xp


  return (
    <>
      <div className="flex w-full justify-start items-center">
        <h1 className="text-white font-montserrat font-black text-[20px] 2xl:text-[25px] capitalize">
        Please complete the following steps to enter
        </h1>
      </div>
      <div className="flex flex-col w-full justify-start items-center mt-5">
        <div className="flex flex-col w-full justify-start items-center gap-10 relative">
        
          {/* step 1 */}
          <div className="flex w-full justify-start items-start gap-3  mt-6">
          <Image
              src="/vector_logo.png"
              width={50}
              height={50}
              alt="logo"
              className="hidden sm:block z-10 opacity-70"
              priority
              unoptimized
            />
            <div className="flex flex-col  w-full justify-start items-start">
             
              <div className="flex flex-col lg:flex-row w-full justify-between items-start  gap-2 ">
                <div className="flex justify-center items-center gap-4 opacity-70">
                
                 <div >
                 <h3 className="text-white font-montserrat font-black text-[18px] min-[1920px]:text-[22px] max-w-sm">
                1. Matrica
              </h3>
              <p className="text-white font-montserrat font-light text-[16px] min-[1920px]:text-[18px]">
              Login with your Matrica account
                </p>

                  </div> 
               
                </div>
                
                <button
                  disabled
                  className="flex justify-center items-center border-solid border-2 border-[#BEECFF] bg-[#64CFFF] rounded-full w-full min-[400px]:w-[300px] lg:w-[160px] xl:w-[130px] min-[1660px]:w-[190px] h-[48px] sm:h-[70px] gap-2"
                >
                  <AiFillCheckCircle className="text-[#BEECFF] w-5 h-5" />

                  <span className="font-montserrat text-[#BEECFF]  text-xs min-[1920px]:text-sm font-bold uppercase">
                    Connected
                  </span>
                </button>
              </div>
            </div>
          </div>
        
          <div className="flex w-full justify-start items-start gap-4 mt-6 ">
            <Image
              src="/vector_logo.png"
              width={50}
              height={50}
              alt="logo"
              className={`hidden sm:block z-10 ${(discord !== null && twitter !== null) ? 'opacity-70' : ''}`}
              priority
              unoptimized
            />
            <div className="flex flex-col w-full justify-start items-start">
              <div className="flex flex-col md:items-start xl:flex-row w-full justify-between items-start gap-2">
                <div
                className={`${(discord !== null && twitter !== null) ? 'opacity-70' : ''}`}
                >
                <h3 className="text-white font-montserrat font-black text-[18px] min-[1920px]:text-[22px] max-w-sm">
                2. Connect <span className="text-[#FFEC43]">Discord</span> and <span className="text-[#FFEC43]">Twitter</span>
                </h3>
                  <p className="text-white font-montserrat font-light text-[16px] min-[1920px]:text-[18px] max-w-sm md:max-w-max lg:max-w-sm md:mt-2 lg:mt-0">
                  Link your Discord and Twitter to your Matrica account, this is done to make sure we can correctly give you bubbles for your task!
                </p>
                </div>
               
                <div className="flex gap-3 lg:flex-row flex-col w-full lg:w-auto">
                <a href="https://matrica.io/settings" target="_blank">
                <div className="relative flex w-full">
               
               {discord == null
               
               &&
               <span
               className="absolute inline-flex !w-full min-[400px]:!w-[300px] lg:!w-[160px] xl:!w-[130px] min-[1660px]:!w-[190px] h-[48px] sm:h-[70px]
               bg-[#BEECFF] rounded-full animate-custom opacity-85 lg:!scale-x-[1.05] !scale-y-[1.18] !scale-x-[1.04] lg:!scale-y-[1.1] z-[0]"
             ></span>
               }
              
                <button
                disabled={discord !== null ? true : false}
                className={`flex relative justify-center items-center rounded-full !w-full min-[400px]:!w-[300px] ${discord !== null ? 'border-solid border-2 border-[#BEECFF] bg-[#64CFFF]' : 'bg-white'}
                lg:!w-[160px] xl:!w-[130px] min-[1660px]:!w-[190px] h-[48px] sm:h-[70px] gap-2`}>
                  {discord !== null
                  ?
                  <AiFillCheckCircle className="text-[#BEECFF] w-5 h-5" />
                  :
                  <BsDiscord className="text-[#1FBCFF] w-5 h-5" />

                  }
                  
                  <span className={`font-montserrat ${discord !== null ? 'text-[#BEECFF]' : 'text-[#1FBCFF]'} text-xs min-[1920px]:text-sm font-bold uppercase `}>
                  Discord
                  </span>
                </button>
                </div>
                </a>
                <a href="https://matrica.io/settings" target="_blank">
                <div className="relative flex w-full">
               
               {twitter == null
               
               &&
               <span
               className="absolute inline-flex !w-full min-[400px]:!w-[300px] lg:!w-[160px] xl:!w-[130px] min-[1660px]:!w-[190px] h-[48px] sm:h-[70px]
               bg-[#BEECFF] rounded-full animate-custom opacity-85 lg:!scale-x-[1.05] !scale-y-[1.18] !scale-x-[1.04] lg:!scale-y-[1.1] z-[0]"
             ></span>
               }
                <button 
                disabled={twitter !== null ? true : false}
                className={`flex justify-center z-[1] items-center  rounded-full !w-full min-[400px]:!w-[300px] ${twitter !== null ? 'border-solid border-2 border-[#BEECFF] bg-[#64CFFF]' : 'bg-white'}
                lg:!w-[160px] xl:!w-[130px] min-[1660px]:!w-[190px] h-[48px] sm:h-[70px] gap-2 md:mb-1 xl:mb-0 `}>
                  
                  {twitter !== null ?
                  <AiFillCheckCircle className="text-[#BEECFF] w-5 h-5" />
                  : 
                  <BsTwitter className="text-[#1FBCFF] w-5 h-5" />

                }
                  <span className={`font-montserrat ${twitter !== null ? 'text-[#BEECFF]' : 'text-[#1FBCFF]'}   text-xs min-[1920px]:text-sm font-bold uppercase`}>
                   Twitter

                  </span>
                </button>
                </div>
                </a>
                </div>
             
              </div>
        
       
            </div>
          </div>
          <div className="flex w-full justify-start items-start gap-4 mt-6">
          <Image
              src="/vector_logo.png"
              width={50}
              height={50}
              alt="logo"
              className={`hidden sm:block z-10  ${(twitter == null || discord == null) ? 'opacity-70' : ''}`}
              priority
              unoptimized
            />
            <div className="flex flex-col w-full justify-start items-start">
            <div className="flex flex-col items-start xl:flex-row w-full justify-between gap-2">
             <div className="flex justify-start items-start gap-4">
            
            <div>
              <h3 className={`text-white font-montserrat font-black text-[18px] min-[1920px]:text-[22px] max-w-sm  ${(twitter == null || discord == null) ? 'opacity-70' : ''}`}>
                  3. Activate Clear Collectibles Account
                </h3>
                <p className={`text-white font-montserrat font-light text-[16px] min-[1920px]:text-[18px]  max-w-sm md:max-w-max lg:max-w-sm md:mt-2 lg:mt-0  ${(twitter == null || discord == null) ? 'opacity-70' : ''}`}>
                  Get ready to join the excitement by activating your account
                  pronto, because we&apos;ve got limited spots available! Or enter a referral code from your friend!
                </p>
                </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-start items-start gap-3 w-full lg:w-auto">
                {spots < total && twitter !== null && discord !== null && !loadingActivate && !refferal
                &&
                <span 
                className="absolute inline-flex !w-full min-[400px]:!w-[300px] lg:!w-[160px] xl:!w-[130px] min-[1660px]:!w-[190px] h-[48px] sm:h-[70px]
                bg-[#BEECFF] rounded-full animate-custom opacity-85 lg:!scale-x-[1.05] !scale-y-[1.18] !scale-x-[1.04] lg:!scale-y-[1.1] z-[0]"
              ></span>

                }
              
                <button
                  disabled={spots >= total || twitter == null || discord == null || loadingActivate}
                  className={`flex justify-center relative items-center ${(spots >= total || twitter == null || discord == null || loadingActivate) ? 'opacity-70' : ''} ${
                    refferal && "!hidden"
                  } ${
                    activated
                      ? "border-2 border-[#7bd6ff] bg-[#FFFFFF1E]"
                      : "bg-white"
                  } rounded-full w-full min-[400px]:w-[300px] lg:w-[160px] xl:w-[130px] min-[1660px]:w-[190px] h-[48px] sm:h-[70px] gap-2`}
                  onClick={() => {
                                  activate()
                  }}
                >
                   <Image
                    src="/icons/check.png"
                    width={20}
                    height={20}
                    alt="icon"
                    className={`${activated && "!hidden"}`}
                    priority
                    unoptimized
                  />
                  <div className="flex flex-col justify-center items-center">
                    <span
                      className={`font-montserrat ${
                        activated ? "text-white" : "text-[#1FBCFF]"
                      } text-xs min-[1920px]:text-sm font-bold uppercase`}
                    >
                      {loadingActivate ? <span className="flex">  <svg aria-hidden="true" className="w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-[#1FBCFF]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg><span></span><span>Loading...</span> </span> 
                      :  
                      "Activate"
                      } 
                    </span>
                    <span
                      className={`text-[#1FBCFF] font-montserrat font-medium text-xs min-[1920px]:text-sm ${
                        activated ? "hidden" : "inline"
                      }`}
                    >
                      {spots >= total ? 'Full' : `${spots}/${total}`}
                      
                    </span>
                  </div>
                </button>
            
                <button
                  disabled={(twitter == null || discord == null || loadingActivate || loadingReferral) ? true : false}
                  className={`flex items-center bg-white rounded-full h-[48px] sm:h-[70px] gap-2 ${(twitter == null || discord == null || loadingActivate || loadingReferral) ? 'opacity-70' : ''} ${
                    refferal
                      ? "w-full min-[400px]:w-[300px] lg:w-[320px] xl:w-[260px] min-[1660px]:w-[380px] justify-start"
                      : "w-full min-[400px]:w-[300px] lg:w-[160px] xl:w-[130px] min-[1660px]:w-[190px] justify-center md:mb-1 xl:mb-0"
                  }`}
                  onClick={() => {
                    setRefferal(true);
                  }}
                >
                  <Image
                    src="/icons/key.png"
                    width={20}
                    height={20}
                    alt="icon"
                    className={`${refferal && "!hidden"} `}
                    priority
                    unoptimized
                  />
                  <div className="flex flex-col justify-center items-center">
                  <span
                    className={`font-montserrat text-[#1FBCFF] text-xs min-[1920px]:text-sm font-bold uppercase ${
                      refferal && "hidden"
                    }`}
                  >
                    Referral
                  </span>
                  <span
                    className={`font-montserrat text-[#1FBCFF] text-xs min-[1920px]:text-sm font-bold uppercase ${
                      refferal && "hidden"
                    }`}
                  >
                   Code
                  </span>
                  
                  </div>
                  
                  {refferal && (
                    <>
                      <input
                        disabled={loadingReferral}
                        type="text"
                        className="rounded-l-full w-full h-full pl-4 outline-none text-[#1FBCFF] font-montserrat text-[20px] font-semibold"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                      />
                      <button
                        className={`flex justify-center items-center w-[54px] h-[38px] sm:h-[58px] rounded-l-full bg-[#1FBCFF] text-white font-bold text-xs font-montserrat ${
                          (code?.length < 1 || loadingReferral) && "opacity-50 cursor-not-allowed"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          activateReferral(code)
                        }}
                        disabled={(code?.length < 1 || loadingReferral) ? true : false}
                      >
                        {loadingReferral
                        ?
 <svg aria-hidden="true" className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-[#1FBCFF]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg> 

                        :
                        "OK"
                        }
                        
                      </button>
                      
                      <button
                        className="flex justify-center items-center w-[54px] h-[38px] sm:h-[58px] rounded-r-full bg-[#1FBCFF] mr-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActivated(false);
                          setRefferal(false);
                          setCode('')
                        }}
                      >
                        <RxCross2 className="w-5 h-5 text-white" />
                      </button>
                      
                    </>
                  )}
                </button>
           
                </div>
               
              </div>
             
              
            </div>
            
          </div>
          
        </div>
        
      </div>
    </>
  );
};

export default Activate;
