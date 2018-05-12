import React, { Component } from "react";
import { linechart } from "../d3components/linechart.js";
import {AccountsUIWrapper} from '../components/AccountsUIWrapper.jsx';
import { Comment } from '../components/Comment';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router-dom'
import { Comments } from '../../api/comments.js';
import ReactDOM from 'react-dom';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data : [],
			hasLoaded : 1
		}
	}

	componentDidMount(){

		// Fetch
		fetch("https://gist.githubusercontent.com/john-guerra/6a1716d792a20b029392501a5448479b/raw/e0cf741c90a756adeec848f245ec539e0d0cd629/sfNSchedule")
			.then((res => {
				return res.json()
			})).then((json) => {
				if (this.state.hasLoaded == 1){
					this.setState({
						data : json.route[0],
						hasLoaded : 0
					});	
					// Visualizacion	
					linechart(this.state.data)		
				}
				else{
					// Visualizacion
					linechart(this.state.data)
				}
			});						

	};

	getComments() {
		const result = Meteor.call('comments.get');
		console.log(result);
		return result;
	}
	 

	renderComments() {
		return this.props.comments.map((comment) => (
		  <li key={comment._id}> {comment.text} </li>
		));
	}

	handleSubmit(event) {
		event.preventDefault();
		
		// Find the text field via the React ref
		const ptext = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
		
		const newComment = { text: ptext }

		Meteor.call("comments.insert", newComment);

		// Clear form
		ReactDOM.findDOMNode(this.refs.textInput).value = '';

	}

	render() {
		return(
			<div> 
				<div id="chart"></div>
				<ul>
					{this.renderComments()}
				</ul>
				<form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
					<input
					type="text"
					ref="textInput"
					placeholder="Type to add new comment"
					/>
				</form>
			</div>
		);
	};


}

export default withRouter(withTracker(() => {

    Meteor.subscribe("comments");
    return {
        comments: Comments.find({}).fetch(),
    };
})(Home));


