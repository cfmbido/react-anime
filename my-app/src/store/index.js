import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
    favfilms: []
}

function reducer ( state = initialState, action ){
    switch(action.type){
        case "ADD_FAV":
            return { ...state, favfilms: state.favfilms.concat(action.payload) }
        case "REMOVE_FAV":
            return { ...state, favfilms: action.payload }
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store