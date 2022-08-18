import React from "react";
import "./productCard.css";
import { Link } from "react-router-dom";

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
        <button to="cart" className="addToCart">
          <i className="fa fa-cart-plus"></i>
        </button>
        <button>
          <Link to="productPage" className="view">
            <i className="fa fa-eye"></i>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
