import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
export function cleanPathname (pathname) {
  if (pathname === "/") return "home";
  return pathname.replace("/", "");
};

export function getLevel(xp){
  if (Number(xp) >= 300 && Number(xp) < 600) {
    return 1;
  }else if(Number(xp) >= 600 && Number(xp) < 1100){
    return 2
  }else if(Number(xp) >= 1100 && Number(xp) < 1800){
    return 3
  }else if(Number(xp) >= 1800 && Number(xp) < 2900){
    return 4
  }else if(Number(xp) >= 2900 && Number(xp) < 4200){
    return 5
  }else if(Number(xp) >= 4200 && Number(xp) < 5900){
    return 6
  }else if(Number(xp) >= 5900 && Number(xp) < 8000){
    return 7
  }else if(Number(xp) >= 8000 && Number(xp) < 11000){
    return 8
  }else if(Number(xp) >= 11000 && Number(xp) < 15000){
    return 9
  }else if(Number(xp) == 15000){
    return 10
  }
  return 0
}