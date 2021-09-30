import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

const Conteck = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={6} className="mx-auto mt-5">
                        <Card className="bg-light">
                            <Card.Body>
                                <Form.Group>
                                    <Form.Text>Enter Name: </Form.Text>
                                    <Form.Control type="text" placeholder="enter a name" className="mt-2" />
                                </Form.Group>
                                <Form.Group className="mt-4">
                                    <Form.Text >Enter a password: </Form.Text>
                                    <Form.Control type="password" placeholder="enter a password" className="mt-2" />
                                </Form.Group>
                                <Button type="submit" variant="success" className="mt-3 w-100">Submit</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Conteck
