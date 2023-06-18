import React from "react";
import Button from "../button/Button";
import "./vocabularySection.css";

function VocabularySection() {

    return (
        <section id="vocabularySection">
            <div className="container container-box text-center">
                <div className="row row-box">
                    <div className="col col-box-description">
                        <h1>Vocabulary</h1>
                        <p>
                            Create a card, save your word in two languages, practice by flipping the card.
                        </p>
                        <Button url = "vocabulary" title = "Try it!" />
                    </div>
                    <div className="col col-box-image">
                        <img src="https://cdn-icons-png.flaticon.com/512/3898/3898090.png" alt="vocabulary-img"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VocabularySection;