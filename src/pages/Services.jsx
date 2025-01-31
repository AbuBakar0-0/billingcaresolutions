import React, { useEffect } from 'react';
import WhyDoHealthcareProfessionals from '../components/Home/WhyDoHealthcareProfessionals';
import Clients from '../sections/About/Clients';
import Header from '../sections/Header';
import SpecialitiesWeOffer from '../sections/Home/SpecialitiesWeOffer';
import Hero from '../sections/Services/Hero';
import OurDemandingServices from '../sections/Services/OurDemandingServices';
import Stats from './../sections/About/Stats';
import Footer from './../sections/Footer';
import Testimonials from './../sections/Home/Testimonials';

function Services() {

    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
           
            <Header />
            <Hero />
            <Clients />
            <OurDemandingServices />
            <WhyDoHealthcareProfessionals />
            <SpecialitiesWeOffer />
            <Testimonials />
            <Stats />
            <Footer />
        </>
    )
}

export default Services