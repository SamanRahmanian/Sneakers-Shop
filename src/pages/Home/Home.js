import React from 'react';
import Categories from './category/Categories';
import Footer from './footer/Footer';
import Navbar from './header/Navbar';
import Offer from './offer/Offer';
import Products from './product/Products';
import Properties from './properties/Properties';
import Slider from './slider/Slider';
import TrendProduct from './trendProduct/TrendProduct';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Offer />
            <TrendProduct />
            <Properties />
            <Footer />
        </div>
    );
};

export default Home;