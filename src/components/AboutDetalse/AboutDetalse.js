import React from 'react'
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AboutDetalse = (props) => {
    const { strCategory, strInstructions, strArea, strMealThumb, idMeal } = props.user;
    return (

        <Col lg={3}>
            <Card>
                <Card.Img src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strArea}</Card.Title>
                    <Card.Title>{strCategory}</Card.Title>
                    <Card.Text>{strInstructions.slice(0, 200)}</Card.Text>
                    <Link to={`/detalse/${idMeal}`}>
                        <Button variant="success">Go Detalse</Button>
                    </Link>

                </Card.Body>
            </Card>
        </Col>

    )
}

export default AboutDetalse
