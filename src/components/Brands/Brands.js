import { categories } from "../../backend/db/categories";

export function Brands() {
  return (
    <>
      <section className="top-brands-container section-center flex flex-col justify-ceneter items-center my-8">
        <h1 className="section-heading font-bold border-radius-1 my-8 p-2">
          Top Brands
        </h1>
        <main className="flex flex-wrap justify-center">
          {categories.map((item) => (
            <a className="brand-items m-8">
              <img
                src={item.image}
                alt={item.categoryName}
                className="responsive-img"
              />
            </a>
          ))}
        </main>
      </section>
    </>
  );
}
