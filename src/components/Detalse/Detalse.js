import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from "axios"
import { Card, Col, Container, Row } from 'react-bootstrap';

const Detalse = () => {
    const [detalses, setDetalses] = useState({});
    const { userId } = useParams();


    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${userId}`
        axios.get(url)
            .then(res => setDetalses(res.data.meals[0]))
    }, [])

    const { strMealThumb, strMeal, strArea,strInstructions } = detalses;

    return (
        <div>
            <Container>
                <Row  >
                    <Col lg={4} className="mx-auto">
                        <Card>
                            <Card.Img src={strMealThumb} />
                            <Card.Body>
                                <Card.Title>{strMeal}</Card.Title>
                                <Card.Text>{strArea}</Card.Text>
                                <Card.Text>{strInstructions?.slice(0,400)}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default Detalse
