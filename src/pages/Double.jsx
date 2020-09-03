import React from 'react';
import "../app.css";
import LnbMain from '../component/LnbMain';
import DoubleTab from '../component/DoubleTab'
import Header from '../component/Header';


function Double() {
    return (
        <div id="wrap">
            <div id="header"><Header/></div>
            <div id="lnb"><LnbMain/></div>
            <div id="content"><DoubleTab/></div>
        </div>
    )
}
export default Double;