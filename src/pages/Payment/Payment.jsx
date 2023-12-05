import React from "react";
import Layout from "../../componenents/navbars/Navbar2";
import "./Payment.css";

const Payment = () => {
  return (
    <Layout>
      <div className="payment-cirlce-container">
        <div className="circle-container">
          <button className="number-circle1">1</button>
          <button className="line-int"></button>
          <button className="number-circle2">2</button>
          <button className="line-int"></button>
          <button className="number-circle3">3</button>
        </div>
      </div>
      <h2>Payment Method</h2>
      <div className="payment-option-box">
        <div className="payment-box">
          <div className="option-btn-container">
            <button className="option-btn">
              {" "}
              <h3>Bank</h3>
              <p> Fidelity Bank</p>
            </button>
            <button className="option-btn">
              <h3>Card Holder</h3>
              <p>Robert Elinam</p>
            </button>
            <button className="option-btn">
              {" "}
              <h3> Branch</h3>
              <p>Central Capital</p>
            </button>
            <button className="option-btn">
              <h3>Card Number</h3>
              <p>1 2 3 4 5 6 7 8 9 1 2 3 4</p>
            </button>
            <button className="option-btn">
              <h3>cvc</h3>
              <p>123</p>
            </button>
            <button className="option-btn">
              <h3> Expiry Date </h3>
              <p>07/23</p>
            </button>
          </div>
        </div>
        <div className="summary-box">
          Summary
          <div className="summary-box-container">
            <p>items</p>
            <p>1</p>
            <p> PaymentMethod</p>
            <p>Visa</p>
            <p>Amount</p>
            <p>GH₵</p>
          </div>
        </div>
      </div>
      <button className="pay-button">Pay</button>
    </Layout>
  );
};

export default Payment;
