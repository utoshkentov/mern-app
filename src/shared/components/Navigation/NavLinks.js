import React from "react";
import {NavLink} from "react-router-dom";

import "./Navlinks.css";

const NavLinks = () => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink exact to="/">ALL USERS</NavLink>
            </li>
            <li>
                <NavLink to="/u1/place" >MY PLACES</NavLink>
            </li>
            <li>
                <NavLink to="/places/new">ADD PLACE</NavLink>
            </li>
            <li>
                <NavLink to="/auth">AUTHENTICATE</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks;