/*
This file defines the main Redux Store. It is used by the app's index.js file where it is given to
the Provider element from ReactRedux, which allows smart components to `connect` to the store
*/

import initialState from "./initialstate"
import thunk from 'redux-thunk' // allows us to use asynchronous actions
import { createStore, combineReducers, applyMiddleware } from 'redux'
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

