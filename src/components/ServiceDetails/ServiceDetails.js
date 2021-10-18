import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router';

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
    <Container>
      <Card className="rounded rounded-3 shadow-lg bg-light h-100">
        <Card.Img
          variant="top"
          src={matchedService?.img}
          className="p-3 rounded rounded-3"
        />
        <Card.Body>
          <Card.Title>{matchedService?.name}</Card.Title>
          <Card.Text>{matchedService?.details?.slice(0, 150)}......</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ServiceDetails;
