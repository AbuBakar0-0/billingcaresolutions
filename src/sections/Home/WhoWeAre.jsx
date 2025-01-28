import React from 'react'
import HeadingLine from '../../components/HeadingLine'

function WhoWeAre() {
    return (
        <>
            <div className='flex flex-col lg:flex-row justify-around items-center p-10'>
                <img src="/assets/about-us-billingcaresolutions.com.webp" alt="Billing Care Solutions" className='w-full lg:w-1/3 h-auto px-0 lg:px-10' />
                <div className='flex flex-col w-full lg:w-2/3 justify-start items-start lg:p-10 space-y-4'>
                    <div>
                        <HeadingLine data={"Introduction"}/>
                        <p className='text-3xl md:text-5xl text-center md:text-left font-custom font-semibold text-secondary'>
                            Who We Are?
                        </p>
                    </div>
                    <p className='text-justify text-sm lg:text-md whitespace-normal break-words tracking-tight'>
                        Welcome To Billing Care Solutions, A Premier Provider of Advanced Medical Billing Services in The United States. Renowned For Our Commitment to Excellence, We Deliver Top-Tier Medical Billing Solutions and Practice Management Services, Alongside Cutting-Edge Software Offerings. Our Clients Span Solo Physicians, Physician Groups, Independent Medical and Non-Medical Entities, Small Medical Practices, Hospitals, Pharmacies, Laboratories, Medical Clinics, Home Care Agencies and Various Other Healthcare Facilities. With Expertise in Provider Enrollment & Credentialing Services, We Ensure Integration into Healthcare Networks, Enhancing Operational Efficiency and Compliance. Our Prior Authorization Services Streamline Approvals, Minimizing Delays and Optimizing Patient Care Pathways. Additionally, Our Business Intelligence Reporting Empowers Data-Driven Decision-Making, Enabling Informed Strategies to Maximize Revenue and Operational Outcomes. Trust Billing Care Solutions for Comprehensive Support in Medical Billing, Practice Management, And Strategic Healthcare Solutions Tailored to Your Needs.
                    </p>
                    {/* <div className='w-full flex flex-col md:flex-row justify-evenly items-center pt-5'>

                        <button className='flex flex-row justify-between items-center mt-0 md:w-max px-6 py-4 bg-gradient-to-r from-[#4fc29f] to-[#46c063] rounded-full shadow-xl border-[0.15rem] border-white text-white font-semibold text-xs md:text-xs'>
                            <img  className='w-6 h-6 mx-2' src="/assets/download icon billingcaresolutions.com.svg" alt="download icon billingcaresolutions.com.svg" />
                            Download BCS Brochure
                        </button>
                        <button className='flex flex-row justify-between items-center mt-4 md:mt-0 md:w-max px-6 py-4 bg-gradient-to-r from-[#0072b9] to-[#766cca] rounded-full  shadow-xl border-[0.15rem] border-white text-white font-semibold text-xs md:text-xs'>
                            <img  className='w-6 h-6 mx-2' src="/assets/download icon billingcaresolutions.com.svg" alt="download icon billingcaresolutions.com.svg" />
                            Download BCS Company Profile
                        </button>
                    </div> */}
                </div>
            </div>
        </>
    )

}

export default WhoWeAre