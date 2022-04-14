export const getFIlteredRatingProducts = (products, rating) => {
  return products.filter((product) => product.ratings >= rating);
};
