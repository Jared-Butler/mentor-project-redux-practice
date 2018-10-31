let initialState = {
    favoriteCharacter: "",
    characterList: []
}

let ADD_CHARACTER = "ADD_CHARACTER"
let NEW_FAVORITE = "NEW_FAVORITE"

export default function reducer( state = initialState, action){
    switch (action.type){
        case ADD_CHARACTER:
            let newArr = [...state.characterList]
            newArr.push(action.payload)
            return Object.assign({}, state, {characterList: newArr})
        case NEW_FAVORITE:
            return Object.assign({}, state, {favoriteCharacter: action.payload})
        default:
            return state
    }
}

export function addCharacter(character){
    return {
        type: ADD_CHARACTER,
        payload: character
    }
}

export function newFavorite(character){
    return {
        type: NEW_FAVORITE,
        payload: character
    }
}