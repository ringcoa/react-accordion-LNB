import React from 'react';
import {Route} from 'react-router-dom'
import Page from './pages/Page'
import MainInfo from './pages/MainInfo';

function App() {
  return (
    <>
     <Route path="/" exact exact component={MainInfo} />
      <Route path="/:LnbMain" exact component={MainInfo}/>
      <Route path="/:LnbMain/:LnbSub" exact component={Page} />
    </>
  );
}

export default App;
