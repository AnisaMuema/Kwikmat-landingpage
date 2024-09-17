
import React from 'react';
import About from './Components/About';
import Carousel from './Components/Carousel';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import DataSection from './Components/DataSection'
import Team from './Components/Team';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Carousel />
      <About />
      
      <DataSection />
      <Services />
      <Team />
      <Contact />
      <Footer />



    </div>
  );
}

export default App;
