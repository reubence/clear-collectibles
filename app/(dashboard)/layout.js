import { cn } from "@/lib/utils";
import NavigationMenu from "@/components/navigation-menu";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-screen">
      <body className={cn("bg-background")}>
        <NavigationMenu />
        {children}
      </body>
    </html>
  );
}
