import React from "react";
import Layout from "../../componenents/layout/Layout";
import Picture from "../../assets/images/pic1.png";
import Picture2 from "../../assets/images/pic2.png";
import Picture3 from "../../assets/images/pic3.png";
import Picture4 from "../../assets/images/pic4.png";
import Picture5 from "../../assets/images/pic5.png";
import "./Homepage.css";
import GalleryItem from "../../componenents/gallery-item/GalleryItem";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <Layout pageNumber={1}>
      <div className="top-container">
        <h1 className="page-title">Lorem Emporium</h1>
        <div className="content" />{" "}
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Nunc vulputate libero et velit.
        </p>
      </div>
      <div className="banner">
        <img src={Picture} alt="" className="main-image" />
      </div>

      <div className="grid-container">
        <GalleryItem image={Picture2}>Ready to ship</GalleryItem>
        <GalleryItem image={Picture3}>Build your own jacket</GalleryItem>
        <GalleryItem image={Picture4}>Stylish Designs</GalleryItem>
        <GalleryItem image={Picture5}>Photo Gallery</GalleryItem>
      </div>
    </Layout>
  );
};

export default Homepage;
