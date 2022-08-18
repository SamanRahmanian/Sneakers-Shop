import React from 'react';
import CategoryCard from '../../../components/CategoryCard';
import c1 from "../../../images/c-1.jpg";
import c2 from "../../../images/c-2.jpg";
import c3 from "../../../images/c-3.jpg";
import "./categories.css";

const Categories = () => {
    return (
        <div className='categories'>
            <CategoryCard image={c1} title="MEN COLLECTIONS"/>
            <CategoryCard image={c2} title="SPORTS COLLECTIONS"/>
            <CategoryCard image={c3} title="WOMEN COLLECTIONS"/>
        </div>
    );
};

export default Categories;