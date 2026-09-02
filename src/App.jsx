import "./App.css";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import Auth from "./components/Pages/Auth";
import Checkout from "./components/Pages/Checkout";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthContext";
import CartProvider from "./context/CartContext";
import ProductDetails from "./components/Pages/ProductDetails";
import Profile from "./components/Pages/Profile";

function App() {
  return (
  
    <AuthProvider>
      <CartProvider>
    <div>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
    <Navbar />
    </CartProvider>
    </AuthProvider>

    
  );
}

export default App;
