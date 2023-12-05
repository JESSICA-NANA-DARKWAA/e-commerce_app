import React, { useContext } from "react";
import Layout from "../../componenents/navbars/Navbar2";
import "./Checkout.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../AppContext";
import { MdStoreMallDirectory } from "react-icons/md";

function calculateTotalPrice(cartItems) {
  var totalPrice = 0;

  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];
    totalPrice += item.price * item.count;
  }
  return totalPrice;
}

const Checkout = () => {
  const { cart, dispatch } = useContext(AppContext);

  const totalPrice = calculateTotalPrice(cart);

  const incre = (id) => {
    dispatch({
      type: "INCRE",
      payload: id,
    });
  };
  const decre = (id) => {
    dispatch({
      type: "DECRE",
      payload: id,
    });
  };

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
        <button className="cart-button">Change</button>
        <div className="secondary-text">
          <p>
            Western Region Sekondi Takoradi Metro Takoradi 17/8 old john saba
            road.
          </p>
        </div>
      </div>
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
                {/*<Link to="/Cart" className="">*/}

                {/* </Link>*/}
                {/* <Link to="/Cart" className=""> */}
                <button onClick={() => decre(item.id)} className="remove-btn">
                  -
                </button>
                <button className="num-btn">{item.count}</button>
                <button onClick={() => incre(item.id)} className="add-btn">
                  +
                </button>

                {/* </Link> */}
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
      <Link to="/Payment">
        <button className="check-btn">Confirm Order</button>
      </Link>
    </Layout>
  );
};

export default Checkout;
