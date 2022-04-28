import logo from "../../assets/watches-world-logo.png";
import { Link } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../contexts";
import { useEffect } from "react";

export function Navbar() {
  const { cartItems, setCartItems } = useCart();
  const { wishlistItems, setWishlistItems } = useWishlist();
  const {
    authState: { isAuth },
    authDispatch,
  } = useAuth();

  useEffect(()=>{
    if(!isAuth){
      setCartItems([])
      setWishlistItems([])
    }
  },[isAuth])
  
  const logoutHandler = () => {
    localStorage.clear();
    authDispatch({ type: "LOGOUT" });
  };
  return (
    <>
      <nav className="navbar-container sticky z-5">
        <div className="navbar-logo-container">
          <Link to="/">
            <img
              src={logo}
              alt="watches-world-logo"
              className="navbar-logo"
            ></img>
          </Link>
        </div>
        <button className="open-menu font-size-6">
          <i className="fas fa-bars"></i>
        </button>
        <button className="close-menu font-size-6">
          <i className="fa fa-times"></i>
        </button>
        <div className="navbar-items-container">
          <div className="navbar-search-container border-radius-2">
            <input
              type="text"
              className="navbar-search"
              placeholder="What you are looking for?"
            />
            <i className="fas fa-search navbar-search-btn"></i>
          </div>
          <ul className="navbar-links">
            <li>
              {isAuth ? (
                <Link
                  to="/"
                  className="border-radius-2"
                  onClick={logoutHandler}
                >
                  <i className="fas fa-user"></i>Logout
                </Link>
              ) : (
                <Link to="/login" className="border-radius-2">
                  <i className="fas fa-user"></i>Login
                </Link>
              )}
            </li>
            <li>
              <Link to="/wishlist" className="border-radius-2 relative">
                <i className="fas fa-heart"></i>Wishlist
                <span className="badge badge-wh-4 navbar-badge-wishlist font-bold font-size-3">
                  {wishlistItems.length}
                </span>
              </Link>
            </li>
            <li>
              <Link to="/cart" className="border-radius-2 relative">
                <i className="fas fa-shopping-cart"></i>Cart
                <span className="badge badge-wh-4 navbar-badge-cart font-bold font-size-3">
                  {cartItems.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
