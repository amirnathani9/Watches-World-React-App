export const getFilteredPriceProducts = (products, price) => {
  return products.filter((product) => product.discountedPrice <= price);
};
