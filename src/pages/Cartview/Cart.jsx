import React, { useContext } from "react";
import Layout from "../../componenents/layout/Layout";
import "./Cart.css";
import { AppContext } from "../../AppContext";
import { MdStoreMallDirectory } from "react-icons/md";
import { Link } from "react-router-dom";
function calculateTotalPrice(cartItems) {
  var totalPrice = 0;

  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];
    totalPrice += item.price;
  }

  return totalPrice;
}
const Cart = () => {
  const { cart } = useContext(AppContext);
  const totalPrice = calculateTotalPrice(cart);
  console.log(cart);
  return (
    <Layout pageNumber={1}>
      <div className="cart-view-container">
        {cart.map((item) => {
          return (
            <div className="cart-card" key={item.id}>
              <img src={item.image} alt="product" />

              <div className="title-box">
                {item.title}
                <div className="title-text">
                  <MdStoreMallDirectory />
                  Seller: James cottage
                  <br />
                  <p>2 Available</p>
                </div>
              </div>
              <div className="price">GH₵{item.price}</div>
              <div className="incresement-box">
                <div className="addup-box">
                  <button className="remove-btn">-</button>

                  <button className="num-btn">{item.count}</button>

                  <button className="add-btn">+</button>
                </div>
              </div>
              <div className="select-box">
                <Link to="/Products" className="remove-box">
                  <button className="remove-now-button">Remove</button>
                </Link>
                <Link to="/Payment" className="remove-box">
                  <button className="cart-button">Buy Now</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <button className="check-price-button">GH₵{totalPrice.toFixed(2)}</button>
      <Link to="/Checkout">
        <button className="check-btn">Checkout</button>
      </Link>
    </Layout>
  );
};

export default Cart;
