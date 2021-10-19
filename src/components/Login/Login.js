import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const {
    signInUsingGoogle,
    signInUsingEmailAndPassword,
    handleEmailChange,
    handlePasswordChange,
    error,
    user,
    setError,
    setUser,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home';

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        setError('');
        setUser(result.user);
        history.push(redirect_uri);
      })
      .catch((error) => setError(error.message));
  };

  const handleEmailSignIn = (e) => {
    e.preventDefault();
    signInUsingEmailAndPassword().then((result) => {
      setError('');
      setUser(result.user);
      history.push(redirect_uri);
    });
  };

  return (
    <Container className="p-5 my-5 w-50 border shadow-lg border-2  rounded">
      <Form onSubmit={handleEmailSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            {' '}
            <h3>Please Login</h3>{' '}
          </Form.Label>
          <Form.Control
            onBlur={handleEmailChange}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordChange}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        {user.email ? '' : <h4 className="text-danger my-2">{error}</h4>}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button className="w-25 my-3" variant="primary" type="submit">
          Login
        </Button>{' '}
        <br />
        <i
          onClick={handleGoogleSignIn}
          className="fab fa-google fs-3 me-3 text-warning"
        ></i>
        <i className="fab fa-facebook fs-3 me-3 text-primary"></i>
        <i className="fab fa-github fs-3 me-3"></i>
      </Form>
      <br />
      <Link className="text-decoration-none" to="register">
        <h5 className="text-dark"> Don't Have Account ? </h5>{' '}
      </Link>
    </Container>
  );
};

export default Login;
