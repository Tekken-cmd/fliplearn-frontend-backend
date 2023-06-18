import React from "react";
import './dropDown.css';

function DropDownBeginner(props){
    
    return (
        <>
            <a className={props.onActive ? "dropdown-btn active" : "dropdown-btn"} 
                onClick={props.onClicked} href="#news">{props.title}<i className="fa fa-caret-down"></i></a>
            <div className={props.onActive ? "dropdown-container" : "dropdown-container isNotDisplayed"}>
                <a href="#1">verb + 는 것</a>
                <a href="#2">verb + 세요/으세요</a>
                <a href="#3">(받침) "ㄷ" + vowel</a>
                <a href="#4">(받침) "ㄹ" + ㅅ/ㅂ/ㄴ/ㅇ</a>
                <a href="#5">⭐ 크다</a>
            </div>
        </>
    )
}

export default DropDownBeginner;