import React from 'react';
import { Button, Container } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <div className="bg-light p-5">
      <Container className="d-flex justify-content-evenly">
        <div>
          <img
            className=" rounded rounded-5"
            src={`http://medicare.bold-themes.com/clinic/wp-content/uploads/sites/2/2015/12/doktorka.png`}
            alt=""
          />
        </div>
        <div>
          <h1 className="fw-bolder">
            <span className="text-danger">Healthy heart,</span> healthy family
          </h1>
          <p className="text-muted">
            We at <strong>DOCTERY</strong> Team are always fully focused on
            helping your family and you to overcame any hurdle, whether it’s
            chicken pox or just a seasonal flue.
          </p>
          <p className="text-muted">
            Dr. Stephanie Wosniack is is dedicated to providing her patients
            with the best possible care. We at MediCare are focused on helping
            you. After receiving successful care for various aches and pains
            over the years, Dr. Woshiack found her calling to help others get
            well.
          </p>
          <img
            src="http://medicare.bold-themes.com/clinic/wp-content/uploads/sites/2/2015/12/signature.png"
            alt=""
          />
          <br />
          <Button className="shadow my-3" variant="outline-secondary">
            Book Appointment
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
