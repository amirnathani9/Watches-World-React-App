export function Brands({ _id, categoryName, image }) {
  return (
    <>
      <div className="brand-items m-8">
        <img src={image} alt={categoryName} className="responsive-img" />
      </div>
    </>
  );
}
