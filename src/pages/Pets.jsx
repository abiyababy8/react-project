import React, { useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import goldenRetriever from '../assets/golden-retriever.jpg';
import tabbyCat from '../assets/tabby-cat.jpg';
import beagleDog from '../assets/beagle.jpg';
import persianCat from '../assets/persian-cat.jpg';
import { Link } from 'react-router-dom';

// Sample Pet Data (Replace with API later)
const petData = [
    { id: 1, name: 'Buddy', type: 'Dog', image: goldenRetriever, description: 'A friendly golden retriever.' },
    { id: 2, name: 'Whiskers', type: 'Cat', image: tabbyCat, description: 'A curious and playful tabby cat.' },
    { id: 3, name: 'Charlie', type: 'Dog', image: beagleDog, description: 'A lovable beagle who loves belly rubs.' },
    { id: 4, name: 'Luna', type: 'Cat', image: persianCat, description: 'A sleepy but adorable Persian cat.' },
];

function Pets() {
    const [selectedFilter, setSelectedFilter] = useState('All');

    // Filter Pets
    const filteredPets = selectedFilter === 'All'
        ? petData
        : petData.filter(pet => pet.type === selectedFilter);

    return (
        <Container className="mt-4">
            <h1 className="text-center">Available Pets for Adoption 🐾</h1>

            {/* Filter Buttons */}
            <div className="text-center mb-4">
                <Button variant="primary" className="m-1" onClick={() => setSelectedFilter('All')}>All</Button>
                <Button variant="success" className="m-1" onClick={() => setSelectedFilter('Dog')}>Dogs</Button>
                <Button variant="warning" className="m-1" onClick={() => setSelectedFilter('Cat')}>Cats</Button>
            </div>

            {/* Pets List */}
            <Row>
                {filteredPets.map((pet) => (
                    <Col key={pet.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <Card className="shadow-sm">
                            <Card.Img variant="top" src={pet.image} className="pet-card-image" style={{position:'relative'}}/>
                            <Card.Body className="text-center">
                                <Card.Title>{pet.name}</Card.Title>
                                <Card.Text>{pet.description.slice(0,28)}...</Card.Text>
                                <Link to={`/pets/${pet.id}`}><Button variant="info">View Details</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Pets;
