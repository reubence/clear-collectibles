import Image from "next/image"
import {signOut } from "next-auth/react";
import React,{useEffect, useState} from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { Header, ProgressLottie as Character, TensorModal as TsModal } from "@/components";
import { Menu } from "@/sections";
import Head from "next/head";

const Error = () => {
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
        setTimeout(() => {
         
      localStorage.clear();
      signOut({ callbackUrl: "/" }); 
        },3000)
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
       className={`flex flex-col w-full justify-start items-end bg-[#6cd2ff] py-6 px-6 relative h-full  lg:h-screen min-h-[700px] overflow-x-hidden ${shouldApplyScroll ? 'overflow-y-auto': 'overflow-y-hidden'}`}>
               <AnimatePresence>
                 <motion.div
                   className={`hidden lg:absolute lg:block left-0 -bottom-[0] z-[1] h-screen w-[50vw] min-h-[700px] max-h-[1080px] max-w-[1080px]`}
                 
                 >
                    <Character percent={0} width="100%" height="100%" loop={true}/>
                 </motion.div>
               </AnimatePresence>
               <div className="hidden lg:block absolute bottom-0 left-0 z-[0] w-screen h-[120px] ">
                 <Image src="/border.png" layout="fill" alt="/" unoptimized />
       
               </div>
               <div className="hidden lg:block bottom-[10px] right-0 z-[9999] absolute"
               onClick={()=>{
                 router.push('https://www.tensor.trade/trade/nomads')
               }}
               >
                 <TsModal />
       
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
               <Header hidden={true}/>
               <div className="lg:hidden flex justify-center w-full relative">
               <Character percent={0} width="100%" height="100%" loop={true}/>
            
               </div>
               
               <div
                 className={`flex flex-col relative justify-start items-center pt-8 lg:pb-0 z-20  w-full lg:w-[50%] rounded-2xl mt-0 lg:mr-6  overflow-x-hidden h-full overflow-y-hidden
               `}
                 id="tasks-container"
               >
                 
                 <AnimatePresence>

                 <motion.div className="flex justify-center items-center h-full text-center my-8 lg:my-5">
  <div>
    <div className="flex justify-center mb-6">  
    <Image src="/icons/email.png" width={70} height={70} alt="loading" unoptimized />
    </div>
  <p className="text-white font-montserrat text-[18px] sm:text-[26px] font-bold leading-[1.1]">
  Error! Please log in <br/> to the system again.
  </p>
  </div>



</motion.div>
                </AnimatePresence>
                     
                    
                 
                
               </div>
               <div className="lg:hidden mt-10"
               onClick={()=>{
                 router.push('https://www.tensor.trade/trade/nomads')
               }}
               >
                 <TsModal />
       
               </div>
               
             </motion.div>
             </>
    )


}


export default Error