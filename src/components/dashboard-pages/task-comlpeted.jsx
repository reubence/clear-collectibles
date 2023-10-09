import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import React, {useState, useEffect} from "react";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { Separator } from "../ui/separator";
import Image from "next/image";

let tabs = [
  { id: "tasks", label: "Tasks" },
  { id: "completed", label: "Completed" },
];




export default function TaskCompleted({ task, completed, taskLoading, pfp, handle }) {
  
  let [activeTab, setActiveTab] = React.useState(tabs[0].id);
  return (


 
    <Tabs
      defaultValue="tasks"
      className={`w-[calc(100vw-80px)] sm:w-[calc(768px-368px)] lg:w-[35vw] xl:w-[27vw] h-[460px] lg:h-full pt-8`}
    >
        <div className="flex flex-col items-start">
      <TabsList className="px-8">
        {tabs.map((tab) => (
          <div className="relative" key={tab.id}>
            <TabsTrigger
              className="relative font-bold  text-base md:text-xl leading-none"
              value={tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="dot"
                  transition={{ type: "spring", xbounce: 0.2, duration: 0.6 }}
                  className="absolute w-1.5 h-1.5 rounded-full bg-foreground right-1/2 mt-10"
                />
              )}
              {tab.label}
            </TabsTrigger>
          </div>
        ))}
      </TabsList>
      <Separator className="mt-4" />

      <div className="flex justify-start items-center my-3 px-4 gap-2">
        <div className="relative">
        <button className={`${handle ? "border-primary border-2 bg-white text-[#6CD2FF]" : "text-[#B4BEC2] bg-white/50 "} font-normal px-3 py-1 text-[8px] rounded-md pointer-events-none`}>Twitter Handle</button>
          {handle && 
          <div className="absolute -top-1 -right-1">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2794_36970)">
      <path d="M10.0007 19.6615C15.3394 19.6615 19.6673 15.3335 19.6673 9.99479C19.6673 4.65604 15.3394 0.328125 10.0007 0.328125C4.6619 0.328125 0.333984 4.65604 0.333984 9.99479C0.333984 15.3335 4.6619 19.6615 10.0007 19.6615Z" fill="#3ED140"/>
      <path d="M8.08762 14.0251L5.82095 11.8111C5.77193 11.7634 5.73295 11.7064 5.70634 11.6434C5.67973 11.5804 5.66602 11.5128 5.66602 11.4444C5.66602 11.376 5.67973 11.3083 5.70634 11.2454C5.73295 11.1824 5.77193 11.1254 5.82095 11.0777L6.57262 10.3444C6.67342 10.2467 6.80827 10.1921 6.94862 10.1921C7.08898 10.1921 7.22382 10.2467 7.32462 10.3444L8.67395 11.6634L12.4583 5.91006C12.5364 5.79397 12.6565 5.71279 12.7934 5.68367C12.9302 5.65456 13.073 5.6798 13.1916 5.75406L14.0863 6.31606C14.1447 6.352 14.1953 6.3993 14.2352 6.45516C14.275 6.51103 14.3032 6.57432 14.318 6.64128C14.3329 6.70824 14.3342 6.77751 14.3218 6.84499C14.3095 6.91246 14.2837 6.97675 14.246 7.03406L9.76495 13.8487C9.67516 13.9821 9.55722 14.0942 9.41943 14.1771C9.28164 14.26 9.12736 14.3116 8.96745 14.3284C8.80754 14.3452 8.64588 14.3268 8.49387 14.2744C8.34186 14.222 8.20319 14.1369 8.08762 14.0251Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_2794_36970">
      <rect width="20" height="20" fill="white"/>
      </clipPath>
      </defs>
      </svg>

          </div>
      
}
        </div>
        <div className="relative">
        <button className={`${pfp ? "border-primary border-2  bg-white text-[#6CD2FF]" : "text-[#B4BEC2] bg-white/50 "} font-normal px-3 py-1 text-[8px] rounded-md pointer-events-none`}>Twitter PFP</button>
        {pfp && 
          <div className="absolute -top-1 -right-1">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2794_36970)">
      <path d="M10.0007 19.6615C15.3394 19.6615 19.6673 15.3335 19.6673 9.99479C19.6673 4.65604 15.3394 0.328125 10.0007 0.328125C4.6619 0.328125 0.333984 4.65604 0.333984 9.99479C0.333984 15.3335 4.6619 19.6615 10.0007 19.6615Z" fill="#3ED140"/>
      <path d="M8.08762 14.0251L5.82095 11.8111C5.77193 11.7634 5.73295 11.7064 5.70634 11.6434C5.67973 11.5804 5.66602 11.5128 5.66602 11.4444C5.66602 11.376 5.67973 11.3083 5.70634 11.2454C5.73295 11.1824 5.77193 11.1254 5.82095 11.0777L6.57262 10.3444C6.67342 10.2467 6.80827 10.1921 6.94862 10.1921C7.08898 10.1921 7.22382 10.2467 7.32462 10.3444L8.67395 11.6634L12.4583 5.91006C12.5364 5.79397 12.6565 5.71279 12.7934 5.68367C12.9302 5.65456 13.073 5.6798 13.1916 5.75406L14.0863 6.31606C14.1447 6.352 14.1953 6.3993 14.2352 6.45516C14.275 6.51103 14.3032 6.57432 14.318 6.64128C14.3329 6.70824 14.3342 6.77751 14.3218 6.84499C14.3095 6.91246 14.2837 6.97675 14.246 7.03406L9.76495 13.8487C9.67516 13.9821 9.55722 14.0942 9.41943 14.1771C9.28164 14.26 9.12736 14.3116 8.96745 14.3284C8.80754 14.3452 8.64588 14.3268 8.49387 14.2744C8.34186 14.222 8.20319 14.1369 8.08762 14.0251Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_2794_36970">
      <rect width="20" height="20" fill="white"/>
      </clipPath>
      </defs>
      </svg>

          </div>
      
}
        </div>


      </div>
      <TabsContent
        value="tasks"
        className={`${activeTab !== "tasks" ? "hidden" : "flex"} pb-3 grow flex-col items-start gap-3 font-normal text-foreground/50 tallXS:max-h-[340px] h-[300px] lg:h-full lg:max-h-[calc(100vh-448px)] overflow-y-auto w-full`}
      >
        {taskLoading ? (
          <div>Loading</div>
        ) : (
          <>
            {task && task.length !== 0 ? (
              <>
                {task.map((item, index) => {
                  return (
                    
                        <div 
                        key={`Task-${index}`}
                        className={`${(item.name == "retweet" || item.name == "likes" ) && "hidden"} flex flex-col gap-3 px-8`}>
                          <div
                            
                            className="flex gap-3 items-center text-sm md:text-base !p-0 font-bold"
                          >
                           
                            {item.name == "PFP"
                            ?
                            <>
                             <Icons.twitterLogo className="w-4 h-4 fill-foreground" />
                             Rep a Clear Collectible
                            </>
                            
                            :
                            item.name == "retweet"

                            ?
                            <>
                             <Icons.twitterLogo className="w-4 h-4 fill-foreground" />
                             Share us on Twitter
                            </>
                           

                            :
                            item.name == "likes"

                            ?
                              <>
                             <Icons.twitterLogo className="w-4 h-4 fill-foreground" />
                             Give us a like!
                            </>
                    

                            :item.name == "reaction"

                            ?
                            <>
                             <Icons.discordLogo className="w-4 h-4 fill-foreground" />
                             Make sure to read our announcements!

                            </>
                           
                            :item.name == "message"
                            ?
                            
                            <>
                            <Icons.discordLogo className="w-4 h-4 fill-foreground" />
                            Meet the community
                            </>
                           
                            

                            :item.name == "name"
                            
                            ?

                            <>
                            <Icons.twitterLogo className="w-4 h-4 fill-foreground" />
                            Earn more from your twitter handle
                           </>
                            
                            :item.name == "voice"

                            &&
  
                            
                            <>
                              <Icons.discordLogo className="w-4 h-4 fill-foreground" />
                              Discord AMA
                             </>
                            
                              
                            
                        
                            
                            }

                            
                          </div>
                          <span className="text-sm  md:text-base">
                          {item.name === "retweet"
            &&
            `Earn ${item.xp} points for retweeting our posts on Twitter. You can only do this once every 24 hours, take a look at the eligible tweets for our latest Tweets.`
            }
            {item.name === "likes"
            &&
            `Earn ${item.xp} points for liking our posts on Twitter. You can only do this once every 24 hours, take a look at the eligible tweets for our latest Tweets.`
            }

           {item.name === "reaction"
            &&
            `Earn ${item.xp} points for reacting to our latest announcement. You only have 24 hours to react so make sure you have those notifications on.`
            }

             {item.name === "message"
            &&
            `Earn ${item.xp} points per eligible message in our Discord channel. Messages have to be above a certain character threshold. Max ${item.limit} a day.`
            }


           {item.name === "PFP"
            &&
            `Automatically earn ${item.multiplier*100}% Multiplier a day for having one of Clear Collectibles as your Twitter/X profile picture`
            }

            {item.name === "name"
            &&
            `Automatically earn ${item.multiplier*100}% Multiplier a day for having 🧊 in your Twitter handle.`
            }

          
{item.name === "voice"
            &&

            `Join our Discord AMA on Wednesday 12:00 EST. Make sure you are connected for at least 20 minutes!`
            
            
            }



                          </span>


                          <div className={` flex w-full gap-2 ${item.name !== "PFP" && "w-[63%]"}`} >
                          
                            <>
                            <Button
                            size="sm"
                            variant="secondary"
                            className="text-primary w-full justify-start px-5 pointer-events-none "
                          >
                        
                            
                            <Icons.skullLogo className="w-4 lg:w-6 h-4 lg:h-6 fill-primary" />
                            
                            {item.name == "PFP" || item.name == "name" ?
                            <>{item.multiplier*100}% Multiplier</>
                            : <>{item.xp} Bubbles{" "}</>
                            
                            }
                           
                     
                          </Button>
                         
                            
                            </>
                          

                            
                            
                          </div>
                          
                            
                            <Separator className="my-2" />

                       
                        
                        </div>
                      
                     
                    
                  );
                })}
              </>
            ) : (
              
                <div className="flex justify-center items-center w-full h-full p-8">
                  <div className="w-full">
                    <div>
                   {/*  <Image
                    src="/clapping.png"
                    width={50}
                    height={50}
                    alt="loading"
                    unoptimized
                    className="mb-3"
                  /> */}

                    </div>
                    <p className="text-foreground/50 text-center font-montserrat text-[16px] sm:text-[23px] font-bold leading-[1.1]">
                    Congratulations on<br/> completing all tasks
                   
                  </p>
                  </div>
               

                
                </div>
             
            )}
          </>
        )}
      </TabsContent>
      <TabsContent
        value="completed"
        className={`${activeTab !== "completed" ? "hidden" : "flex"} pb-3 grow flex-col items-start gap-3 font-normal text-foreground/50 tallXS:max-h-[340px] h-[300px] lg:h-full lg:max-h-[calc(100vh-448px)] overflow-y-auto w-full `}
      >
         {taskLoading ? (
          <div>Loading</div>
        ) : (
          <>
            {completed && completed.length !== 0 ? (
              <>
                {completed.map((item, index) => {
                  return (
                   
                     
                        <div 
                        key={`Completed-${index}`}
                        className="flex flex-col gap-4 px-8">
                          <div
                            className="flex gap-3 items-center text-sm md:text-base !p-0 font-bold"
                          >
                           
                            {item.name == "PFP"
                            ?
                            <>
                             <Icons.twitterLogo className="w-4 h-4 fill-foreground" />
                             Rep a Clear Collectible
                            </>
                            
                            :
                            item.name == "retweet"

                            ?
                            <>
                             <Icons.twitterLogo className="w-4 h-4 fill-foreground" />
                             Share us on Twitter
                            </>
                           

                            :
                            item.name == "likes"

                            ?
                              <>
                             <Icons.twitterLogo className="w-4 h-4 fill-foreground" />
                             Give us a like!
                            </>
                    

                            :item.name == "reaction"

                            ?
                            <>
                             <Icons.discordLogo className="w-4 h-4 fill-foreground" />
                             Make sure to read our announcements!

                            </>
                           
                            :item.name == "message"
                            ?
                            
                            <>
                            <Icons.discordLogo className="w-4 h-4 fill-foreground" />
                            Meet the community
                            </>
                           
                            

                            :item.name == "name"
                            
                            ?

                            <>
                            <Icons.twitterLogo className="w-4 h-4 fill-foreground" />
                            Earn more from your twitter handle
                           </>


                          :item.name == "voice"

                          &&

                          
                          <>
                            <Icons.discordLogo className="w-4 h-4 fill-foreground" />
                            Discord AMA
                           </>
                          
                            

                            
                            
                            }

                            
                          </div>
                          <span className="text-sm md:text-base">
                          {item.name === "retweet"
            &&
            `Earn ${item.xp} points for retweeting our posts on Twitter. You can only do this once every 24 hours, take a look at the eligible tweets for our latest Tweets.`
            }
            {item.name === "likes"
            &&
            `Earn ${item.xp} points for liking our posts on Twitter. You can only do this once every 24 hours, take a look at the eligible tweets for our latest Tweets.`
            }

           {item.name === "reaction"
            &&
            `Earn ${item.xp} points for reacting to our latest announcement. You only have 24 hours to react so make sure you have those notifications on.`
            }

             {item.name === "message"
            &&
            `Earn ${item.xp} points per eligible message in our Discord channel. Messages have to be above a certain character threshold. Max ${item.limit} a day.`
            }


           {item.name === "PFP"
            &&
            `Automatically earn ${item.multiplier*100}% Multiplier a day for having one of Clear Collectibles as your Twitter/X profile picture`

          }

            {item.name === "name"
            &&
            `Automatically earn ${Number(item.multiplier)*100}% Multiplier a day for having 🧊 in your Twitter handle.`
            }


            {item.name === "voice"
            &&

            `Join our Discord AMA on Wednesday 12:00 EST. Make sure you are connected for at least 20 minutes!`
            
            
            }








                          </span>
                          <div className={`flex w-full gap-2 ${item.name !== "PFP" && "w-[63%]"}`} >
                         
                           
                            <Button
                            size="sm"
                            variant="secondary"
                            className="text-primary w-full justify-start px-5 pointer-events-none "
                          >
                            <Icons.skullLogo className="w-4 lg:w-6 h-4 lg:h-6 fill-primary" />
                            {item.name == "PFP" || item.name == "name" ?
                            <>{Number(item.multiplier)*100}% Multiplier</>
                            :
                            <>{item.xp} Bubbles{" "}</>
                            }
                          </Button>
                         
                           
                            
                            
                          </div>
                          <Separator className="my-2" />
                        </div>
                      
                     
                      
                 
                  );
                })}
              </>
            ) : (
            
                <div className="flex flex-col justify-center items-center w-full h-full p-8">
                 {/*  <Image
                    src="/clapping.png"
                    width={50}
                    height={50}
                    alt="loading"
                    unoptimized
                    className="mb-3"
                  /> */}

                  <p className="text-foreground/50 font-montserrat text-center text-[18px] sm:text-[23px] font-bold leading-[1.1]">
                  You havent done any daily task yet!
                  </p>
                </div>
             
            )}
          </>
        )}
        
      </TabsContent>
      </div>
    </Tabs>
  
  );
}
