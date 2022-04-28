import axios from "axios";

export const removeFromWishlistHandler = async (
  productId,
  setWishlistItems,
  encodedToken,
  showToast
) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${productId}`, {
      headers: { authorization: encodedToken },
    });
    setWishlistItems(response.data.wishlist);
    showToast("Item Removed from Wishlist!", "success");
  } catch (error) {
    showToast(error.response.data, "error");
  }
};
