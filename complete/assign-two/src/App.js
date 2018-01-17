import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './Strings/Char';
import './App.css';

class App extends Component {
  state = {
    text: '',
    textLen: 0
  };

  textChange = (event) => {
    const text = event.target.value;
    this.setState({ text: text, textLen: text.length });
  };

  deleteCharacter = (index) => {    
    console.log("delete " + index);
    if (index < this.state.textLen) {
      const text = this.state.text.slice(0, index) + this.state.text.slice(index + 1);
      this.setState({ text: text, textLen: text.length });
    }
  };

  render() {
    const chars = this.state.text.split('')
    const charsList = chars.map((x, i) => {
      return (
        <Char value={x} key={x + i} click={() => this.deleteCharacter(i)} />
      );
    });
    return (
      <div className="App">
        <input type="text" value={this.state.text} 
          onChange={(event) => this.textChange(event)} />
        <p>Length is {this.state.textLen}</p>
        <Validation length={this.state.textLen} />
        {charsList}
      </div>
    );
  }
}

export default App;
