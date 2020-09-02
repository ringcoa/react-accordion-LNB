import React from 'react';
import "../app.css";
import LnbMain from '../component/LnbMain';
import MainContent from '../component/MainContent';

function MainInfo({match}) {
    const url = match.params;
    if(!url.LnbMain) url.LnbMain = 'info'
    return (
    <div id="wrap">
        <div id="header"><h1>원주소개 페이지</h1></div>
        <div id="lnb"><LnbMain param={url} /></div>
        <div id="content"><MainContent category={url}/></div>
    </div>
    )
}
export default MainInfo;


