import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, User } from './pages';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/:user' component={User} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
