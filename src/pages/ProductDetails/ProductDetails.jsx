import React from "react";
import Layout from "../../componenents/layout/Layout";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/UseFetch";
import Loading from "../../componenents/loading/Loading";
import "./ProductDetails.css";
import { MdStarRate } from "react-icons/md";
import { MdStoreMallDirectory } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductDetails = () => {
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
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <div className="product-details-container">
          <div className="image-option-box">
            <div className="img-box">
              <img src={image} alt="" />
              <div className="description-box">
                <h1 className="title">Product Details</h1>
                <p>{description}</p>
              </div>
            </div>
            <div className="option-box">
              <p>{title} </p>
              <div className="top-features">
                <div>
                  <MdStarRate color="#1B81CA" />
                  <MdStarRate color="#1B81CA" />
                  <MdStarRate color="#1B81CA" />
                  <MdStarRate color="#1B81CA" />
                  <MdStarRate color="gray" />
                </div>
                <p>2 Available</p>
                <p>
                  <MdStoreMallDirectory />
                  Seller: James cottage
                </p>
              </div>
              <div className="price"> GHC₵{price}</div>
              <div className="color-box">
                <button className="color-btn1" type="button">
                  Black
                </button>
                <button className="color-btn2" type="button">
                  Brown
                </button>
                <button className="color-btn3" type="button">
                  Gray
                </button>
                <br />
                <div></div>
              </div>
              <div className="size-text"> size</div>
              <button className="size-btn">M</button>
              <button className="size-btn">L</button>
              <button className="size-btn">X</button>
              <button className="size-btn">XL</button>
              <button className="size-btn">XXL</button>
              <div>
                <button className="number-btn">-</button>1
                <button className="number-btn">+</button>
              </div>
              <Link to="/Payment" className="Buy-now">
                <button className="buy-now-button">Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ProductDetails;
