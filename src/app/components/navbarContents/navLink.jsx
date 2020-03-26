import React from "react";
import { NavLink } from "react-router-dom";
import NavLogin from "./navLogin"

import "./navbar.css";

export default class NavbarLink extends React.Component {
    render() {
        return (
            <>
                {/* Toggler/collapsibe Button   */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsibleNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar links  */}
                <div
                    className="collapse navbar-collapse"
                    id="collapsibleNavbar"
                >
                    <ul className="navbar-nav links">
                        <li className="nav-item">
                            <NavLink className="link " to="/">
                                Shop
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="link" to="/">
                                Display Case
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="link" to="/">
                                Leaderboards
                            </NavLink>
                        </li>
                        {/* Dropdown */}
                        <li className="nav-item dropdown">
                            <a
                                className="link"
                                href="/"
                                id="navbardrop"
                                data-toggle="dropdown"
                            >
                                About
                            </a>
                            <div className="dropdown-menu">
                                <NavLink className="dropdown-item" to="/">
                                    Press
                                </NavLink>
                                <NavLink className="dropdown-item" to="/">
                                    Contact info
                                </NavLink>
                                <NavLink className="dropdown-item" to="/">
                                    FAQ
                                </NavLink>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink className="link" to="/">
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-linkLogin">
                        <NavLogin />
                    </div>
                </div>
                
            </>
        );
    }
}
