import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Borders, Header, ProgressLottie as Character } from "@/components";
import { Card, Menu } from "@/sections";
import { motion, AnimatePresence } from "framer-motion";
import { useSession } from "next-auth/react";
import {useRouter} from "next/router"
import Head from "next/head";


export default function Login() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animations, setAnimations] = useState([]);
  const [loading, setLoading] = useState(true);

  const { data: session, status } = useSession({}); 

  const router = useRouter()
  const windowSize = useWindowSize()
  const shouldApplyScroll = windowSize.height <= 700
  const shouldBoxApplyScroll = windowSize.height <= 800

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
    if(status == 'authenticated'){
      router.push('/dashboard')
    }else{
      setTimeout(() => {
        setLoading(false)
      }, [1500])
    }
  
   }, [status])
  
 

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
   
  }, []);

  //disable scrolling
 
  return (
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
    {loading ?
    
    <div className={`grid grid-cols-4 lg:grid-cols-11 xl:grid-cols-9 2xl:grid-cols-11 p-6 place-content-between place-items-center absolute inset-0 w-full gap-5 z-10 h-screen min-h-[700px] overflow-y-auto`}>
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
                className="opacity-[8%]"
                priority
                unoptimized
              />
            </motion.div>
          ))}
        </div>
  
  
      :
<motion.div 
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{duration: 1}}
className={`flex flex-col w-full justify-start items-end bg-[#C7E5F2] py-6 px-6 relative  h-screen min-h-[700px] overflow-x-hidden ${shouldApplyScroll ? 'overflow-y-auto': 'overflow-y-hidden'}`}>
        <AnimatePresence>
          <motion.div
            className={`hidden lg:absolute lg:block left-0 -bottom-[0] z-[1] h-screen w-[50vw] min-h-[700px] max-h-[1080px] max-w-[1080px]`}
          
          >
             <Character percent={0} width="100%" height="100%" loop={true}/>
          </motion.div>
        </AnimatePresence>
        <div className="hidden lg:block absolute bottom-0 left-0 z-[0] w-screen h-[120px]">
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
        <Header hidden={true} />
        
        <div
          className={`flex flex-col  bg-[#15B7FF]/10 justify-between items-center  px-6 pt-8 pb-8 lg:pb-0 z-20 h-[86%]  w-full lg:w-[45%] rounded-2xl mt-6 lg:mt-0 lg:mr-6 ${shouldBoxApplyScroll ? 'lg:max-h-[500px] lg:overflow-y-auto': 'max-h-[100%]'} ${
            menuOpen && "bg-white"
           
          }`}
         
        >
          <AnimatePresence>
           
              <Card />
           
          </AnimatePresence>
        </div>

    
      </motion.div>

  }
      
     
    </>
  );
}
