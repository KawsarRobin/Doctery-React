import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';

const Services = () => {
  const [services, setServices] = useState('');

  useEffect(() => {
    fetch('./servicesDB.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  console.log(services);
  return (
    <>
      <Row xs={1} md={3} className="g-4">
        {/* {services?.map((service) => (
          <Service service={service}></Service>
        ))} */}
      </Row>
    </>
  );
};

export default Services;
