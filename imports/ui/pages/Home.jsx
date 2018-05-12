import React, { Component } from "react";
import { linechart } from "../d3components/linechart.js";

export default class Home extends Component {
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

	render() {
		return(
			<div> 
				<div id="chart"></div>
			</div>
		);
	}
}
