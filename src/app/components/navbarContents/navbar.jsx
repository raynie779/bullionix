import React from "react"
import { Link } from "react-router-dom";
import { logo } from "../../assets/img";
import NavbarLink from "./navLink"
import NavLogin from "./navLogin"
import "./navbar.css";

const Navbar = () => {
    return(
            <>
                <div className="upperSpace"></div>
                <div className="upperText">
                    <p>+ Get DGX</p>
                </div>
                <div className="navContent">
                    <nav className="navbar navbar-expand-md navbar-dark">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="logo" className="main-logo" />
                        </Link>
                        <NavbarLink />
                        <div className="navbar-login">
                            <NavLogin />
                        </div>
                    </nav>
                </div>
            </>
    )
}

export default Navbar;