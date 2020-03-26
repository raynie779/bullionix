import React from "react"
import Content from "../sectionOne/content"
import "./sectionOne.css"


export default class SectionOne extends React.Component {
    render() {
        return(
            <div className="row sectionOne">
                <div className="col-lg-6 sectionImage">
                </div>
                <div className="col-lg-6 sectionText">
                    <Content />
                </div>
            </div>
        )
    }
}