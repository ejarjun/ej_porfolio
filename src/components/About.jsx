import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const About = () => {
  return (
    <section className="about-section py-5">
      <div id="about">
        <Container>
          <Row className="align-items-center">
            <Col md={4} className="text-center">
              <img src="./images/IMG_8489.JPG" className="img-fluid rounded-circle" alt="Arjun E J" />
            </Col>
            <Col md={8}>
              <h2>About <span style={{ color: '#1e7edc' }}>Me</span></h2>
              <h3>Developer <span className="highlight">& Designer</span></h3>
              <p>Passionate and skilled MERN Stack Developer INTERN of experience designing, developing, and deploying full-stack web applications. Proficient in MongoDB, Express.js, React, and Node.js, with a focus on delivering user-centric solutions and scalable systems. Adept at working in agile environments and committed to continuous learning.</p>
              <Button className="btn-3"><a style={{ color: 'aliceblue' }} href="images/ARJUN E J.pdf">Download CV</a></Button>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default About;