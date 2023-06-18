import React from "react";
import RotatingCard from "../rotatingCard/RotatingCard";
import "./aboutSection.css";

function AboutSection() {
    

    return (
        <section id="aboutSection">
            <div className="container container-box text-center">
                <div className="row row-box">
                    <div className="col col-box-description">
                        <h1>Learn the easy way</h1>
                        <p>
                            FlipLearn aims to help anyone, willing to master a second 
                            language, make the learning process easy by improving their vocabulary on
                            flip-the-card bases.
                        </p>
                    </div>
                    <div className="col col-box-image">
                        <RotatingCard fText="Hello" bText="안녕하세요"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;