import "./App.css";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import Auth from "./components/Pages/Auth";
import Checkout from "./components/Pages/Checkout";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthContext";
import ProductDetails from "./components/Pages/ProductDetails";

function App() {
  return (
  
    <AuthProvider>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
    </AuthProvider>

    
  );
}

export default App;
