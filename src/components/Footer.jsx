import React from 'react';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="bg-dark py-4 mt-5"
    >
      <Container className="text-center">
        <div className="social-icons mb-3">
          {[GitHub, LinkedIn, Email].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              className="text-white mx-3"
              whileHover={{ scale: 1.2, color: '#7c4dff' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Icon fontSize="large" />
            </motion.a>
          ))}
        </div>
        <p className="mb-0">© 2023 John Doe. All rights reserved.</p>
      </Container>
    </motion.footer>
  );
};

export default Footer;