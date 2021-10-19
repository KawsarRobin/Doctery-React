import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div>
      <Container>
        <Row xs={1} md={2} className="gx-md-5 gx-sm-3 py-5">
          <Col className="pt-5 mb-5">
            <h6 className="text-danger fw-bold">Trust & stayout of anxiety</h6>
            <h1 className="fw-bolder">A DOCTERY</h1>

            <h5>
              The Hospital of the future, today, you trust to care for you love.
              we are always there for your safety.
            </h5>
            <br />
            <Link to="/login">
              <Button className="shadow" variant="secondary">
                Book An Appointment
              </Button>
            </Link>
          </Col>
          <Col>
            <img
              src="https://image.freepik.com/free-vector/flat-hand-drawn-patient-taking-medical-examination_52683-57829.jpg"
              alt=""
              className=" img-fluid "
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
