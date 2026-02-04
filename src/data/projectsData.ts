import food  from "../assets/food.png";
import login from "../assets/login.png";
import dash from "../assets/vos.png";
import currency from "../assets/currency.png" 

export interface Project {
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
     
    image: dash,
    link: "https://vos-dev.vederra.com/",
  },
  {
     
    image: login,
    link: "https://owner-dashbord-sami-tech-studio.vercel.app/",
  },
  {
     image: food,
    link: "https://tasty-cart-food.vercel.app/",
  },
   {
     image: currency,
    link: "https://currency-nine-umber.vercel.app/dashboard",
  }
  
];
