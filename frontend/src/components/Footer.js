import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container bg="dark" variant="dark">
        <Row>
          <Col className="text-center py-3">Copyright &copy; Tandem</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
