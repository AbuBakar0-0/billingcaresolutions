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
import { Helmet } from 'react-helmet';

function Services() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <Helmet>
                <title>Services - Billing Care Solutions</title>
                <meta name="description" content="Billing Care Solutions recognize the uniqueness of each healthcare practice. We collaborate with our clients to create customized solutions that meet their specific needs. Whether the goal is to boost financial performance, improve patient satisfaction, or optimize operations, our extensive bilingual healthcare management services are designed to help achieve these objectives." />
                <meta property="og:title" content="Services - Billing Care Solutions" />
                <meta property="og:description" content="Billing Care Solutions recognize the uniqueness of each healthcare practice. We collaborate with our clients to create customized solutions that meet their specific needs. Whether the goal is to boost financial performance, improve patient satisfaction, or optimize operations, our extensive bilingual healthcare management services are designed to help achieve these objectives." />
                <meta property="og:image" content="./assets/BCS Logo billingcaresolutions.com.svg" />
            </Helmet>
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