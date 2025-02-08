import React, { useRef } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Home from './components/Home';
/* import About from './components/About'; */
import Skills from './components/Skills';
/* import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact'; */
import Footer from './components/Footer';
import './App.css';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const certificationsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Header 
        refs={{ homeRef, aboutRef, skillsRef, projectsRef, certificationsRef, contactRef }} 
      />
      
      <Container fluid className="main-container">
        <section ref={homeRef}><Home /></section>
        <section ref={aboutRef}><About /></section>
    
        <section ref={skillsRef}><Skills /></section>
        <section ref={projectsRef}><Projects /></section>
        <section ref={certificationsRef}><Certifications /></section>
        <section ref={contactRef}><Contact /></section>
      </Container>

      <Footer />
    </motion.div>
  );
}

export default App;
