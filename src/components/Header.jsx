import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";

const Header = () => {
  const titles = ["BCA Graduate", "MERN Stack Developer", "Web Developer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Function to handle button click
  const handleLetsTalk = () => {
    window.location.href = "mailto:arjunej555@gmail.com?subject=Let's Talk&body=Hello, I'm interested in talking with you.";
  };

  
  return (
    <header className="header">
      <Navbar bg="dar" expand="lg" variant="dar">
        <div className="container">
          <Navbar.Brand className="text-light" href="#">Portfo<span className="highlight text-primary">lio</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" className="custom-toggle" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ml-auto">
              <Nav.Link className="nav-name text-light px-4" href="#header">Home</Nav.Link>
              <Nav.Link className="nav-name text-light px-4" href="#about">About Me</Nav.Link>
              <Nav.Link className="nav-name text-light px-4" href="#text">Projects</Nav.Link>
              <Nav.Link className="nav-name text-light px-4" href="#skills">Skills</Nav.Link>
              <Nav.Link className="nav-name text-light px-4" href="#contact">Contact Us</Nav.Link>
            </Nav>
                    </Navbar.Collapse>
        </div>
      </Navbar>

      <div id="header" className="text-center">
        <div className="intro-text">
          <h1>
            Hello, my name is <span className="highlight">Arjun E J</span>
          </h1>
          <p className="dynamic-text">
            I'm a <span className="text-primary">{titles[index]}</span>
          </p>
          <Form className="email-form d-inline-block">
            <FormControl type="email" placeholder="Enter Your Email" />
            <Button
              id="talk-btn"
              type="button"
              className="btn-2 btn-primary mt-2 px-3"
              onClick={handleLetsTalk} // Button now works
            >
              Let's Talk
            </Button>
          </Form>
        </div>
      </div>
    </header>
  );
};

export default Header;
