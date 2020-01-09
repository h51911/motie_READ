import React from 'react';
import List from './pages/List';
import List2 from './pages/List2';
import Details from './pages/Details';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div id="App">
      <Switch>
        <Route path='/details' component={Details} />
        <Route path='/list' component={List} />
        <Route path='/list2' component={List2} />
        <Redirect from="/" to="/list" exact />
      </Switch>
    </div>
  );
}


export default App;
