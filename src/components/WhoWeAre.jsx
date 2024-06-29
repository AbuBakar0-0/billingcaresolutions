import React from 'react'

function WhoWeAre() {
    return (
        <>
            <div className='flex flex-col lg:flex-row justify-around p-10 items-center'>
                <img src="./assets/About Us billingcaresolutions.com.webp" alt="" className='w-full lg:w-1/3 h-auto' />
                <div className='flex flex-col w-full lg:w-2/3 justify-start items-start lg:p-10 space-y-4'>
                    <div>
                        <div className='flex flex-row justify-start items-center space-x-3 text-primary font-custom text-2xl font-medium'>
                            <p>Introduction</p>
                            <div className='bg-primary w-[2rem] h-[0.2rem]'></div>
                        </div>
                        <p className='text-4xl md:text-6xl text-center md:text-left font-custom font-semibold'>
                            Who We Are?
                        </p>
                    </div>
                    <p className='text-justify'>
                        Welcome To Billing Care Solutions, A Premier Provider of Advanced Medical Billing Services in The United States. Renowned For Our Commitment to Excellence, We Deliver Top-Tier Medical Billing Solutions and Practice Management Services, Alongside Cutting-Edge Software Offerings. Our Clients Span Solo Physicians, Physician Groups, Independent Medical and Non-Medical Entities, Small Medical Practices, Hospitals, Pharmacies, Laboratories, Medical Clinics, Home Care Agencies and Various Other Healthcare Facilities. With Expertise in Provider Enrollment & Credentialing Services, We Ensure Integration into Healthcare Networks, Enhancing Operational Efficiency and Compliance. Our Prior Authorization Services Streamline Approvals, Minimizing Delays and Optimizing Patient Care Pathways. Additionally, Our Business Intelligence Reporting Empowers Data-Driven Decision-Making, Enabling Informed Strategies to Maximize Revenue and Operational Outcomes. Trust Billing Care Solutions for Comprehensive Support in Medical Billing, Practice Management, And Strategic Healthcare Solutions Tailored to Your Needs.
                    </p>
                    <div className='w-full flex flex-col md:flex-row justify-evenly items-center pt-5'>
                        <button className='mt-0 w-full md:w-max px-6 py-4 bg-gradient-to-r from-[#95ca4c] to-[#2cb34b] rounded-full shadow-xl border-[0.15rem] border-white text-white font-semibold text-xs md:text-sm'>
                            Download RCM Brochure
                        </button>
                        <button className='mt-4 md:mt-0 w-full md:w-max px-6 py-4 bg-gradient-to-r from-[#278cc1] to-[#644d97] rounded-full  shadow-xl border-[0.15rem] border-white text-white font-semibold text-xs md:text-sm'>
                            Medical Coding Training Brochure
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default WhoWeAre