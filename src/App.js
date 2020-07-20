import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import MyRouter from './route/MyRouter';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <MyRouter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
