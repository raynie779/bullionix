import React from "react"
import "./cards.css"

export default function Card(){
    const classNames = ['card'].join(' ')
    return(
        <div className={classNames}>
            <div className="card-text">
                <h5>Bullionix new case</h5>
                <p>Lorem Ipsum Dolor</p>    
            </div>    
        </div>
    )
}