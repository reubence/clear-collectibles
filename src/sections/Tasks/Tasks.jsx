import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Task,
  Claim,
  WhitelistModal as WtModal,
  TwitterTaskModal as TtModal,
  NameModal as NameModal
} from "@/components";
import { useScreenSize } from "@/hooks";
import { AnimatePresence, motion } from "framer-motion";

const Tasks = ({task, xp, completed, loading, discordCode, apply, notConnected, counter, code, wallets, claim, whitelist, wallet, my, tweet}) => {
  const [ttModalOpen, setTtModalOpen] = useState(false);
  const [nameModalOpen, setNameModalOpen] = useState(false);
  const [claimed, setClaimed] = useState(false);
  const [tab, setTab] = useState('tasks')
 



  // disable scrolling

  return (
    <>
      <div className="flex sm:hidden w-full justify-between items-center border-b border-[#ffffff40] pb-3 sm:pb-5 px-5 relative">
        <div className="flex justify-start items-center w-auto gap-10">
          <span className="uppercase text-white font-montserrat font-normal md:font-bold text-[15px] sm:text-[24px]">
            Total Bubbles : {xp}
          </span>
        </div>
      </div>
      <div className="flex w-full justify-between items-center border-b border-[#ffffff40] pb-4 sm:pb-5 px-5 ">
        <div className="flex justify-start items-center w-auto gap-3 sm:gap-10 mt-5 sm:mt-0">
          <button 
          onClick={() => setTab('tasks')}
          className={`uppercase ${tab == 'tasks' ? 'text-white' : 'text-[#AFE6FF]'} font-montserrat font-semibold md:font-black text-[15px] sm:text-2xl 2xl:text-[32px]`}>
            Task
          </button>
          <button 
          onClick={() => setTab('completed')}
          className={`uppercase ${tab == 'completed' ? 'text-white' : 'text-[#AFE6FF]'} font-montserrat font-semibold md:font-black text-[15px] sm:text-2xl 2xl:text-[32px]`}>
            Completed
          </button>
        </div>
        <div className="hidden sm:flex justify-start items-center w-auto gap-10">
          <span className="uppercase text-white font-montserrat font-bold  text-[18px] sm:text-base 2xl:text-[24px]">
            Total Bubbles : {xp}
          </span>
        </div>
      </div>

      <div className={`h-[500px] ${apply ? 'lg:h-[430px]' : 'h-[500px] lg:h-[340px]'} overflow-y-auto w-full sm:pl-6 sm:pr-5 px-4 `}>
      
      {loading
      ?
<div className="flex justify-center items-center h-full w-full">
  <AnimatePresence>


      <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
      }}
      className="w-[50px] h-[50px]"
      >
      <Image src="/vector_logo.png" width={50} height={50} alt="loading" unoptimized />
    </motion.div>
    </AnimatePresence>
    </div>

      :

      <>
        {tab == "tasks"
      ?

      <>
       {task && task.length > 0
      
      ?

      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1}}
      exit={{opacity:0}}
      className={`${notConnected && 'opacity-30'}`}
      >
      { task.map((option, index) => 
      
        {

          if(option.name == 'PFP'){
            return(
              <div className="flex w-full relative " key={index}>

       
              <Task
              type={option.type}
              name={option.name}
              xp={option.xp}
              limit={option.limit}
              underlined
              showButton
              showModal={ttModalOpen}
              setShowModal={setTtModalOpen}
              
            />
             <AnimatePresence>
          {ttModalOpen && <TtModal setOpen={setTtModalOpen} />}
        </AnimatePresence>
            </div>
            )



          }else if(option.name == "name"){
            return(

            
            <div className="flex w-full" key={index}>
            <Task
              type={option.type}
              name={option.name}
              xp={option.xp}
              limit={option.limit}
              showModal={nameModalOpen}
              setShowModal={setNameModalOpen}
              
            />
            <AnimatePresence>
            {nameModalOpen && <NameModal setOpen={setNameModalOpen} />}
          </AnimatePresence>
           </div>
      )
          }else if(option.name == "message"){
            return(

              <Task
              key={index}
              type={option.type}
              name={option.name}
              xp={option.xp}
              limit={option.limit}
              count={option.count}
              />
            )
        

          }else if(option.name == "referral"){
            return(

              <Task
              key={index}
              type={option.type}
              name={option.name}
              xp={option.xp}
              limit={option.limit}
              count={option.count}
              counter={counter}
              code={code}
              />
            )
        

          }else if(option.name == "retweet" || option.name == "likes"){
            return(

<div className="flex w-full" key={index}>
            
            <Task
           
            type={option.type}
            name={option.name}
            xp={option.xp}
            limit={option.limit}
            count={option.count}
            counter={counter}
            code={code}
            tweet={tweet}
            />

</div>
            )

          }else if(option.name == "specialretweet" || option.name == "speciallikes"){
            return(
         <div className="flex w-full" key={index}>
            <Task
            type={option.type}
            name={option.name}
            xp={option.xp}
            limit={option.limit}
            count={option.count}
            counter={counter}
            code={code}
            tweet={option.tweet}
            />
            </div>
            )
            


          }else{
            return(

              <Task
              key={index}
              type={option.type}
              name={option.name}
              xp={option.xp}
              limit={option.limit}
              
              
            />

            )

          }
         
        }
       
      
     )}
      
      
      </motion.div>

     :

     <motion.div className="flex justify-center items-center h-full text-center">
     <div>
     {notConnected 
     ?
     <>
     <div className="flex justify-center mb-3">  
       <Image src="/clapping.png" width={50} height={50} alt="loading" unoptimized />
       </div>
     <p className="text-white font-montserrat text-[18px] sm:text-[26px] font-bold leading-[1.1]">
     Please Connect both<br/> Twitter/Discord on Matrica
     </p>
     </>

     :

     <>
     
     <div className="flex justify-center mb-3">  
       <Image src="/clapping.png" width={50} height={50} alt="loading" unoptimized />
       </div>
     <p className="text-white font-montserrat text-[18px] sm:text-[26px] font-bold leading-[1.1]">
     Congratulations on<br/> completing all tasks
     </p>
     </>
     
    
    }
       
     </div>
   
   
   
   </motion.div>
      
      }
      </>
      
      
      :

      <>
       {completed && completed.length > 0
      
      ?

      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1}}
      exit={{opacity:0}}
      >
      { completed.map((option, index) => 
      
        {

          if(option.name == 'PFP'){
            return(
              <div className="flex w-full relative " key={index}>

       
              <Task
              type={option.type}
              name={option.name}
              xp={option.xp}
              limit={option.limit}
              showButton
              showModal={ttModalOpen}
              setShowModal={setTtModalOpen}
              
            />
             <AnimatePresence>
          {ttModalOpen && <TtModal setOpen={setTtModalOpen} />}
        </AnimatePresence>
            </div>
            )



          }else if(option.name == "name"){
            return(

            
            <div className="flex w-full" key={index}>
            <Task
              type={option.type}
              name={option.name}
              xp={option.xp}
              limit={option.limit}
              showModal={nameModalOpen}
              setShowModal={setNameModalOpen}
              
            />
            <AnimatePresence>
            {nameModalOpen && <NameModal setOpen={setNameModalOpen} />}
          </AnimatePresence>
           </div>
      )
          }else if(option.name == "message"){
            return(

              <Task
              key={index}
              type={option.type}
              name={option.name}
              xp={option.xp}
              limit={option.limit}
              count={option.count}
              />
            )
        

          }else if(option.name == "referral"){
            return(

              <Task
              key={index}
              type={option.type}
              name={option.name}
              xp={option.xp}
              limit={option.limit}
              count={option.count}
              counter={counter}
              code={code}
              />
            )
        

          }else if(option.name == "retweet" || option.name == "likes"){
            return(
         <div className="flex w-full" key={index}>
            <Task
            type={option.type}
            name={option.name}
            xp={option.xp}
            limit={option.limit}
            count={option.count}
            counter={counter}
            code={code}
            tweet={tweet}
            />
            </div>
            )
            


          }else if(option.name == "specialretweet" || option.name == "speciallikes"){
            return(
         <div className="flex w-full" key={index}>
            <Task
            type={option.type}
            name={option.name}
            xp={option.xp}
            limit={option.limit}
            count={option.count}
            counter={counter}
            code={code}
            tweet={option.tweet}
            />
            </div>
            )
            


          }else{
            return(

              <Task
              key={index}
              type={option.type}
              name={option.name}
              xp={option.xp}
              limit={option.limit}
              
              
            />

            )

          }
         
        }
       
      
     )}
      
      
      </motion.div>

     
:
<motion.div className="flex justify-center items-center h-full text-center">
  <div>
    <div className="flex justify-center mb-3">  
    <Image src="/vector_logo.png" width={50} height={50} alt="loading" unoptimized />
    </div>
  <p className="text-white font-montserrat text-[18px] sm:text-[26px] font-bold leading-[1.1]">
    You haven&#39;t completed<br/> any tasks yet!
  </p>
  </div>



</motion.div>
      
      }
      </>
      
      }
      </>
      }
      
      
    
      
     
      </div>
     
     

    
 
      <div className="flex flex-col sm:flex-row w-full h-full sm:h-auto justify-between items-center gap-3 lg:gap-10 mt-5 px-6">
        <Claim icon={"discord"} xp={xp} discord={discordCode} />
        <Claim icon={"whitelist"} setClaimed={setClaimed} xp={xp} claim2={claim} whitelist={whitelist} wallet={wallet} />
        <Claim icon={"freemint"} setClaimed={setClaimed} xp={xp} />
      </div>
      <AnimatePresence>
        {(claimed && !whitelist) && <WtModal setClaimed={setClaimed} wallets={wallets} claim={claim} my={my}/>}
      </AnimatePresence>
      
    </>
  );
};

export default Tasks;
