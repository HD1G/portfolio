import React from 'react';
import './App.css';
import Nav from './components/Navbar';
import Bio from './components/Aboutme';
import Skills from './components/Skills';
import { Container } from 'reactstrap';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer'
import blue from './images/blueBg.jpg';


function App() {
  return (
    <body style = {{backgroundImage: `url(${blue})`, backgroundsize: 'cover'}}>
      <Nav />
      <Container>
          <Bio />
          <Skills />
          <Portfolio />
          <Footer />
      </Container>
    </body>
  );
}

export default App;
