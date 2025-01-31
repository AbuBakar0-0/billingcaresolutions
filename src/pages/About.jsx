import React, { useEffect } from 'react';
import AboutCompany from '../sections/About/AboutCompany';
import Clients from '../sections/About/Clients';
import Hero from '../sections/About/Hero';
import Milestones from '../sections/About/Milestones';
import OurBestServices from '../sections/About/OurBestServices';
import OurVisionAndMission from '../sections/About/OurVisionAndMission';
import Payoff from '../sections/About/Payoff';
import Stats from '../sections/About/Stats';
import Footer from './../sections/Footer';
import Header from './../sections/Header';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <div className='container mx-auto'>
        <AboutCompany />
        <OurVisionAndMission/>
        <Payoff />
        <OurBestServices />
        <Milestones />
        <Stats />
        <Clients />
      </div>
      <Footer />
    </>
  )
}

export default About