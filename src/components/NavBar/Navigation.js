import React, { Component } from 'react'
import "./Navigation.css"

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
   
    render() { 
        return ( 
            <div class="navbar__component">
                <div class="navbar__logo"></div>
            </div>
         );
    }
}
 
export default NavBar;