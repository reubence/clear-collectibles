import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Borders, Header, Tab } from "@/components";
import { motion } from "framer-motion";
import {useRouter} from 'next/router'
import Head from "next/head";

export default function Home() {
  const router = useRouter()
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabTitles = ["Enter the Clearverse"];
  const [animations, setAnimations] = useState([]);


  const windowSize = useWindowSize()
  const shouldApplyScroll = windowSize.height <= 778


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
      Array.from({ length: 11 * 6 }).map(() => ({
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
      <main
        className="!pb-0 min-h-screen flex flex-col w-full justify-start items-center bg-[#6cd2ff] p-6 relative"
        
      >
        <div className="max-h-screen overflow-hidden h-full grid grid-cols-4 lg:grid-cols-11 xl:grid-cols-9 2xl:grid-cols-11 p-6 place-content-between place-items-center absolute inset-0 w-full gap-5 z-10">
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
        
        <div className="flex flex-col h-full justify-start items-center w-full  gap-14 z-20"
        
        >
          <Header hidden={true} />
          <Image src="/logo.png" width={737} height={264.75} alt="logo" priority className="scale-[0.8] xl:scale-1"
            unoptimized/>
            
                <div className="flex flex-col justify-center items-center gap-1.5">
                {tabTitles.map((title, index) => (
                  <Tab
                    key={title}
                    active={activeTabIndex === index}
                    onClick={() => router.push('/login')}
                    
                  >
                    <h3 className="text-[24px]">{title}</h3>
                  </Tab>
                ))}

                
              </div>
              

     
          
     
        </div>
       
    
      </main>
     
      <div className={`${shouldApplyScroll && 'hidden'} fixed bottom-0 w-full`}>
       <Borders />
       </div>
      </>
  );
}
