import React from 'react';
import "./categoryCard.css";

const CategoryCard = ({image , title}) => {
    return (
        <div className='categorieCard animate__flipInY animate__animated'>
            <h2>{title}</h2>
            <img src={image} alt="" />
            <button className='categorieCardBtn'>Explore all <i className="fa fa-arrow-right"></i></button>
        </div>
    );
};

export default CategoryCard;