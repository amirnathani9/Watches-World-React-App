import {Navbar} from "./components"
import { Cart, Homepage, Login, Product, Wishlist } from "./pages";
import Mockman from "mockman-js";
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
    
  );
}

export default App;
