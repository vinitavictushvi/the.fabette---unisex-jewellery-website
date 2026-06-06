import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Journal from "../Pages/Journal";
import Collection from "../Pages/Collection";
import Product from "../Pages/Product";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import ThankYou from "../Pages/ThankYou";
import Contact from "../Pages/Contact";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/journal" element={<Journal />} />
       <Route path="/contact" element={<Contact />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/thankyou" element={<ThankYou />} />
    </Routes>
  );
}

export default AppRouter;
