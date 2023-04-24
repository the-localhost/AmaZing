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
                    <div className="navbar__location navbar__text">Pune</div>
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
                <div className="navbar__signin navbar__text">
                    <div style={{ fontSize: "14px"}}>Hello, Sign In</div>
                    <div style={{ fontWeight: "bold"}}>Account & Lists</div>
                </div>
                <div className="navbar__orders navbar__text">
                    <div style={{ fontSize: "14px"}}>Returns</div>
                    <div style={{ fontWeight: "bold"}}>& Orders</div>
                </div>
                <div className="navbar__cart navbar__text">
                    <div className="navbar__cartImage"></div>
                    <div className="navbar__cartItem">0</div>
                    <div className="navbar__cartText">Cart</div>
                </div>
            </div>
         );
    }
}
 
export default NavBar;