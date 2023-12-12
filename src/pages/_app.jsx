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
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ContentComponent from "@/components/ui/tour-content";

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
    position: (positionProps, prevRect) => [
      positionProps.windowWidth / 2 + 340,
      positionProps.windowHeight / 2 - 340,
    ],
    padding: { mask: [0, -70, -170, -70] },
  },
  // MOBILE STEPS
  {
    selector: ".step1m",
    content: "Before entering the game you need to select your nft",
    position: (positionProps, prevRect) => [
      positionProps.windowWidth / 4 - 10,
      positionProps.windowHeight / 2 - 100,
    ],
  },
  {
    selector: ".step2m",
    content: "Each game costs a little Bubbles",
    position: "top",
  },
  {
    selector: ".step3m",
    content: "Losing the game means losing the nft",
    position: (positionProps, prevRect) => [
      positionProps.windowWidth / 2 + 110,
      positionProps.windowHeight / 2 - 80,
    ],
    padding: { mask: [0, -50, -100, -50] },
  },
];

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [mounted, setMounted] = useState(false);
  const isWindowxl = typeof window !== "undefined" && window.innerWidth > 1536;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <SessionProvider session={session}>
        {/* STEP BY STEP TUTORIAL WRAPPER - this component needs to wrap around the root of the app */}
        <TourProvider
          steps={isWindowxl ? steps.slice(0, 3) : steps.slice(3, 6)}
          position={"right"}
          styles={{
            maskArea: (base) => ({
              ...base,
              rx: "16px",
            }),
            popover: (base) => ({
              ...base,
              backgroundColor: "transparent",
              boxShadow: "none",
              maxWidth: isWindowxl ? "544px" : "344px",
              margin: isWindowxl ? "0 0 40px 40px" : "0 0 0px 40px",
            }),
          }}
          ContentComponent={ContentComponent}
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
