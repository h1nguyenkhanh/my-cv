import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
