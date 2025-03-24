import React, { useState } from "react";
import { Table, Button, Form, Container, Row, Col, Modal } from "react-bootstrap";
import "../App.css";

function AdminPanel() {
    const [selectedSection, setSelectedSection] = useState("users");

    // Sample Data
    const [users, setUsers] = useState([
        { id: 1, username: "john_doe", email: "john@example.com" },
        { id: 2, username: "jane_doe", email: "jane@example.com" }
    ]);

    const [pets, setPets] = useState([
        { id: 1, name: "Buddy", type: "Dog", description: "Friendly Golden Retriever", approved: false },
        { id: 2, name: "Whiskers", type: "Cat", description: "Curious tabby cat", approved: false }
    ]);

    const [lostPets, setLostPets] = useState([
        { id: 1, name: "Max", type: "Dog", status: "Pending" }
    ]);

    const [foundPets, setFoundPets] = useState([
        { id: 1, name: "Luna", type: "Cat", status: "Pending" }
    ]);

    // Modals
    const [showModal, setShowModal] = useState(false);
    const [editUser, setEditUser] = useState(null);
    const [editPet, setEditPet] = useState(null);

    // Handle user actions
    const handleDeleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const handleEditUser = (user) => {
        setEditUser(user);
        setShowModal(true);
    };

    const handleSaveUser = () => {
        setUsers(users.map(user => user.id === editUser.id ? editUser : user));
        setShowModal(false);
    };

    const handleApprovePet = (id) => {
        setPets(pets.map(pet => pet.id === id ? { ...pet, approved: true } : pet));
    };

    const handleRejectPet = (id) => {
        setPets(pets.filter(pet => pet.id !== id));
    };

    const handleApproveLostPet = (id) => {
        setLostPets(lostPets.map(pet => pet.id === id ? { ...pet, status: "Approved" } : pet));
    };

    const handleRejectLostPet = (id) => {
        setLostPets(lostPets.filter(pet => pet.id !== id));
    };

    const handleApproveFoundPet = (id) => {
        setFoundPets(foundPets.map(pet => pet.id === id ? { ...pet, status: "Approved" } : pet));
    };

    const handleRejectFoundPet = (id) => {
        setFoundPets(foundPets.filter(pet => pet.id !== id));
    };

    return (
        <Container fluid className="admin-panel">
            <Row>
                {/* Sidebar */}
                <Col md={3} className="sidebar">
                    <h3 className="text-center">Admin Panel</h3>
                    <ul className="sidebar-menu">
                        <li onClick={() => setSelectedSection("users")}>Manage Users</li>
                        <li onClick={() => setSelectedSection("pets")}>Manage Pets</li>
                        <li onClick={() => setSelectedSection("lostPets")}>Lost Pets</li>
                        <li onClick={() => setSelectedSection("foundPets")}>Found Pets</li>
                        <li onClick={() => setSelectedSection("adoptions")}>Approve Adoptions</li>
                    </ul>
                </Col>

                {/* Main Content */}
                <Col md={9} className="admin-content">
                    {selectedSection === "users" && (
                        <>
                            <h4>Manage Users</h4>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>
                                                <Button variant="warning" size="sm" onClick={() => handleEditUser(user)}>Edit</Button>{' '}
                                                <Button variant="danger" size="sm" onClick={() => handleDeleteUser(user.id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </>
                    )}

                    {selectedSection === "pets" && (
                        <>
                            <h4>Manage Pets</h4>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Description</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pets.map((pet) => (
                                        <tr key={pet.id}>
                                            <td>{pet.id}</td>
                                            <td>{pet.name}</td>
                                            <td>{pet.type}</td>
                                            <td>{pet.description}</td>
                                            <td>
                                                {!pet.approved && <Button variant="success" size="sm" onClick={() => handleApprovePet(pet.id)}>Approve</Button>}{' '}
                                                <Button variant="danger" size="sm" onClick={() => handleRejectPet(pet.id)}>Reject</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </>
                    )}

                    {selectedSection === "lostPets" && (
                        <>
                            <h4>Lost Pets Approval</h4>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {lostPets.map((pet) => (
                                        <tr key={pet.id}>
                                            <td>{pet.id}</td>
                                            <td>{pet.name}</td>
                                            <td>{pet.type}</td>
                                            <td>{pet.status}</td>
                                            <td>
                                                {pet.status === "Pending" && <>
                                                    <Button variant="success" size="sm" onClick={() => handleApproveLostPet(pet.id)}>Approve</Button>{' '}
                                                    <Button variant="danger" size="sm" onClick={() => handleRejectLostPet(pet.id)}>Reject</Button>
                                                </>}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </>
                    )}

                    {selectedSection === "foundPets" && (
                        <>
                            <h4>Found Pets Approval</h4>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {foundPets.map((pet) => (
                                        <tr key={pet.id}>
                                            <td>{pet.id}</td>
                                            <td>{pet.name}</td>
                                            <td>{pet.type}</td>
                                            <td>{pet.status}</td>
                                            <td>
                                                {pet.status === "Pending" && <>
                                                    <Button variant="success" size="sm" onClick={() => handleApproveFoundPet(pet.id)}>Approve</Button>{' '}
                                                    <Button variant="danger" size="sm" onClick={() => handleRejectFoundPet(pet.id)}>Reject</Button>
                                                </>}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default AdminPanel;
