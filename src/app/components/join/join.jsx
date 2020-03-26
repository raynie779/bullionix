import React from "react"
import { Button } from "reactstrap"
import "./join.css"


export default class Join extends React.Component {
    render() {
        return(
            <div className="club-section">
                <h4>Join the Bullionix Gold club</h4>
                <p>Stay on top with the bi-weekly newsletter<br /> all the goldsmith are ready</p>
                <form className="example">
                    <input type="email" placeholder="Enter email address" className="search" />
                    <Button type="submit" className="submit">
                        Subscribe
                    </Button>
                </form>
            </div>
        )
    }
}