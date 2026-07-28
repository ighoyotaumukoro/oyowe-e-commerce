import "./App.css";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import Auth from "./components/Pages/Auth";
import Checkout from "./components/Pages/Checkout";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
  
    <AuthProvider>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </div>
    </AuthProvider>

    
  );
}

export default App;
