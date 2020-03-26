import React from "react"
import { facebook, instagram, twitter } from "../../assets/svg"

const FooterSocial = () => {
    return(
        <div className="col-lg-3 col-md-3 col-sm-6 footerSocial">
            <p className="link-header">Follow us</p>
            <div className="social-links">
                <a href='https://www.facebook.com' target='blank'>
                    <img src={facebook} alt='facebook' className="facebook" />
                </a>
                <a href='https://www.instagram.com' target='blank'>
                    <img src={instagram} alt='instagram' className="instagram" />
                </a>
                <a href='https://www.twitter.com' target='blank'>
                    <img src={twitter} alt='twitter' className="twitter" />
                </a>
            </div>
        </div>
    )
}

export default FooterSocial;