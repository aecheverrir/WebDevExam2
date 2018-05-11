import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from "../../ui/components/App.jsx";
import Home from "../../ui/pages/Home.jsx";

export const renderRoutes = () => ( 
	<Router> 
		<App>
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		</App>
	</Router>
);