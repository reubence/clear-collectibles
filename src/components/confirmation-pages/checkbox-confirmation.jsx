import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Icons } from "../ui/icons";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";

function CheckboxConfirmation() {
  return (
    <div className="px-8 pt-6 pb-7 flex flex-col gap-4 items-start w-full\\ lg:w-[584px]">
      <div className="flex w-full h-full justify-between items-center text-base font-bold whitespace-nowrap">
        <span>Confirm purchase?</span>
        <Icons.skullLogo className="w-8 h-8 fill-primary" />
      </div>

      <div className="flex gap-x-3 lg:gap-x-4 w-full mt-2">
        <Image
          src="/images/NFT_3"
          alt="NFT"
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
        Redeem your airdropped all domains NFT for a monke domain on{" "}
        <Link
          href="https://alldomains.id/"
          className="text-primary cursor-pointer"
        >
          https://alldomains.id/
        </Link>
      </p>

      <Separator className="w-full bg-muted" />
      <div className="flex flex-col break-all gap-5 text-sm font-extrabold w-full">
        <p>Select airdrop target</p>

        <div className="flex w-full items-center justify-between gap-16">
          <Label
            htmlFor="target"
            className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            asujorjoiqwj4901283928i2u9nk12h31923k1
          </Label>
          <Checkbox id="target" />
        </div>

        <div className="flex w-full items-center justify-between gap-16">
          <Label
            htmlFor="target"
            className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            asujorjoiqwj4901283928i2u9nk12h31923k1
          </Label>
          <Checkbox id="target" />
        </div>
      </div>

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

export default CheckboxConfirmation;
