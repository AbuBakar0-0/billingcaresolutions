import React, { useEffect } from 'react'
import Header from './../sections/Header';
import Footer from './../sections/Footer';
import Hero from '../sections/About/Hero';
import AboutCompany from '../sections/About/AboutCompany';
import OurVisionAndMission from '../sections/About/OurVisionAndMission';
import Payoff from '../sections/About/Payoff';
import OurBestServices from '../sections/About/OurBestServices';
import Milestones from '../sections/About/Milestones';
import Stats from '../sections/About/Stats';
import Clients from '../sections/About/Clients';

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
        <OurVisionAndMission />
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