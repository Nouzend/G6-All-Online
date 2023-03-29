import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import Navbar from "./sup-compo/navbar/navbarMain";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var data = JSON.stringify({
      username: username,
      password: password,
    });

    var config = {
      method: "post",
      url: "http://localhost:3002/user!/login?",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "Redirecting to homepage...",
        });
        setTimeout(() => {
          window.location.href = "/admin";
        }, 3000);
      })
      .catch(function (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Username or Password is incorrect!",
        });
      });
  };

  return (
    <>
    <Navbar/>
    <button primary onClick={() => window.location.href="/" }>back</button>
  <Container className="mt-5">
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <h2 className="text-center mb-4">Admin Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={handleUsername}
              value={username}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handlePassword}
              value={password}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" >
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
    </>
); 
};

export default AdminLogin;

