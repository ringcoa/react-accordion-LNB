import React from 'react';
import "../app.css";
import LnbMain from '../component/LnbMain';
import Content from '../component/Content'
import Header from '../component/Header';

function Page({match}) {
    let url = match.params;
    if(!url.LnbMain) url.LnbMain = 'info';
    //console.log(url.LnbMain)

    return (
    <div id="wrap">
        <div id="header"><Header /></div>
        <div id="lnb"><LnbMain/></div>
        <div id="content"><Content category={url} /></div>
        
    </div>
    )
}

export default Page;


