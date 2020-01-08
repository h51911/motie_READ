import React from 'react';
// import List from './pages/List';
import List2 from './pages/List2';
import Details from './pages/Details';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div id="App">
      {/* <List2 /> */}
      <Switch>
        <Route path='/details' component={Details} />
        {/* <Route path='/list' component={List} /> */}
        <Route path='/list2' component={List2} />
        <Redirect from="/" to="/list2" exact />
      </Switch>
    </div>
  );
}

App = withRouter(App);

export default App;
