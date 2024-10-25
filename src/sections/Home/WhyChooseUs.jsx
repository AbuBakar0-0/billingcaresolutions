import React from 'react'
import HeadingLine from './../../components/HeadingLine';
import WhyDoHealthcareProfessionals from '../../components/Home/WhyDoHealthcareProfessionals';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function WhyChooseUs() {

    return (
        <>
            <div className='w-full flex flex-col lg:flex-row justify-between items-center p-10' >
                <div className='w-full lg:w-1/2 flex flex-col space-y-4 lg:p-10'>
                    <div>
                        <HeadingLine data={"Why Choose"} />
                        <p className='text-4xl md:text-6xl text-center md:text-left font-custom font-semibold text-secondary'>
                            Billing Care Solutions?
                        </p>
                    </div>
                    <p className='mt-5 text-justify text-xl'>
                        Billing Care Solutions offer extensive medical billing and credentialing services tailored to various specialties, including behavioral health, dental care, and more. Our services are designed to be both affordable and flexible, seamlessly integrating into your practice's workflow. Billing Care Solutions  prioritize patient care through our dedicated Patient Support System, allowing you to focus on delivering exceptional healthcare. Additionally, our weekly Practice Health Presentations provide valuable insights into your practice's performance and ongoing health metrics.
                    </p>

                </div>
                <div className='w-full lg:w-1/2 flex justify-center items-center'>
                    <LazyLoadImage src="./assets/why choose billing care solutions-01.webp" alt="" className='w-full md:w-3/5 py-10 lg:py-0 ' />
                </div>

            </div>
            <WhyDoHealthcareProfessionals/>

        </>
    )
}

export default WhyChooseUs