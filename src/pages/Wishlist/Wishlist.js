import "./Wishlist.css";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useWishlist } from "../../contexts";
import { WishlistCard } from "../../components";

export const Wishlist = () => {
  const { wishlistItems } = useWishlist();

  
  useDocumentTitle("Wishlist - Watches World");
  return (
    <section className="section-center flex flex-col justify-ceneter items-center my-4">
      <h1 className="section-heading font-bold border-radius-1 p-2 my-8">
        My Wishlist
      </h1>
      {wishlistItems.map(
        ({
          _id,
          title,
          model,
          image,
          originalPrice,
          discountedPrice,
          discount,
          qty,
        }) => (
          <WishlistCard
            key={_id}
            _id={_id}
            title={title}
            model={model}
            image={image}
            originalPrice={originalPrice}
            discountedPrice={discountedPrice}
            discount={discount}
          />
        )
      )}
    </section>
  );
};
