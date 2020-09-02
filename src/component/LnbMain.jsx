import React from 'react'
import data from '../data.json'
import LnbMainItem from './LnbMainItem'
import './LnbMain.css'

function LnbMain({param}) {
    const LnbList = (data.data)
    return (
    <>
        <ul className="LnbMain">
            {LnbList.map(item => <LnbMainItem key={item.id} item={item} main={param.LnbMain}/> )}
        </ul>
    </>
    )
}

export default LnbMain
