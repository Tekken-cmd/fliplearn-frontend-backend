import React, { useEffect, useState } from "react";
import Logo from "../logo/Logo";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const customFont = {
    fontFamily: "Ubuntu",
    fontWeight: 200,
};
const navbarStyle = {
    backgroundColor: "#0b2239",
    padding: 1,
};

function Navbar() {
    const [flag, setFlag] = useState(false);
    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();
    const userName = sessionStorage.getItem('userName');
    
    axios.defaults.withCredentials = true;
    
    useEffect(() => {
        axios.get('http://localhost:8800')
        .then(res => {
            if(res.data.Status === "Success") {
                setAuth(true);
            } else {
                setAuth(false);
                console.log(res.data.Error);
            }
        })
        .catch(err => console.log(err));
    })

    const handleDeleteCookie = () => {
        axios.get('http://localhost:8800/log-out')
        .then(res => {
            navigate('/log-in');
            sessionStorage.removeItem('userID');
            sessionStorage.removeItem('userName');
        }).catch (err => {
            console.log(err);
        });
    }
 
    function handleFlag() {
        setFlag(!flag);
    }

    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark shadow px-4 m-0" style={navbarStyle}>
                <div className = "container-fluid">
                    
                    <Link className="navbar-brand text-white" to="/"><Logo /><h1 style={customFont}>fliplearn</h1></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" onClick={handleFlag}
                            data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={flag ? "collapse show navbar-collapse" : "collapse navbar-collapse"} id="navbarTogglerDemo01">
                        <ul className="navbar-nav ms-auto" onClick={handleFlag}>
                            {auth ? <li><p>Welcome, {userName}!</p></li> : null}
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/"><i className="navbar-icon fa-solid fa-house-chimney"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="grammar">Grammar</Link>
                                
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="vocabulary">Vocabulary</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="game">Games</Link>
                            </li>
                            {auth ? 
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" onClick={handleDeleteCookie}>Log out</Link>
                                    </li> 
                                  :
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="log-in">Log in</Link>
                                    </li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;