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
  if (Number(xp) >= 300 && Number(xp) < 800) {
    return 1;
  }else if(Number(xp) >= 800 && Number(xp) < 1600){
    return 2
  }else if(Number(xp) >= 1600 && Number(xp) < 2700){
    return 3
  }else if(Number(xp) >= 2700 && Number(xp) < 4200){
    return 4
  }else if(Number(xp) >= 4200 && Number(xp) < 6300){
    return 5
  }else if(Number(xp) >= 6300 && Number(xp) < 9200){
    return 6
  }else if(Number(xp) >= 9200 && Number(xp) < 13000){
    return 7
  }else if(Number(xp) >= 13000 && Number(xp) < 17000){
    return 8
  }else if(Number(xp) >= 17000 && Number(xp) < 23000){
    return 9
  }else if(Number(xp) >= 23000){
    return 10
  }
  return 0
}

export function getMax(level){

 if (level == 0) {
    return 300
  }else if(level == 1){
    return 800
  }else if(level == 2){
    return 1600
  }else if(level == 3){
    return 2700
  }else if(level == 4){
    return 4200
  }else if(level == 5){
    return 6300
  }else if(level == 6){
    return 9200
  }else if(level == 7){
    return 13000
  }else if(level == 8){
    return 17000
  }else if(level == 9 || level == 10){
    return 23000
  }

  return 0


}