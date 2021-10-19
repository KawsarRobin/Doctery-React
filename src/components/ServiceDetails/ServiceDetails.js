import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const { isLoading } = useAuth();
  console.log(isLoading);

  const [services, setServices] = useState([]);
  const [matchedService, setMatchedService] = useState({});

  useEffect(() => {
    fetch('/servicesDB.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  useEffect(() => {
    const FindService = services.find(
      (service) => service.id === JSON.parse(serviceId)
    );
    setMatchedService(FindService);
  }, [services]);

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
          <Link to="/services">
            <Button variant="outline-success">Book Appointment</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ServiceDetails;
