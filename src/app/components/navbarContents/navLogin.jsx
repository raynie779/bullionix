import React from "react"
import { Link } from "react-router-dom";
import { Button } from "reactstrap"

export default class NavLogin extends React.Component {
    render(){
        return(
            <div className="login-btn">
                <Link className="navLogin" to="/">
                    Login
                </Link>
                <Button className="navBtn" to="/">
                    Create Account
                </Button>
            </div>
        )
    }
}