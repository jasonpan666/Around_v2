import React from 'react';
import logo from '../assets/images/logo.svg';
import { Icon } from 'antd';

export class TopBar extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-title">Around</div>
        {this.props.isLoggedIn ?
          <a className="App-logout" onClick={this.props.handleLogout}>
            <Icon type="logout" />{' '}Logout
          </a> : null}
      </header>
    );
  }
}
