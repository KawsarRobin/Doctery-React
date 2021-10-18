import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
  const { id, name, img, details } = props.service;
  return (
    <Col>
      <Card className="rounded rounded-3 shadow-lg bg-light h-100">
        <Card.Img variant="top" src={img} className="p-3 rounded rounded-3" />
        <Card.Body>
          <Card.Title>
            {' '}
            <h3>{name}</h3>{' '}
          </Card.Title>
          <Card.Text>
            {' '}
            <span>{details.slice(0, 150)}......</span>{' '}
          </Card.Text>
          <Link to={`/service/${id}`}>
            <Button className="w-50" variant="outline-secondary">
              View Details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
