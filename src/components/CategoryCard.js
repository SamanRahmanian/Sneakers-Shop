import React from 'react';
import "./categoryCard.css";

const CategoryCard = ({image , title}) => {
    return (
        <div className='categorieCard'>
            <h2>{title}</h2>
            <img src={image} alt="" />
            <button className='categorieCardBtn'>Explore all <i className="fa fa-arrow-right"></i></button>
        </div>
    );
};

export default CategoryCard;