import React from "react";
import { Routes, Route, BrowserRouter,  } from "react-router-dom";
import Navbar from "./homePage/navbar/Navbar";
import AboutSection from "./homePage/aboutSection/AboutSection";
import Footer from "./homePage/footer/Footer";
import GrammarSection from "./homePage/grammarSection/GrammarSection";
import VocabularySection from "./homePage/vocabularySection/VocabularySection";
import GrammarPage from "./grammarPage/GrammarPage";
import VocabularyPage from "./vocabularyPage/VocabularyPage";
import GamePage from "./gamePage/gamePage";
import SignUpPage from "./RegistrationForm/signUpPage";
import LogInPage from "./RegistrationForm/logInPage";


function App(){
    return (
        <BrowserRouter>  
            <Navbar />
            <Routes>
                <Route path="/" element = {<div>
                        <AboutSection />
                        <GrammarSection />
                        <VocabularySection />
                        <Footer />
                     </div>} />
                     
                <Route path="grammar" element = {<GrammarPage />} />
                <Route path="vocabulary" element = {<VocabularyPage />} />
                <Route path="sign-up" element = {<SignUpPage />} />
                <Route path="log-in" element = {<LogInPage />} />
                <Route path="game" element = {<GamePage />} />
            </Routes>  
        </BrowserRouter>
    )
}

export default App;