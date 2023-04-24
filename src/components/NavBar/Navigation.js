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
                <div class="navbar__locator">
                    <div class="navbar__locatorImage"></div>
                    <div class="navbar__location">Pune</div>
                </div>
            </div>
         );
    }
}
 
export default NavBar;