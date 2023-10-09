import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import AddressConfirmation from "../confirmation-pages/address-confirmation";
import { Button, buttonVariants } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Icons } from "../ui/icons";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import RedeemCode from "./redeem-code";

function ListItem({
  image,
  orderPlaced,
  total,
  quantityPurchased,
  deliveryMethod,
  supportTicket,
  status,
  title,
  subtitle,
  description,
  airdropWallet,
  code,
  email,
  details,
  redeemCode,
  solscan
}) {
  const [openDetails, setOpenDetails] = React.useState(false);
  const [copy, setCopy] = React.useState(false)
  function shortenWalletAddress(address, startLength = 5, endLength = 5) {
    const start = address.substring(0, startLength);
    const end = address.substring(address.length - endLength);
    return `${start}...${end}`;
}

const formattedNumber = (value) => {
  const number = Number(value).toLocaleString();
  return number
  
 }

function shortenTxid(address, startLength = 16) {
  const start = address.substring(0, startLength);
  return `${start}...`;
}

  function getDate(dates){
    const date = new Date(dates * 1000)
    const newDate = date.toLocaleString()
    
    return newDate
  }


  return (
    <div className="bg-white p-4 lg:p-0 lg:bg-none rounded-xl lg:rounded-none">
      <div className="hidden lg:flex flex-col w-full border-t-2 border-t-primary border-b">
   
        <div className="flex md:flex-col lg:flex-row lg:flex-wrap  justify-between bg-primary/10 p-5 items-start gap-3">
          {/* ORDER PLACED */}
          
          <div className="flex flex-col gap-1.5">
            <h2 className="font-normal text-muted-foreground/50">
              Order placed
            </h2>
            <p className="font-semibold">{getDate(orderPlaced)}</p>
          </div>
          {/* Total */}
          <div className="flex flex-col gap-1.5">
            <h2 className="font-normal text-muted-foreground/50">Total</h2>
            <p className="font-semibold">{formattedNumber(total)}</p>
          </div>
          {/* Quantity purchased */}
          <div className="flex flex-col gap-1.5">
            <h2 className="font-normal text-muted-foreground/50">
              Quantity purchased
            </h2>
            <p className="font-semibold">{formattedNumber(quantityPurchased)}</p>
          </div>
          {/* Delivery method */}
          <div className="flex flex-col gap-1.5">
            <h2 className="font-normal text-muted-foreground/50">
              Delivery method
            </h2>
            <p className="font-semibold">{deliveryMethod}</p>
          </div>
          {/* Support Ticket */}
          <div className="flex flex-col items-end gap-1.5 2xl:w-48">
          <a href="https://discord.com/invite/clearcollectibles" target="_blank">
            <Button size="sm" className="uppercase lg:rounded-lg">
              Get Support
            </Button>
            </a>
          </div>
        </div>
        <h2 className="font-semibold text-primary pl-5 py-1 text-sm">TxID:{shortenTxid(supportTicket)} {solscan && <> | <a href={solscan} target="_blank">Signature: {shortenTxid(solscan)}</a></> }</h2>
        <div className="flex flex-col xl:flex-row h-full items-start gap-5 justify-between p-5">
          <div className="flex gap-5">
            <Image
              src={image}
              alt="NFT IMAGE"
              height={80}
              width={80}
              className="rounded-2xl h-[136px] w-[80px] lg:h-[80px] aspect-square object-cover"
              unoptimized
            />
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap xl:flex-row items-start xl:items-center justify-between gap-y-2">
                <div className="flex flex-col gap-2">
                  <p className="text-base font-semibold">{title}</p>
                  <p className="text-base font-normal text-muted-foreground/50">
                    {subtitle}
                  </p>
                </div>
                {/* CODE, EMAIL, AIRDROP WITH COPY ICON */}
                <div className="flex flex-col gap-2">
               
              
                  {airdropWallet && (
                    <p className="flex items-center font-normal gap-3">
                      Airdrop Wallet:{" "} 
                      <span className="font-semibold">{copy ? "Copied" : shortenWalletAddress(airdropWallet)}</span>
                      <Button variant="ghost" size="ghost">
                        <Icons.copy className="mb-1.5 fill-primary" onClick={() => {
                    setCopy(true)
                    navigator.clipboard.writeText(airdropWallet);
                    setTimeout(()=> {
                      setCopy(false)
                    },3000)
                  }}/>
                      </Button>
                    </p>
                  )}
                </div>
              </div>
              <p className="text-base font-normal text-muted-foreground/50">
                {description}
              </p>
            </div>
          </div>
          <div className="flex xl:flex-col gap-4 xl:w-56 2xl:w-72 h-full items-end justify-center">
            {/* ORDER STATUS PENDING */}
            {status === "Pending" && (
              <p className="whitespace-nowrap capitalize px-4 py-2 text-[#F90] bg-[#FFF5E5] rounded-lg">
                {status}
              </p>
            )}
            {/* ORDER STATUS FULFILLED */}
            {status === "Fulfilled" && (
              <p className="whitespace-nowrap capitalize px-4 py-2 text-[#02B58A] bg-[#E6F8F3] rounded-lg">
                {status}
              </p>
            )}
            {/* ORDER STATUS REFUNDED */}
            {status === "Refunded" && (
              <p className="whitespace-nowrap capitalize px-4 py-2 text-foreground/50 bg-foreground/10 rounded-lg">
                {status}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE VIEW START */}
      <div
        className={cn(
          "lg:hidden rounded-xl cursor-pointer  transition-all ease-in-out",
          {
            // put some styling code here for wheh popup is open
            "": openDetails,
          }
        )}
        onClick={() => setOpenDetails(true)}
      >
        {/* ORDER PLACED */}
        <div className="flex gap-1 text-xs whitespace-nowrap uppercase">
          <h2 className="font-normal text-muted-foreground/50">
            Order placed:
          </h2>
          <p className="font-semibold">{getDate(orderPlaced)}</p>
        </div>
        <Separator className="bg-muted my-4" />
        <div className="flex gap-4">
          <Image
            src={image}
            alt="NFT IMAGE"
            height={60}
            width={60}
            className="rounded-2xl h-[60px] w-[60px] aspect-square object-cover"
            unoptimized
          />
          <div className="flex flex-col gap-1.5">
            <p className="text-base font-semibold">{title}</p>
            <p className="text-xs font-normal text-muted-foreground/50">
              {subtitle}
            </p>
            <div className="flex gap-1.5 text-xs">
              <h2 className="font-normal text-muted-foreground/50">Total:</h2>
              <p className="font-semibold">{total}</p>
            </div>
            {/* ORDER STATUS PENDING */}
            {status === "Pending" && (
              <p className="whitespace-nowrap capitalize px-4 py-2 text-[#F90] bg-[#FFF5E5] rounded-lg w-fit text-sm font-bold mt-1">
                {status}
              </p>
            )}
            {/* ORDER STATUS FULFILLED */}
            {status === "Fulfilled" && (
              <p className="whitespace-nowrap capitalize px-4 py-2 text-[#02B58A] bg-[#E6F8F3] rounded-lg w-fit text-sm font-bold mt-1">
                {status}
              </p>
            )}
            {/* ORDER STATUS REFUNDED */}
            {status === "Refunded" && (
              <p className="whitespace-nowrap capitalize px-4 py-2 text-foreground/50 bg-foreground/10 rounded-lg w-fit text-sm font-bold mt-1">
                {status}
              </p>
            )}
          </div>
        </div>
        <Separator className="bg-muted my-4" />
        <div
          className={cn("hidden", {
            "flex flex-col gap-4": openDetails,
          })}
        >
          {/* Quantity purchased */}
          <div className="flex items-center justify-between text-xs">
            <h2 className="font-normal text-muted-foreground/50">
              Quantity purchased
            </h2>
            <p className="font-semibold">{quantityPurchased}</p>
          </div>
          {/* Delivery method */}
          <div className="flex items-center justify-between text-xs">
            <h2 className="font-normal text-muted-foreground/50">
              Delivery method
            </h2>
            <p className="font-semibold">{deliveryMethod}</p>
          </div>
          {/* CODE, EMAIL, AIRDROP WITH COPY ICON */}
          <div className="flex flex-col gap-2 text-xs">

          {supportTicket && (
              <p className="flex items-center justify-between font-normal gap-2.5">
                TxID:
                <span className="flex items-center gap-1.5">
                  <span className="font-semibold">{shortenTxid(supportTicket)}</span>
                </span>
              </p>
            )}

            
            {airdropWallet && (
              <p className="flex items-center justify-between font-normal gap-2.5">
                Airdrop Wallet:
                <span className="flex items-center gap-1.5">
                  <span className="font-semibold">{shortenWalletAddress(airdropWallet)}</span>
             
                </span>
              </p>
            )}

            {solscan && (
              <p className="flex items-center justify-between font-normal gap-2.5">
                Signature:
                <a className="flex items-center gap-1.5" href={solscan} target="_blank">
                  <span className="font-semibold">{shortenTxid(solscan)}</span>
                
                </a>
              </p>
            )}
          </div>

          <Separator className="bg-muted my-4" />
        </div>
        <div className="flex justify-end w-full gap-1.5">
          <a href="https://discord.com/invite/clearcollectibles" target="_blank">
          <Button
            size="sm"
            className={cn("uppercase rounded-lg p-4 text-xs w-full")}
          >
            Get Support
          </Button>
          </a>
         

      
        </div>
      </div>
    </div>
  );
}

export default ListItem;
