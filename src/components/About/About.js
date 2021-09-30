import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import AboutDetalse from '../AboutDetalse/AboutDetalse';
import { Container, Form, InputGroup, Row } from 'react-bootstrap';

const About = () => {
    const [userInput, setUserInput] = useState("");
    const [userData, setUserData] = useState([])

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`
        axios.get(url)
            .then(res => setUserData(res.data.meals))
    }, [userInput])

    const handaleChange = (e) => {
        setUserInput(e.target.value);
    }

    return (
        <div>
            <Container>
                {/* <input type="text" placeholder="search some thing" onChange={handaleChange} /> */}
                <InputGroup className="mb-3 mt-5 mx-auto w-50">
                <InputGroup.Text className="bg-success text-white px-3">@</InputGroup.Text>
                <Form.Control type="text" placeholder="search some thing" onChange={handaleChange}/>
                </InputGroup>
                
                <Row>
                    {
                        userData.map(user => <AboutDetalse 
                            user={user} 
                            key={user.idMeal}
                            />)
                    }
                </Row>

            </Container>
        </div>
    )
}

export default About
