import React from "react";
import Button from "../button/Button";
import "./grammarSection.css"

function GrammarSection() {

    return (
        <section id="grammarSection">
            <div className="container container-box text-center">
                <div className="row row-box">
                    <div className="col col-box-image">
                        <img src="https://cdn-icons-png.flaticon.com/512/4359/4359738.png" alt="grammar-img"></img>       
                    </div>
                    <div className="col col-box-description">
                        <h1>Grammar</h1>
                        <p>
                            Level up your knowlodge with the Grammar of the language of your choice.
                        </p>
                        <Button url="grammar" title = "Learn more" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GrammarSection;