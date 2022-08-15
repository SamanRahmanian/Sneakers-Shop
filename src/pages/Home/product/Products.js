import React from 'react';
import ProductCard from '../../../components/ProductCard';
import "./products.css";
import product1 from "../../../images/product-1.jpg"
import product2 from "../../../images/product-2.jpg"
import product3 from "../../../images/product-3.jpg"
import product4 from "../../../images/product-4.jpg"
import product5 from "../../../images/product-5.jpg"
import product6 from "../../../images/product-6.jpg"
import product7 from "../../../images/product-7.jpg"
import product8 from "../../../images/product-8.jpg"

const Products = () => {

    const filter = (e) => {
        document.querySelectorAll(".categoriesBtn button").forEach(element => {
            element.classList.remove("active");
        });
        e.target.className = "active"
    }

    return (
        <div className='products'>
            <h1 className='topic'>The most popular product</h1>
            <div className='categoriesBtn'>
                <button onClick={filter} className='active'>All</button>
                <button onClick={filter}>Nike</button>
                <button onClick={filter}>Adidas</button>
                <button onClick={filter}>Puma</button>
                <button onClick={filter}>Bata</button>
                <button onClick={filter}>Apex</button>
            </div>
            <div className='ProductsContainer'>
                <ProductCard image={product1} gender="Men" category="women" shoseName="Running Sneaker Shoes" price="$180.85"/>
                <ProductCard image={product2} gender="Men" category="sport" shoseName="Leather Mens Slipper" price="$190.85"/>
                <ProductCard image={product3} gender="Men" category="women" shoseName="Simple Fabric Shoe" price="$160.85"/>
                <ProductCard image={product4} gender="Men" category="sport" shoseName="Air Jordan 7 Retro" price="$170.85"/>
                <ProductCard image={product5} gender="Men" category="sport" shoseName="Nike Air Max 270 SE" price="$120.85"/>
                <ProductCard image={product6} gender="Men" category="women" shoseName="Adidas Sneakers Shoes" price="$100.85"/>
                <ProductCard image={product7} gender="Men" category="women" shoseName="Nike Basketball shoes" price="$120.85"/>
                <ProductCard image={product8} gender="Men" category="sport" shoseName="Simple Fabric Shoe" price="$100.85"/>
            </div>
        </div>
    );
};

export default Products;