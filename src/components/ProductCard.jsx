import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  const [isShaking, setIsShaking] = useState(false);

  const handleClick = () => {
    setIsShaking(true);
    addToCart(product);

    setTimeout(() => {
      setIsShaking(false);
    }, 300);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={import.meta.env.BASE_URL + product.image}
        className="card-img-top"
        alt={product.name}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p><strong>₹{product.price}</strong></p>
        <button
          className={`btn btn-primary ${isShaking ? "shake" : ""}`}
          onClick={handleClick}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
