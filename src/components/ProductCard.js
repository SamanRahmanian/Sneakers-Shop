import React from "react";
import "./productCard.css";

const ProductCard = ({ image, gender, category, shoseName, price }) => {
  return (
    <div className="productCard">
      <div>
        <img src={image} alt="image" />
        <p className="categoryName">
          {gender} / {category}
        </p>
        <h2 className="ShoseName">{shoseName}</h2>
        <h3 className="price">{price}</h3>
      </div>
      <div className="cardBtn">
        <button className="addToCart">
          <i className="fa fa-cart-plus"></i>
        </button>
        <button className="view">
          <i className="fa fa-eye"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
