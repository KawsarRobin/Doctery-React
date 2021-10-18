import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
  const {
    signInUsingGoogle,
    handleEmailChange,
    handlePasswordChange,
    registrationUsingEmail,
    handleNameChange,
    error,
    user,
  } = useAuth();

  return (
    <Container className="p-4 my-3 w-50 border shadow-lg border-3 rounded">
      <Form onSubmit={registrationUsingEmail}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            {' '}
            <h3>Register</h3>{' '}
          </Form.Label>

          <Form.Control
            onBlur={handleNameChange}
            type="text"
            placeholder="Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="City" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onBlur={handleEmailChange}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onBlur={handlePasswordChange}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          {user.email ? '' : <h4 className="text-danger my-2">{error}</h4>}
        </Form.Group>
        <Button className="w-25 my-3" variant="primary" type="submit">
          Sign Up
        </Button>
        <br />
        <br />

        <i
          onClick={signInUsingGoogle}
          class="fab fa-google fs-3 me-3 text-warning"
        ></i>
        <i className="fab fa-facebook fs-3 me-3 text-primary"></i>
        <i class="fab fa-github fs-3 me-3"></i>
      </Form>
      <br />
      <Link className="text-decoration-none" to="/login">
        <h5 className="text-dark"> Already Registered? </h5>{' '}
      </Link>
    </Container>
  );
};

export default Register;
