import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

export default function ConnectWallet() {
  return (
    <main className="h-fit lg:h-fit lg:w-full flex items-center justify-center p-5 lg:p-10 lg:pb-44">
      <div className="w-fit h-fit lg:max-w-4xl p-5 lg:p-8 bg-white/50 border rounded-xl lg:rounded-2xl">
        <div className="h-full w-full justify-center items-start flex flex-col gap-6">
          <p className="lg:text-2xl">
            By choosing to roll the rarity of your unrevealed NFT, you
            acknowledge and agree to the following:{" "}
          </p>
          <p className="text-sm font-medium text-muted-foreground lg:text-xl lg:font-normal">
            The fee paid to roll the rarity is non-refundable regardless of the
            outcome. Rolling the rarity has a chance to lower the original
            rarity of your NFT. There is no guarantee the rarity will improve.
            You accept the risk that rolling may result in receiving an NFT of
            lower rarity than originally obtained. Rolling is optional and done
            at your own discretion. The company provides this as an
            entertainment mechanic only and does not guarantee rarity
            improvements.
            <br /> <br /> Rolling rarity is meant to add excitement and chance
            to the reveal process. However, you are under no obligation to roll
            and can opt to keep the original unknown rarity if desired. By
            paying the fee and choosing to roll, you accept the outcome whether
            it improves or lowers the rarity first assigned to your NFT. Please
            be aware of the risks before consenting to a roll.
          </p>
          <div className="flex gap-2 items-center">
            <Checkbox id={"terms"} />
            <label
              htmlFor={"terms"}
              className="whitespace-nowrap text-xs font-medium text-muted-foreground lg:text-xl lg:font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to these terms and conditions{" "}
            </label>
          </div>

          <div className="flex flex-col lg:flex-row w-full gap-4">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "text-primary font-bold border-4 border-primary w-full lg:text-3xl hover:text-primary"
              )}
            >
              Cancel{" "}
            </Button>
            <Button
              size="sm"
              className={cn(
                "font-bold border-4 border-primary w-full lg:text-3xl"
              )}
            >
              Continue{" "}
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
