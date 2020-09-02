import React from 'react';
import "../app.css";
import LnbMain from '../component/LnbMain';
import Content from '../component/Content'

function Page({match}) {
    let url = match.params;
    if(!url.LnbMain) url.LnbMain = 'info';
    //console.log(url.LnbMain)

    return (
    <div id="wrap">
        <div id="header"><h1>원주소개 페이지</h1></div>
        <div id="lnb"><LnbMain param={url} /></div>
        <div id="content"><Content category={url} /></div>
        
    </div>
    )
}

export default Page;


