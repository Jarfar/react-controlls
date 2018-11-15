import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <NavLink to='/'>1 </NavLink>
                    <NavLink to='2'>2 </NavLink>
                    <NavLink to='3'>3 </NavLink>
                    <NavLink to='4'>4 </NavLink>
                </nav>
            </header>
        );
    }
}

export default Header;