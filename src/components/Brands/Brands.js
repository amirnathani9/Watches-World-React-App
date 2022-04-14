export function Brands({ _id, categoryName, image, navigateToProducts }) {
  return (
    <>
      <div
        className="brand-items m-8"
        onClick={() => navigateToProducts(categoryName)}
      >
        <img src={image} alt={categoryName} className="responsive-img" />
      </div>
    </>
  );
}
