import logo from "../../assets/watches-world-logo.png"

export function Navbar() {
    return (
        <>
            <nav className="navbar-container sticky z-5">
                <div className="navbar-logo-container">
                   <img src={logo} alt="watches-world-logo"
                        className="navbar-logo" ></img>
                </div>
                <button className="open-menu font-size-6"><i className="fas fa-bars"></i></button>
                <button className="close-menu font-size-6"><i className="fa fa-times"></i></button>
                <div className="navbar-items-container">
                    <div className="navbar-search-container border-radius-2">
                        <input type="text" className="navbar-search" placeholder="What you are looking for?" />
                        <i className="fas fa-search navbar-search-btn"></i>
                    </div>
                    <ul className="navbar-links">
                        <li><a href="./pages/login.html" className="border-radius-2"><i className="fas fa-user"></i>Login</a></li>
                        <li><a href="./pages/wishlist.html" className="border-radius-2"><i className="fas fa-heart"></i>Wishlist</a></li>
                        <li><a href="./pages/cart.html" className="border-radius-2"><i className="fas fa-shopping-cart"></i>Cart</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}