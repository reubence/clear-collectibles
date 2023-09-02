import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function ProfileStat() {
  return (
    <Tabs defaultValue="profile" className="w-full h-full">
      <TabsList>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="stat">Stat</TabsTrigger>
      </TabsList>

      <TabsContent
        value="profile"
        className="flex flex-col gap-5 font-medium text-foreground/50"
      >
        <div className="flex gap-4"></div>
        <span className="">
          At MonkeDAO, our mission is to create a more inclusive, transparent,
          and decentralized world by harnessing the power of blockchain
          technology and community-driven governance. We believe in the
          potential of decentralized decision-making to drive meaningful change
          and unlock new{" "}
        </span>
        <div className="flex flex-col gap-1">
          <span className="flex gap-2 items-start text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="mt-[1px]"
            >
              <path
                d="M7.99908 1C4.96733 1 2.5 3.46733 2.5 6.49908C2.5 9.426 7.42928 14.6241 7.63892 14.8444C7.73299 14.9439 7.86469 15.0003 8.00176 15.0003C8.00445 15.0003 8.00983 15.0003 8.01251 15.0003C8.15228 15.0003 8.28666 14.9358 8.37804 14.8283L10.0847 12.8743C12.3532 10.0979 13.5008 7.95313 13.5008 6.50176C13.5008 3.46733 11.0335 1 7.99908 1ZM7.99908 8.99866C6.61759 8.99866 5.4995 7.88056 5.4995 6.49908C5.4995 5.11759 6.61759 3.9995 7.99908 3.9995C9.38056 3.9995 10.4987 5.11759 10.4987 6.49908C10.4987 7.88056 9.38056 8.99866 7.99908 8.99866Z"
                fill="#B6B6B6"
              />
            </svg>
            <span className="flex flex-col">
              <span>Location</span>
              <span className="uppercase font-bold text-base text-foreground">
                Canada
              </span>
            </span>
          </span>
        </div>
      </TabsContent>
      <TabsContent value="stat">Change your password here.</TabsContent>
    </Tabs>
  );
}

export default ProfileStat;
