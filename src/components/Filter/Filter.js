import { useReducer } from "react";

export function Filter() {
  const initialFilterValue = {
    sortByPrice: "",
    categories: {
      rolex: false,
      hublot: false,
      rado: false,
      tagheuer: false,
      tissot: false,
      cartier: false,
    },
  };
  const productFilterReducer = (state, action) => {
    switch (action.type) {
      case "PRICE_LOW_TO_HIGH":
        return { ...state, sortByPrice: action.type };
      case "PRICE_HIGH_TO_LOW":
        return { ...state, sortByPrice: action.type };
      case "ROLEX":
        return {
          ...state,
          categories: { ...state.categories, rolex: !state.categories.rolex },
        };
      case "HUBLOT":
        return {
          ...state,
          categories: { ...state.categories, hublot: !state.categories.hublot },
        };
      case "RADO":
        return {
          ...state,
          categories: { ...state.categories, rado: !state.categories.rado },
        };
      case "TAGHEUER":
        return {
          ...state,
          categories: { ...state.categories, tagheuer: !state.categories.tagheuer },
        };
      case "TISSOT":
        return {
          ...state,
          categories: { ...state.categories, tissot: !state.categories.tissot },
        };
      case "CARTIER":
        return {
          ...state,
          categories: { ...state.categories, cartier: !state.categories.cartier },
        };
     
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(
    productFilterReducer,
    initialFilterValue
  );

  const getSortedPriceProducts = (products, sortByPrice) => {
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
  
  const getFilteredCategoryProducts = (products, categories) => {
    if (Object.values(categories).every((current) => !current)){
      return products
    }
    return products.filter(product => categories[product.categoryName])
  };

  return (
    <>
      <section className="filter-sidebar-container flex flex-col sticky p-5">
        <div className="flex justify-between items-center my-3">
          <p className="font-size-6 font-bold">Filters</p>
          <p className="pointer">Clear</p>
        </div>
        <div className="my-3">
          <h3 className="font-bold">Sort by</h3>
          <div className="my-3">
            <li className="list-item-container">
              <label>
                <input
                  type="radio"
                  name="sort"
                  checked={state.sortByPrice === "PRICE_LOW_TO_HIGH"}
                  onChange={() => dispatch({ type: "PRICE_LOW_TO_HIGH" })}
                />
                Price - Low to High
              </label>
            </li>
            <li className="list-item-container">
              <label>
                <input
                  type="radio"
                  name="sort"
                  checked={state.sortByPrice === "PRICE_HIGH_TO_LOW"}
                  onChange={() => dispatch({ type: "PRICE_HIGH_TO_LOW" })}
                />
                Price - High to Low
              </label>
            </li>
          </div>
        </div>

        <div className="my-3">
          <h3 className="font-bold">Brands</h3>
          <div className="my-3">
            <li className="list-item-container">
              <label>
                <input
                  type="checkbox"
                  checked={state.categories.rolex}
                  onChange={() => dispatch({ type: "ROLEX" })}
                />
                Rolex
              </label>
            </li>
            <li className="list-item-container">
              <label>
                <input
                  type="checkbox"
                  checked={state.categories.hublot}
                  onChange={() => dispatch({ type: "HUBLOT" })}
                />
                Hublot
              </label>
            </li>
            <li className="list-item-container">
              <label>
                <input
                  type="checkbox"
                  checked={state.categories.rado}
                  onChange={() => dispatch({ type: "RADO" })}
                />
                Rado
              </label>
            </li>
            <li className="list-item-container">
              <label>
                <input
                  type="checkbox"
                  checked={state.categories.tagheuer}
                  onChange={() => dispatch({ type: "TAGHEUER" })}
                />
                Tagheuer
              </label>
            </li>
            <li className="list-item-container">
              <label>
                <input
                  type="checkbox"
                  checked={state.categories.tissot}
                  onChange={() => dispatch({ type: "TISSOT" })}
                />
                Tissot
              </label>
            </li>
            <li className="list-item-container">
              <label>
                <input
                  type="checkbox"
                  checked={state.categories.cartier}
                  onChange={() => dispatch({ type: "CARTIER" })}
                />
                Cartier
              </label>
            </li>
          </div>
        </div>

        <div className="my-3">
          <h3 className="font-bold">Price</h3>
          <label>
            <input className="filter-slider my-3" type="range" />
          </label>
        </div>

        <div className="my-3">
          <h3 className="font-bold">Rating</h3>
          <div className="my-3">
            <li className="list-item-container">
              <input type="checkbox" />
              <label>4 stars & above</label>
            </li>
            <li className="list-item-container">
              <input type="checkbox" />
              <label>3 stars & above</label>
            </li>
            <li className="list-item-container">
              <input type="checkbox" />
              <label>2 stars & above</label>
            </li>
            <li className="list-item-container">
              <input type="checkbox" />
              <label>1 stars & above</label>
            </li>
          </div>
        </div>
      </section>
    </>
  );
}
