import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../../services/allApi';
//import { ToastContainer, toast } from 'react-toastify';
function Login() {
    const [data, setData] = useState({
        username: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        username: "",
        password: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });

        // Clear errors when user starts typing
        setErrors({ ...errors, [name]: "" });
    };
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        let valid = true;
        let newErrors = { username: "", password: "" };

        if (data.username.trim() === "") {
            newErrors.username = "Username is required.";
            valid = false;
        }

        if (data.password.trim() === "") {
            newErrors.password = "Password is required.";
            valid = false;
        } else if (data.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
            valid = false;

        }
        if (data.username === "admin" && data.password === "admin@123") {
            sessionStorage.setItem("user", JSON.stringify({ role: "admin", username: data.username }));
            alert("Welcome Admin!");
            navigate('/admin');
            return;
        }
        
        if (data.username === "shelter" && data.password === "shelter@123") {
            sessionStorage.setItem("user", JSON.stringify({ role: "shelter", username: data.username }));
            alert("Welcome Shelter!");
            navigate('/shelterpanel');
            return;
        }
        
        setErrors(newErrors);
        
        if (valid) {
            const result = await loginApi(data)
            // Save to session storage
            sessionStorage.setItem("user", JSON.stringify({ role: "user", username: data.username }));
        
            alert("Logging in....");
            navigate('/user-home');
        }
        
    };
    const handleClear = () => {
        setData({
            username: '',
            password: ''
        });
        setErrors({
            username: '',
            password: ''
        });
    };
    

    return (
        <>
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 border border-secondary p-5 rounded">
                        <h3 className="text-center mb-4" style={{ color: '#FF914D' }}>Log In</h3>
                        <Form onSubmit={handleLogin}>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>Username:</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        name="username"
                                        value={data.username}
                                        onChange={handleInputChange}
                                    />
                                    {errors.username && <small className="text-danger">{errors.username}</small>}
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>Password:</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={data.password}
                                        onChange={handleInputChange}
                                    />
                                    {errors.password && <small className="text-danger">{errors.password}</small>}
                                </Col>
                            </Form.Group>

                            <p className="text-center">New here? <a href="/register">Register here</a></p>

                            <Form.Group as={Row} className="mb-3">
                            <Col className="d-flex justify-content-end">
                                <Button variant="warning" type="button" onClick={handleClear} className='me-2'>Clear</Button>
                                <Button variant="primary" type="submit">Log In</Button>
                            </Col>
                        </Form.Group>

                        </Form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
    );
}

export default Login;
