import React, { useState } from "react";
import "./createCardForm.css";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateCardForm() {
  const userID = sessionStorage.getItem('userID');
  const [card, setCard] = useState({
    frontText: "",
    backText: "",
    userID: userID
  });
  const navigate = useNavigate();

  // save data to MySQL database
  const submitCard = async (event) => {
    event.preventDefault(); //to prevent the auto refresh of the page when the add button is clicked
    console.log(userID);
    if (userID !== null) {
      try {
        await axios.post("http://localhost:8800/flip_cards", card)
        .then(res => {
          if (res.data.Status === "Success") {
            // console.log("UserID is: " + res.data.UserID);
          }})
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Please log in to start practicing!");
      navigate("/log-in");
    }

    updateInputField();
  }

  function updateInputField() {
    setCard({frontText:"", backText:"", userID: userID}); //to re-empty createCardForm field
  }

  return (
    <div>
      <form className="card-form">
        <textarea
          onChange={e => setCard({...card, frontText: e.target.value})}
          name="fText"
          placeholder="Enter the front text..."
          rows="2"
          value={card.frontText}
        />
        <textarea
          className="secondTextArea"
          onChange={e => setCard({...card, backText: e.target.value})}
          name="bText"
          placeholder="Enter the back text..."
          rows="2"
          value={card.backText}
        />
        <Fab className="addButton" onClick={submitCard}><AddIcon /></Fab>
      </form>
    </div>
  );
}

export default CreateCardForm;
