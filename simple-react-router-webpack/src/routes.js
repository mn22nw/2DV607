"use strict";
/*
This is the "sitemap" of the app! 
*/

import React                  from 'react';
import { Route, IndexRoute }  from 'react-router';
import Index                  from './components/index';
import Home                   from './components/pages/home';
import About                  from './components/pages/about';
import Login                  from './components/pages/login';
import NotFound               from './components/pages/not_found';

export default (
  <Route path="/" component={Index}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About}/>
    <Route path="login" component={Login}/>
    <Route path="*" component={NotFound}/>
  </Route>
);

