import React from 'react';
import { Register } from './Register';
import { Login } from './Login';
import { Home } from './Home';
import { Switch, Route } from 'react-router-dom';

export class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/home" component={Home}/>
          <Route component={Login}/>
        </Switch>
      </div>
    );
  }
}