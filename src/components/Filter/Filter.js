export function Filter() {
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
              <input type="checkbox" />
              <label>Price - Low to High</label>
            </li>
            <li className="list-item-container">
              <input type="checkbox" />
              <label>Price - High to Low</label>
            </li>
          </div>
        </div>

        <div className="my-3">
          <h3 className="font-bold">Brands</h3>
          <div className="my-3">
            <li className="list-item-container">
              <input type="checkbox" />
              <label>Rolex</label>
            </li>
            <li className="list-item-container">
              <input type="checkbox" />
              <label>Rado</label>
            </li>
            <li className="list-item-container">
              <input type="checkbox" />
              <label>Tissot</label>
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
