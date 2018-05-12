import React from 'react';
import AccountsUI from './AccountsUI.jsx'

export default class NavBar extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    render(){
        return(
            <div>
                <nav>
                    <AccountsUI />
                </nav>
            </div>
        )
    }
}




