import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <div style={{ backgroundColor: '#ebeff0' }} className="p-5">
      <Container>
        <Row xs={1} md={2} className="g-5">
          <Col>
            <div className="p-3">
              <img
                className=" rounded rounded-5 img-fluid"
                src={`http://medicare.bold-themes.com/clinic/wp-content/uploads/sites/2/2015/12/doktorka.png`}
                alt=""
              />
            </div>
          </Col>
          <Col>
            <div>
              <h1 className="fw-bolder">
                <span className="text-danger">Healthy heart,</span> healthy
                family
              </h1>
              <p className="text-muted">
                We at <strong>DOCTERY</strong> Team are always fully focused on
                helping your family and you to overcame any hurdle, whether it’s
                chicken pox or just a seasonal flue.
              </p>
              <p className="text-muted">
                Dr. Stephanie Wosniack is is dedicated to providing her patients
                with the best possible care. We at DOCTERY are focused on
                helping you. After receiving successful care for various aches
                and pains over the years, Dr. Woshiack found her calling to help
                others get well.
              </p>
              <img
                src="http://medicare.bold-themes.com/clinic/wp-content/uploads/sites/2/2015/12/signature.png"
                alt=""
              />
              <br />
              <Button
                className="shadow my-3 rounded-pill"
                variant="outline-secondary"
              >
                Appointment
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
