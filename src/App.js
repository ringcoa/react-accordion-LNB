import React from 'react';
import {Route} from 'react-router-dom'
import Page from './pages/Page'
import Double from './pages/Double';
import Single from './pages/Single';

function App() {
  return (
    <>
      <Route path={['/' , '/info']} exact component={Double} />
      <Route path={['/view' , '/food']} exact component={Single} />
      <Route path="/:LnbMain/:LnbSub" exact component={Page} />
    </>
  );
}

export default App;
