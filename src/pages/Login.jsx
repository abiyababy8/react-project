import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
function Login() {
    return (
        <>
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 border border-secondary p-5 rounded">
                    <h3 className="text-center mb-4" style={{color:'#FF914D'}}>Log In</h3>
                        <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    Username:
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="email" placeholder="Username" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    Password:
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="password" placeholder="Password" />
                                </Col>
                            </Form.Group>
                                <p className="text-center">New here? <a href="/register">Register here</a></p>
                            <Form.Group as={Row} className="mb-3">
                                <Col sm={{ span: 10, offset: 2 }} className="d-flex justify-content-end">
                                    <Button type="submit">Log In</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
    )
}

export default Login