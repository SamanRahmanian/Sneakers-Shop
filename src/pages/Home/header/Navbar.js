import React from "react";
import "./navbar.css";

const Navbar = () => {
  const dropdownHandeler = () => {
    document.querySelector(".dropdownMenu").classList.add("animate__backInLeft");
    document.querySelector(".dropdownMenu").classList.add("activeMenu");
  };

  const closeDropDownMenu = () =>{
    document.querySelector(".dropdownMenu").classList.remove("activeMenu");
  }

  

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h1>
            <span className="diffrentCarLogo">S</span>neakers
          </h1>
        </div>
        <ul className="navbarList">
          <a href="#">
            <li className="navbarListItem">Home</li>
          </a>
          <a href="#">
            <li className="navbarListItem">Products</li>
          </a>
          <a href="#">
            <li className="navbarListItem">Categry</li>
          </a>
          <a href="#">
            <li className="navbarListItem">Contact us</li>
          </a>
          <a href="#">
            <li className="navbarListItem">About us</li>
          </a>
        </ul>
        <div className="navBtns">
          <button className="user">
            <i className="fa fa-user-o"></i>
          </button>
          <button className="search">
            <i className="fa fa-search"></i>
          </button>
          <button className="cart">
            <i className="fa fa-shopping-cart"></i>
            <span className="number">3</span>
          </button>
        </div>

        <button onClick={dropdownHandeler} className="hamberBtn">
          <i className="fa fa-bars"></i>
        </button>
      </nav>
      <div className="dropdownMenu">
        <button onClick={closeDropDownMenu} className="closeBtn"><i className="fa fa-close"></i></button>
        <ul className="navbarListDrop">
          <a href="#">
            <li className="navbarListItem animate__bounceInLeft animate__animated">Home</li>
          </a>
          <a href="#">
            <li className="navbarListItem animate__bounceInLeft animate__animated">Products</li>
          </a>
          <a href="#">
            <li className="navbarListItem animate__bounceInLeft animate__animated">Categry</li>
          </a>
          <a href="#">
            <li className="navbarListItem animate__bounceInLeft animate__animated">Contact us</li>
          </a>
          <a href="#">
            <li className="navbarListItem animate__bounceInLeft animate__animated">About us</li>
          </a>
        </ul>
        <div className="navBtnsDrop">
          <button className="user animate__fadeInLeft animate__animated">
            <i className="fa fa-user-o"></i>
          </button>
          <button className="search animate__fadeInLeft animate__animated">
            <i className="fa fa-search"></i>
          </button>
          <button className="cart animate__fadeInLeft animate__animated">
            <i className="fa fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
