import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (

        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">BgBlog</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link> <Link to="/home">Home</Link> </Nav.Link>
                        <Nav.Link><Link to="/about">about</Link></Nav.Link>
                        <Nav.Link><Link to="/conteck">conteck</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>

    )
}

export default Header
