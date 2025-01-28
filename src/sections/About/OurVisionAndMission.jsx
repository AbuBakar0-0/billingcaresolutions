import React, { useEffect } from 'react'
import Heading from './../../components/Heading';
import VisionCard from '../../components/About/VisionCard';


function OurVisionAndMission() {

  useEffect(() => {
    
  }, []);

  return (
    <>
      <div className='w-full flex flex-col justify-center items-center gap-3 p-10'>
        <Heading data="Our Vision and Mission " />
        <p className='-mt-5 pb-5 font-semibold text-center italic'>“Empowering healthcare providers with innovative billing solutions to drive operational excellence and financial success”</p>
        <div className='w-full flex flex-col md:flex-row justify-between items-center'>
          <div className='w-full md:w-1/3 flex flex-col justify-center items-center shadow-md rounded-2xl'>
            <VisionCard title={'Our Vision'} description={"At Billing Care Solutions, our vision is to provide premier medical billing services rooted in quality, exceptional service, and integrity. Billing Care Solutions dedicate to elevate your healthcare practices through strong relationships, teamwork, and unwavering standards, ensuring excellence and growth in every aspect of our service."} img={"/assets/about-us/Our Vision billingcaresolutions.com.svg"
            } />
          </div>
          <div className='w-full md:w-1/3 flex flex-col justify-center items-center my-10 md:my-0'>
            <img src="/assets/about-us/mission-vision-billingcaresolutions.com.webp" alt="Billing Care Solutions" className='h-96' />
          </div>
          <div className='w-full md:w-1/3 flex flex-col justify-center items-center shadow-md rounded-2xl'>
            <VisionCard title={'Our Mission'} description={'In the demanding healthcare industry, we understand the necessity for an innovative partner to optimize the medical billing cycle and enhance your revenue. Billing Care Solutions offers comprehensive, technology-enabled solutions in revenue cycle management, including clinical workflow optimization and revenue generation, while also improving the patient experience.'} img={"/assets/about-us/Our Mission billingcaresolutions.com.svg"
            } />
          </div>

        </div>
      </div>
    </>
  )
}

export default OurVisionAndMission