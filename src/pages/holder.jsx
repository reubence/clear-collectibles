import Image from "next/image"
import {signOut } from "next-auth/react";
import React,{useEffect, useState} from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { Header, ProgressLottie as Character } from "@/components";
import Head from "next/head";
import { Menu } from "@/sections";

const Holder = () => {
    const [animations, setAnimations] = useState([]);
    const [menuOpen, setMenuOpen] = useState(false);
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
<>
<Head>
                <title>The Clearverse!</title>
                <meta name="description" content="A premier premint experience aimed at creating the strongest community supported by amazing contribution based technology. Built by Interlace." />
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <meta name="msapplication-TileColor" content="#6cd2ff" />
                <meta name="theme-color" content="#ffffff" />
            </Head>



        <motion.div 
 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{duration: 1}}
       className={`flex flex-col w-full justify-start items-end !bg-[#C7E5F2] py-6 px-6 relative h-screen min-h-[700px] overflow-x-hidden ${shouldApplyScroll ? 'overflow-y-auto': 'overflow-y-hidden'}`}>
             
               <div className="hidden lg:block absolute bottom-0 left-0 z-[0] w-screen h-[120px] ">
                 <Image src="/border.png" layout="fill" alt="/" unoptimized />
       
               </div>
               
               
               <div className="grid grid-cols-4 lg:grid-cols-11 xl:grid-cols-9 2xl:grid-cols-11 p-6 place-content-between place-items-center absolute inset-0 w-full gap-5 z-10 overflow-hidden h-screen min-h-[700px]">
                 {animations.map((animation, index) => (
                   <motion.div
                     key={index}
                     style={{ rotateZ: animation.rotateZ }}
                     animate={{ rotateY: 360 }}
                     transition={animation.transition}
                   >
                     <Image
                       src="/vector_logo.png"
                       width={120}
                       height={120}
                       alt="logo"
                       className="opacity-[5%]"
                       priority
                       unoptimized
                     />
                   </motion.div>
                 ))}
               </div>
               <Header open={menuOpen} setOpen={setMenuOpen}/>
             <div className="lg:hidden flex justify-center w-full relative">

        {menuOpen && 
              <AnimatePresence>

                <motion.div className="z-[9999] absolute top-[1.5rem] w-full left-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                >

              <div
              className="flex flex-col justify-start items-center px-6 py-8 w-full md:hidden   bg-white rounded-[15px] h-full"
            
            >
              <Menu />
            </div>
            </motion.div>
            </AnimatePresence>
             
              
              
              }
        </div>
            
               
               <div
                 className={`flex flex-col relative justify-start items-center lg:pb-0 z-20  w-full  rounded-2xl mt-0   overflow-x-hidden h-full overflow-y-hidden
               `}
                 id="tasks-container"
               >
                 
                 <AnimatePresence>

                 <motion.div 
                 
                 className="flex justify-start items-start h-full text-center my-8 lg:my-5">
  <div>
    <div className="flex justify-center mb-8">  
    <Image src="/Gib-transformed.png" width={400} height={400} alt="loading" unoptimized />
    </div>
  <p className="text-white font-montserrat text-[18px] sm:text-[26px] font-bold leading-[1.1]">
  To make it clear, time to get one!
  </p>
  </div>



</motion.div>
                </AnimatePresence>
                     
                    
                 
                
               </div>
           
               
             </motion.div>
             </>
    )


}


export default Holder