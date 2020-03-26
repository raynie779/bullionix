import React from "react"
import Bullionix from "../sectionTwo/bullionix"
import "./sectionTwo.css"

class SectionTwo extends React.Component {
    render(){
        return(
            <div className="row bullionix">
                <div className="col-lg-5 how-to-use">
                    <h3>How to use Bullionix.</h3>
                    <p>Learm how to use bullionix to create<br /> beautiful rare earth collectibles<br /> with your Digix.</p>
                </div>
                <div className="col-lg-7 content">
                    <Bullionix />
                </div>
            </div>
        )
    }
}

export default SectionTwo;