import { Link } from "react-router-dom";

export function Hero() {
  return (
      <section className="main-image-container section-center flex items-center justify-center flex-col border-radius-2 my-8">
        <h1 className="mb-2">Watches World</h1>
        <p className="font-size-6 mb-4">Best Watches Are Here</p>
        <Link to="/products">
          <button className="btn primary-outline-shop-btn font-size-5 border-radius-2 px-8 py-4">
            Shop Now
          </button>
        </Link>
      </section>
  );
}
