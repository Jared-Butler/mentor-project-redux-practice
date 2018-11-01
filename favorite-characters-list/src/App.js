import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {addCharacter} from "./dux/reducer"
import Home from './components/Home'


class App extends Component {
  constructor(){
    super()
    this.state = {
      userInput: ""
    }
  }

  addNewCharacter = (character) => {
    this.setState({
      userInput: ""
    })
    this.props.addCharacter(character)
  }

  render() {

    return (
        <div className="App">
            <Home />
        </div>
    );
  }
}

export default App


