import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import NFT_3 from "@/public/images/nft-3.png";
import { cn } from "@/lib/utils";

function ListItem() {
  return (
    <div className="flex flex-col w-full border-t-2 border-t-primary border-b">
      <div className="flex md:flex-col xl:flex-row lg:flex-wrap bg-primary/10 p-5 justify-between items-start gap-3">
        {/* ORDER PLACED */}
        <div className="flex flex-col gap-1.5">
          <h2 className="font-normal text-muted-foreground/50">Order placed</h2>
          <p className="font-semibold">2023-09-08 18:00</p>
        </div>
        {/* Total */}
        <div className="flex flex-col gap-1.5">
          <h2 className="font-normal text-muted-foreground/50">Total</h2>
          <p className="font-semibold">5930</p>
        </div>
        {/* Quantity purchased */}
        <div className="flex flex-col gap-1.5">
          <h2 className="font-normal text-muted-foreground/50">
            Quantity purchased
          </h2>
          <p className="font-semibold">1</p>
        </div>
        {/* Delivery method */}
        <div className="flex flex-col gap-1.5">
          <h2 className="font-normal text-muted-foreground/50">
            Delivery method
          </h2>
          <p className="font-semibold">Manual</p>
        </div>
        {/* Support Ticket */}
        <div className="flex flex-col items-end gap-1.5 2xl:w-56">
          <h2 className="font-semibold text-primary">TX9Z18Y45G5</h2>
          <Button size="sm"> Get Support</Button>
        </div>
      </div>

      <div class="flex lg:flex-col items-start xl:flex-row gap-5 justify-between p-5">
        <div class="flex lg:flex-col xl:flex-row gap-5">
          <Image
            src={NFT_3}
            alt="Clock Icon"
            height={80}
            width={80}
            className="rounded-2xl h-[136px] w-[80px] lg:h-[80px] aspect-square object-cover"
            unoptimized
          />
          <div class="flex flex-col gap-2">
            <div class="flex flex-wrap xl:flex-row items-start xl:items-center justify-between gap-y-2">
              <div class="flex flex-col gap-2">
                <p className="text-base font-semibold">Merch Pack</p>
                <p className="text-base font-normal text-muted-foreground/50">
                  September Merch Pack
                </p>
              </div>
              {/* CODE WITH COPY ICON */}
              <div className="flex flex-col gap-2">
                <p className="flex items-center font-normal gap-3">
                  Code:{" "}
                  <span className="font-semibold">
                    0382chjidwliajd012jn39123
                  </span>
                  <Button variant="ghost" size="ghost">
                    <svg
                      className="mb-1.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M9.1665 16.2501H13.9165C13.67 16.866 13.2444 17.3938 12.6947 17.7652C12.145 18.1366 11.4965 18.3345 10.8331 18.3334H4.99982C4.56205 18.3335 4.12854 18.2474 3.72407 18.0799C3.3196 17.9124 2.95209 17.6669 2.64254 17.3574C2.33298 17.0478 2.08746 16.6803 1.91999 16.2758C1.75252 15.8713 1.66638 15.4378 1.6665 15.0001V8.33339C1.66749 7.52166 1.96412 6.73809 2.50092 6.12921C3.03773 5.52032 3.77794 5.12782 4.58314 5.02511V11.6667C4.58314 14.1917 6.64147 16.2501 9.1665 16.2501ZM16.2498 5.20839H18.0165C17.9653 5.13328 17.9066 5.0635 17.8415 5.00007L14.9998 2.15827C14.9385 2.09339 14.8683 2.03739 14.7915 1.99187V3.75007C14.7933 4.13627 14.9476 4.50613 15.2207 4.77922C15.4938 5.05232 15.8636 5.20655 16.2498 5.20839ZM16.2498 6.45839C15.532 6.457 14.8439 6.17122 14.3363 5.66361C13.8287 5.156 13.5429 4.46793 13.5415 3.75007V1.66675H9.1665C8.72873 1.66663 8.29522 1.75276 7.89075 1.92023C7.48627 2.0877 7.11876 2.33323 6.8092 2.64278C6.49965 2.95233 6.25412 3.31984 6.08664 3.72431C5.91917 4.12879 5.83303 4.56229 5.83314 5.00007V11.6667C5.83303 12.1045 5.91917 12.538 6.08665 12.9425C6.25413 13.347 6.49966 13.7145 6.80921 14.024C7.11877 14.3336 7.48628 14.5791 7.89075 14.7466C8.29522 14.914 8.72873 15.0002 9.1665 15.0001H14.9998C15.4376 15.0002 15.8711 14.914 16.2756 14.7466C16.68 14.5791 17.0476 14.3336 17.3571 14.024C17.6667 13.7145 17.9122 13.347 18.0797 12.9425C18.2471 12.538 18.3333 12.1045 18.3331 11.6667V6.45839H16.2498Z"
                        fill="#6CD2FF"
                      />
                    </svg>
                  </Button>
                </p>
                <p className="flex items-center font-normal gap-3">
                  Code:{" "}
                  <span className="font-semibold">
                    0382chjidwliajd012jn39123
                  </span>
                  <Button variant="ghost" size="ghost">
                    <svg
                      className="mb-1.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M9.1665 16.2501H13.9165C13.67 16.866 13.2444 17.3938 12.6947 17.7652C12.145 18.1366 11.4965 18.3345 10.8331 18.3334H4.99982C4.56205 18.3335 4.12854 18.2474 3.72407 18.0799C3.3196 17.9124 2.95209 17.6669 2.64254 17.3574C2.33298 17.0478 2.08746 16.6803 1.91999 16.2758C1.75252 15.8713 1.66638 15.4378 1.6665 15.0001V8.33339C1.66749 7.52166 1.96412 6.73809 2.50092 6.12921C3.03773 5.52032 3.77794 5.12782 4.58314 5.02511V11.6667C4.58314 14.1917 6.64147 16.2501 9.1665 16.2501ZM16.2498 5.20839H18.0165C17.9653 5.13328 17.9066 5.0635 17.8415 5.00007L14.9998 2.15827C14.9385 2.09339 14.8683 2.03739 14.7915 1.99187V3.75007C14.7933 4.13627 14.9476 4.50613 15.2207 4.77922C15.4938 5.05232 15.8636 5.20655 16.2498 5.20839ZM16.2498 6.45839C15.532 6.457 14.8439 6.17122 14.3363 5.66361C13.8287 5.156 13.5429 4.46793 13.5415 3.75007V1.66675H9.1665C8.72873 1.66663 8.29522 1.75276 7.89075 1.92023C7.48627 2.0877 7.11876 2.33323 6.8092 2.64278C6.49965 2.95233 6.25412 3.31984 6.08664 3.72431C5.91917 4.12879 5.83303 4.56229 5.83314 5.00007V11.6667C5.83303 12.1045 5.91917 12.538 6.08665 12.9425C6.25413 13.347 6.49966 13.7145 6.80921 14.024C7.11877 14.3336 7.48628 14.5791 7.89075 14.7466C8.29522 14.914 8.72873 15.0002 9.1665 15.0001H14.9998C15.4376 15.0002 15.8711 14.914 16.2756 14.7466C16.68 14.5791 17.0476 14.3336 17.3571 14.024C17.6667 13.7145 17.9122 13.347 18.0797 12.9425C18.2471 12.538 18.3333 12.1045 18.3331 11.6667V6.45839H16.2498Z"
                        fill="#6CD2FF"
                      />
                    </svg>
                  </Button>
                </p>
              </div>
            </div>
            <p className="text-base font-normal text-muted-foreground/50">
              A code will be sent your order history,which can you redeem in a
              google form for next steps.
            </p>
          </div>
        </div>
        {/* ORDER STATUS */}
        <div className="flex flex-col gap-4 xl:w-56 2xl:w-72 lg:items-start xl:items-end justify-center">
          <p className="whitespace-nowrap">Some Status</p>
          <Button variant="outline" size="sm">
            Reddem code
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
