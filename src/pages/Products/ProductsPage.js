import React from "react";
import ProductCard from "../../components/ProductCard";
import "./productsPage.css";
import Navbar from "../Home/header/Navbar";
import Footer from "../Home/footer/Footer";
import product1 from "../../images/p1-1.jpg";
import product2 from "../../images/p2-1.jpg";
import product3 from "../../images/p3-1.jpg";
import product4 from "../../images/p4-1.jpg";
import product5 from "../../images/p5-1.jpg";
import product6 from "../../images/p6-1.jpg";
import product7 from "../../images/p7-1.jpg";
import product8 from "../../images/p8-2.jpg";

const ProductsPage = () => {

    const brandFilter = (e) => {
        document.querySelectorAll(".filter .brand button").forEach(element => {
            element.classList.remove("active");
        });
        e.target.className = "active"
    }

    const modelFilter = (e) => {
        document.querySelectorAll(".filter .gender button").forEach(element => {
            element.classList.remove("active");
        });
        e.target.className = "active"
    }

  return (
    <>
      <Navbar />
      <div className="products">
        <h1>Filter</h1>
        <div className="filter">
          <div className="brand">
            <h2>Brand: </h2>
            <button onClick={brandFilter}>Nike</button>
            <button onClick={brandFilter}>Adidas</button>
            <button onClick={brandFilter}>Puma</button>
            <button onClick={brandFilter}>Bata</button>
            <button onClick={brandFilter}>Apex</button>
          </div>
          <div className="gender">
            <h2>Model: </h2>
            <button onClick={modelFilter}>Men</button>
            <button onClick={modelFilter}>Women</button>
            <button onClick={modelFilter}>Sport</button>
          </div>
          <div className="price">
            <h2>Price less than: </h2>
            <input type="number" placeholder="Price" className="priceInput" />
          </div>
          <div className="search">
            <h2>Search:  </h2>
            <input type="text" placeholder="Shoes name" className="shoesInput" />
          </div>
        </div>
        <div className="ProductsContainer">
          <ProductCard
            image={product1}
            gender="Men"
            category="women"
            shoseName="Running Sneaker Shoes"
            price="$180.85"
          />
          <ProductCard
            image={product2}
            gender="Men"
            category="sport"
            shoseName="Leather Mens Slipper"
            price="$190.85"
          />
          <ProductCard
            image={product3}
            gender="Men"
            category="women"
            shoseName="Simple Fabric Shoe"
            price="$160.85"
          />
          <ProductCard
            image={product4}
            gender="Men"
            category="sport"
            shoseName="Air Jordan 7 Retro"
            price="$170.85"
          />
          <ProductCard
            image={product5}
            gender="Men"
            category="sport"
            shoseName="Nike Air Max 270 SE"
            price="$120.85"
          />
          <ProductCard
            image={product6}
            gender="Men"
            category="women"
            shoseName="Adidas Sneakers Shoes"
            price="$100.85"
          />
          <ProductCard
            image={product7}
            gender="Men"
            category="women"
            shoseName="Nike Basketball shoes"
            price="$120.85"
          />
          <ProductCard
            image={product8}
            gender="Men"
            category="sport"
            shoseName="Simple Fabric Shoe"
            price="$100.85"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;
