import React from "react"
import { Link } from "react-router-dom"
import { footerLogo } from "../../assets/img"
import FooterSocial from "../footer/footerSocial"
import "./footer.css"

 const Footer = () => {
    return(
        <footer className="main">
            <div className="row footer-content">
                <div className="col-lg-5 col-md-4 col-sm-6 footer-text">
                    <Link to="/" className="footer-logo">
                        <img src={footerLogo} alt="logo" className="footer-img" />
                    </Link>
                    <p>Copyright by (c) 2020 Bullionix</p>
                    <p>ALl rights reserved</p>
                </div>
                {/* <div className="col-lg-7 col-md-8 footer-links"> */}
                    <div className="col-lg-2 col-md-3 col-sm-6 company-link">
                        <p className="link-header">Company</p>
                        <div className="footer-link">
                            <Link to="/" className="link">
                                About
                            </Link>
                            <Link to="/" className="link">
                                Press
                            </Link>
                            <Link to="/" className="link">
                                Contact Info
                            </Link>
                            <Link to="/" className="link">
                                FAQ
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-6 legal-link">
                        <p className="link-header">Legal</p>
                        <div className="footer-link">
                            <Link to="/" className="link">
                                Privacy Policy
                            </Link>
                            <Link to="/" className="link">
                                Terms of service
                            </Link>
                        </div>
                    </div>
                    <FooterSocial />
                {/* </div> */}
            </div>
        </footer>
    )
}

export default Footer;