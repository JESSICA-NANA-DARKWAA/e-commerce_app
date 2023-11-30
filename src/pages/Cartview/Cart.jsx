import React from "react";
import Layout from "../../componenents/layout/Layout";
import "./Cart.css";
import useFetch from "../../hooks/UseFetch";
import { useParams } from "react-router-dom";

const Cart = () => {
  const param = useParams().id;
  const defaultDescription =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellendus aut, placeat quidem nobis dicta ipsam temporibus iure aliquam quae nesciunt eligendi, corporis corrupti cum iusto odit hic eius quia!";
  const [
    {
      description = defaultDescription,
      title = "Leather Jacket with polished cotton",
      image = "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price = 5.0,
      rating = 3.5,
    } = {},
    loading,
    error,
  ] = useFetch({
    url: "https://fakestoreapi.com/products/" + param,
  });
  return (
    <Layout pageNumber={1}>
      <div className="cart-view-container">
        <div className="image-box">
          <img src={image} alt="" />
          <div className="description-box">
            <h1 className="title">{title}</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
