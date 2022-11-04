import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { AppContext } from './appContext';
import Home from './Home';
import Game from './Game';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      setUser: user => this.setState({ user }),
      currentPage: 'home',
      setCurrentPage: currentPage => this.setState({ currentPage })
    };
  }

  render() {
    const { user, currentPage } = this.state;

    return (
      <AppContext.Provider value={this.state}>
        {user && currentPage === 'game' ? (
          <Game />
        ): (
          <Home />
        )}
      </AppContext.Provider>
    );
  }
}

export default App;
