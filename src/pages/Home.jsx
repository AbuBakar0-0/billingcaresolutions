import React from 'react'
import Hero from '../sections/Home/Hero';
import Contact from '../sections/Home/Contact';
import WhoWeAre from '../sections/Home/WhoWeAre';
import SpecialitiesWeOffer from '../sections/Home/SpecialitiesWeOffer';
import Softwares from '../sections/Home/Softwares';
import BillingServices from '../sections/Home/BillingServices';
import Testimonials from './../sections/Home/Testimonials';
import HoverSlider from './../components/HoverSlider';
import WhyChooseUs from './../sections/Home/WhyChooseUs';
import WhatWeProvide from './../sections/Home/WhatWeProvide';
import Footer from '../sections/Home/Footer';
import Header from '../sections/Home/Header';


function Home() {
  return (
    <>
      <div className=''>
        <Header/>
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
        <Footer/>
      </div>

    </>

  )
}

export default Home;