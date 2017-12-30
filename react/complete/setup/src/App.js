import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 23 },
      { name: "Chris", age: 34 },
      { name: "Tina", age: 26 },
    ]
  };

  clickHandler = () => {
    this.setState({ persons: [
      { name: "Maximilian", age: 23 },
      { name: "Christobel", age: 34 },
      { name: "Tina", age: 26 },
    ] });
  };

  nameChangedHandler = (event) => {
    this.setState({ persons: [
      { name: "Maximilian", age: 23 },
      { name: event.target.value, age: 34 },
      { name: "Tina", age: 26 },
    ] });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <button onClick={this.clickHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.clickHandler} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
