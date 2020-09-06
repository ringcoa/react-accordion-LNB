import React from 'react';
import data from '../data.json';
import logo from '../img/logo.jpg';
import './Header.css';
import { Link,NavLink } from 'react-router-dom';

function Header() {
    const MainNavList = data.data;
    return (
        <>
            <h1><Link to="/"><img src={logo} alt=""/></Link></h1>
            <ul>
                {MainNavList.map(listItem=> <li key={listItem.id}><NavLink activeClassName="headerActive" to={listItem.path}>{listItem.name}</NavLink></li>)}
            </ul>
        </>

    )
}

export default Header;
