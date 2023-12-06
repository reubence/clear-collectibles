import "../styles/globals.css";
import React, { useState, useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import { TourProvider } from "@reactour/tour";
import { components } from "@reactour/tour";
import "react-toastify/dist/ReactToastify.css";
import { cn } from "@/lib/utils";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../styles/styles.css";

// Font files can be colocated inside of `app`
const styles = {
  highlightedArea: (base, { x, y }) => ({
    ...base,
    borderRadius: "16px",
  }),
};

const steps = [
  {
    selector: ".step1",
    content: "Before entering the game you need to select your nft",
    position: "right",
  },
  {
    selector: ".step2",
    content: "Each game costs a little Bubbles",
    position: "top",
  },
  {
    selector: ".step3",
    content: "Losing the game means losing the nft",
    position: "right",
    padding: -120,
  },

  // ...
];

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <SessionProvider session={session}>
        <TourProvider
          steps={steps}
          styles={{
            maskArea: (base) => ({ ...base, rx: "16px" }),
            popover: (base) => ({
              ...base,
              "--reactour-accent": "#FCD111",
              backgroundColor: "transparent",
              color: "#000000",
              fontFamily: "g8",
              fontSize: "28px",
              maxWidth: "585px",
              boxShadow: "none",
              marginLeft: "50px",
            }),
          }}
          ContentComponent={ContentComponent}
          components={{ Badge, Close }}
        >
          <div className={cn(`min-h-screen  lg:w-full relative`)}>
            <Component {...pageProps} />
          </div>
        </TourProvider>
        <ToastContainer />
      </SessionProvider>
    );
  }
}

function ContentComponent(props) {
  const isLastStep = props.currentStep === props.steps.length - 1;
  const content = props.steps[props.currentStep].content;
  return (
    <div style={{ border: "5px solid red", padding: 10, background: "white" }}>
      {/* Check if the step.content is a function or a string */}
      {typeof content === "function"
        ? content({ ...props, someOtherStuff: "Custom Text" })
        : content}
      <button
        onClick={() => {
          if (isLastStep) {
            props.setIsOpen(false);
          } else {
            props.setCurrentStep((s) => s + 1);
          }
        }}
      >
        {isLastStep ? "x" : ">"}
      </button>
    </div>
  );
}
function Badge({ children }) {
  return (
    <components.Badge
      styles={{ badge: (base) => ({ ...base, backgroundColor: "red" }) }}
    >
      👉 {children} 👈
    </components.Badge>
  );
}

function Close({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ position: "absolute", right: 0, top: 0 }}
    >
      x
    </button>
  );
}
