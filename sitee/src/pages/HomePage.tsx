import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Offerings from '../components/Offerings';
import WhyChooseUs from '../components/WhyChooseUs';
import History from '../components/History';
import CallToAction from '../components/CallToAction';
import About from '../components/About';
import ServiceGallery from '../components/ServiceGallery';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <Offerings />
      <About />
      <ServiceGallery />
      <WhyChooseUs />
      <History />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default HomePage;