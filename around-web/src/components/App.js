import React, { Component } from 'react';
import { TopBar } from './TopBar';
import { Main } from './Main';
import { TOKEN_KEY } from '../constants';

class App extends Component {
  state = {
    isLoggedIn: Boolean(localStorage.getItem(TOKEN_KEY)),
  }

  handleSuccessLogin = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
    this.setState({ isLoggedIn: true });
  }

  handleLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
    this.setState({ isLoggedIn: false });
  }

  render() {
    return (
      <div className="App">
        <TopBar handleLogout={this.handleLogout} isLoggedIn={this.state.isLoggedIn}/>
        <Main handleSuccessLogin={this.handleSuccessLogin} isLoggedIn={this.state.isLoggedIn}/>
      </div>
    );
  }
}

export default App;
