import React from "react";
import ProductCard from "../../../components/ProductCard";
import "./trendProduct.css";
import product1 from "../../../images/product-1.jpg";
import product4 from "../../../images/product-4.jpg";
import product6 from "../../../images/product-6.jpg";
import product7 from "../../../images/product-7.jpg";

const TrendProduct = () => {
  return (
    <div className="trendProduct">
      <div className="banner">
        <h2>Trend Nike shoes</h2>
        <button>
          Explore All <i className="fa fa-arrow-right"></i>
        </button>
      </div>
      <div className="TrendProducts">
        <h1 className="topic">Trend Nike shoes</h1>
        <div className="cards">
          <ProductCard
            image={product1}
            category="women"
            gender="men"
            shoseName="Running Sneaker Shoes"
            price="$180.85"
          />
          <ProductCard
            image={product4}
            category="sport"
            gender="men"
            shoseName="Air Jordan 7 Retro"
            price="$170.85"
          />
          <ProductCard
            image={product6}
            category="women"
            gender="men"
            shoseName="Adidas Sneakers Shoes"
            price="$100.85"
          />
        </div>
      </div>
    </div>
  );
};

export default TrendProduct;
