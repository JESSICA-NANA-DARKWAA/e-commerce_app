import React from "react";
import "./ProductCard.css";
import { MdStarRate } from "react-icons/md";
function ProductCard({ title, description, rating, image, price }) {
  const handleAddToCart = () => {
    console.log(`Added ${title} to cart`);
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      {title}
      <p>{price}</p>
      <MdStarRate color="#1B81CA" />
      <MdStarRate color="#1B81CA" />
      <MdStarRate color="#1B81CA" />
      <MdStarRate color="#1B81CA" />
      <MdStarRate color="gray" />
      <div className="rating">
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
