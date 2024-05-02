import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
export default function FormPage() {
  const [username, setUsername] = useState("");
  let formData = {};

  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    formData = {
      username: username,
    };
    console.log("formData", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <h1 className="text-secondary">Register</h1>
      </Row>
      <Row>
        <Col md={1}>
          <Form.Label htmlFor="username" className="text-primary">
            username
          </Form.Label>
        </Col>
        <Col md="auto">
          <Form.Control
            type="text"
            className="userText"
            value={username}
            onChange={handleChange}
          />
        </Col>
        <Col md={1}>
          <Form.Control type="submit" className="usersubmit" />
        </Col>
      </Row>
    </form>
  );
}
