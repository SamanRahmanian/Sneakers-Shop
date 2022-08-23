import React from "react";
import Navbar from "../Home/header/Navbar";
import "./productPage.css";
import product1 from "../../images/p1-1.jpg";
import product2 from "../../images/p1-2.jpg";
import product3 from "../../images/p1-3.jpg";
import product4 from "../../images/p1-4.jpg";
import product5 from "../../images/p1-5.jpg";

const ProductPage = () => {

  const changePic = (e) => {
    document.querySelectorAll(".smallPicture").forEach(element => {
      element.classList.remove("activePic")
    });
    e.target.classList.add("activePic")
    document.querySelector(".mainPicture").src = e.target.src
    document.querySelector(".mainPicture").classList.remove("animate__zoomIn")
    document.querySelector(".mainPicture").classList.add("animate__flipInX")
    setTimeout(() => {
    document.querySelector(".mainPicture").classList.remove("animate__flipInX")
    }, 1100);
  }

  const selectSize = (e) => {
    document.querySelectorAll(".selectSize").forEach(element => {
      element.classList.remove("selectSize")
    })
    e.target.classList.add("selectSize")
  }

  const selectColor = (e) => {
    document.querySelectorAll(".colorContainer button i").forEach(element => {
      element.classList.remove("fa-check")
    });
    e.target.firstChild.classList.add("fa-check")
  }

  return (
    <div>
      <Navbar />
      <div className="productContainer">
        <div className="prictures">
          <img src={product1} alt="" className="mainPicture animate__animated animate__zoomIn" />
        </div>
        <div className="content">
        <div className="smallPictures animate__animated animate__fadeInUp">
            <button onClick={changePic}><img src={product1} alt="" className="smallPicture activePic" /></button>
            <button onClick={changePic}><img src={product2} alt="" className="smallPicture" /></button>
            <button onClick={changePic}><img src={product3} alt="" className="smallPicture" /></button>
            <button onClick={changePic}><img src={product4} alt="" className="smallPicture" /></button>
            <button onClick={changePic}><img src={product5} alt="" className="smallPicture" /></button>
          </div>

          <h1 className="title animate__animated animate__fadeInUp animate__delay-1s">Running Sneaker Shoes</h1>
          <span>
            <i className="animate__animated animate__fadeInUp animate__delay-1s fa fa-star"></i>
            <i className="animate__animated animate__fadeInUp animate__delay-1s fa fa-star"></i>
            <i className="animate__animated animate__fadeInUp animate__delay-1s fa fa-star"></i>
            <i className="animate__animated animate__fadeInUp animate__delay-1s fa fa-star"></i>
            <i className="animate__animated animate__fadeInUp animate__delay-1s fa fa-star-half-empty"></i>
          </span>
          <p className="information animate__animated animate__fadeInUp animate__delay-1s">
            Nike brand shoes suitable for running and exercising with excellent
            quality guaranteed
          </p>
          <h4 className="cost animate__animated animate__fadeInUp animate__delay-1s">180.85$</h4>

          <div className="sizeContainer animate__animated animate__fadeInUp animate__delay-2s">
            <h3>SIZE : </h3>
            <button onClick={selectSize} className="activeSize">39</button>
            <button onClick={selectSize}>40</button>
            <button onClick={selectSize}>41</button>
            <button onClick={selectSize}>42</button>
          </div>
          <div className="colorContainer animate__animated animate__fadeInUp animate__delay-2s">
            <h3>COLOR : </h3>
            <button onClick={selectColor} className="color-1"><i className="fa fa-check"></i></button>
            <button onClick={selectColor} className="color-2"><i className="fa"></i></button>
            <button onClick={selectColor} className="color-3"><i className="fa"></i></button>
            <button onClick={selectColor} className="color-4"><i className="fa"></i></button>
          </div>

          <button className="addToCart animate__animated animate__fadeInUp animate__delay-3s">Add to cart</button>
          
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
