import { v4 as uuid } from "uuid";



/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Rolex",
    image:"https://watchesworld.netlify.app/assets/rolex.png",
    
  },
  {
    _id: uuid(),
    categoryName: "Hublot",
    image:"https://watchesworld.netlify.app/assets/hublot.png",
  },
  {
    _id: uuid(),
    categoryName: "Rado",
    image:"https://watchesworld.netlify.app/assets/rado.png",
  },
  {
    _id: uuid(),
    categoryName: "Taghuer",
    image:"https://watchesworld.netlify.app/assets/taghuer.png",
  },
  {
    _id: uuid(),
    categoryName: "Tissot",
    image:"https://watchesworld.netlify.app/assets/tissot.png",
  },
  {
    _id: uuid(),
    categoryName: "Cartier",
    image:"https://watchesworld.netlify.app/assets/cartier.png",
  },
];
