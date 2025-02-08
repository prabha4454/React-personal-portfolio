import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Header = ({ refs }) => {
  const navLinks = [
    { name: 'Home', ref: 'homeRef' },
    { name: 'About', ref: 'aboutRef' },
    { name: 'Skills', ref: 'skillsRef' },
    { name: 'Projects', ref: 'projectsRef' },
    { name: 'Certifications', ref: 'certificationsRef' },
    { name: 'Contact', ref: 'contactRef' },
  ];

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <Navbar.Brand className="brand">Portfolio</Navbar.Brand>
        </motion.div>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.ref}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
