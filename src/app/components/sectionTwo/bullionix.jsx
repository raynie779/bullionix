import React from "react"
import bullionixContent from "./bullionixContent"
import { icon } from "../../assets/img"

export default class Bullionix extends React.Component{
    constructor(){
        super()
        this.state = {
            list: bullionixContent
        }
    }
    render(){
        const bullionixData = this.state.list.map(items => {
            return(
                <div className="bullionix-contents" key={items.id}>
                    <img src={icon} alt="icon"/>
                    <h5>{items.title}</h5>
                    <p>{items.content}</p>
                </div>
            )
        })
        return(
            <div className="bullionix-set">
                {bullionixData}
            </div>
        )
    }
}