import React, {useContext} from "react";
import {NavLink} from "react-router-dom";

import {AuthContext} from "../../context/auth-context";
import "./Navlinks.css";

const NavLinks = () => {
    const auth = useContext(AuthContext)

    return (
        <ul className="nav-links">
            <li>
                <NavLink exact to="/">ALL USERS</NavLink>
            </li>
            {auth.isLoggedIn && (
                <li>
                    <NavLink to="/u1/place">MY PLACES</NavLink>
                </li>
            )}
            {auth.isLoggedIn && (
                <li>
                    <NavLink to="/places/new">ADD PLACE</NavLink>
                </li>
            )}
            {!auth.isLoggedIn && (
                <li>
                    <NavLink to="/auth">AUTHENTICATE</NavLink>
                </li>
            )}
            {auth.isLoggedIn && (
                <li>
                    <button onClick={auth.logout}>
                        LOGOUT
                    </button>
                </li>
            )}
        </ul>
    )
}

export default NavLinks;