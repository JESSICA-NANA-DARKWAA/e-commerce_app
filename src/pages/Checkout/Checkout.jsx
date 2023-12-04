import React from "react";
import Layout from "../../componenents/navbars/Navbar2";
import "./Checkout.css";

const Checkout = () => {
  return (
    <Layout>
      <div className="circle-container">
        <button className="number-circle1">1</button>
        <button className="line-int"></button>
        <button className="number-circle2">2</button>
        <button className="line-int"></button>
        <button className="number-circle3">3</button>
      </div>
      <h2>Shipping Address</h2>
      <div className="identity-container">
        <p> Robert Elinam</p>
        <button className="cart-button">Change</button>
      </div>
    </Layout>
  );
};

export default Checkout;
