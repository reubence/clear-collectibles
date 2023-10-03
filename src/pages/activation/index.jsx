import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Header, ProgressLottie as Character } from "@/components";
import { Activate, Menu} from "@/sections";
import { motion, AnimatePresence } from "framer-motion";
import { useSession, signOut } from "next-auth/react";
import {useRouter} from "next/router"
import {toast} from 'react-toastify'
import { Toast } from "@/components";
import Head from "next/head";
 

export default function Activation() {
  const [animations, setAnimations] = useState([]);
  const [mdiscord, setDiscord] = useState(null);
  const [mtwitter, setTwitter] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter()
 
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  }); 

  
  async function getTwitter(token) {
    try {
      const response = await fetch("https://api.matrica.io/oauth2/user/twitter", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });


        const data = await response.text();
  

        if(data.length){
          const result = JSON.parse(data)
          setTwitter(result.externalName)
      
          localStorage.setItem('twitter', result.externalName)
        }
  
      
    } catch (e) {
      console.log(e)
    
    }
  
  }

  async function getDiscord(token) {
    try {
      const response = await fetch("https://api.matrica.io/oauth2/user/discord", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
        const data = await response.text();
        if(data.length){ 
          const result = JSON.parse(data)
          setDiscord(result.externalName)
          localStorage.setItem('discord', result.externalName)
        }

    } catch (e) {
      console.log(e)
    
    }
  
  }

 
  useEffect(() => {
 
    if (session?.accessToken) {

      getTwitter(session?.accessToken)
      getDiscord(session?.accessToken)
       
    }

    if (session?.error === "RefreshAccessTokenError") {

      localStorage.clear();
      signOut({ callbackUrl: "/login" }); 

    }

  }, [session]);


  useEffect(() => {
    if(mdiscord !== null && mtwitter !== null){
      router.push('/dashboard')
    }

  }, [mdiscord, mtwitter])



  const windowSize = useWindowSize()
  const shouldApplyScroll = windowSize.height <= 700
  const shouldBoxApplyScroll = windowSize.height < 890



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
    
  }, []);



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
      className={`flex flex-col w-full justify-start items-end bg-[#C7E5F2] py-6 px-6 relative  h-screen min-h-[700px] overflow-x-hidden lg:${shouldApplyScroll ? 'overflow-y-auto': 'overflow-y-hidden'}`}>
      
             <AnimatePresence>
               <motion.div
                 className="hidden lg:absolute lg:block left-0 bottom-[0] z-[1] h-screen w-[50vw] min-h-[700px] max-h-[1080px] max-w-[1080px] overflow-y-hidden"
               >
                <Character percent={0} width="100%" height="100%" loop={true}/>
               </motion.div>
             </AnimatePresence>
             <div className={`hidden lg:block absolute bottom-0 left-0 z-[0] w-screen  ${shouldApplyScroll ? "h-[50px]" : "h-[110px]" }`}>
               <Image src="/border.png" layout="fill" alt="/" unoptimized />
     
             </div>
             <div className="grid grid-cols-4 lg:grid-cols-11 xl:grid-cols-9 2xl:grid-cols-11 p-6 place-content-between place-items-center absolute inset-0 w-full gap-5 z-10 overflow-hidden h-full lg:h-screen min-h-[1200px] lg:min-h-[700px]">
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
               className={`flex flex-col justify-start items-center px-6 pt-8 pb-8 lg:pb-0 z-20  w-full lg:w-[50%] rounded-2xl mt-6 lg:mt-0 lg:mr-6  ${shouldBoxApplyScroll ? 'min-h-[1000px] lg:min-h-0 lg:max-h-[520px] overflow-y-auto': 'min-h-[1000px] lg:min-h-0 lg:max-h-[100%]'} `}
               id="login-container"
             >
               <AnimatePresence>
                
                   <Activate twitter={mtwitter} discord={mdiscord}  />
                
               </AnimatePresence>
             </div>
     
         
           </motion.div>
          
  </>
 
 )
}
