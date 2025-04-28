import React, { useState } from "react";
import { Table, Button, Container, Row, Col, Card, Form, Modal } from "react-bootstrap";
import "../../App.css";

function Profile() {
  const [selectedSection, setSelectedSection] = useState("profile");
  const [showFoundPetModal, setShowFoundPetModal] = useState(false);
  const [showAddPetModal, setShowAddPetModal] = useState(false);
  const [showLostPetModal, setShowLostPetModal] = useState(false);
  const [showAdoptPetModal, setShowAdoptPetModal] = useState(false);
  const [selectedLostPet, setSelectedLostPet] = useState(null);
  const [selectedPetForAdoption, setSelectedPetForAdoption] = useState(null);

  // Sample User Data
  const user = { username: "john_doe", email: "john@example.com", phone: "123-456-7890" };

  // Sample Data
  const myPets = [
    { id: 1, name: "Buddy", type: "Dog", description: "Golden Retriever" },
    { id: 2, name: "Whiskers", type: "Cat", description: "Playful tabby cat" }
  ];

  const petsGivenForAdoption = [
    { id: 10, name: "Tommy", status: "Pending" },
    { id: 11, name: "Snowy", status: "Adopted" }
  ];

  const adoptionRequests = [
    { id: 12, petName: "Luna", status: "Pending" },
    { id: 13, petName: "Charlie", status: "Approved" }
  ];

  const myLostPets = [
    { id: 14, name: "Rocky", foundStatus: "Not Found" },
    { id: 15, name: "Milo", foundStatus: "Found" }
  ];

  // Functions
  const handleReportFoundPet = (pet) => {
    setSelectedLostPet(pet);
    setShowFoundPetModal(true);
  };

  const handleAdoptPet = (pet) => {
    setSelectedPetForAdoption(pet);
    setShowAdoptPetModal(true);
  };

  return (
    <Container fluid className="user-dashboard">
      <Row>
        {/* Sidebar */}
        <Col md={3} className="sidebar">
          <h3 className="text-center">User Dashboard</h3>
          <ul className="sidebar-menu">
            <li className={selectedSection === "profile" ? "active" : ""} onClick={() => setSelectedSection("profile")}>View Profile</li>
            <li className={selectedSection === "myPets" ? "active" : ""} onClick={() => setSelectedSection("myPets")}>View My Pets</li>
            <li className={selectedSection === "adoptionStatus" ? "active" : ""} onClick={() => setSelectedSection("adoptionStatus")}>Pet Adoption Status</li>
            <li className={selectedSection === "lostPetsStatus" ? "active" : ""} onClick={() => setSelectedSection("lostPetsStatus")}>My Lost Pets Status</li>
          </ul>
        </Col>

        {/* Main Content */}
        <Col md={9} className="dashboard-content">
          {selectedSection === "profile" && (
            <Card className="p-4">
              <h4>Profile Information</h4>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <Button variant="primary">Edit Profile</Button>
            </Card>
          )}

          {selectedSection === "myPets" && (
            <>
              <h4>My Pets</h4>
              <Container>
                <Row>
                  {myPets.map((pet) => (
                    <Col key={pet.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                      <Card className="shadow-sm">
                        <Card.Body className="text-center">
                          <Card.Title>{pet.name}</Card.Title>
                          <Card.Text>{pet.description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Container>
            </>
          )}

          {/* Pet Adoption Status Section */}
          {selectedSection === "adoptionStatus" && (
            <>
              <h4>Pet Adoption Status</h4>

              <h5 className="mt-4">Pets You Have Given for Adoption</h5>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Pet Name</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {petsGivenForAdoption.map((pet) => (
                    <tr key={pet.id}>
                      <td>{pet.name}</td>
                      <td>{pet.status}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              <h5 className="mt-5">Pets You Are Adopting</h5>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Pet Name</th>
                    <th>Request Status</th>
                  </tr>
                </thead>
                <tbody>
                  {adoptionRequests.map((request) => (
                    <tr key={request.id}>
                      <td>{request.petName}</td>
                      <td>{request.status}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          )}

          {/* My Lost Pets Status Section */}
          {selectedSection === "lostPetsStatus" && (
            <>
              <h4>My Lost Pets Status</h4>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Pet Name</th>
                    <th>Found Status</th>
                  </tr>
                </thead>
                <tbody>
                  {myLostPets.map((pet) => (
                    <tr key={pet.id}>
                      <td>{pet.name}</td>
                      <td>{pet.foundStatus}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              <div className="mt-4">
                <h5>Report a Lost Pet</h5>
                <Button variant="warning" onClick={() => setShowLostPetModal(true)}>Report Lost Pet</Button>
              </div>
            </>
          )}
        </Col>
      </Row>

      {/* Modals stay as you had them (no change needed) */}
      {/* Modal for Pet Adoption Form */}
      <Modal show={showAdoptPetModal} onHide={() => setShowAdoptPetModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedPetForAdoption ? `Adopt ${selectedPetForAdoption.name}` : "Adopt a Pet"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedPetForAdoption ? (
            <Form>
              <Form.Group>
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your full name" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Contact Number</Form.Label>
                <Form.Control type="text" placeholder="Enter your phone number" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter your address" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Reason for Adoption</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Why do you want to adopt this pet?" />
              </Form.Group>
            </Form>
          ) : (
            <p>Loading pet details...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAdoptPetModal(false)}>Cancel</Button>
          <Button variant="primary">Submit Request</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Reporting a Lost Pet */}
      <Modal show={showLostPetModal} onHide={() => setShowLostPetModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Report a Lost Pet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Pet Name</Form.Label>
              <Form.Control type="text" placeholder="Enter pet name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Type</Form.Label>
              <Form.Control type="text" placeholder="Dog, Cat, etc." />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Describe the pet" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLostPetModal(false)}>Cancel</Button>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Reporting Found Pet */}
      <Modal show={showFoundPetModal} onHide={() => setShowFoundPetModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Report Found Pet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedLostPet && (
            <>
              <p>You are reporting <strong>{selectedLostPet.name}</strong> as found.</p>
              <Form>
                <Form.Group>
                  <Form.Label>Where did you find the pet?</Form.Label>
                  <Form.Control type="text" placeholder="Enter location" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Additional Details</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Describe the situation" />
                </Form.Group>
              </Form>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowFoundPetModal(false)}>Cancel</Button>
          <Button variant="primary">Submit Report</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Adding Pet for Adoption */}
      <Modal show={showAddPetModal} onHide={() => setShowAddPetModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Give a Pet for Adoption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Pet Name</Form.Label>
              <Form.Control type="text" placeholder="Enter pet name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Type</Form.Label>
              <Form.Control type="text" placeholder="Dog, Cat, etc." />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Describe the pet" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddPetModal(false)}>Cancel</Button>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Profile;
