import { Navbar } from "./components";
import { Cart, Homepage, Login, Product, Wishlist, SignUp } from "./pages";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./utilities/ProtectedRoute/ProtectedRoute";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Navbar />
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
