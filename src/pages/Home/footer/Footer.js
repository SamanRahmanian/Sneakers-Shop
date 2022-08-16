import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="topSectionFooter">
        <h1 className="logo">
          <span className="diffrentCarOnLogo">S</span>neakers
        </h1>
        <div className="btns">
            <button><i className="fa fa-twitter"></i></button>
            <button><i className="fa fa-instagram"></i></button>
            <button><i className="fa fa-telegram"></i></button>
            <button><i className="fa fa-whatsapp"></i></button>
        </div>
      </div>
      <hr />
      <div className="bottomSectionOnFooter">
        <ul>
            <h1>Contact Us</h1>
            <li><i className="fa fa-map-marker"></i>Kerman,Iran</li>
            <li><i className="fa fa-phone"></i>09000000000</li>
            <li><i className="fa fa-envelope-open"></i>Footcat@gmail.com</li>
        </ul>
        <ul>
            <h1 className="developer">Developers</h1>
            <li><span>Back End developer :</span> Abolfazl Daneshvar</li>
            <li><span>Front End developer :</span> Saman Rahmanian</li>
        </ul>
        <ul>
            <h1>Opening time</h1>
            <li><span>Mon - Tue :</span> 8AM - 10PM</li>
            <li><span>Wed - Thu - Fri :</span> 8AM - 7PM</li>
            <li><span>Sat - Sun :</span> Closed</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
