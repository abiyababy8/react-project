import React, { useState } from 'react';
import { Container, Card, Button, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import goldenRetriever from '../assets/golden-retriever.jpg';
import tabbyCat from '../assets/tabby-cat.jpg';

// Sample User Data (Replace with Real Data from Auth Context/API)
const sampleUser = {
    name: "John Doe",
    email: "johndoe@example.com",
    profilePicture: "data:image/png;base64,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",  // Placeholder image
    adoptedPets: [
        { id: 1, name: "Buddy", type: "Dog", image: goldenRetriever},
        { id: 2, name: "Whiskers", type: "Cat", image: tabbyCat },
    ],
};

function Profile() {
    const [user, setUser] = useState(sampleUser);
    const navigate = useNavigate();

    const handleEditProfile = () => {
        alert("Edit Profile clicked! (Feature coming soon)");
    };

    const handleLogout = () => {
        alert("Logging out...");
        navigate("/login"); // Redirect to Login Page after logout
    };

    return (
        <Container className="mt-5 d-flex justify-content-center mb-5">
            <Card style={{ width: '25rem' }} className="shadow-lg text-center">
                <Card.Img variant="top" src={user.profilePicture} className="rounded-circle mx-auto mt-3" style={{ width: "100px", height: "100px" }} />
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Subtitle className="mb-3 text-muted">{user.email}</Card.Subtitle>

                    {/* Adopted/Favorite Pets Section */}
                    <h5 className="mt-4">Adopted Pets 🐾</h5>
                    {user.adoptedPets.length > 0 ? (
                        <ListGroup>
                            {user.adoptedPets.map((pet) => (
                                <ListGroup.Item key={pet.id} className="d-flex align-items-center">
                                    <img src={pet.image} alt={pet.name} className="rounded-circle me-3" style={{ width: "40px", height: "40px" }} />
                                    {pet.name} ({pet.type})
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    ) : (
                        <p className="text-muted">No adopted pets yet.</p>
                    )}

                    {/* Action Buttons */}
                    <div className="mt-4">
                        <Button variant="warning" className="me-2" onClick={handleEditProfile}>Edit Profile</Button>
                        <Button variant="danger" onClick={handleLogout}>Logout</Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Profile;
