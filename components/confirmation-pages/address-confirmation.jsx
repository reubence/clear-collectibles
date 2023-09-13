import { cn } from "@/lib/utils";
import NFT_3 from "@/public/images/nft-3.png";
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
import { Label } from "../ui/label";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";

function AddressConfirmation({ className }) {
  const formSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    firstName: z.string(),
    lastName: z.string(),
    address: z.string(),
    address2: z.string(),
    phone: z.string().regex(/^[0-9]+$/, "Must be only digits"),
    pincode: z.string().regex(/^[0-9]+$/, "Must be only digits"),
    country: z.string(),
    city: z.string(),
    state: z.string(),
  });

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
        <div
          className={cn(
            "px-8 pt-6 pb-7 flex flex-col gap-4 items-start w-full",
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
          <ScrollArea className="h-[40vh] tallXS:h-[40h] tallXL:h-[51vh] 3xl:h-full w-full">
            <div className="grid grid-cols-6 whitespace-nowrap items-start gap-4 px-1.5">
              <div className="col-span-6 md:col-span-2 space-y-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel className="font-medium">Email :</FormLabel>
                      <FormControl>
                        <Input
                          className="max-w-sm"
                          placeholder="Email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-6 md:col-span-2 space-y-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel className="font-medium">
                        First Name :
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="max-w-sm"
                          placeholder="First Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-6 md:col-span-2 space-y-2">
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel className="font-medium">Last Name :</FormLabel>
                      <FormControl>
                        <Input
                          className="max-w-sm"
                          placeholder="Last Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Label className="col-span-6 mt-4" htmlFor="email">
                Shipping Address
              </Label>
              <div className="col-span-6 md:col-span-2 space-y-2">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel className="font-medium">Address :</FormLabel>
                      <FormControl>
                        <Input
                          className="max-w-sm"
                          placeholder="Address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-6 md:col-span-2 space-y-2">
                <FormField
                  control={form.control}
                  name="address2"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel className="font-medium">
                        Apartment, suite, etc: (optional)
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="max-w-sm"
                          placeholder="Additional Address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-3 md:col-span-2 space-y-2">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel className="font-medium">Phone :</FormLabel>
                      <FormControl>
                        <Input
                          className="max-w-sm"
                          placeholder="Number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-3 md:col-span-2 space-y-2">
                <FormField
                  control={form.control}
                  name="pincode"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel className="font-medium">
                        Postal Code :
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="max-w-sm"
                          placeholder="Postal Code"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-6 md:col-span-4 flex flex-col md:flex-row items-start gap-4 ">
                <div className="w-full md:w-1/3">
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel className="font-medium">
                          Country/Region :
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="max-w-sm"
                            placeholder="Country"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full md:w-1/3">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel className="font-medium">City :</FormLabel>
                        <FormControl>
                          <Input
                            className="max-w-sm"
                            placeholder="City"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>{" "}
                <div className="w-full md:w-1/3">
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel className="font-medium">State :</FormLabel>
                        <FormControl>
                          <Input
                            className="max-w-sm"
                            placeholder="State"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
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

export default AddressConfirmation;
