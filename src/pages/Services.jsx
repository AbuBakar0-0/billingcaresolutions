import React, { useEffect } from 'react'
import Header from '../sections/Header'
import Hero from '../sections/Services/Hero'
import Clients from '../sections/About/Clients';
import OurDemandingServices from '../sections/Services/OurDemandingServices';
import WhyDoHealthcareProfessionals from '../components/Home/WhyDoHealthcareProfessionals';
import SpecialitiesWeOffer from '../sections/Home/SpecialitiesWeOffer';
import Stats from './../sections/About/Stats';
import Testimonials from './../sections/Home/Testimonials';
import Footer from './../sections/Footer';

function Services() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <Header />
            <Hero />
            <Clients/>
            <OurDemandingServices/>
            <WhyDoHealthcareProfessionals/>
            <SpecialitiesWeOffer/>
            <Testimonials/>
            <Stats/>
            <Footer/>
        </>
    )
}

export default Services