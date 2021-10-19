import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from './Doctor/Doctor';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('/doctorsDB.json')
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <div style={{ backgroundColor: '#ffebea' }}>
      <Container className="py-5">
        <h2 className="text-center fw-bolder">
          Meet Our <span className="text-danger">Doctors</span>
        </h2>
        <p className="text-secondary text-center">
          We work hard to so that you feel secure
        </p>
        <Row xs={2} md={4} className="g-4">
          {doctors.map((doctor) => (
            <Doctor key={doctor.id} doctor={doctor}></Doctor>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Doctors;
