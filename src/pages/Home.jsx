import React from 'react' 
import Hero from './../components/Hero';
import Contact from '../components/Contact';
import WhoWeAre from '../components/WhoWeAre';
import WhatDoWeOffer from '../components/WhatDoWeOffer';
import WhyChooseUs from '../components/WhyChooseUs';
import SpecialitiesWeOffer from '../components/SpecialitiesWeOffer';
import Softwares from '../components/Softwares';
import Testimonials from '../components/Testimonials';
import BillingServices from '../components/BillingServices';
import HoverSlider from '../components/HoverSlider';


function Home() {
    return (
    <>
        <Hero/>
        <Contact/>
        <WhoWeAre/>
        <WhatDoWeOffer/>
        <WhyChooseUs/>
        <SpecialitiesWeOffer/>
        <Softwares/>
        <Testimonials/>
        <BillingServices/>
        <HoverSlider/>
    </>

  )
}

export default Home;