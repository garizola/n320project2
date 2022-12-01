import React from 'react';

// import components
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import GallerySection from './components/GallerySection';
import Skills from './components/Skills';
import Achievements from './components/Achievments'
import Contact from './components/Contact';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

const App = () => {
  return (
    <div className=' mx-auto overflow-hidden bg-white'>
      <Header />
      <Hero />
      <About />
      <GallerySection />
      <Skills />
      <Achievements />

      <Contact />
      <Footer />
      <Copyright />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
