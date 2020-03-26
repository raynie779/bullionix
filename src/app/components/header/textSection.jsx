import React, { Component } from "react"
import { Button } from "reactstrap";

class TextSection extends Component {
    render(){
        return(
            <div className="header">
                <p className="headerTitle">Rare earth collectibles</p>
                <p className="headerText">An epic new way to interact with gold, art and crypto</p>
                <p className="headerSubText"> 
                    Bullionix is a first of its kind dapp where YOU are the goldsmith. 
                    You choose the casting mould, you melt down the gold, 
                    and you own the resulting collectible to display, share, or sell. 
                    All powered by Ethereum's NFT technology and Digix smart gold.
                </p>
                <Button className="headerBtn">
                    Browse the shop
                </Button>
            </div>
        )
    }
}

export default TextSection;