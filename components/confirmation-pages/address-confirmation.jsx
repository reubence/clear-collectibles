import React from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import NFT_3 from "@/public/images/nft-3.png";
import Image from "next/image";
import Link from "next/link";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "@/lib/utils";
import { Icons } from "../ui/icons";

function AddressConfirmation({ className }) {
  return (
    <div
      className={cn(
        "px-8 pt-6 pb-7 flex flex-col gap-4 items-start w-full lg:max-w-4xl 3xl:max-w-none",
        className
      )}
    >
      <div className="flex w-full justify-between items-center text-base font-bold whitespace-nowrap">
        <span>Confirm purchase?</span>
        <Icons.skullLogo className="w-8 h-8 fill-primary" />
      </div>

      <div className="flex gap-x-3 lg:gap-x-4 w-full mt-2">
        <Image
          src={NFT_3}
          alt="Clock Icon"
          height={60}
          width={60}
          className="rounded-2xl w-[70px] lg:w-[60px] h-[70px] lg:h-[60px]"
          unoptimized
        />

        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col justify-center gap-0.5 lg:gap-0.5">
            <h3 className="inline-block text-base lg:text-base font-bold uppercase">
              SMB Inception
            </h3>
            <h2 className="inline-block text-2xl lg:text-base font-extrabold uppercase">
              2343
            </h2>
          </div>
          <p className="text-xl uppercase font-medium">x1</p>
        </div>
      </div>

      <Separator className="w-full bg-muted" />

      <p className="text-sm font-medium text-muted-foreground/50 ">
        A code will be sent to your order history, which can you redeem in a
        google form for next steps{" "}
      </p>

      <Separator className="w-full bg-muted" />
      <ScrollArea className="h-[50vh] md:h-[40vh] tallXS:h-[30vh] tallXL:h-[50vh] 3xl:h-full w-full">
        <div className="grid grid-cols-6 whitespace-nowrap items-end gap-4 px-1.5">
          <div className="col-span-6 md:col-span-2 space-y-2">
            <Label className="font-medium" htmlFor="email">
              Email :
            </Label>
            <Input
              className="max-w-sm"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="col-span-6 md:col-span-2 space-y-2">
            <Label className="font-medium" htmlFor="email">
              First Name:{" "}
            </Label>
            <Input
              className="max-w-sm"
              type="text"
              id="fname"
              placeholder="First Name"
            />
          </div>
          <div className="col-span-6 md:col-span-2 space-y-2">
            <Label className="font-medium" htmlFor="email">
              Last Name:{" "}
            </Label>
            <Input
              className="max-w-sm"
              type="text"
              id="lname"
              placeholder="Last Name"
            />
          </div>

          <Label className="col-span-6 mt-4" htmlFor="email">
            Shipping Address
          </Label>
          <div className="col-span-6 md:col-span-2 space-y-2">
            <Label className="font-medium" htmlFor="email">
              Address:{" "}
            </Label>
            <Input
              className="max-w-sm"
              type="text"
              id="address1"
              placeholder="Address"
            />
          </div>
          <div className="col-span-6 md:col-span-2 space-y-2">
            <Label className="font-medium whitespace-normal" htmlFor="email">
              Apartment, suite, etc: (optional)
            </Label>
            <Input
              className="max-w-sm"
              type="text"
              id="address2"
              placeholder="Additional Address"
            />
          </div>
          <div className="col-span-3 md:col-span-2 space-y-2">
            <Label className="font-medium" htmlFor="email">
              Phone:
            </Label>
            <Input
              className="max-w-sm"
              type="tel"
              id="phone"
              placeholder="Number"
            />
          </div>
          <div className="col-span-3 md:col-span-2 space-y-2">
            <Label className="font-medium" htmlFor="email">
              Postal Code:{" "}
            </Label>
            <Input
              className="max-w-sm"
              type="number"
              id="pincode"
              placeholder="Postal Code"
            />
          </div>
          <div className="col-span-6 md:col-span-4 flex flex-col md:flex-row items-end gap-4 ">
            <div className="w-full md:w-1/3">
              <Label className="font-medium" htmlFor="email">
                Country/Region:{" "}
              </Label>
              <Input
                className="max-w-sm"
                type="text"
                id="country"
                placeholder="Country"
              />
            </div>
            <div className="w-full md:w-1/3">
              <Label className="font-medium" htmlFor="email">
                City:{" "}
              </Label>
              <Input
                className="max-w-sm"
                type="text"
                id="city"
                placeholder="City"
              />
            </div>{" "}
            <div className="w-full md:w-1/3">
              <Label className="font-medium" htmlFor="email">
                State:{" "}
              </Label>
              <Input
                className="max-w-sm"
                type="text"
                id="state"
                placeholder="State"
              />
            </div>
          </div>
        </div>
        <p className="text-sm font-medium text-muted-foreground/50 ml-2 mt-7">
          United States,UK and European Union shipping only
        </p>
      </ScrollArea>

      <Separator className="w-full bg-muted" />

      <div className="w-full flex items-center justify-end gap-5">
        <Button
          variant="outline"
          className="min-w-fit gap-3.5 py-4 text-xs lg:text-base capitalize lg:uppercase"
        >
          No
        </Button>
        <Button className="min-w-fit gap-3.5 py-4 text-xs lg:text-base text-white capitalize lg:uppercase">
          Yes
        </Button>
      </div>
    </div>
  );
}

export default AddressConfirmation;
