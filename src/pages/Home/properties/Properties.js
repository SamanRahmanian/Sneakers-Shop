import React from 'react';
import "./properties.css";
import Property from '../../../components/Property';

const Properties = () => {
    return (
        <div className='properties'>
            <Property iconClass="fa fa-truck" topic="FREE SHIPING" shortDiscription="All orders over $150" />
            <Property iconClass="fa fa-credit-card-alt" topic="QUICK PAYMENT" shortDiscription="100% secure payment" />
            <Property iconClass="fa fa-dropbox" topic="FREE RETURNS" shortDiscription="Money back in 30 days" />
            <Property iconClass="fa fa-support" topic="24/7 SUPPORT" shortDiscription="Get Quick Support" />
        </div>
    );
};

export default Properties;