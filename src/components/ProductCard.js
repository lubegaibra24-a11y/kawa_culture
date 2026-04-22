import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { name, description, price, image, category } = product;

  const whatsappNumber = '256747266821';
  const message = `Hello Kawa Culture! I would like to order: ${name} (UGX ${price.toLocaleString()}). Please let me know how to proceed.`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

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
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="order-button">
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
