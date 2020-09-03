import React, { useState } from 'react';
import { Link , NavLink } from 'react-router-dom';
import './LnbMainItem.css'

function LnbMainItem({item}) {
    const subList = item.sub

    return (
        <li className="LnbMain_item" id={item.id}>
            <NavLink activeClassName="main-active" className="main_Link" to={item.path}>{item.name}</NavLink>
            <ul className="sub_lnb">
                {subList ? subList.map(item=> <li key={item.path}><NavLink activeClassName="sub-active" to={item.path}>{item.subName}</NavLink ></li>) : ''}
            </ul>
        </li>
    )
}

export default LnbMainItem
