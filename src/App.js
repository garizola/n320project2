import React from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import GallerySection from './components/GallerySection';
import Stories from './components/Stories';
import Achievements from './components/Achievments'

import Footer from './components/Footer';
import Copyright from './components/Copyright';


const App = () => {
  

  return (
    <div className=' mx-auto overflow-hidden bg-white'>
      <Header />
      <Hero />
      <About />
      <GallerySection />
      <Stories />
      <Achievements />

      <Footer />
      <Copyright />
     
    </div>
  );
};

export default App;
