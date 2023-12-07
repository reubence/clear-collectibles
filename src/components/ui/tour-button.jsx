import React from "react";
import { Component } from "react";

import { Button } from "./button";
import { withTour } from "@reactour/tour";
import { cn } from "@/lib/utils";

class TourButton extends Component {
  render() {
    const isLastStep = this.props.currentStep === this.props.steps.length - 1;
    const previousStep = this.props.currentStep - 1;
    return (
      <div
        className={cn(
          "absolute flex gap-3 bottom-10 left-1/2 -translate-x-1/2 z-[9999999]",
          { hidden: this.props.isOpen === false }
        )}
      >
        <Button
          className={cn(
            "!bg-[#11A7FC] !w-fit transform !border-b-8 !border-blue-500 !py-8",
            "transform active:translate-y-1 active:border-none transition duration-150 ease-in-out z-10",
            { hidden: this.props.currentStep === 0 }
          )}
          onClick={() => this.props.setCurrentStep((s) => s - 1)}
        >
          <svg
            width="40"
            height="30"
            viewBox="0 0 40 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.80009 13.4682L1.80014 13.4681L13.4668 1.80143L13.4668 1.80138L13.473 1.79534C13.8816 1.40067 14.4289 1.18228 14.997 1.18722C15.5651 1.19215 16.1086 1.42002 16.5103 1.82174C16.912 2.22345 17.1399 2.76688 17.1448 3.33497C17.1497 3.90307 16.9314 4.45037 16.5367 4.85901L16.5367 4.85906L16.5306 4.86521L8.56247 12.8333H36.6654C37.24 12.8333 37.7911 13.0616 38.1974 13.4679C38.6038 13.8743 38.832 14.4254 38.832 15C38.832 15.5746 38.6038 16.1257 38.1974 16.5321C37.7911 16.9384 37.24 17.1667 36.6654 17.1667H8.56247L16.5278 25.132C16.7331 25.3312 16.897 25.5691 17.0099 25.832C17.1235 26.0963 17.1833 26.3806 17.1858 26.6683C17.1883 26.956 17.1334 27.2413 17.0245 27.5076C16.9156 27.7739 16.7547 28.0158 16.5512 28.2192C16.3478 28.4226 16.1059 28.5835 15.8396 28.6925C15.5733 28.8014 15.288 28.8562 15.0003 28.8537C14.7127 28.8512 14.4283 28.7914 14.164 28.6779C13.9011 28.565 13.6632 28.4011 13.4639 28.1957L1.80014 16.5319L1.80009 16.5318C1.3939 16.1255 1.16572 15.5745 1.16572 15C1.16572 14.4255 1.3939 13.8745 1.80009 13.4682Z"
              fill="white"
              stroke="white"
            />
          </svg>
        </Button>
        <Button
          className={cn(
            "text-[40px] font-semibold",
            "!bg-[#11A7FC] !w-fit transform !border-b-8 !border-blue-500 ",
            "transform active:translate-y-1 active:border-none transition duration-150 ease-in-out z-10"
          )}
          onClick={() => {
            if (isLastStep) {
              this.props.setIsOpen(false);
            } else {
              this.props.setCurrentStep((s) => s + 1);
            }
          }}
        >
          {isLastStep ? (
            <>I got it</>
          ) : (
            <>
              Next{" "}
              <svg
                width="40"
                height="30"
                viewBox="0 0 40 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.1999 13.468L38.1999 13.468L26.5332 1.80131L26.5332 1.80126L26.527 1.79522C26.1184 1.40055 25.5711 1.18216 25.003 1.18709C24.4349 1.19203 23.8914 1.4199 23.4897 1.82161C23.088 2.22333 22.8601 2.76676 22.8552 3.33485C22.8503 3.90294 23.0686 4.45025 23.4633 4.85889L23.4633 4.85894L23.4694 4.86509L31.4375 12.8332H3.33464C2.76 12.8332 2.2089 13.0615 1.80257 13.4678C1.39624 13.8741 1.16797 14.4252 1.16797 14.9999C1.16797 15.5745 1.39624 16.1256 1.80257 16.5319C2.2089 16.9383 2.76 17.1665 3.33464 17.1665H31.4375L23.4722 25.1318C23.2669 25.331 23.103 25.5689 22.9901 25.8318C22.8765 26.0962 22.8167 26.3805 22.8142 26.6682C22.8117 26.9559 22.8666 27.2412 22.9755 27.5075C23.0844 27.7737 23.2453 28.0156 23.4488 28.2191C23.6522 28.4225 23.8941 28.5834 24.1604 28.6923C24.4267 28.8013 24.712 28.8561 24.9997 28.8536C25.2873 28.8511 25.5717 28.7913 25.836 28.6778C26.0989 28.5648 26.3368 28.4009 26.5361 28.1956L38.1999 16.5318L38.1999 16.5317C38.6061 16.1254 38.8343 15.5744 38.8343 14.9999C38.8343 14.4253 38.6061 13.8743 38.1999 13.468Z"
                  fill="white"
                  stroke="white"
                />
              </svg>
            </>
          )}
        </Button>
      </div>
    );
  }
}

export default withTour(TourButton);
