import React from 'react';
import './index.css';
import details from './containers/details';
import Home from './containers';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact={true} component={Home} />
				<Route path="/details" component={details} />
			</Switch>
		</BrowserRouter>
	);
};
