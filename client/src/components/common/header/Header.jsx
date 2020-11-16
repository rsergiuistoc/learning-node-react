import React from "react";
import {
    Link    
} from "react-router-dom"

import "./Header.scss"

class Header extends React.Component{
    render(){
        return(
                <header>
                    <div id="navbar">
                        <div className="nav-left">
                            <a id="navbar-hamburger-menu">
                                <i></i>
                            </a>
                            <div id="nav-logo"></div>
                        </div>
                        <div className="nav-mid"></div>
                            <div id="nav-search">
                                <form className="nav-searchbar">
                                    <div></div>
                                    <div className="nav-mid">
                                        <input type="text"/>
                                    </div>
                                    <div className="nav-right">
                                        <div className="nav-search-submit">
                                            <span className="nav-search-submit-text">
                                                <input type="submit"/>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        <div className="nav-right"></div>
                        {/* <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/cart">Cart</Link>
                            </li>
                        </ul> */}
                    </div>
                </header>
        );
    }
}

export default Header;