import React from 'react' 
import Hero from './../components/Hero';
import Contact from '../components/Contact';
import WhoWeAre from '../components/WhoWeAre';
import WhatDoWeOffer from '../components/WhatDoWeOffer';
import WhyChooseUs from '../components/WhyChooseUs';
import SpecialitiesWeOffer from '../components/SpecialitiesWeOffer';

function Home() {
    return (
    <>
        <Hero/>
        <Contact/>
        <WhoWeAre/>
        <WhatDoWeOffer/>
        <WhyChooseUs/>
        <SpecialitiesWeOffer/>
    </>

  )
}

export default Home;