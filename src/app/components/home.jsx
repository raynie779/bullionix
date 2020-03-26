import React from "react"
import Navbar from "./navbarContents/navbar";
import Header from "./header/header";
import SectionOne from "./sectionOne/sectionOne"
import SectionTwo from "./sectionTwo/sectionTwo"
import Cards from "./cards/cards"
import Join from "./join/join"
import Footer from "./footer/footer"


export default class Home extends React.Component {
    render() {
        const incrementIndex = this.props;
        return(
            <div>
                <Navbar />
                <Header />
                <SectionOne />
                <SectionTwo />
                <div className="card-section">
                    <h2>Highlights</h2>
                    <div className="cards">
                        {[0,1,2].map(number => (
                            <Cards 
                                incrementIndex={() =>
                                incrementIndex(number)}
                            />
                        ))}
                    </div>
                </div>
                <Join />
                <Footer />
            </div>
        )
    }
}
