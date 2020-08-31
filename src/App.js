import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, User } from './pages';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/user'>
            <User />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
