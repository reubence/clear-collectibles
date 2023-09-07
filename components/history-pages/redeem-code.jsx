import Image from "next/image";
import React from "react";
import NFT_3 from "@/public/images/nft-3.png";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Icons } from "../ui/icons";

function RedeemCode() {
  return (
    <div className="px-8 pt-6 pb-7 flex flex-col gap-4 items-start w-full lg:w-[584px]">
      <div className="flex w-full h-full justify-between items-center text-base font-bold whitespace-nowrap">
        <span>Confirm purchase?</span>
        <Icons.skullLogo className="w-8 h-8 fill-primary" />
      </div>

      <Separator className="w-full bg-muted" />

      <p className="flex items-center font-normal gap-3">
        Code: <span className="font-semibold">0382chjidwliajd012jn39123</span>
        <Button variant="ghost" size="ghost">
          <Icons.copy className="mb-1.5 fill-primary" />
        </Button>
      </p>

      <Separator className="w-full bg-muted" />

      <div className="w-full flex items-center justify-end gap-5">
        <Button className="min-w-fit gap-3.5 py-4 text-xs lg:text-base text-white capitalize lg:uppercase">
          View Order History
        </Button>
      </div>
    </div>
  );
}

export default RedeemCode;
