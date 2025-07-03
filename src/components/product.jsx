import React from 'react';
import './product.css';

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-img" />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
    </div>
  );
};

export default Product;
