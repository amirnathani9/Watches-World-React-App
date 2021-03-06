import { useProductsFilter } from "../../contexts";

export function Filter() {
  const { state, dispatch } = useProductsFilter();
  const { sortByPrice, categories, price, rating } = state;
  const { Rolex, Hublot, Rado, Tagheuer, Tissot, Cartier } = categories;

  return (
    <>
      <section className="filter-sidebar-container flex flex-col sticky p-5">
        <div className="flex justify-between items-center my-3">
          <p className="font-size-6 font-bold">Filters</p>
          <p className="pointer" onClick={() => dispatch({ type: "CLEAR" })}>
            Clear
          </p>
        </div>
        <div className="my-3">
          <h3 className="font-bold">Sort by</h3>
          <div className="my-3">
            <li className="list-item-container">
              <label>
                <input
                  type="radio"
                  name="sort"
                  checked={sortByPrice === "PRICE_LOW_TO_HIGH"}
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
                  checked={sortByPrice === "PRICE_HIGH_TO_LOW"}
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
                  checked={Rolex}
                  onChange={() => dispatch({ type: "ROLEX" })}
                />
                Rolex
              </label>
            </li>
            <li className="list-item-container">
              <label>
                <input
                  type="checkbox"
                  checked={Hublot}
                  onChange={() => dispatch({ type: "HUBLOT" })}
                />
                Hublot
              </label>
            </li>
            <li className="list-item-container">
              <label>
                <input
                  type="checkbox"
                  checked={Rado}
                  onChange={() => dispatch({ type: "RADO" })}
                />
                Rado
              </label>
            </li>
            <li className="list-item-container">
              <label>
                <input
                  type="checkbox"
                  checked={Tagheuer}
                  onChange={() => dispatch({ type: "TAGHEUER" })}
                />
                Tagheuer
              </label>
            </li>
            <li className="list-item-container">
              <label>
                <input
                  type="checkbox"
                  checked={Tissot}
                  onChange={() => dispatch({ type: "TISSOT" })}
                />
                Tissot
              </label>
            </li>
            <li className="list-item-container">
              <label>
                <input
                  type="checkbox"
                  checked={Cartier}
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
            <input
              className="filter-slider my-3"
              type="range"
              min="10000"
              max="100000"
              step="10000"
              value={price}
              onChange={(e) =>
                dispatch({ type: "PRICE", value: e.target.value })
              }
            />
          </label>
          <div>Upto: Rs.{price}</div>
        </div>

        <div className="my-3">
          <h3 className="font-bold">Rating</h3>
          <div className="my-3">
            <li className="list-item-container">
              <label>
                <input
                  type="radio"
                  name="ratings"
                  checked={rating === 4}
                  onChange={() => dispatch({ type: "RATING", value: 4 })}
                />
                4 stars & above
              </label>
            </li>
            <li className="list-item-container">
              <label>
                <input
                  type="radio"
                  name="ratings"
                  checked={rating === 3}
                  onChange={() => dispatch({ type: "RATING", value: 3 })}
                />
                3 stars & above
              </label>
            </li>
            <li className="list-item-container">
              <label>
                <input
                  type="radio"
                  name="ratings"
                  checked={rating === 2}
                  onChange={() => dispatch({ type: "RATING", value: 2 })}
                />
                2 stars & above
              </label>
            </li>
            <li className="list-item-container">
              <label>
                <input
                  type="radio"
                  name="ratings"
                  checked={rating === 1}
                  onChange={() => dispatch({ type: "RATING", value: 1 })}
                />
                1 stars & above
              </label>
            </li>
          </div>
        </div>
      </section>
    </>
  );
}
