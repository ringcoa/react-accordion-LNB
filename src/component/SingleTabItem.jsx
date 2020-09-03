import React , {useState} from 'react'

function SingleTabItem({item ,idx}) {
    let [content , setContent] = useState('');
    let [buttonActive , setButton ] = useState(false);
    console.log(idx)

    const clickTab= (idx)=>{
        
        setButton(true)
    }
    return (
        <li key={idx}><button className={buttonActive ? 'button_active' : ""} onClick={() => clickTab(idx)}>{item.name}</button></li>
    )
}

export default SingleTabItem
