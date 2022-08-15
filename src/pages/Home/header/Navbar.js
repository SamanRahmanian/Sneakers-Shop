import React from 'react';
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <h1><span className='diffrentCarLogo'>F</span>ootcap</h1>
      </div>
      <ul className='navbarList'>
        <a href='#'><li className='navbarListItem'>Home</li></a>
        <a href='#'><li className='navbarListItem'>Products</li></a>
        <a href='#'><li className='navbarListItem'>Categry</li></a>
        <a href='#'><li className='navbarListItem'>Contact us</li></a>
        <a href='#'><li className='navbarListItem'>About us</li></a>
      </ul>
      <div className='navBtns'>
        <button className='user'><i className='fa fa-user-o'></i></button>
        <button className='search'><i className='fa fa-search'></i></button>
        <button className='cart'><i className='fa fa-shopping-cart'></i><span className='number'>3</span></button>
      </div>
      <button className='hamberBtn'><i className='fa fa-bars'></i></button>
    </nav>
  );
};

export default Navbar;