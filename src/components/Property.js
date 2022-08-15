import React from "react";
import "./property.css";

const Property = ({iconClass , topic , shortDiscription}) => {
  return (
    <div className="property">
      <div className="icon">
        <i className={iconClass}></i>
      </div>
      <div className="content">
        <h4>{topic}</h4>
        <p>{shortDiscription}</p>
      </div>
    </div>
  );
};

export default Property;
