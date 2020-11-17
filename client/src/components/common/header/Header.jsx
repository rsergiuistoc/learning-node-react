import React from "react";

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import { white } from '@material-ui/core/colors';

import {
    Link    
} from "react-router-dom"

import "./Header.scss"

class Header extends React.Component{
    render(){
        return(
            <header>
                <div id="navbar">
                    <div className="navbar-left">
                        <div className="navbar-hamburger-menu">
                            <MenuIcon color="action">

                            </MenuIcon>
                        </div>
                        <div>
                            <Link to="/"></Link>
                        </div>
                    </div>
                    <div className="navbar-mid">
                        <div id="navbar-search">
                            <form className="navbar-searchbar">
                                <div className="navbar-search-options">
                                    <span>All</span>
                                    <ArrowDropDownIcon>

                                    </ArrowDropDownIcon>
                                </div>
                                <div className="navbar-search-submit">
                                    <input type="text" className="navbar-input"/>
                                </div>
                                <div className="navbar-search-icon">
                                    <SearchIcon>

                                    </SearchIcon>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="navbar-right">
                        <div className="navbar-lang">
                            <Link to="/lang"></Link>
                        </div>
                        <div className="navbar-auth">
                            <Link to="/login">
                                <span className="navbar-line-1">Hello, Sign In</span>
                                <span className="navbar-line-2">
                                    Account & Lists
                                    <ArrowDropDownIcon>
                                    </ArrowDropDownIcon>
                                </span>
                            </Link>
                        </div>
                        <div className="navbar-orders">
                            <Link to="/order" className="nav-a">
                                <span className="navbar-line-1">Returns</span>
                                <span className="navbar-line-2">& Orders</span>
                            </Link>
                        </div>
                        <div className="navbar-cart">
                            <Link to="/cart" className="nav-a">
                                Cart
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;