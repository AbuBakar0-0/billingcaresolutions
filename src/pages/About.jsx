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
import { Helmet } from 'react-helmet';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      {/* <Helmet>
        <title>
          About - Billing Care Solutions
        </title>
        <meta name="description" content="Billing Care Solutions redefines excellence with its pioneering technology, impeccable claims precision, and unwavering commitment to compliance, driving unparalleled efficiency and swift financial outcomes." />
        <meta property="og:title" content="About - Billing Care Solutions" />
        <meta property="og:description" content="Billing Care Solutions redefines excellence with its pioneering technology, impeccable claims precision, and unwavering commitment to compliance, driving unparalleled efficiency and swift financial outcomes." />
        <meta property="og:image" content="./assets/BCS Logo billingcaresolutions.com.svg" />
      </Helmet> */}
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