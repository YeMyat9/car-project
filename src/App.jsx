import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import HighlightedCars from './pages/HighlightedCars';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logo.png';

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const navigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
        <Navbar.Brand href="#home">
            <img
              src={logo}
              alt="Car Dashboard Logo"
              style={{ height: '40px', width: 'auto' }} 
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                href="#dashboard"
                onClick={() => navigate('dashboard')}
                active={currentPage === 'dashboard'}
              >
                Dashboard
              </Nav.Link>
              <Nav.Link
                href="#highlighted-cars"
                onClick={() => navigate('highlighted-cars')}
                active={currentPage === 'highlighted-cars'}
              >
                Highlighted Cars
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        {currentPage === 'dashboard' && <Dashboard />}
        {currentPage === 'highlighted-cars' && <HighlightedCars />}
      </Container>
    </div>
  );
};

export default App;
