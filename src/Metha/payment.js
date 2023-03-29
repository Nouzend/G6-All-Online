import Navbar from "./sup-compo/navbar/navbarMain";
import Navbar2 from "./sup-compo/navbar/navbarTest";
import React, { useState } from "react";
import { Button, Form, Col, Row, Container } from "react-bootstrap";


const Payment = (product) => {
const [paymentMethod, setPaymentMethod] = useState("");
const [cardNumber, setCardNumber] = useState("");
const [nameOnCard, setNameOnCard] = useState("");
const [expiryDate, setExpiryDate] = useState("");
const [cvv, setCvv] = useState("");

const handleClick = () => {
  window.history.back();
}

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/"
    console.log(paymentMethod, cardNumber, nameOnCard, expiryDate, cvv);
  };

  return (
    <>
        <Navbar/>
        {/* <Navbar2/> */}
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formPaymentMethod">
              <Form.Label>Payment Method</Form.Label>
              <Form.Control
                as="select"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="">Select payment method</option>
                <option value="creditCard">Credit Card</option>
                <option value="debitCard">Debit Card</option>
                <option value="netBanking">Net Banking</option>
              </Form.Control>
            </Form.Group>
            {paymentMethod === "creditCard" || paymentMethod === "debitCard" ? (
              <>
                <Form.Group controlId="formCardNumber">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formNameOnCard">
                  <Form.Label>Name on Card</Form.Label>
                  <Form.Control
                    type="text"
                    value={nameOnCard}
                    onChange={(e) => setNameOnCard(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formExpiryDate">
                  <Form.Label>Expiry Date</Form.Label>
                  <Form.Control
                    type="text"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formCvv">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </Form.Group>
              </>
            ) : null}
            <Button type="submit">Make Payment</Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </>
  );
};


export default Payment;
