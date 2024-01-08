import app from "../styles/app.module.scss";
import content from "../styles/content.module.scss";
import contact from "../styles/contact.module.scss";
import variables from "../styles/variables.module.scss";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import gsap from "gsap";
import { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
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

  let contactHeader = useRef();
  let yoyo = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = new gsap.timeline({
        scrollTrigger: {
          trigger: contactHeader,
          start: "top center+=100",
          // toggleActions: "play none none reverse",
        },
      });

      tl.from(contactHeader, 0.7, {
        scale: 0.9,
        ease: Power3.easeOut,
      });
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: JSON.stringify(formData),
        headers: { "Content-type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData["message"]);

      alert("Message successfully sent");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
    }
  };
  return (
    <>
      <div className={app.home} id="contact">
        <div className={contact.contact}>
          <h1
            className={variables.title_solid_dark}
            ref={(el) => (contactHeader = el)}
          >
            Reach out, lets talk!
          </h1>
          <div className={contact.socialMedia}>
            <FaInstagramSquare
              size="3em"
              onClick={() =>
                window.open("https://www.instagram.com/andreiagmata.dev")
              }
            />
            <FaLinkedin
              size="3em"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/andrei-agmata-540245252/"
                )
              }
            />
            <MdEmail
              size="3.5em"
              onClick={() =>
                (window.location.href = "mailto:aagmata1124@gmail.com")
              }
            />
          </div>
          <div className={contact.formWrapper}>
            <div className={contact.formContainer}>
              <h2 ref={(el) => (yoyo = el)}>Send Me a Message!</h2>
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
                  <Col md={6}>
                    <Form.Group controlId="phone">
                      <Form.Label>Phone Number:</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
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
