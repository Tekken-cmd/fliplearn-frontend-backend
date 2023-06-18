import React from "react";
import './dropDown.css';

function DropDownIntermediate(props){
    
    return (
        <>
            <a className={props.onActive ? "dropdown-btn active" : "dropdown-btn"} 
                onClick={props.onClicked} href="#news">{props.title}<i className="fa fa-caret-down"></i></a>
            <div className={props.onActive ? "dropdown-container" : "dropdown-container isNotDisplayed"}>
                <a href="#home">Link 1</a>
                <a href="#home">Link 2</a>
                <a href="#home">Link 3</a>
            </div>
        </>
    )
}

export default DropDownIntermediate;