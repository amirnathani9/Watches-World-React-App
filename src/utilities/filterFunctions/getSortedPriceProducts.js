export const getSortedPriceProducts = (products, sortByPrice) => {
  if (sortByPrice === "PRICE_LOW_TO_HIGH") {
    return products.sort(
      (firstItem, secondItem) =>
        firstItem.discountedPrice - secondItem.discountedPrice
    );
  }
  if (sortByPrice === "PRICE_HIGH_TO_LOW") {
    return products.sort(
      (firstItem, secondItem) =>
        secondItem.discountedPrice - firstItem.discountedPrice
    );
  }
  return products;
};
