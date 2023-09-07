import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Image from "next/image";
import NFT_3 from "@/public/images/nft-3.png";
import { cn } from "@/lib/utils";
import { Icons } from "../ui/icons";
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import RedeemCode from "./redeem-code";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import AddressConfirmation from "../confirmation-pages/address-confirmation";

function ListItem({
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
}) {
  return (
    <div className="flex flex-col w-full border-t-2 border-t-primary border-b">
      <div className="flex md:flex-col xl:flex-row lg:flex-wrap bg-primary/10 p-5 justify-between items-start gap-3">
        {/* ORDER PLACED */}
        <div className="flex flex-col gap-1.5">
          <h2 className="font-normal text-muted-foreground/50">Order placed</h2>
          <p className="font-semibold">{orderPlaced}</p>
        </div>
        {/* Total */}
        <div className="flex flex-col gap-1.5">
          <h2 className="font-normal text-muted-foreground/50">Total</h2>
          <p className="font-semibold">{total}</p>
        </div>
        {/* Quantity purchased */}
        <div className="flex flex-col gap-1.5">
          <h2 className="font-normal text-muted-foreground/50">
            Quantity purchased
          </h2>
          <p className="font-semibold">{quantityPurchased}</p>
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
          <h2 className="font-semibold text-primary">{supportTicket}</h2>

          <Dialog>
            <DialogTrigger
              className={cn(
                buttonVariants({ size: "sm" }),
                "uppercase lg:rounded-lg"
              )}
            >
              Get Support
            </DialogTrigger>
            <DialogContent className="bg-white">
              <AddressConfirmation className="lg:max-w-full" />
            </DialogContent>
          </Dialog>

          {/* <Button size="sm" className="uppercase lg:rounded-lg">
            Get Support
          </Button> */}
        </div>
      </div>

      <div className="flex lg:flex-col items-start xl:flex-row gap-5 justify-between p-5">
        <div className="flex lg:flex-col xl:flex-row gap-5">
          <Image
            src={"/images/nft-3.png"}
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
              {/* CODE WITH COPY ICON */}
              <div className="flex flex-col gap-2">
                {code && (
                  <p className="flex items-center font-normal gap-3">
                    Code:{" "}
                    <span className="font-semibold">
                      0382chjidwliajd012jn39123
                    </span>
                    <Button variant="ghost" size="ghost">
                      <Icons.copy className="mb-1.5 fill-primary" />
                    </Button>
                  </p>
                )}
                {email && (
                  <p className="flex items-center font-normal gap-3">
                    Email: <span className="font-semibold">{email}</span>
                    <Button variant="ghost" size="ghost">
                      <Icons.copy className="mb-1.5 fill-primary" />
                    </Button>
                  </p>
                )}
                {airdropWallet && (
                  <p className="flex items-center font-normal gap-3">
                    Airdrop Wallet:{" "}
                    <span className="font-semibold">{airdropWallet}</span>
                    <Button variant="ghost" size="ghost">
                      <Icons.copy className="mb-1.5 fill-primary" />
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
        <div className="flex flex-col gap-4 xl:w-56 2xl:w-72 lg:items-start xl:items-end justify-center">
          {/* ORDER STATUS PENDING */}
          {status === "pending" && (
            <p className="whitespace-nowrap capitalize px-4 py-2 text-[#F90] bg-[#FFF5E5] rounded-lg">
              {status}
            </p>
          )}
          {/* ORDER STATUS FULFILLED */}
          {status === "fulfilled" && (
            <p className="whitespace-nowrap capitalize px-4 py-2 text-[#02B58A] bg-[#E6F8F3] rounded-lg">
              {status}
            </p>
          )}
          {/* ORDER STATUS REFUNDED */}
          {status === "refunded" && (
            <p className="whitespace-nowrap capitalize px-4 py-2 text-foreground/50 bg-foreground/10 rounded-lg">
              {status}
            </p>
          )}

          {redeemCode && (
            <Popover>
              <PopoverTrigger
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "uppercase lg:rounded-lg"
                )}
              >
                Redeem code
              </PopoverTrigger>
              <PopoverContent
                sideOffset={8}
                className="border border-muted shadow-lg"
              >
                <RedeemCode />
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListItem;
