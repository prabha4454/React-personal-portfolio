import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';

const skills = ['React', 'Node.js', 'Python', 'MongoDB', 'AWS', 'Docker'];

const Skills = () => {
  return (
    <section className="py-5">
      <Container>
        <h2 className="section-title">Skills</h2>
        <Row>
          {skills.map((skill, index) => (
            <Col md={4} key={skill} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="skill-card p-3 rounded"
              >
                <h3 className="mb-0">{skill}</h3>
                <div className="progress mt-2">
                  <motion.div
                    className="progress-bar"
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.random() * 40 + 60}%` }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  />
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;