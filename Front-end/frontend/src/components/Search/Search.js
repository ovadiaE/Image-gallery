import React from "react";
import "./Search.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
const Search = () => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Form>
            <Row>
              <Col xs={9}>
                <Form.Control placeholder="Search Image" />
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  Search
                </Button>{" "}
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
