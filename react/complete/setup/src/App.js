import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 879, name: "Max", age: 23 },
      { id: 234, name: "Chris", age: 34 },
      { id: 979, name: "Tina", age: 26 },
    ],
    showPersons: false
  };

  clickHandler = () => {
    const current = this.state.showPersons;
    this.setState({  showPersons: !current });
  };

  nameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(x => x.id === id);
    const persons = [...this.state.persons];
    const person = persons[personIndex];
    person.name = event.target.value;
    this.setState({persons: persons});
  };

  deleteHandler = (index) => {
    const people = [...this.state.persons];
    people.splice(index, 1);
    this.setState({persons: people});
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((p, i) => {
            return (
              <Person 
                key={p.id}
                name={p.name} 
                age={p.age} 
                click={() => this.deleteHandler(i)} 
                changed={(event) => this.nameHandler(event, p.id)} />
            );
          })}          
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <button onClick={this.clickHandler}>Toggle</button>
        {persons}
      </div>
    );
  }
}

export default App;
