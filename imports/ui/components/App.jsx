import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Meteor } from "meteor/meteor";
import { withRouter  } from "react-router-dom";
import { withTracker  } from "meteor/react-meteor-data";
import {AccountsUI} from './AccountsUI.jsx';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<nav>
					<AccountsUI />
				</nav> 
				{this.props.children}
			</div>
		);
	}
}
