
import React from 'react';
import About from './Components/About';
import Carousel from './Components/Carousel';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import DataSection from './Components/DataSection'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import TutorialPlacard from './Components/TutorialPlacard';
import Tutorial from './Components/Tutorial';
import JoinUs from './Components/JoinUs';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Carousel />
      
      <About />
      
      <DataSection />
      <Services />
      <TutorialPlacard />
      <Tutorial />
      <JoinUs />
      <Footer />



    </div>
  );
}

export default App;
