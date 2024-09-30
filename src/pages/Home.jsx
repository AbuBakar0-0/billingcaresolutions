import React from 'react'
import Header from './../sections/Header';
import Hero from './../sections/Home/Hero';
import Contact from './../sections/Home/Contact';
import WhoWeAre from './../sections/Home/WhoWeAre';
import WhatWeProvide from './../sections/Home/WhatWeProvide';
import WhyChooseUs from './../sections/Home/WhyChooseUs';
import SpecialitiesWeOffer from './../sections/Home/SpecialitiesWeOffer';
import Softwares from './../sections/Home/Softwares';
import Testimonials from './../sections/Home/Testimonials';
import BillingServices from './../sections/Home/BillingServices';
import HoverSlider from './../components/Home/HoverSlider';
import Footer from './../sections/Footer';



function Home() {
  window.scrollTo(0, 0);

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
        <BillingServices />
        <HoverSlider />
        <Testimonials />
        <Footer/>
      </div>

    </>

  )
}

export default Home;