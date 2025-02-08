import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <section className="vh-100 d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="display-1 text-white">Hi, I'm John Doe</h1>
              <motion.p 
                className="lead text-purple"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Full Stack Developer & UI Designer
              </motion.p>
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <div className="gradient-circle"></div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;