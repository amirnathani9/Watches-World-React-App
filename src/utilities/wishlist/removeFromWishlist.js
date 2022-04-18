import axios from "axios";
import { encodedToken } from "../token";

export const removeFromWishlistHandler = async (
  productId,
  setWishlistItems
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
