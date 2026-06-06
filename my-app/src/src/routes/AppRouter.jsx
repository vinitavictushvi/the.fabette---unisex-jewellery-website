import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Collection from "../Pages/Collection";
import Product from "../Pages/Product"; 
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function AppRouter() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />
    </>
  );
}
