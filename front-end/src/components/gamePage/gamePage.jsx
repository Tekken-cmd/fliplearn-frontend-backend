import React from 'react';
import './gamePage.css';
import { Link } from "react-router-dom";


const GamePage = () => {
  
  return (
    <>
    <div id='gameSection'>
        <div className='game-info'>
            <h1>Word Champ</h1>
            <p>It is an online game which gives you the opportunity of playing with the words and to gather points.</p>
            <Link className='ios-btn' to=''>Download on iOS</Link>
            <Link className='android-btn' to='https://drive.google.com/file/d/1hp4sGRQSUENKHe_A3lwWLmcMDTUpoRBs/view?usp=drive_link'>Download on Android</Link>
        </div>
        <img className='galaxy-img' src={require('./images/galaxy1.png')} alt='galaxy-img' />
    </div>
    
    <div>
        <i className="game-icon fa-solid fa-gamepad"></i>
    </div>
    </>
        
  )
}

export default GamePage;