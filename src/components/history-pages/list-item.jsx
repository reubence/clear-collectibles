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
}) {
  const [openDetails, setOpenDetails] = React.useState(false);
  return (
    <div className="bg-white p-4 lg:p-0 lg:bg-none rounded-xl lg:rounded-none">
      <div className="hidden lg:flex flex-col w-full border-t-2 border-t-primary border-b">
        <div className="flex md:flex-col lg:flex-row lg:flex-wrap bg-primary/10 p-5 justify-between items-start gap-3">
          {/* ORDER PLACED */}
          <div className="flex flex-col gap-1.5">
            <h2 className="font-normal text-muted-foreground/50">
              Order placed
            </h2>
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
            <Button size="sm" className="uppercase lg:rounded-lg">
              Get Support
            </Button>
          </div>
        </div>

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
          <div className="flex xl:flex-col gap-4 xl:w-56 2xl:w-72 h-full items-end justify-center">
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

            {/* REEDEEM CODE BUTTON */}
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
            {/* DETAILS BUTTON */}
            {details && (
              <Dialog>
                <DialogTrigger
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "uppercase lg:rounded-lg"
                  )}
                >
                  Details
                </DialogTrigger>
                <DialogContent className="bg-white">
                  <AddressConfirmation className="lg:max-w-full" />
                </DialogContent>
              </Dialog>
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
        onClick={() => setOpenDetails(!openDetails)}
      >
        {/* ORDER PLACED */}
        <div className="flex gap-1 text-xs whitespace-nowrap uppercase">
          <h2 className="font-normal text-muted-foreground/50">
            Order placed:
          </h2>
          <p className="font-semibold">{orderPlaced}</p>
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
            {status === "pending" && (
              <p className="whitespace-nowrap capitalize px-4 py-2 text-[#F90] bg-[#FFF5E5] rounded-lg w-fit text-sm font-bold mt-1">
                {status}
              </p>
            )}
            {/* ORDER STATUS FULFILLED */}
            {status === "fulfilled" && (
              <p className="whitespace-nowrap capitalize px-4 py-2 text-[#02B58A] bg-[#E6F8F3] rounded-lg w-fit text-sm font-bold mt-1">
                {status}
              </p>
            )}
            {/* ORDER STATUS REFUNDED */}
            {status === "refunded" && (
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
            {code && (
              <p className="flex items-center justify-between font-normal">
                Code:{" "}
                <span className="flex items-center gap-1.5">
                  <span className="font-semibold">
                    0382chjidwliajd012jn39123
                  </span>
                  <Button variant="ghost" size="ghost">
                    <Icons.copy className="mb-1 fill-primary" />
                  </Button>
                </span>
              </p>
            )}
            {email && (
              <p className="flex items-center justify-between font-normal gap-2.5">
                Email:{" "}
                <span className="flex items-center gap-1.5">
                  <span className="font-semibold">{email}</span>
                  <Button variant="ghost" size="ghost">
                    <Icons.copy className="mb-1 fill-primary" />
                  </Button>
                </span>
              </p>
            )}
            {airdropWallet && (
              <p className="flex items-center justify-between font-normal gap-2.5">
                Airdrop Wallet:
                <span className="flex items-center gap-1.5">
                  <span className="font-semibold">{airdropWallet}</span>
                  <Button variant="ghost" size="ghost">
                    <Icons.copy className="mb-1 fill-primary" />
                  </Button>
                </span>
              </p>
            )}
          </div>

          <Separator className="bg-muted my-4" />
        </div>
        <div className="flex justify-end w-full gap-1.5">
          <Button
            size="sm"
            className={cn("uppercase rounded-lg p-4 text-xs w-full")}
            onClick={() => console.log("Get Support")}
          >
            Get Support
          </Button>

          {redeemCode && (
            <Sheet>
              <SheetTrigger
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "uppercase rounded-lg p-4 text-xs w-full lg:hidden gap-1 py-3"
                )}
              >
                Redeem code
              </SheetTrigger>
              <SheetContent side="bottom" className="">
                <RedeemCode />
              </SheetContent>
            </Sheet>
          )}

          {details && (
            <Sheet>
              <SheetTrigger
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "uppercase rounded-lg p-4 text-xs w-full lg:hidden gap-1 py-3"
                )}
              >
                Details
              </SheetTrigger>
              <SheetContent side="bottom" className="">
                <AddressConfirmation className="lg:max-w-full" />
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListItem;
