import React from 'react';

export default class Example extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    render(){
        return(
            <h2> hello </h2>
        )
    }
}