import React, { useState, useEffect } from 'react';
import carsData from '../data/cars.json';
import logo from '../assets/logo.png';   
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const HighlightedCars = () => {
  const [highlightedCars, setHighlightedCars] = useState([]);

  useEffect(() => {
    const storedHighlightedCars = JSON.parse(localStorage.getItem('highlightedCars')) || [];
    setHighlightedCars(storedHighlightedCars);
  }, []);

  const handleHighlightCar = (car) => {
    const newHighlightedCars = [...highlightedCars, car];
    setHighlightedCars(newHighlightedCars);
    localStorage.setItem('highlightedCars', JSON.stringify(newHighlightedCars));
  };

  const handleRemoveHighlightCar = (car) => {
    const newHighlightedCars = highlightedCars.filter(c => c.id !== car.id);
    setHighlightedCars(newHighlightedCars);
    localStorage.setItem('highlightedCars', JSON.stringify(newHighlightedCars));
  };

  return (
    <Container>
      <div className="d-flex align-items-center mb-4">  
        <h1 className="display-4">Highlighted Cars</h1>  
      </div>
      <Row>
        {highlightedCars.map(car => (
          <Col md={4} key={car.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{car.brand}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{car.model}</Card.Subtitle>
                <Button variant="danger" onClick={() => handleRemoveHighlightCar(car)}>
                  Remove Highlight
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <h2 className="my-4">Select Cars to Highlight</h2>
      <Row>
        {carsData.map(car => (
          <Col md={4} key={car.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{car.brand}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{car.model}</Card.Subtitle>
                <Button variant="primary" onClick={() => handleHighlightCar(car)}>
                  Highlight
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HighlightedCars;
