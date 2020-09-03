import React from 'react'
import data from '../data.json'
import LnbMainItem from './LnbMainItem'
import './LnbMain.css'

function LnbMain() {
    const LnbList = (data.data)
    return (
    <>
        <ul className="LnbMain">
            {LnbList.map(item => <LnbMainItem key={item.id} item={item}/> )}
        </ul>
    </>
    )
}

export default LnbMain
