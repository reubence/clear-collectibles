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




export default function TaskCompleted({ task, completed, taskLoading }) {
  
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
              className="relative font-bold text-xl leading-none"
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
      <Separator className="mt-4 mb-7" />
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
                            
                            className="flex gap-3 items-center text-base !p-0 font-bold"
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
                          <span className="">
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
            `Automatically earn ${item.multiplier*100}% Multiplier a day for having one of the selected PFPs as your Twitter profile picture`
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
                            className="flex gap-3 items-center text-base !p-0 font-bold"
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
                          <span className="">
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
            `Automatically earn ${Number(item.multiplier)*100}% Multiplier a day for having one of the selected PFPs as your Twitter profile picture`
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
