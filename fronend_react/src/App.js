
import React from 'react';
import About from './container/About/About.jsx';
import Footer from './container/Footer/Footer.jsx';
import Header from './container/Header/Header.jsx';
import Skills from './container/Skills/Skills.jsx';
import Testimonials from './container/Testimonials/Testimonials.jsx';
import Work from './container/Work/Work.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import './App.scss';

const App = () => (<>
  <div className="app">
    <Navbar/>
    <Header/> 
    <About />
    <Work />
    <Skills />
    <Testimonials />
    <Footer />
  </div>
  </>
);

export default App;
