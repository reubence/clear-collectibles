import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const stats = [
  { label: "Total Bubbles", value: 9921 },
  { label: "Total Clear Collectibles", value: 97 },
  { label: "Rank", value: 7 },
  { label: "Join Date", value: "23.09.08" },
];

function ProfileStat() {
  return (
    <Tabs defaultValue="profile" className="w-full h-full">
      <TabsList>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="stat">Stat</TabsTrigger>
      </TabsList>
      <Separator className="mt-4 mb-7" />
      <TabsContent
        value="profile"
        className="flex flex-col gap-5 font-medium text-foreground/50"
      >
        <div className="flex gap-4">
          <Button size="sm" variant="secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="26"
              viewBox="0 0 30 26"
              fill="none"
            >
              <path
                d="M26.5508 4.0501C27.7508 3.30026 28.8006 1.9499 29.2508 0.449901C28.0508 1.20007 26.7007 1.80125 25.3507 1.9499C24.3006 0.749835 22.6506 0 20.8504 0C17.4005 0 14.7001 2.85003 14.7001 6.45023C14.7001 6.90013 14.7001 7.5 14.85 7.95023C9.74984 7.64997 5.24984 5.1002 2.09954 1.20007C1.64997 2.09987 1.35135 3.30026 1.35135 4.50033C1.35135 6.75016 2.25148 8.7004 3.90145 9.90046C2.85135 9.90046 1.05142 9.6002 1.05142 9.1503V9.30026C1.05142 12.4502 3.30158 15.0003 6.15129 15.6005C5.70138 15.7505 5.10152 15.9005 4.65162 15.9005C4.20171 15.9005 3.90145 15.9005 3.45155 15.7505C4.20138 18.3003 6.45089 20.2505 9.15162 20.2505C7.0501 22.0501 4.35069 23.1005 1.5 23.1005C1.0501 23.1005 0.449901 23.1005 0 22.9506C2.80148 24.8088 6.0885 25.8001 9.45023 25.8006C20.7004 25.8006 27.0007 15.9005 27.0007 7.35003V6.45023C28.2007 5.5501 29.2508 4.35003 30 3.14997C29.0999 3.6002 27.9008 3.90013 26.5508 4.0501Z"
                className="fill-primary"
              />
            </svg>
          </Button>
          <Button size="sm" variant="secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="22"
              viewBox="0 0 28 22"
              fill="none"
            >
              <path
                d="M23.7396 1.80175C23.7319 1.78667 23.719 1.77485 23.7033 1.76842C21.8879 0.935491 19.9721 0.34155 18.0039 0.00145685C17.986 -0.00186749 17.9676 0.000530725 17.9511 0.00831043C17.9347 0.0160901 17.9211 0.0288552 17.9123 0.0447903C17.6515 0.518263 17.4147 1.0046 17.2028 1.50194C15.0812 1.17988 12.9232 1.17988 10.8016 1.50194C10.5883 1.00333 10.3477 0.516879 10.0808 0.0447903C10.0717 0.0292015 10.0581 0.0167304 10.0417 0.00900126C10.0254 0.00127209 10.0071 -0.00135689 9.98922 0.00145685C8.02082 0.340836 6.10493 0.934821 4.28977 1.76846C4.27423 1.77505 4.26112 1.7863 4.25225 1.80065C0.622281 7.22153 -0.372103 12.5091 0.115708 17.7312C0.11708 17.744 0.121013 17.7564 0.127271 17.7677C0.133529 17.7789 0.141985 17.7888 0.152137 17.7967C2.26583 19.3617 4.63003 20.5563 7.14383 21.3295C7.16153 21.3348 7.18044 21.3346 7.198 21.3288C7.21556 21.3231 7.23094 21.3121 7.24207 21.2973C7.78198 20.5627 8.26038 19.7848 8.67241 18.9715C8.67807 18.9604 8.6813 18.9481 8.68189 18.9356C8.68248 18.9231 8.68041 18.9106 8.67583 18.899C8.67124 18.8874 8.66425 18.8768 8.65529 18.8681C8.64634 18.8593 8.63563 18.8526 8.62388 18.8483C7.86948 18.5596 7.13913 18.2117 6.43968 17.8077C6.42698 17.8002 6.41631 17.7897 6.40861 17.7771C6.40092 17.7646 6.39644 17.7503 6.39557 17.7356C6.3947 17.7209 6.39746 17.7062 6.40362 17.6928C6.40978 17.6794 6.41914 17.6677 6.43087 17.6588C6.57805 17.5489 6.72268 17.4356 6.86464 17.3189C6.87709 17.3087 6.89215 17.3021 6.90814 17.3C6.92412 17.2978 6.94039 17.3002 6.95511 17.3068C11.5375 19.398 16.4985 19.398 21.0266 17.3068C21.0413 17.2997 21.0578 17.2971 21.074 17.299C21.0902 17.301 21.1056 17.3075 21.1182 17.3179C21.2603 17.4351 21.4053 17.5488 21.5531 17.6588C21.5649 17.6676 21.5743 17.6792 21.5806 17.6926C21.5868 17.7059 21.5897 17.7206 21.5889 17.7353C21.5882 17.75 21.5838 17.7643 21.5762 17.7769C21.5686 17.7895 21.558 17.8001 21.5454 17.8077C20.8475 18.2151 20.1165 18.5628 19.3601 18.8472C19.3484 18.8517 19.3377 18.8586 19.3288 18.8674C19.3199 18.8763 19.313 18.887 19.3085 18.8987C19.304 18.9104 19.302 18.923 19.3027 18.9355C19.3034 18.9481 19.3067 18.9604 19.3125 18.9715C19.7314 19.7803 20.2091 20.5572 20.7417 21.2961C20.7525 21.3112 20.7678 21.3226 20.7855 21.3286C20.8031 21.3346 20.8222 21.3348 20.84 21.3294C23.3583 20.5588 25.7266 19.3641 27.843 17.7967C27.8533 17.7892 27.8618 17.7796 27.8681 17.7685C27.8744 17.7574 27.8782 17.745 27.8794 17.7323C28.4634 11.695 26.9017 6.45077 23.7396 1.80175ZM9.35674 14.5515C7.97712 14.5515 6.84035 13.2855 6.84035 11.7306C6.84035 10.1757 7.95507 8.90958 9.35674 8.90958C10.7694 8.90958 11.8951 10.1867 11.8731 11.7305C11.8731 13.2855 10.7583 14.5515 9.35674 14.5515ZM18.6606 14.5515C17.281 14.5515 16.1442 13.2855 16.1442 11.7306C16.1442 10.1757 17.259 8.90958 18.6606 8.90958C20.0733 8.90958 21.199 10.1867 21.177 11.7305C21.177 13.2855 20.0733 14.5515 18.6606 14.5515Z"
                className="fill-primary"
              />
            </svg>{" "}
          </Button>
        </div>
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
      <TabsContent
        value="stat"
        className="flex flex-col gap-5 font-bold text-foreground/50"
      >
        {stats.map((stat, index) => (
          <div className="flex w-full justify-between items-center" key={index}>
            <span className="uppercase">{stat.label}</span>
            <span className="text-[28px] text-foreground">{stat.value}</span>
          </div>
        ))}
      </TabsContent>
    </Tabs>
  );
}

export default ProfileStat;
