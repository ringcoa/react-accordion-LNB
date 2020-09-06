import React from 'react';

function PageComponent({}) {
    return (
    <>
        <div id="header"><h1>원주소개 페이지</h1></div>
        <div id="lnb"><LnbMain /></div>
        <div id="content"><Content category={url} /></div>
    </>
    )
}

export default PageComponent
