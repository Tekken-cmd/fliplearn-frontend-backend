import React, { useState } from 'react';
import './logInPage.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const LogInPage = () => {
  const [contact, setContact] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  async function handleSubmit(event) { // to save user's contact info in Database
    event.preventDefault();
    await axios.post('http://localhost:8800/log-in', contact)
    .then(res => {
      if (res.data.Status === "Success") {
        navigate('/');
        sessionStorage.setItem('userID', res.data.Id);
        sessionStorage.setItem('userName', res.data.Name);
        // console.log(res.data.Id);
      } else {
        alert(res.data.Error);
      }
    })
    .catch(err => console.log(err));

    emptyString();
  }

  function emptyString(){ //Empty the string entered after "sign up" or "log in" is pressed.
    setContact(() => {
      return {
        email: "",
        password: ""
      }
    })
  }

  return (
      <div className="log-in-container">
    
        <h1>Welcome to FlipLearn!</h1>

        <form className="log-in-form">
          <input
            className='topInput'
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
          
          <button type="submit" className="logInButton" onClick={handleSubmit}>Log In</button>
          <p>Haven't registered yet? Then</p>
          <Link className="signUpLink" to="/sign-up">Sign up</Link>

        </form>
      </div>
  );
}

export default LogInPage;


