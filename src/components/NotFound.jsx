import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Row className="justify-content-center mt-5 text-light">
        <Col id="notFound" xs={12} md={8} lg={6}>
          <br />
          <br />
          <br />
          <br />
          <h2>404 - Page not found :(</h2>
          <Button
            variant="info"
            onClick={() => {
              navigate("/");
            }}
          >
            GO HOME
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
