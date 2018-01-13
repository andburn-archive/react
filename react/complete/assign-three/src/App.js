import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import Routes from './routes.js';
import './App.css';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">          
          <header>
            <Link to="/users">Users</Link>
            <Link to="/courses">Courses</Link>
          </header>
          <Routes />
        </div>        
      </BrowserRouter>
    );
  }
}

export default App;
