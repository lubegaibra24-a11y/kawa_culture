import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { name, description, price, image, category } = product;

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />
        <span className="product-category">{category}</span>
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <div className="product-footer">
          <span className="product-price">UGX {price.toLocaleString()}</span>
          <button className="order-button">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
