import React from 'react';

export default class Comment extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    render(){
        return(
            <li>{this.props.text}</li>
        )
    }
}