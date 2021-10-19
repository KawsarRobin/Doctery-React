import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const FAQ = () => {
  return (
    <div
      className=" py-5"
      style={{ backgroundColor: '#cfecea', fontWeight: '700' }}
    >
      <Container>
        <h2 className="text-center fw-bolder">
          <span className="text-danger">Frequenty </span> Asked Question
        </h2>
        <p className="text-secondary text-center">
          You`re guaranteed to find something that`s right for you.
        </p>
        <Row xs={1} md={2} className="gx-md-5 gx-sm-3">
          <Col>
            <img
              src="https://image.freepik.com/free-vector/health-professional-team_52683-36023.jpg"
              alt=""
              className=" img-fluid py-5"
            />
          </Col>
          <Col className="pt-5 mb-5">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What’s the most common hear procedure?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      the most common type of heart surgery — the surgeon takes
                      a healthy artery or vein from elsewhere in your body and
                      connects it to supply blood past the blocked coronary
                      artery.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Are heart operations painful?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Although most heart surgeries are major surgeries, they are
                    typically not a source of long-term pain. Even in the short
                    term, the pain may be less severe than with operations on
                    other areas of the body. Opioids are used when necessary,
                    but there are many other pain management options, including:
                    Nerve blocks.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Do you use anesthetics for patients?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    General anesthetics make patients unconscious during the
                    procedure while local and regional anesthetics just numb
                    part of the body and allow patients to remain awake.
                    Depending on the type of pain relief needed, doctors deliver
                    anesthetics by injection, inhalation, topical lotion, spray,
                    eye drops, or skin patch.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    How long does the recovery take?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Depending on your state of health, it can be shorter or
                    longer. An average time length that a lot of people say with
                    an abdominal incision is about one to two months or even
                    just six weeks to where you really want to let it heal and
                    you try not to put too much pressure on your abdomen during
                    that time.J
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FAQ;
