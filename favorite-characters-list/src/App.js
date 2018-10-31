import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect} from 'react-redux'
import {addCharacter} from "./dux/reducer"
import MyList from './components/MyList'


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
          <h1>Favorite Character: {this.props.favoriteCharacter}</h1>

          <input 
            type="text" 
            value={this.state.userInput} 
            onChange={(e) => {this.setState({userInput: e.target.value})}} />

            <button onClick={() => this.addNewCharacter(this.state.userInput)}>Add Character</button>

            <MyList />
        </div>
    );
  }
}

function mapStateToProps(state){
  return {
    favoriteCharacter: state.favoriteCharacter
  }
}

let mapDispatchesToProps = {
  addCharacter
}

export default connect(mapStateToProps, mapDispatchesToProps)(App);


