import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "../pages/ProductListing/ProductListing";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import CartView from "../pages/Cartview/Cart/";
import Checkout from "../pages/Checkout/Checkout";
import Payment from "../pages/Payment/Payment";
import Delivery from "../pages/Delivery/Delivery";
import Homepage from "../pages/Homepage/Homepage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/delivery" element={<Delivery />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
