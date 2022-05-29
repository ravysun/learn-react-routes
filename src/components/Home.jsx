import React from 'react';
import './HomeStyle.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Pricing from './Pricing';
import Testimoials from './Testimoials';
import Faq from './Faq';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Pricing />
      <Testimoials />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
