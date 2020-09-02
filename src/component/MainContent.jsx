import React from 'react'

function MainContent({category}) {
    console.log(category)
    const path = category.LnbMain;
    console.log(path)
    return (
        <div>
           {[path]} 메인 컨텐츠
        </div>
    )
}

export default MainContent
