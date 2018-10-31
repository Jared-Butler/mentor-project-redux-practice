import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterList from './components/CharacterList'

class App extends Component {

  constructor(){
    super()
    this.state = {
      userInput: ""
    }
  }

  addNewCharacter = () => {
    this.setState({
      userInput: ""
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Favorite Character: </h1>

        <input
          type="text"
          value={this.state.userInput}
          onChange={(e) => {this.setState({userInput: e.target.value})}}/>

        <button onClick={this.addNewCharacter}>Add Character</button>

        <CharacterList />
      </div>
    );
  }
}

export default App;
