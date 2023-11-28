import React from "react";
import "./ProductCard.css";
import { MdStarRate } from "react-icons/md";
import { Link } from "react-router-dom";
function ProductCard({ title, rating, image, price, id }) {
  const handleAddToCart = () => {
    console.log(`Added ${title} to cart`);
  };

  return (
    <div className="product-card">
      <Link to={"/product/" + id}>
        <img src={image} alt={title} className="product-image" />
      </Link>

      <Link to={"/product/" + id} className="title-text">
        {title?.length > 20 ? title.substring(0, 20) + "..." : title}
      </Link>

      <p className="price">Ghc₵{price}</p>
      <MdStarRate color="#1B81CA" />
      <MdStarRate color="#1B81CA" />
      <MdStarRate color="#1B81CA" />
      <MdStarRate color="#1B81CA" />
      <MdStarRate color="gray" />
      <div className="rating">
        2 Available
        {Array.from({ length: rating }, (_, index) => (
          <span key={index} className="rating-icon"></span>
        ))}
      </div>
      <button onClick={handleAddToCart} className="cart-button">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
