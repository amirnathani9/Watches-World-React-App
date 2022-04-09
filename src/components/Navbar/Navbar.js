import logo from "../../assets/watches-world-logo.png";
import { Link } from "react-router-dom";

export function Navbar() {
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
              <Link to="/login" className="border-radius-2">
                <i className="fas fa-user"></i>Login
              </Link>
            </li>
            <li>
              <Link to="/wishlist" className="border-radius-2">
                <i className="fas fa-heart"></i>Wishlist
              </Link>
            </li>
            <li>
              <Link to="/cart" className="border-radius-2">
                <i className="fas fa-shopping-cart"></i>Cart
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
