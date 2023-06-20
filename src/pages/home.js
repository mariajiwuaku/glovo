import React from 'react'
import { Link } from 'react-router-dom'
import { Nav , Navbar , FormControl, Button, Container } from 'react-bootstrap'

const Home = () => {
  return (
    <div>
       <Navbar bg="light" variant="light">
      <Container fluid>
        <Navbar.Brand>GLOVO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-collapse" />
        <Navbar.Collapse id="navbar-collapse">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
           
            <Button variant="btn-btn-success">Get Started</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Home
