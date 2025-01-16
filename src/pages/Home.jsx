import React, { useEffect } from 'react'
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
import { Helmet } from 'react-helmet';
import { RingLoader } from 'react-spinners';
import { useState } from 'react';

function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000)
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <Helmet>
        <title>Billing Care Solutions</title>
        <meta name="description" content="Billing Care Solutions redefines excellence with its pioneering technology, impeccable claims precision, and unwavering commitment to compliance, driving unparalleled efficiency and swift financial outcomes." />
        <meta property="og:title" content="Home - Billing Care Solutions" />
        <meta property="og:description" content="Billing Care Solutions redefines excellence with its pioneering technology, impeccable claims precision, and unwavering commitment to compliance, driving unparalleled efficiency and swift financial outcomes." />
        <meta property="og:image" content="./assets/BCS Logo billingcaresolutions.com.svg" />

      </Helmet>
      {
        loading ?
          <>
            <div className='flex flex-col h-screen w-full justify-center items-center bg-secondary'>
              <RingLoader
                color="#ffffff"
                loading={loading}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          </> :
          <div className='font-custom'>
            <Header />
            <Hero />
            <Contact />
            <WhoWeAre />
            <WhatWeProvide />
            <WhyChooseUs />
            <SpecialitiesWeOffer  />
            <Softwares />
            <BillingServices />
            <HoverSlider />
            <Testimonials />
            <Footer />
          </div>
      }
    </>

  )
}

export default Home;