import Image from "next/image"
import {signOut } from "next-auth/react";
import React,{useEffect, useState} from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { Header, ProgressLottie as Character } from "@/components";
import Head from "next/head";
import { Icons } from "@/components/ui/icons";

const Connect = () => {
    const [animations, setAnimations] = useState([]);
    const windowSize = useWindowSize()
    const shouldApplyScroll = windowSize.height <= 700

  
    function useWindowSize(){
      const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
      })
  
  
      useEffect(() => {
        function handleResize(){
          setWindowSize({
            width:window.innerWidth,
            height:window.innerHeight
          })
        }
  
        window.addEventListener('resize', handleResize)
        handleResize()
  
        return () => window.removeEventListener('resize', handleResize)
      }, [])
  
      return windowSize
    }
  

    useEffect(() => {
        setAnimations(
            Array.from({ length: 11 * 5 }).map(() => ({
              rotateZ: Math.random() * 360,
              transition: {
                duration: Math.random() * 3 + 2,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              },
            }))
          );
    
    }, [])

    return(




        
            
               
             
               
               
               <div
                 className={`flex flex-col relative justify-start items-center pt-8 lg:pb-0 z-20  w-full lg:w-[50%] rounded-2xl mt-0 lg:mr-6  overflow-x-hidden h-full overflow-y-hidden
               `}
                 id="tasks-container"
               >
                 
                 <AnimatePresence>

                 <motion.div className="flex justify-center items-center h-full text-center my-8 lg:my-5">
  <div>
    <div className="flex justify-center mb-6">  
    <Image src="/email.png" width={70} height={70} alt="loading" unoptimized />
    </div>
  <p className="text-white font-montserrat text-[18px] sm:text-[26px] font-bold leading-[1.1]">
   Please Connect with Both <br /> Twitter and Discord on Matrica
  </p>

 
  </div>



</motion.div>
                </AnimatePresence>
                     
                    
                 
                
               </div>
           

    )

}


export default Connect