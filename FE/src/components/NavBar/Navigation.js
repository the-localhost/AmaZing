import React, { Component } from 'react'
import "./Navigation.css"
import { Link } from "react-router-dom"
import { CartContext } from '../CartContext';

class NavBar extends Component {
    static contextType = CartContext

    constructor(props) {
        super(props);
        this.state = {  }
    }
   
    render() { 
        let {size} = this.context
        return (
            <div className="navbar">
            <div className="navbar__component">
                <Link to="/">
                    <div className="navbar__logo"></div>
                </Link>
                <div className="navbar__locator">
                    <div className="navbar__locatorImage"></div>
                    <div className="navbar__location navbar__text">Pune</div>
                </div>
                <div className="navbar__search">
                    <div>
                        <select name="category" className="navbar__categories">
                            <option name="all" value="all" className="value">All</option>
                            <option name="alexa" value="alexa" className="value">Alexa</option>
                            <option name="baby" value="baby" className="value">Baby</option>
                            <option name="beauty" value="beauty" className="value">Beauty</option>
                            <option name="books" value="books" className="value">Books</option>
                            <option name="electronics" value="electronics" className="value">Electronics</option>
                        </select>
                    </div>
                    <div>
                        <input name="query" type="text" className="navbar__searchBox"></input>
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
                <Link to="/checkout">
                    <div className="navbar__cart navbar__text">
                        <div className="navbar__cartImage"></div>
                        <div className="navbar__cartItem">{size}</div>
                        <div className="navbar__cartText">Cart</div>
                    </div>
                </Link>
            </div>

            <div className="navbar__footer">
                <div className="navbar__footerText">BestSellers</div>
                <Link to="/display" style={{color:"white", textDecoration:"none"}}>
                    <div className="navbar__footerText">Mobiles</div>
                </Link>
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