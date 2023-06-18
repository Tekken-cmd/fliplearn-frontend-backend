import React from "react";
import "./rotatingCard.css"

function RotatingCard(props) {
    
    return (
        <div className="r-card">
            <div className="r-card-side r-front rotate-front">
                <div><h4>{props.fText}</h4></div>
            </div>
            <div className="r-card-side r-back rotate-back">
                <div><h4>{props.bText}</h4></div>
            </div>
        </div>
    )
}

export default RotatingCard;