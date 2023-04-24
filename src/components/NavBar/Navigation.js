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
                    <div>
                        <select className="navbar__categories">
                            <option value="all" className="value">All</option>
                            <option value="alexa" className="value">Alexa</option>
                            <option value="baby" className="value">Baby</option>
                            <option value="beauty" className="value">Beauty</option>
                            <option value="books" className="value">Books</option>
                            <option value="electronics" className="value">Electronics</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" className="navbar__searchBox"></input>
                    </div>
                    <div className="navbar__searchIconBox">
                        <div className="navbar__searchIcon"></div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default NavBar;