import React from "react";
import ContentData from "../sectionOne/contentData"

const Content = () => {

    const contents = ContentData.map(items => {
        return(
            <div className="sectContent content" key={items.id}>
                <div className="numContent">
                    <p>{items.number}</p>
                </div>
                <div className="textContent">
                    <h5>{items.title}</h5>
                    <p>{items.text}</p>
                </div>
            </div>
        )
    })
    return(
        <div>
            {contents}
        </div>
    )
}

export default Content;