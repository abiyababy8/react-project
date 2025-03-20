import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import '../App.css';

// Import images from assets
import goldenRetriever from '../assets/golden-retriever.jpg';
import tabbyCat from '../assets/tabby-cat.jpg';
import beagleDog from '../assets/beagle.jpg';
import persianCat from '../assets/persian-cat.jpg';

// Sample Pet Data (Replace with API Later)
const petData = [
    { id: 1, name: 'Buddy', type: 'Dog', image: goldenRetriever, description: 'A friendly golden retriever that loves to play fetch.' },
    { id: 2, name: 'Whiskers', type: 'Cat', image: tabbyCat, description: 'A curious and playful tabby cat looking for a loving home.' },
    { id: 3, name: 'Charlie', type: 'Dog', image: beagleDog, description: 'A lovable beagle who enjoys belly rubs and long walks.' },
    { id: 4, name: 'Luna', type: 'Cat', image: persianCat, description: 'A sleepy but adorable Persian cat that loves cuddles.' },
];

function PetDetails() {
    const { id } = useParams(); // Get the pet ID from the URL
    const navigate = useNavigate(); // Navigation hook

    // Find the selected pet using the ID
    const pet = petData.find((p) => p.id === parseInt(id));

    if (!pet) {
        return <h2 className="text-center">Pet not found</h2>;
    }

    return (
        <Container className="mt-5 d-flex justify-content-center">
            <Card style={{ width: '20rem' }} className="text-center mb-5">
                <Card.Img variant="top" src={pet.image} className="pet-card-image" />
                <Card.Body>
                    <Card.Title>{pet.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{pet.type}</Card.Subtitle>
                    <Card.Text>{pet.description}</Card.Text>
                    <Button variant="primary" onClick={() => navigate('/pets')}>Back to Pets</Button>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default PetDetails;
