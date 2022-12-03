import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import "./register.css";

export const Register = ({
  handleonChange,
  handleonSubmit,
  username,
  password,
  newpassword
}) => {
  return (
    <Container className="design">
      <Row>
        <Col>
          <Form
            autoComplete="off"
            className="form-design"
            onSubmit={handleonSubmit}
          >
            <h2>Registration Form</h2>
            <hr />

            <Form.Group className="mb-3">
              <Form.Label>Full Name </Form.Label>
              <Form.Control
                name="username"
                value={username}
                type="text"
                placeholder="Enter name"
                onChange={handleonChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                value="email"
                placeholder="Enter email"
                onChange={handleonChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                placeholder="enter here"
                onChange={handleonChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Re-enter Password</Form.Label>
              <Form.Control
                type="newpassword"
                name="newpassword"
                value={newpassword}
                placeholder="enter here"
                onChange={handleonChange}
              />
            </Form.Group>

            <Button variant="dark" type="submit" block>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
