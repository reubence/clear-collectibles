import "./../public/globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import NavigationMenu from "@/components/navigation-menu";

const inter = Inter({ subsets: ["latin"] });

// G8321GX FONT
const g8 = localFont({
  src: "./../public/fonts/G8321GX.ttf",
  display: "swap",
  weight: "100 900",
  variable: "--font-g8",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cn(
        g8.variable,
        "h-screen lg:h-full lg:w-full lg:overflow-y-hidden relative"
      )}
    >
      {children}
    </html>
  );
}
