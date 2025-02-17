import React from 'react';
import { Container } from 'react-bootstrap';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <Container>
        <h1>My <span style={{ color: '#1e7edc' }}>Skills</span></h1>
        <div className="skills-grid">
          <div className="skill">
            <h3>HTML</h3>
            <p>Building structured web pages with semantic markup.</p>
          </div>
          <div className="skill">
            <h3>CSS</h3>
            <p>Styling web pages with modern techniques and responsive designs.</p>
          </div>
          <div className="skill">
            <h3>JavaScript</h3>
            <p>Creating dynamic and interactive web applications.</p>
          </div>
          <div className="skill">
            <h3>Bootstrap</h3>
            <p>Building responsive, mobile-first web applications using the Bootstrap framework.</p>
          </div>
          <div className="skill">
            <h3>Tailwind CSS</h3>
            <p>Designing modern user interfaces with utility-first Tailwind CSS framework.</p>
          </div>
          <div className="skill">
            <h3>Material UI</h3>
            <p>Material UI is a popular React component library for building modern, responsive, and customizable user interfaces.</p>
          </div>
          <div className="skill">
            <h3>React.js</h3>
            <p>React.js is a JavaScript library for building fast, interactive, and reusable user interfaces.</p>
          </div>
          <div className="skill">
            <h3>Redux</h3>
            <p>Redux is a state management library for JavaScript apps, providing a centralized store for predictable state updates.</p>
          </div>
          <div className="skill">
            <h3>Node.js</h3>
            <p>Node.js is a JavaScript runtime that enables server-side development, known for its speed and scalability.</p>
          </div>
          <div className="skill">
            <h3>Express.js</h3>
            <p>Express.js is a fast and minimalist web framework for Node.js, used to build server-side applications.</p>
          </div>
          <div className="skill">
            <h3>Mongo DB</h3>
            <p>MongoDB is a NoSQL database that stores data in flexible, JSON-like documents for scalability and performance.</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;