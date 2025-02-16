import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section className="contact-section py-5">
      <div id="contact">
        <Container className="text-center">
          <h1>Contact <span style={{ color: '#1e7edc' }}>Me</span></h1>
          <p>If you'd like to get in touch, feel free to contact me via the email below or through my social media profiles!</p>
          <div className="contact-info">
            <a href="mailto:arjunej555@gmail.com" className="contact-link d-block">
              <FontAwesomeIcon icon={faEnvelope} /> <a id="mail2" href="mailto:arjunej555@gmail.com">arjunej555@gmail.com</a>
            </a>
            <div className="social-media mt-3">
              <a href="#" className="mx-2" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#" className="mx-2" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="mx-2" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" className="mx-2" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://github.com/dashboard" className="mx-2" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Contact;