import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [email, setEmail] = useState("");

  // Handle the subscribe button click
  const handleSubscribe = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    if (email) {
      window.location.href = `mailto:arjunej555@gmail.com?subject=Subscribe to Updates&body=Please add ${email} to your mailing list.`;
    } else {
      alert("Please enter a valid email.");
    }
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="text-center text-md-left">
          <Col md={4}>
            <h3>Contact <span style={{ color: '#1e7edc' }}>Me</span></h3>
            <p>Alappuzha, Kerala 689508</p>
            <p>Email: <a id="mail1" href="mailto:arjunej555@gmail.com">arjunej555@gmail.com</a></p>
            <p>Phone: +91 8078481525</p>
          </Col>
          <Col md={4}>
            <h3>Follow <span style={{ color: '#1e7edc' }}>Me</span></h3>
            <div className="social-icons">
              <a href="#" className="mx-2" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#" className="mx-2" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="mx-2" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" className="mx-2" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://github.com/dashboard" className="mx-2" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </Col>
          <Col md={4}>
            <h3>Sub<span style={{ color: '#1e7edc' }}>scription</span></h3>
            <Form onSubmit={handleSubscribe}>
              <Form.Control 
                type="email" 
                className="mb-2" 
                placeholder="Enter your email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="btn-block">Subscribe</Button>
            </Form>
          </Col>
        </Row>
        <div className="text-center py-3">
          <p>&copy; 2024 Arjun All Rights Reserved</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
