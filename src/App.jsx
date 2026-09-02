import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import Auth from "./components/Pages/Auth";
import Checkout from "./components/Pages/Checkout";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthContext";
import CartProvider from "./context/CartContext";
import WishlistProvider from "./context/WishlistContext";
import ProductDetails from "./components/Pages/ProductDetails";
import Profile from "./components/Pages/Profile";
import Favorite from "./components/Pages/Favorite";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <div>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/favorite" element={<Favorite />} />
              <Route path="/products/:id" element={<ProductDetails />} />
            </Routes>
          </div>
          <Navbar />
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
