import React, { useState } from 'react';
import data from '../maindata.json';
import "./DoubleTab.css";

const DoubleTab =() =>{
    const contentData = data.data[0].single;
    const depth1 = data.data[0].depth1;
    const depth2 = data.data[0].depth2[0];
    const [depth2Item , setDepth2Item] = useState(depth2.view);
    const [content , setContent] = useState('다이네믹 페스티벌 ');
    const [MainIdx , setMainIdx] = useState(0);
    const [SubIdx , setSubIdx] = useState(0);

    const ClickDepth1= (item , idx) =>{
        setMainIdx(idx);
        if(item == "볼거리") {
            setDepth2Item(depth2.view);
        }else {
            setDepth2Item(depth2.food);
        }
    }

    const ClickDepth2= (item ,idx) =>{
        setContent(item);
        setSubIdx(idx);
    }

    return (
        <div>
            <h2>원주소개 페이지</h2>
            {depth1.map((item  ,idx)=> <button className={idx === MainIdx ? "button_active depth1_btn" : 'depth1_btn'} key={idx} onClick={() => ClickDepth1(item,idx)} >{item}</button>)}
            <div className="content">
                <div className="depth2">{depth2Item.map((item2 , idx) => <button className={idx === SubIdx ? 'button_active depth2_btn' : 'depth2_btn' } onClick={()=>ClickDepth2(item2 ,idx)} key={item2}>{item2}</button>)}</div>
                <div className="content_text">{content} 컨텐츠 영역</div>
            </div>
        </div>
    )
};


// <li>
//     <p onClick={clickTab}>1</p>
//     {viewContent? <div>CONTENT1</div> : ''}
// </li>

export default DoubleTab;
