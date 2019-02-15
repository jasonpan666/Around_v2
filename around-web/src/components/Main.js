import React from 'react';
import { Register } from './Register';
import { Login } from './Login';
import { Home } from './Home';
import { Switch, Route } from 'react-router-dom';

export class Main extends React.Component {
  getLogin = () => {
    return this.props.isLoggedIn ? <Home/> : <Login handleSuccessLogin={this.props.handleSuccessLogin}/>;
  }

  render() {
    return (
      <div className="main">
        <Switch>
          <Route exact path="/" render={this.getLogin}/>
          <Route path="/login" render={this.getLogin}/>
          <Route path="/register" component={Register}/>
          <Route path="/home" component={Home}/>
          <Route render={this.getLogin}/>
        </Switch>
      </div>
    );
  }
}