import React, { Component } from 'react'
import "./Navigation.css"

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
   
    render() { 
        return ( 
            <div className="navbar__component">
                <div className="navbar__logo"></div>
                <div className="navbar__locator">
                    <div className="navbar__locatorImage"></div>
                    <div className="navbar__location">Pune</div>
                </div>
                <div className="navbar__search">
                    <div></div>
                    <div>
                        <input type="text" className="navbar__searchBox"></input>
                    </div>
                    <div></div>
                </div>
            </div>
         );
    }
}
 
export default NavBar;