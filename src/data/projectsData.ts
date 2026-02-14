import food  from "../assets/food.png";
import dash from "../assets/vos.png";
import currency from "../assets/currency.png" 
import estore from "../assets/estore.png"
export interface Project {
  image: string;
  link: string;
  name: string;      // Project Name
  client: string;    // Client Name
  location: string;  // Place
  tools: string[];
}

export const projects: Project[] = [
  {
      
    image: dash,
    link: "https://vos-dev.vederra.com/",
    name: "Vederra OS Construction company",
    client: "Josh Bruhin",
    location: "USA",
    tools: ["React", "TypeScript","MUI" ,"Zustand","Node.js"]
  },
 
  {
     image: food,
    link: "https://tasty-cart-food.vercel.app/",
     name: "Testy Cart ",
    client: "Mr Jorg",
    location: "UK",
    tools: ["React","TypeScript" ,"MUI", "Node.js"]
  },
  
   
  {
     image: estore,
    link: "https://e-store-bice.vercel.app/",
     name: "Farhan Store",
    client: "Farhan Hussain",
    location: "UAE",
    tools: ["React", "TypeScript","MUI", "Zustand","Node.js"]
  },
   
   {
     image: currency,
    link: "https://currency-nine-umber.vercel.app/dashboard",
     name: "Currency Exchanger",
    client: "Noman Ali",
    location: "Pakistan",
    tools: ["React","TypeScript" ,"MUI", "Chart.js"]
  },
  
];
