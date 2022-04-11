import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Rolex",
    model: "Submariner",
    image:
      "https://raw.githubusercontent.com/amirnathani9/Watches-World-React-App/dev/public/productImages/rolex-submariner.webp",
    originalPrice: 20000,
    discountedPrice: 18000,
    discount: "10%",
    categoryName: "Rolex",
    ratings: 4,
  },
  {
    _id: uuid(),
    title: "TagHeuer",
    model: "Formula 1",
    image:
      "https://raw.githubusercontent.com/amirnathani9/Watches-World-React-App/dev/public/productImages/tagheuer-formula1.webp",
    originalPrice: 55000,
    discountedPrice: 49500,
    discount: "10%",
    categoryName: "Tagheuer",
    ratings: 3,
  },

  {
    _id: uuid(),
    title: "Rolex",
    model: "DateJust",
    image:
      "https://raw.githubusercontent.com/amirnathani9/Watches-World-React-App/dev/public/productImages/rolex-datejust.webp",
    originalPrice: 10000,
    discountedPrice: 9000,
    discount: "10%",
    categoryName: "Rolex",
    ratings: 5,
  },

  {
    _id: uuid(),
    title: "Rado",
    model: "Hyper Chrome",
    image:
      "https://raw.githubusercontent.com/amirnathani9/Watches-World-React-App/dev/public/productImages/rado-hyperchrome.webp",
    originalPrice: 30000,
    discountedPrice: 27000,
    discount: "10%",
    categoryName: "Rado",
    ratings: 5,
  },
  {
    _id: uuid(),
    title: "Rado",
    model: "Original",
    image:
      "https://raw.githubusercontent.com/amirnathani9/Watches-World-React-App/dev/public/productImages/rado-original.webp",
    originalPrice: 55000,
    discountedPrice: 49500,
    discount: "10%",
    categoryName: "Rado",
    ratings: 4,
  },
  {
    _id: uuid(),
    title: "Hublot",
    model: "Big Bang King",
    image:
      "https://raw.githubusercontent.com/amirnathani9/Watches-World-React-App/dev/public/productImages/hublot-bigbang-king.webp",
    originalPrice: 35000,
    discountedPrice: 31500,
    discount: "10%",
    categoryName: "Hublot",
    ratings: 3,
  },

  {
    _id: uuid(),
    title: "Hublot",
    model: "Big Bang",
    image:
      "https://raw.githubusercontent.com/amirnathani9/Watches-World-React-App/dev/public/productImages/hublot-bigbang.webp",
    originalPrice: 90000,
    discountedPrice: 81000,
    discount: "10%",
    categoryName: "Hublot",
    ratings: 2,
  },
  {
    _id: uuid(),
    title: "TagHeuer",
    model: "Grand Carrera",
    image:
      "https://raw.githubusercontent.com/amirnathani9/Watches-World-React-App/dev/public/productImages/tagheuer-grandcarrera.webp",
    originalPrice: 95000,
    discountedPrice: 85500,
    discount: "10%",
    categoryName: "Tagheuer",
    ratings: 5,
  },
  {
    _id: uuid(),
    title: "Cartier",
    model: "Cartier-Ballon",
    image:
      "https://raw.githubusercontent.com/amirnathani9/Watches-World-React-App/dev/public/productImages/cartier-ballon-bleu-de-cartier.webp",
    originalPrice: 52000,
    discountedPrice: 46800,
    discount: "10%",
    categoryName: "Cartier",
    ratings: 4,
  },
  {
    _id: uuid(),
    title: "Rado",
    model: "Centric",
    image:
      "https://raw.githubusercontent.com/amirnathani9/Watches-World-React-App/dev/public/productImages/rado-centrix.webp",
    originalPrice: 15000,
    discountedPrice: 13500,
    discount: "10%",
    categoryName: "Rado",
    ratings: 1,
  },
  {
    _id: uuid(),
    title: "Cartier",
    model: "Cartier-Drive",
    image:
      "https://raw.githubusercontent.com/amirnathani9/Watches-World-React-App/dev/public/productImages/cartier-drive-de-cartier.webp",
    originalPrice: 60000,
    discountedPrice: 54000,
    discount: "10%",
    categoryName: "Cartier",
    ratings: 3,
  },
  {
    _id: uuid(),
    title: "Tissot",
    model: "Super Sport",
    image:
      "https://raw.githubusercontent.com/amirnathani9/Watches-World-React-App/dev/public/productImages/tissot-supersport-chrono.webp",
    originalPrice: 38000,
    discountedPrice: 34200,
    discount: "10%",
    categoryName: "Tissot",
    ratings: 5,
  },
  {
    _id: uuid(),
    title: "Rolex",
    model: "GMT Master-II",
    image:
      "https://raw.githubusercontent.com/amirnathani9/Watches-World-React-App/dev/public/productImages/rolex-gmtmaster-II.webp",
    originalPrice: 40000,
    discountedPrice: 36000,
    discount: "10%",
    categoryName: "Rolex",
    ratings: 5,
  },

  {
    _id: uuid(),
    title: "TagHeuer",
    model: "Aqua Racer",
    image:
      "https://raw.githubusercontent.com/amirnathani9/Watches-World-React-App/dev/public/productImages/tagheuer-aquaracer.webp",
    originalPrice: 40000,
    discountedPrice: 36000,
    discount: "10%",
    categoryName: "Tagheuer",
    ratings: 4,
  },

  {
    _id: uuid(),
    title: "Tissot",
    model: "Seastar",
    image:
      "https://raw.githubusercontent.com/amirnathani9/Watches-World-React-App/dev/public/productImages/tissot-seastar.webp",
    originalPrice: 55000,
    discountedPrice: 49500,
    discount: "10%",
    categoryName: "Tissot",
    ratings: 3,
  },
  {
    _id: uuid(),
    title: "Cartier",
    model: "Cartier-Ronde-Croisiere",
    image:
      "https://raw.githubusercontent.com/amirnathani9/Watches-World-React-App/dev/public/productImages/cartier-ronde-croisiere.webp",
    originalPrice: 25000,
    discountedPrice: 22500,
    discount: "10%",
    categoryName: "Cartier",
    ratings: 1,
  },
];
