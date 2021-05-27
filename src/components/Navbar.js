import React from 'react';
import logo from '../img/logo.png';
import {Link , Route, Router, NavLink} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import { Component } from 'react';
import { MenuItems } from "./MenuItems";
import Menu from './Menu'
const history = createBrowserHistory();
class Navbar extends Component {
    
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
                </div>
                
        
                   
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                
        <Link  className={item.cName} to={item.url}>{item.title}</Link>
        
     
                            </li>
                        )
                    })}
                </ul>
                
            </nav>
        )
    }
}

export default Navbar
