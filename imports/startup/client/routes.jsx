import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from "../../ui/components/App.jsx";
import Home from "../../ui/pages/Home.jsx";
import SecondPage from "../../ui/pages/SecondPage.jsx";

export const renderRoutes = () => ( 
	<Router> 
		<App>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/second" component={SecondPage} />
			</Switch>
		</App>
	</Router>
);