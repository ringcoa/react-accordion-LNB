import React from 'react'
import data from '../content.json'
import './Content.css'

function Content({category}) {
    let contentData ={};
    // console.log(data.data.category === category)
    data.data.forEach(el => {
        if(el.category == category.LnbSub) contentData = el;
    })

    return (
        <>
            <h2>{contentData.title}</h2>
            <img src={contentData.img} />
            <p>{contentData.info}</p>
        </>
    )
}

export default Content
