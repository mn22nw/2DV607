import { render } from 'react-dom';
import React          from 'react';
import Router         from 'react-router';
import Routes         from './routes';

render(
	<Router>{Routes}</Router>
	, document.getElementById('root'));
