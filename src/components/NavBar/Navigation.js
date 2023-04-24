import React, { Component } from 'react'
import "./Navigation.css"

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
   
    render() { 
        return (
            <div className="navbar">
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

            <div className="navbar__footer">
                <div className="navbar__footerText">Best Seller</div>
                <div className="navbar__footerText">Mobile</div>
                <div className="navbar__footerText">Amazon Pay</div>
                <div className="navbar__footerText">Fashion</div>
                <div className="navbar__footerText">Electronics</div>
                <div className="navbar__footerText">Prime</div>
                <div className="navbar__footerText">New Release</div>
                <div className="navbar__footerText">Customer Service</div>
                <div className="navbar__footerText">Computers</div>
                <div className="navbar__footerText">Home & Kitchen</div>
            </div>
        </div> 
         );
    }
}
 
export default NavBar;