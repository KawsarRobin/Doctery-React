import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
  const { serviceId } = useParams();

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/servicesDB.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const matchedService = services.find((service) => service.id == serviceId);
  console.log(matchedService);

  return (
    <Container className="p-5">
      <Card className="rounded rounded-3 shadow-lg bg-light h-25">
        <Card.Img
          variant="top"
          src={matchedService?.img}
          className="p-3 rounded rounded-3"
        />
        <Card.Body>
          <Card.Title>
            {' '}
            <h3>{matchedService?.name}</h3>{' '}
          </Card.Title>
          <Card.Text>{matchedService?.details}</Card.Text>
          <Link to="/home">
            <Button variant="outline-success">Back Home</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ServiceDetails;
