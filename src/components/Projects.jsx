import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faLocationDot, faCloud } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  return (
    <section id="services" className="py-5">
      <div id="text" className="text-center mb-5">
        <h1 id="projects-h2">My <span style={{ color: '#1e7edc' }}>Projects</span></h1>
      </div>
      <Container>
        <Row>
          <Col md={4} sm={6} className="mb-4 text-center">
            <Card className="text-center service-card">
              <Card.Body>
                <div className="icon mb-3">
                  <FontAwesomeIcon icon={faCalculator} size="2x" />
                </div>
                <h5 className="card-title">BMI Calculator</h5>
                <p className="card-text">I design visually appealing and user-friendly BMI Calculator React project computes Body Mass Index with an interactive and responsive user interface.</p>
                <Button style={{marginLeft:'2px'}} className='text-center ' href="https://ejarjun.github.io/bmi_calcul/" variant="primary">View</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6} className="mb-4">
            <Card className="text-center service-card">
              <Card.Body>
                <div className="icon mb-3">
                  <FontAwesomeIcon icon={faLocationDot} size="2x" />
                </div>
                <h5 className="card-title">Travel Website</h5>
                <p className="card-text">I create captivating travel websites that inspire wanderlust, featuring stunning visuals, informative content, and intuitive navigation.</p>
                <Button style={{marginLeft:'2px'}}  href="https://ejarjun.github.io/asmnt3/" variant="primary">View</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6} className="mb-4">
            <Card className="text-center service-card">
              <Card.Body>
                <div className="icon mb-3">
                  <FontAwesomeIcon icon={faCloud} size="2x" />
                </div>
                <h5 className="card-title">Weather Website</h5>
                <p className="card-text">I created a weather website React project which displays real-time weather data with a responsive and user-friendly interface.</p>
                <Button style={{marginLeft:'2px'}}  href="https://ejarjun.github.io/weather/" variant="primary">View</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;