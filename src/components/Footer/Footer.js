import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from 'react-bootstrap';
const Footer = () => {
  const arrowIcon = <FontAwesomeIcon icon={faArrowRight} />;

  return (
    <div style={{ backgroundColor: '#104161' }}>
      <Container>
        <Row xs={1} md={4} className="p-5 g-3 text-white">
          <Col>
            <h5>
              <img
                src="https://doctery-demo.themesion.com/wp-content/uploads/2021/01/logo-white-1.png"
                alt=""
                className="w-75"
              />
            </h5>
            <p>
              The great place of medical hospital center.Where you can remove
              your anxiety
            </p>
            <div className="fw-bolder d-flex">
              <h3>
                <i className="fab fa-facebook "></i>
              </h3>
              <h3>
                <i className="fab fa-instagram mx-3"></i>
              </h3>
              <h3>
                <i className="fab fa-dribbble"></i>
              </h3>
            </div>
          </Col>
          <Col>
            <h5>MediCare</h5>
            <p>General information</p>
            <p>Team</p>
            <p>Doctor's Profile</p>
            <p>Working hours</p>
            <p>Appointments</p>
            <p>Contact</p>{' '}
          </Col>
          <Col>
            <h5>About</h5>
            <p>Departments</p>
            <p>Partners</p>
            <p>News & blogs</p>
            <p>FAQs</p>
            <p>Treatments</p> <p>Galleries</p>
          </Col>
          <Col>
            <h5>Subscribe</h5>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Your email..."
                aria-label="Recipient's username"
              />
              <Button variant="secondary" size="sm">
                {arrowIcon}
              </Button>
            </InputGroup>
            <p>Get the latest news and updates right at your inbox.</p>
          </Col>
        </Row>
      </Container>
      <hr />
      <h6 className="text-center py-2 fw-bolder text-white">
        <small>Copyright © 2022 Kawsar Robin All rights reserved.</small>
      </h6>
    </div>
  );
};

export default Footer;
