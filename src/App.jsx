import "./App.css";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import HomePage from "./components/Pages/HomePage";
import Auth from "./components/Pages/Auth";
import Checkout from "./components/Pages/Checkout";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
