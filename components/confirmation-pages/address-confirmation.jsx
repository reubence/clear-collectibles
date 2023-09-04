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

function AddressConfirmation() {
  return (
    <div className="px-8 pt-6 pb-7 flex flex-col gap-4 items-start w-full lg:w-[584px]">
      <div className="flex w-full h-full justify-between items-center text-base font-bold whitespace-nowrap">
        <span>Confirm purchase?</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <g clip-path="url(#clip0_1_2484)">
            <path
              d="M14.9999 27.6006C21.9587 27.6006 27.5999 21.9594 27.5999 15.0006C27.5999 8.04185 21.9587 2.40063 14.9999 2.40063C8.04111 2.40063 2.3999 8.04185 2.3999 15.0006C2.3999 21.9594 8.04111 27.6006 14.9999 27.6006Z"
              fill="white"
            />
            <path
              d="M15 0.360596C6.18 0.360596 0 6.9606 0 15.0006C0 23.1606 6.18 29.6406 15 29.6406C23.82 29.6406 30 23.1606 30 15.0006C30 6.9606 23.82 0.360596 15 0.360596ZM5.4 20.1006C5.34 19.6206 5.34 19.2006 5.4 18.6006C5.4 18.4806 5.4 18.0006 5.4 18.0006C5.46 17.4606 5.46 17.0406 5.46 16.6806C5.46 16.3806 5.4 16.0806 5.4 15.9006L5.34 15.7806V15.6006C5.1 12.8406 5.34 10.5006 6.3 8.7006C8.16 4.9206 12.48 4.3206 14.88 4.3206H15.12C18.42 4.3206 21.06 5.2206 22.62 7.0206C24.36 8.9406 25.02 11.9406 24.66 15.6006V15.7806C24.6 16.0206 24.54 16.3206 24.54 16.6806C24.54 17.1006 24.54 17.5206 24.6 18.0006V18.6006C24.66 19.2606 24.72 19.6806 24.6 20.1606C24.36 21.8406 23.34 23.0406 21.54 23.9406C19.5 24.8406 16.98 25.0206 15.18 25.0206H14.76C12.96 25.0206 10.5 24.7806 8.4 23.9406C6.66 23.1006 5.64 21.8406 5.4 20.1006ZM22.86 16.8006C22.86 15.5406 22.38 14.6406 21.72 14.1606C21.78 14.4006 21.78 14.7606 21.78 15.0006C21.78 16.9806 21.06 18.8406 19.8 20.1606C21.42 20.1606 22.86 19.3806 22.86 16.8006ZM8.22 14.1606C7.56 14.6406 7.14 15.5406 7.14 16.8006C7.14 19.3206 8.52 20.1606 10.2 20.1606C8.94 18.8406 8.22 16.9206 8.22 15.0006C8.16 14.7606 8.16 14.4006 8.22 14.1606Z"
              fill="#6CD2FF"
            />
            <path
              d="M12.9 17.0371C12.9 18.8971 11.88 20.1571 10.38 20.3371H10.14C8.39996 20.3371 6.95996 19.4971 6.95996 16.8571C6.95996 15.3571 7.49996 14.4571 8.33996 13.9771C8.81996 13.6771 9.41996 13.4971 10.02 13.4971C11.88 13.4371 12.9 15.1771 12.9 17.0371Z"
              fill="#6CD2FF"
            />
            <path
              d="M23.1002 16.857C23.1002 19.497 21.6602 20.337 19.9202 20.337C19.8002 20.337 19.6802 20.337 19.6202 20.277C18.0602 20.157 17.1602 18.837 17.1602 17.037C17.1602 15.117 18.1802 13.437 20.0402 13.437C20.7002 13.437 21.1802 13.617 21.6602 13.917C22.5002 14.397 23.1002 15.357 23.1002 16.857Z"
              fill="#6CD2FF"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_2484">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
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

      <Separator className="w-full" />

      <p className="text-sm font-medium text-muted-foreground/50 ">
        A code will be sent to your order history, which can you redeem in a
        google form for next steps{" "}
      </p>

      <Separator className="w-full" />
      <ScrollArea className="h-[25vh]">
        <div className="grid grid-cols-2 whitespace-nowrap items-end gap-4 px-1.5">
          <div className="col-span-2 space-y-2">
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
          <Label className="col-span-2 mt-4" htmlFor="email">
            Shipping Address
          </Label>
          <div className="col-span-1 space-y-2">
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
          <div className="col-span-1 space-y-2">
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
          <div className="col-span-2 lg:col-span-1 space-y-2">
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
          <div className="col-span-2 lg:col-span-1 space-y-2">
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
          <div className="col-span-2 lg:col-span-1 space-y-2">
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
          <div className="col-span-2 lg:col-span-1 space-y-2">
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
          <div className="col-span-2 flex flex-col lg:flex-row items-end gap-4 ">
            <div className="w-full lg:w-1/3">
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
            <div className="w-full lg:w-1/3">
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
            <div className="w-full lg:w-1/3">
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

      <Separator className="w-full" />

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
