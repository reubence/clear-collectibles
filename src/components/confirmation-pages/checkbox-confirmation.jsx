import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Icons } from "../ui/icons";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import React, {useState} from 'react';
import {useRouter} from 'next/router';
import { toast } from "react-toastify";
import {Toast} from "@/components";

function CheckboxConfirmation({item, setPopoverOpen ,process1, setProcess, wallets}){
  const [selectedWallet, setSelectedWallet] = useState(wallets[0].id)  
  const [purchaseBtn, setPurchaseBtn] = useState(false)
  const router = useRouter()
  function shortenWalletAddress(address, startLength = 5, endLength = 5) {
    const start = address.substring(0, startLength);
    const end = address.substring(address.length - endLength);
    return `${start}...${end}`;
}
  async function purchase(item){
    const token = localStorage.getItem("token");

    setPurchaseBtn(true)
    setProcess(true)
    
  
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}/api/v1/postPurchase`,
      {
        method: "POST",
  
        body: JSON.stringify({ 
          productID: item.ID,
          quantity: 1,
          wallet: selectedWallet
        }),
  
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      }
    );

  
      if(res.status === 200){
       

        setTimeout(()=> {
          const toastId = "success-id";
          if (!toast.isActive(toastId)) {
            toast.success(
              <>
                <Toast
                  type="Success"
                  message="Purchase Item Successfully!"
                />
              </>,
              {
                toastId: toastId,
                icon: false,
              }
            );
          }
          router.push('./shop/history')

        }, 3000)
        

      }else if(res.status === 500){
        const responseBody = await res.json();
        const toastId = "error-id";
        if (!toast.isActive(toastId)) {
          toast.error(
            <>
              <Toast
                type="Error"
                message={responseBody.error}
              />
            </>,
            {
              toastId: toastId,
              icon: false,
            }
          );
        }
        setPurchaseBtn(false)
        setProcess(false)
       
      }else{
        const toastId = "error-id";
        if (!toast.isActive(toastId)) {
          toast.error(
            <>
              <Toast
                type="Error"
                message="Internal Server Error"
              />
            </>,
            {
              toastId: toastId,
              icon: false,
            }
          );
        }
        setPurchaseBtn(false)
        setProcess(false)

      }

  }
  return(
    <div className="px-8 pt-6 pb-7 flex flex-col gap-4 items-start w-full\\ lg:w-[584px]">
      <div className="flex w-full h-full justify-between items-center text-base font-bold whitespace-nowrap">
        <span>Confirm purchase?</span>
        <Icons.skullLogo className="w-8 h-8 fill-primary" />
      </div>

      <div className="flex gap-x-3 lg:gap-x-4 w-full mt-2">
        <Image
          src={item.image}
          alt="NFT"
          height={60}
          width={60}
          className="rounded-2xl w-[70px] lg:w-[60px] h-[70px] lg:h-[60px]"
          unoptimized
        />

        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col justify-center gap-0.5 lg:gap-0.5">
            <h3 className="inline-block text-base lg:text-base font-bold uppercase">
              {item.name}
            </h3>
            <h2 className="inline-block text-2xl lg:text-base font-extrabold uppercase">
              {item.price}
            </h2>
          </div>
          <p className="text-xl uppercase font-medium">x1</p>
        </div>
      </div>

      <Separator className="w-full bg-muted" />

      <p className="text-sm font-medium text-muted-foreground/50 ">
        {item.description}
      </p>

      <Separator className="w-full bg-muted" />
      <div className="flex flex-col break-all gap-5 text-sm font-extrabold w-full">
        <p>Select airdrop target</p>

<div className="max-h-[100px] overflow-y-auto flex flex-col gap-2">
{ wallets.filter(item => 
        !(item.id.startsWith("bc1") || item.id.startsWith("0x"))
      ).map((item, index) => {
  return(
    
  
<>
<div className="hidden w-full lg:flex items-center justify-between gap-16 "
    key={index}
    >
    <Label
      htmlFor={item.id}
      className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 whitespace-nowrap"
    >
      {item.id}
    </Label>
    <input id={item.id} value={item.id} type="radio" checked={selectedWallet == item.id} className="h-5 w-5"
       onChange={(e) => setSelectedWallet(e.target.value)} />
  </div>


<div className="flex w-full lg:hidden items-center justify-between gap-16 "
    key={index}
    >
    <Label
      htmlFor={item.id}
      className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 whitespace-nowrap"
    >
      {shortenWalletAddress(item.id)}
    </Label>
    <input id={item.id} value={item.id} type="radio" checked={selectedWallet == item.id} className="h-5 w-5"
       onChange={(e) => setSelectedWallet(e.target.value)} />
  </div>
</>


  )



})



}

</div>
      </div>

      <Separator className="w-full bg-muted" />

      <div className="w-full flex items-center justify-end gap-5">
        <Button
          variant="outline"
          className="min-w-fit gap-3.5 py-4 text-xs lg:text-base capitalize lg:uppercase"
          onClick={() => {
            if(!process1){
              setPopoverOpen(0)
            }
          }}
        >
          No
        </Button>
        <Button 
          disabled={purchaseBtn}
          onClick={() => 
            {purchase(item)}}
        className="min-w-fit gap-3.5 py-4 text-xs lg:text-base text-white capitalize lg:uppercase">
        {purchaseBtn
          ?
          <svg
          aria-hidden="true"
          class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>


          :
          "Yes"
          }
        </Button>
      </div>
    </div>
  );
}

export default CheckboxConfirmation;
