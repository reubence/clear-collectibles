import INTERLACE_LOGO from "../../../public/images/interlace-logo.svg";
import Image from "next/image";
import LOGO_MAIN from "../../../public/images/LOGO_MAIN.png";
import { Button } from "@/components/ui/button";
import DISCORD from "../../../public/images/icons/discord-icon.svg";
import LoginLayout from "@/layout/login/layout";
import Head from "next/head";
import React, {useState, useEffect} from 'react'
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Example() {
  const [mtwitter, setTwitter] = useState(null)
  const [mdiscord, setDiscord] = useState(null)
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
      signOut({ callbackUrl: "/" }); 
  
    }
   
  }, [session]);

  useEffect(() => {
    if(mtwitter !== null && mdiscord !== null){
      router.push('/')
    }

  }, [mdiscord, mtwitter])

  return (
    <>
    <Head>
                <title>The Dead King Society</title>
                <meta name="description" content="We work to create an outstanding social experience to members by curating our community into a Web3 destination of choice, maintaining a robust networking platform and cultivating collaboration opportunities." />
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <meta name="msapplication-TileColor" content="#6cd2ff" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
    
   
    <LoginLayout>
    <div className="tallXL:-mt-20 my-10 sm:mx-auto sm:h-full sm:w-full lg:max-w-[828px] min-h-[80vh] lg:min-h-[60vh] tallXS:h-[500px] bg-primary p-5 shadow rounded-lg sm:px-12 justify-between flex flex-col relative border">
      <div className="absolute right-4 top-4 md:right-5 md:top-5  font-raleway text-xl md:text-[32px] font-bold">
        <span className="text-accent">02</span>/02
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          src={LOGO_MAIN}
          alt="DKS Logo"
          className="w-[50px] h-[50px] md:w-20 md:h-20 text-center mx-auto mt-2.5 md:mt-8"
          unoptimized
        />
        <h2 className="mt-6 md:mt-8 text-center text-[28px] md:text-5xl font-waves">
          Welcome
        </h2>
      </div>
      <div className="flex flex-col gap-7 md:gap-12 items-center">
        <p className="font-raleway font-light md:text-2xl">
          Connect <span className="font-bold">Discord</span> and{" "}
          <span className="font-bold">Twitter (X)</span>
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6 md:gap-4 w-full">
        <a href={`${mdiscord !== null ? '#' : 'https://matrica.io/settings'}`} target={`${mdiscord == null && "_blank"}`}>
          <Button className="gap-2"
          disabled={mdiscord !== null}
          >
           
            <Image src={DISCORD} alt="DKS Logo" className="" unoptimized />
            {mdiscord !== null ? "connected" : "connect"}
           
          </Button>
          </a>
          <a href={`${mtwitter!== null ? '#' : 'https://matrica.io/settings'}`} target={`${mtwitter == null && "_blank"}`}>
          <Button className="gap-0.5"
          disabled={mtwitter !== null}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="22"
              viewBox="0 0 30 22"
              fill="none"
            >
              <path
                d="M6.04698 2.47986L12.9941 11.487L6.00311 18.8102H7.57651L13.6971 12.3986L18.6424 18.8102H23.9967L16.6587 9.29641L23.1659 2.47986H21.5925L15.9557 8.38478L11.4013 2.47986H6.04698ZM8.36077 3.60366H10.8206L21.6826 17.6862H19.2228L8.36077 3.60366Z"
                fill="white"
              />
            </svg>{" "}
            {mtwitter !== null ? "connected" : "connect"}
          </Button>
          </a>
        </div>
      </div>

    <a href="https://interlace.app" target="_blank">
      <div className="relative flex items-center gap-2 justify-center text-muted-foreground">
        Powered by:{" "}
        <Image src={INTERLACE_LOGO} alt="DKS Logo" className="" unoptimized />
      </div>
      </a>
    </div>
    </LoginLayout>
    </>
  );
}
