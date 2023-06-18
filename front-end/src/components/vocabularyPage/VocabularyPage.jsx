import React, {useEffect, useState} from "react";
import "./vocabularyPage.css";
import Card from "./card/Card.jsx";
import CreateCardForm from "./createCardForm/CreateCardForm";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";

function VocabularyPage() {
    const [cards, setCards] = useState([]);
    const userID = sessionStorage.getItem('userID');
    
    // retreive data from the database
    useEffect(() => {
        const fetchAllCards = async () => {
            try {
                const response = await axios.get("http://localhost:8800/flip_cards/" + userID);
                setCards(response.data);
            } catch(err) {
                console.log(err);
            }
        }
        fetchAllCards();
    })

    // deletetion from the database
    async function deleteCard(id) { // we pass the "id" property using props in Card.jsx 
        try {
            await axios.delete("http://localhost:8800/flip_cards/" + id);
            // window.location.reload();
        } catch(err) {
            console.log(err);
        }
        
        console.log("The card with the id: " + id + " was deleted!");
    }

    
    return (
        <div id="vocabularyPage">
            <div className="card-container">
            <CreateCardForm />
            <Container>
                <Row xs={2} md={4} lg={6}>
                    {cards.map((cardItem) => {
                        return (
                            <Col key={cardItem.id}>
                                <Card
                                    id={cardItem.id}
                                    userID = {cardItem.userID}
                                    fText={cardItem.frontText}
                                    bText={cardItem.backText}
                                    onDelete={deleteCard}
                                />
                            </Col>
                        );
                    }).reverse()} 
                </Row>
            </Container>
            </div>
        </div>
    )
}
export default VocabularyPage;