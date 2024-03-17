import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const HomePageComponent = () => {
  return (
    <Container className='mt-5 '>
    <Row>
    
    <Col className='d-flex justify-content-center'><Card className='link'  as={Link} to="/rumble" style={{ width: '18rem',height: '18rem' }}>
      <Card.Body className='d-flex justify-content-center align-items-center'>
        <Card.Title>Rumble</Card.Title>
      </Card.Body>
    </Card></Col>
    <Col className='d-flex justify-content-center'><Card className='link'  as={Link} to="/navigo" style={{ width: '18rem',height: '18rem' }}>
      <Card.Body className='d-flex justify-content-center align-items-center'>
        <Card.Title>NAVIGO</Card.Title>
      </Card.Body>
    </Card></Col>
    <Col className='d-flex justify-content-center'><Card className='link'  as={Link} to="/x" style={{ width: '18rem',height: '18rem' }}>
      <Card.Body className='d-flex justify-content-center align-items-center'>
        <Card.Title>X</Card.Title>
      </Card.Body>
    </Card></Col>
    </Row>
    <Row className='mt-5'>
    <Col className='d-flex justify-content-center'><Card className='link'  as={Link} to="/pacificapps" style={{ width: '18rem',height: '18rem' }}>
      <Card.Body className='d-flex justify-content-center align-items-center'>
        <Card.Title>Pacific Apps</Card.Title>
      </Card.Body>
    </Card></Col>
    <Col className='d-flex justify-content-center'><Card className='link'  as={Link} to="/ibm" style={{ width: '18rem',height: '18rem' }}>
      <Card.Body className='d-flex justify-content-center align-items-center'>
        <Card.Title>IBM</Card.Title>
      </Card.Body>
    </Card></Col>
    </Row>
    </Container>
  );
}

export default HomePageComponent