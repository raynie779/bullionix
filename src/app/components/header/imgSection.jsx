import React from "react"
import { firstcoin } from "../../assets/img";
import { secondcoin } from "../../assets/img";

export default class ImgSection extends React.Component {
    render(){
        return(
            <div className="coinSet">
                <div className="singleCoin">
                    <img src={secondcoin} alt="coin" className="smallCoin" />
                </div>
                <div className="coins">
                    <img src={firstcoin} alt="coin" className="bigCoin" />
                    <img src={firstcoin} alt="coin" className="biggerCoin" />
                    <img src={secondcoin} alt="coin" className="smallerCoin" />
                </div>
            </div>
        )
    }
}