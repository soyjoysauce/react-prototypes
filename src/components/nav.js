import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

function Nav () {
    return(
        <ul className="nav nav-tabs mt-3">
            <li className="nav-item">
                <NavLink exact to="/" className="nav-link" activeClassName="active selected">
                    Welcome
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/our-macarons" className="nav-link" activeClassName="active selected">
                    Our Macarons
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/gifts-parties" className="nav-link" activeClassName="active selected">
                    Gift Parties
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/contacts" className="nav-link" activeClassName="active selected">
                    Contacts
                </NavLink>
            </li>
        </ul>
    )
}

export default Nav ;