import React from "react";
import ReactStars from "react-rating-stars-component";
import "../Home/Home.css";

const options = {
  edit: false,
  color: "rgba (20,20,20,0.1)",
  activeColor: "tomato",
  size: window.innerWidth < 600 ? 8 : 12,
  value: 2.5,
  isHalf: true,
};

const Product = ({ product }) => {
  return (
    <div className="productCard" to={product._id}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <ReactStars {...options} /> <span> (256 Reviews)</span>
      </div>
      <span>{product.price}</span>
    </div>
  );
};

export default Product;
