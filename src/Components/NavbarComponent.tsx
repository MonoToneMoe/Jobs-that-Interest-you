import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="navBg">
      <Container>
        <Navbar.Brand className='navLink' as={Link} to="/">Jobs That Interest Me</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='navLink' as={Link} to="/rumble">Rumble</Nav.Link>
            <Nav.Link className='navLink' as={Link} to="/navigo">Navigo</Nav.Link>
            <Nav.Link className='navLink' as={Link} to="/x">X</Nav.Link>
            <Nav.Link className='navLink' as={Link} to="/pacificapps">Pacific Apps</Nav.Link>
            <Nav.Link className='navLink' as={Link} to="/ibm">IBM</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent