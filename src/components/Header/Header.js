import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        style={{
          backgroundColor: '#4763b6',
          fontWeight: '700',
          color: 'white',
        }}
        variant="light"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://doctery-demo.themesion.com/wp-content/uploads/2021/01/logo-white-1.png"
              alt=""
              className="w-25"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Nav className="ms-auto">
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link className="me-2" as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link className="me-2" as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link className="me-2" as={Link} to="/doctors">
                Doctors
              </Nav.Link>
              <Nav.Link className="me-2" as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link className="me-2" as={Link} to="/faq">
                FAQ
              </Nav.Link>
              {user.email ? (
                <Button className="me-2" onClick={logOut} variant="secondary">
                  logOut
                </Button>
              ) : (
                <Nav.Link className="me-2" as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
              <Navbar.Text className="text-decoration-none">
                <a className="text-decoration-none" href="#login">
                  {user?.displayName}
                </a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
