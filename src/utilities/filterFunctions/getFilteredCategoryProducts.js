export const getFilteredCategoryProducts = (products, categories) => {
    if (Object.values(categories).every((current) => !current)) {
      return products;
    }
    return products.filter((product) => categories[product.categoryName]);
  };