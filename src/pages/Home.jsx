import React from 'react'
import Hero from './../components/Hero';
import Contact from '../components/Contact';
import WhoWeAre from '../components/WhoWeAre';
import WhyChooseUs from '../components/WhyChooseUs';
import SpecialitiesWeOffer from '../components/SpecialitiesWeOffer';
import Softwares from '../components/Softwares';
import Testimonials from '../components/Testimonials';
import BillingServices from '../components/BillingServices';
import HoverSlider from '../components/HoverSlider';
import WhatWeProvide from '../components/WhatWeProvide';


function Home() {
  return (
    <>
      <div className='container mx-auto'>
        <Hero />
        <Contact />
        <WhoWeAre />
        <WhatWeProvide />
        <WhyChooseUs />
        <SpecialitiesWeOffer />
        <Softwares />
        <Testimonials />
        <BillingServices />
        <HoverSlider />
      </div>

    </>

  )
}

export default Home;