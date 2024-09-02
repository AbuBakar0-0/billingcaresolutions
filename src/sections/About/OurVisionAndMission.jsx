import React from 'react'
import Heading from './../../components/Heading';
import VisionCard from '../../components/About/VisionCard';

function OurVisionAndMission() {


  return (
    <>
      <div className='w-full flex flex-col justify-center items-center gap-3 p-10'>
        <Heading data="Our Vision and Mission " />
        <p className='-mt-5 pb-5 font-semibold text-center'>“Empowering healthcare providers with innovative billing solutions to drive operational excellence and financial success”</p>
        <div className='w-full flex flex-col md:flex-row justify-between items-center'>
          <div className='w-full md:w-1/3 flex flex-col justify-center items-center shadow-md rounded-2xl'>
            <VisionCard title={'Our Vision'} description={"At Billing Care Solutions, our vision is to provide premier medical billing services rooted in quality, exceptional service, and integrity. Billing Care Solutions dedicate to elevate your healthcare practices through strong relationships, teamwork, and unwavering standards, ensuring excellence and growth in every aspect of our service."} img={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16 border-2 rounded-full border-secondary text-secondary p-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
            </svg>
            } />
          </div>
          <div className='w-full md:w-1/3 flex flex-col justify-center items-center my-10 md:my-0'>
            <img src="./assets/img2.jpg" alt="" className='h-56 ' />
          </div>
          <div className='w-full md:w-1/3 flex flex-col justify-center items-center shadow-md rounded-2xl'>
            <VisionCard title={'Our Mission'} description={'In the demanding healthcare industry, we understand the necessity for an innovative partner to optimize the medical billing cycle and enhance your revenue. Billing Care Solutions offers comprehensive, technology-enabled solutions in revenue cycle management, including clinical workflow optimization and revenue generation, while also improving the patient experience.'} img={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16 border-2 rounded-full border-secondary text-secondary p-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            } />
          </div>

        </div>
      </div>
    </>
  )
}

export default OurVisionAndMission