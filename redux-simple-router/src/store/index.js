import initialState from "./initialstate"
import {thunk} from 'redux-thunk' // allows us to use asynchronous actions
import { combineReducers, createStore, applyMiddleware } from 'redux';
import reducers from './reducers'
import { routeReducer } from 'redux-simple-router'

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}))

// A super-simple logger
var logger = store => next => action => {
	console.log('dispatching', action.type,action)
	var result = next(action)
	console.log('next state', store.getState())
	return result
}


module.exports = applyMiddleware(thunk,logger)(createStore)(reducer,initialState);
