import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home"


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
        <Home />
      </div>
    );
  }
}

export default App;
