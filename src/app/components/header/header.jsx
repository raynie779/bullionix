import React from "react"
import TextSection from "../header/textSection"
import ImgSection from "../header/imgSection"
import "./header.css"

class Header extends React.Component {
    render(){
        return(
            <div className="row headerContent">
                <div className="col-lg-6">
                    <TextSection />
                </div>
                <div className="col-lg-6">
                    <ImgSection />
                </div>
            </div>
        )
    }
}

export default Header;