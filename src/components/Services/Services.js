import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('./servicesDB.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div style={{ backgroundColor: '#c6e2ec' }}>
      <Container className="py-5 overflow-hidden">
        <h2 className="text-center fw-bolder">
          Our <span className="text-danger">Treatments</span> For You
        </h2>
        <p className="text-secondary text-center">
          You`re guaranteed to find something that`s right for you.
        </p>
        <Row xs={1} md={3} className="g-5">
          {services?.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
