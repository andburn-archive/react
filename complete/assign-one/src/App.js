import React, { Component } from 'react';
import UserOutput from './User/UserOutput';
import UserInput from './User/UserInput';
import './App.css';

class App extends Component {
  state = {
    username: "Simon"
  };

  inputHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <UserOutput user={this.state.username} />
        <UserInput user={this.state.username} changed={this.inputHandler} />
      </div>
    );
  };
}

export default App;
