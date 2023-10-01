import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Icons } from "../ui/icons";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

function EmailConfirmation() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  function onSubmit(values) {
    // Do something with the form values.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="px-8 pt-6 pb-7 flex flex-col gap-4 items-start w-full lg:w-[584px]">
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
            A code will be sent to your order history, which can you redeem in a
            google form for next steps{" "}
          </p>

          <Separator className="w-full bg-muted" />
          <div className="w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>Email :</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <p className="text-sm font-medium text-muted-foreground/50">
            United States,UK and European Union shipping only
          </p>

          <Separator className="w-full bg-muted" />

          <div className="w-full flex items-center justify-end gap-5">
            <Button
              variant="outline"
              className="min-w-fit gap-3.5 py-4 text-xs lg:text-base capitalize lg:uppercase"
            >
              No
            </Button>
            <Button
              type="submit"
              className="min-w-fit gap-3.5 py-4 text-xs lg:text-base text-white capitalize lg:uppercase"
            >
              Yes
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default EmailConfirmation;
