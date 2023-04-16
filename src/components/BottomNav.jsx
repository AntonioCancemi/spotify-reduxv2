import { Container, Row, Col, Button } from "react-bootstrap";

const BottomNav = () => {
  return (
    <Container fluid className=" fixed-bottom bg-container pt-1">
      <Row>
        <Col lg={10} className="offset-lg-2">
          <Row>
            <Col
              xs={6}
              md={4}
              lg={2}
              className=" offset-3 offset-md-4 offset-lg-5 playerControls mt-1"
            >
              <Row>
                <Col xs={2}>
                  <a>
                    <img src="/Shuffle.png" alt="shuffle" />
                  </a>
                </Col>
                <Col xs={2}>
                  <a>
                    <img src="/Previous.png" alt="shuffle" />
                  </a>
                </Col>
                <Col xs={2}>
                  <a>
                    <img src="/Play.png" alt="shuffle" />
                  </a>
                </Col>
                <Col xs={2}>
                  <a>
                    <img src="/Next.png" alt="shuffle" />
                  </a>
                </Col>
                <Col xs={2}>
                  <a>
                    <img src="/Repeat.png" alt="shuffle" />
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className=" justify-content-center playBar pt-2 ">
            <Col xs={8} md={6}>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default BottomNav;
