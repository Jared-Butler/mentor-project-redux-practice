import React, {Component} from 'react'
import {connect} from "react-redux"
import {newFavorite} from "../dux/reducer"

class MyList extends Component {
    render(){
        console.log(this.props.characterList)
        let theList = this.props.characterList.map((val, i) => {
            return (
                <div key={i}>
                    <h1>{val}</h1>
                    <button onClick={() => this.props.newFavorite(val)}>Make Favorite</button>
                </div>
                
            )
        })
        return (
            <div>
                {theList}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        characterList: state.characterList
    }
}

let mapFunctionsToProps = {
    newFavorite
}

export default connect(mapStateToProps, mapFunctionsToProps)(MyList);