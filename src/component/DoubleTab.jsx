import React, { useState } from 'react'
import data from '../maindata.json'
import "./DoubleTab.css";

const DoubleTab =() =>{
    const contentData = data.data[0].single
    const depth1 = data.data[0].depth1;
    const depth2 = data.data[0].depth2[0];
    const [depth2Item , setDepth2Item] = useState(depth2.view)
    const [content , setContent] = useState('다이네믹 페스티벌 ')
    console.log(contentData);
    

    const ClickDepth1= (item) =>{
        if(item == "볼거리") {
            setDepth2Item(depth2.view)
        }else {
            setDepth2Item(depth2.food)
        }
    }

    const ClickDepth2= (item) =>{
        setContent(item)
        console.log(item)
    }

    return (
        <div>
            <h2>원주소개 페이지</h2>
            {depth1.map((item  ,id)=> <button className="depth1_btn" key={id} onClick={() => ClickDepth1(item)} >{item}</button>)}
            <div className="content">
                <div className="depth2">{depth2Item.map(item2 => <button className="depth2_btn" onClick={()=>ClickDepth2(item2)} key={item2}>{item2}</button>)}</div>
                <div className="content_text">{content} 컨텐츠 영역</div>
            </div>
        </div>
    )
}


// <li>
//     <p onClick={clickTab}>1</p>
//     {viewContent? <div>CONTENT1</div> : ''}
// </li>

export default DoubleTab
