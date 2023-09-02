import ProfileStat from "@/components/dashboard-pages/profile-stat";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 lg:p-24">
      <ProfileStat />
    </main>
  );
}
