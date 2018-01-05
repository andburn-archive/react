import React, { Component } from 'react';
import './App.css';
import People from './components/People/People';
import Cockpit from './components/Cockpit/Cockpit';

class App extends Component {
  state = {
    people: [
      { id: 879, name: "Max", age: 23 },
      { id: 234, name: "Chris", age: 34 },
      { id: 979, name: "Tina", age: 26 },
    ],
    showPeople: false
  };

  btnClickHandler = () => {
    const current = this.state.showPeople;
    this.setState({ showPeople: !current });
  };

  nameHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(x => x.id === id);
    const people = [...this.state.people];
    const person = people[personIndex];
    person.name = event.target.value;
    this.setState({people: people});
  };

  deleteHandler = (index) => {
    const people = [...this.state.people];
    people.splice(index, 1);
    this.setState({people: people});
  };

  render() {
    let people = null;        

    if (this.state.showPeople) {
      people = (
        <div>
          <People 
            people={this.state.people} 
            clicked={this.deleteHandler} 
            changed={this.nameHandler} />          
        </div>
      );
    }

    return (
      <div className="App">
        <Cockpit clicked={this.btnClickHandler} />
        {people}
      </div>
    );
  }
}

export default App;
