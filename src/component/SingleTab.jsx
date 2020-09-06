import React, { useState, useEffect ,memo} from 'react';
import data from '../maindata.json';
import "./SingleTab.css";
import { Link } from 'react-router-dom';

const SingleTab =memo(({path}) =>{
    const singledata = data.data[0].single[path];
    const [content , setContent] = useState('');
    const [subPath , setSubPath ] = useState(singledata[0].path);
    const [clickTabIdx , setClickTabIdx] = useState(0);

    useEffect(() => {
        setContent(singledata[0].info);
        
    }, [path])

    const clickTab= (idx)=>{
        setContent(singledata[idx].info);
        setSubPath(singledata[idx].path);
        setClickTabIdx(idx);
    }



    return (
        <div className="mainContent">
            <h1></h1>
            <div>
                <div className="tab">   
                    {singledata.map( (item ,idx) =><button key={item.id} className={idx == clickTabIdx ? 'button_active' : ''} onClick={(e) => clickTab(idx)}>{item.name}</button>)}
                </div >
                
                <div className="singleContent">{content} <Link className="link" to={subPath} >자세히보기</Link></div>
            </div>
        </div>
    )
})

export default SingleTab;
