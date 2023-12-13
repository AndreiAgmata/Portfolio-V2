import app from "../styles/app.module.scss";
import content from "../styles/content.module.scss";
import contact from "../styles/contact.module.scss";
import variables from "../styles/variables.module.scss";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Form data:", formData);
    // Reset form fields after submission
    setFormData({
      name: "",
      phoneNumber: "",
      email: "",
      message: "",
    });
  };
  return (
    <>
      <div className={app.home} id="contact">
        <div className={contact.contact}>
          <h1>Reach out, lets talk!</h1>
          <div className={contact.socialMedia}>
            <FaInstagramSquare size="3em" />
            <FaLinkedin size="3em" />
            <MdEmail size="3.5em" />
          </div>
          <div className={contact.formWrapper}>
            <div className={contact.formContainer}>
              <h2>Send Me a Message</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="phoneNumber">
                      <Form.Label>Phone Number:</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="email">
                      <Form.Label>Email:</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="message">
                  <Form.Label>Message:</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
