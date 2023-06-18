import React, { useState } from 'react';
import './signUpPage.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


const SignUpPage = () => {
  const [contact, setContact] = useState({
    userName: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  function handleSubmit(event) { // to save user's contact info in Database (future work) 
    event.preventDefault();
    if (contact.userName.length > 0 && contact.email.length > 0 && contact.password.length >0) {
      axios.post('http://localhost:8800/sign-up', contact)
      .then(res => {
        if (res.data.Status === "Success") {
          navigate('/log-in');
        } else {
          alert("Error");
        }
      })
      .then(err => console.log(err));
    } else {
      alert("Please, enter your data correctly!");
    }
   
    
    emptyString();
  }

  function emptyString(){ //Empty the string entered after "sign up" or "log in" is pressed.
    setContact(() => {
      return {
        userName: "",
        email: "",
        password: ""
      }
    })
  }

  return (
    <div className="sign-up-container">
    
      <h1>Create an account!</h1>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <input
          className='topInput'
          onChange={e => setContact({...contact, userName: e.target.value})}
          name="userName"
          placeholder="User name"
          value={contact.userName}
        />
        <input
          className='middleInput'
          onChange={e => setContact({...contact, email: e.target.value})}
          type='email'
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <input
          className="bottomInput"
          onChange={e => setContact({...contact, password: e.target.value})}
          type='password'
          name="password"
          placeholder="Password"
          value={contact.password}
        />

        <button type="submit" className="signUpButton">Sign Up</button>
        <p>Already have an account? Then</p>
        <Link className="logInLink" to="/log-in">Log in</Link>
        
      </form>
    </div>
  );
}

export default SignUpPage;