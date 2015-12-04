/*
This is the entry point for the app! From here we merely import our routes definitions,
then use React and React-DOM to render it.
*/
require('file?name=[name].[ext]!../index.html');  //To be able to copy the html file to dist folder via file-loader webpack
//REACT
import React          from 'react'
import { render } from 'react-dom'

//ROUTER
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';

//REDUX
import { Provider } from 'react-redux'
import  store from './store'
import { createStore, combineReducers }from 'redux';

import { App, Home, Foo, Bar } from './components';

const history = createBrowserHistory();
syncReduxAndRouter(history, store);


render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="foo" component={Foo}/>
        <Route path="bar" component={Bar}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);




//THIS CODE WORKS//
/*
require('file?name=[name].[ext]!../index.html');  //To be able to copy the html file to dist folder via file-loader webpack
//REACT
import React          from 'react'
import { render } from 'react-dom'

//ROUTER
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';

//REDUX
import { Provider } from 'react-redux'
//import  store from './store'
import { createStore, combineReducers }from 'redux';
import reducers from './store/reducers';

import { App, Home, Foo, Bar } from './components';

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}));
const store = createStore(reducer);
const history = createBrowserHistory();

syncReduxAndRouter(history, store);


render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="foo" component={Foo}/>
        <Route path="bar" component={Bar}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
 */