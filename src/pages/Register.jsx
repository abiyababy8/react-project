import React, { useState } from 'react';
import { Button, Col, Form, Row, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        alert("Registered Successfully!");
        navigate('/login'); // Redirect to login page
    };

    return (
        <Container>
            <Row className="justify-content-center mt-5 mb-5">
                <Col md={6}>
                    <div className="border border-secondary p-4 rounded">
                        <h3 className="text-center mb-4" style={{color:'#FF914D'}}>Create an Account</h3>
                        <Form onSubmit={handleSubmit}>
                            {/* Username Field */}
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={3}>Username:</Form.Label>
                                <Col sm={9}>
                                    <Form.Control
                                        type="text"
                                        name="username"
                                        placeholder="Enter username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                    />
                                </Col>
                            </Form.Group>

                            {/* Email Field */}
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={3}>Email:</Form.Label>
                                <Col sm={9}>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Enter email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </Col>
                            </Form.Group>

                            {/* Password Field */}
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={3}>Password:</Form.Label>
                                <Col sm={9}>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        placeholder="Enter password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </Col>
                            </Form.Group>

                            {/* Confirm Password Field */}
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={3}>Confirm Password:</Form.Label>
                                <Col sm={9}>
                                    <Form.Control
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                </Col>
                            </Form.Group>

                            {/* Already Have an Account? */}
                            <p className="text-center">
                                Already registered? <a href="/login">Login here</a></p>

                            {/* Register Button (Right-Aligned) */}
                            <Form.Group as={Row} className="mb-3">
                                <Col sm={{ span: 9, offset: 3 }} className="d-flex justify-content-end">
                                    <Button type="submit">Register</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Register