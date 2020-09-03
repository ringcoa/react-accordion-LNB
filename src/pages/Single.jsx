import React from 'react';
import "../app.css";
import LnbMain from '../component/LnbMain';
import SingleTab from '../component/SingleTab';
import Header from '../component/Header';


function Single({match}) {
    const path = match.path;
    const length = path.length;
    const props = path.substr(1,length);

    return (
        <div id="wrap">
            <div id="header"><Header/></div>
            <div id="lnb"><LnbMain/></div>
            <div id="content"><SingleTab path={props}/></div>
        </div>
    )
}
export default Single;


