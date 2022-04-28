import axios from "axios";

export const removeFromWishlistHandler = async (
  productId,
  setWishlistItems,
  encodedToken
) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${productId}`, {
      headers: { authorization: encodedToken },
    });
    setWishlistItems(response.data.wishlist);
  } catch (error) {
    console.log(error);
  }
};
