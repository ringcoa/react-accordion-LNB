import React, { useState, useEffect ,memo} from 'react'
import data from '../maindata.json'
import "./SingleTab.css";
import { Link } from 'react-router-dom';

const SingleTab =memo(({path}) =>{
    let singledata = data.data[0].single[path];
    console.log(singledata)
    let [content , setContent] = useState('');
    let [classList , setClassList] = useState('');
    let [subPath , setSubPath ] = useState(singledata[0].path)

    useEffect(() => {
        setContent(singledata[0].info)
        
    }, [path])
    //TODO: Tab 버튼을 클릭했을떄 해당 탭만 active클래스 추가
    useEffect(() => {
        setClassList('')
    }, [content])
    
    const clickTab= (e ,idx)=>{
        setContent(singledata[idx].info);
        setSubPath(singledata[idx].path)
        const target = e.target;
        console.log(target.parentNode)
        //target.classList.add('main-active')
    }



    return (
        <div className="mainContent">
            <h1></h1>
            <div>
                <div className="tab">   
                    {singledata.map( (item ,idx) =><button key={item.id} className={classList} onClick={(e) => clickTab(e, idx)}>{item.name}</button>)}
                </div >
                
                <div className="singleContent">{content} <Link className="link" to={subPath} >자세히보기</Link></div>
            </div>
        </div>
    )
})


// <li>
//     <p onClick={clickTab}>1</p>
//     {viewContent? <div>CONTENT1</div> : ''}
// </li>

export default SingleTab
