import React from "react";
import { Component } from "react";

import { Button } from "./button";
import { withTour } from "@reactour/tour";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";

class TourButton extends Component {
  render() {
    const isLastStep = this.props.currentStep === this.props.steps.length - 1;
    const previousStep = this.props.currentStep - 1;
    return (
      <div
        className={cn(
          "absolute flex gap-3 bottom-10 left-1/2 -translate-x-1/2 z-[999999]",
          { hidden: this.props.isOpen === false }
        )}
      >
        <Button
          variant="gameSecondary"
          className={cn("!py-4", { hidden: this.props.currentStep === 0 })}
          onClick={() => this.props.setCurrentStep((s) => s - 1)}
        >
          <div className={"2xl:hidden"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
            >
              <path
                d="M1.33138 6.88979L1.3314 6.88977L6.88696 1.33421L6.88693 1.33419L6.88991 1.33131C7.0845 1.14337 7.34512 1.03938 7.61564 1.04173C7.88616 1.04408 8.14493 1.15259 8.33623 1.34388C8.52752 1.53518 8.63603 1.79395 8.63838 2.06447C8.64073 2.33499 8.53674 2.59561 8.3488 2.7902L8.34882 2.79023L8.3459 2.79315L4.55156 6.58749H17.9339C18.2075 6.58749 18.47 6.69619 18.6634 6.88968C18.8569 7.08317 18.9656 7.3456 18.9656 7.61924C18.9656 7.89288 18.8569 8.1553 18.6634 8.34879C18.47 8.54228 18.2075 8.65099 17.9339 8.65099H4.55156L8.34455 12.444C8.44234 12.5388 8.52038 12.6521 8.57416 12.7773C8.62823 12.9032 8.6567 13.0386 8.65789 13.1756C8.65908 13.3126 8.63297 13.4484 8.5811 13.5752C8.52922 13.702 8.45261 13.8172 8.35573 13.9141C8.25886 14.011 8.14366 14.0876 8.01687 14.1395C7.89007 14.1913 7.75421 14.2174 7.61722 14.2163C7.48022 14.2151 7.34483 14.1866 7.21896 14.1325C7.09377 14.0788 6.98047 14.0007 6.88561 13.9029L1.3314 8.34871L1.33138 8.34868C1.13795 8.1552 1.02929 7.89282 1.02929 7.61924C1.02929 7.34566 1.13795 7.08328 1.33138 6.88979Z"
                fill="white"
                stroke="white"
                stroke-width="0.47619"
              />
            </svg>{" "}
          </div>
          <div className={"hidden 2xl:block"}>
            <Icons.arrowLeft className="" />
          </div>
        </Button>
        <Button
          variant="gameSecondary"
          className={cn("text-lg 2xl:text-[40px]")}
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
              Next
              <div className="hidden 2xl:block">
                <Icons.arrowRight className="" />
              </div>
            </>
          )}
        </Button>
      </div>
    );
  }
}

export default withTour(TourButton);
