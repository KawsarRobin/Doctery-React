import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = (props) => {
  const { cls, name, img } = props.doctor;
  return (
    <Col>
      <Card
        style={{ backgroundColor: '#e6e3df' }}
        className="text-center text-secondary fw-bold"
      >
        <Card.Img variant="top" src={img} className="p-4 rounded-circle" />
        <Card.Body>
          <h5>{name}</h5>
          <div className="d-flex text-black justify-content-evenly">
            <span>
              <i className="fab fa-twitter"></i>
            </span>
            <span>
              <i className="fab fa-facebook-f"></i>
            </span>
            <span>
              <i className="fab fa-google-plus-g"></i>
            </span>
            <span>
              <i className="fab fa-linkedin-in"></i>
            </span>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Doctor;
