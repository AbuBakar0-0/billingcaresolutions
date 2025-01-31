import React, { useEffect, useState } from 'react';
import { RingLoader } from 'react-spinners';
import HoverSlider from './../components/Home/HoverSlider';
import Footer from './../sections/Footer';
import Header from './../sections/Header';
import BillingServices from './../sections/Home/BillingServices';
import Contact from './../sections/Home/Contact';
import Hero from './../sections/Home/Hero';
import Softwares from './../sections/Home/Softwares';
import SpecialitiesWeOffer from './../sections/Home/SpecialitiesWeOffer';
import Testimonials from './../sections/Home/Testimonials';
import WhatWeProvide from './../sections/Home/WhatWeProvide';
import WhoWeAre from './../sections/Home/WhoWeAre';
import WhyChooseUs from './../sections/Home/WhyChooseUs';

function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
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
            <SpecialitiesWeOffer />
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