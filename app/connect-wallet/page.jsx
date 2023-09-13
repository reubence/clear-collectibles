import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export default function ConnectWallet() {
  return (
    <main className="h-full w-full flex items-center justify-center p-5 lg:p-10 pb-24 lg:pb-44">
      <div className="w-full h-full lg:max-w-2xl  bg-white/50 border rounded-xl lg:rounded-2xl">
        <div className="h-full w-full items-center justify-center flex flex-col gap-10">
          <Icons.wallet className="w-20 h-20 fill-primary" />
          <p className="text-muted-foreground lg:text-3xl">
            Please link your wallet
          </p>
          <Button className={cn("font-bold")}>Connect Wallet </Button>
        </div>
      </div>
    </main>
  );
}
