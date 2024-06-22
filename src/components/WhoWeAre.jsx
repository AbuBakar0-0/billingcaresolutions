import React from 'react'

function WhoWeAre() {
    return (
        <>
            <div className='w-screen flex flex-col lg:flex-row justify-around p-10'>
                <img src="./assets/img.jpg" alt="" className='w-full lg:w-1/4 h-auto' />
                <div className='flex flex-col w-full lg:w-2/3 justify-start items-start lg:p-10 space-y-10'>
                    <p className='text3xl text-left mt-10'>
                        Who We Are?
                    </p>
                    <p className='text-justify'>
                        Welcome To Billing Care Solutions, A Premier Provider of Advanced Medical Billing Services in The United States. Renowned For Our Commitment to Excellence, We Deliver Top-Tier Medical Billing Solutions and Practice Management Services, Alongside Cutting-Edge Software Offerings. Our Clients Span Solo Physicians, Physician Groups, Independent Medical and Non-Medical Entities, Small Medical Practices, Hospitals, Pharmacies, Laboratories, Medical Clinics, Home Care Agencies and Various Other Healthcare Facilities. With Expertise in Provider Enrollment & Credentialing Services, We Ensure Integration into Healthcare Networks, Enhancing Operational Efficiency and Compliance. Our Prior Authorization Services Streamline Approvals, Minimizing Delays and Optimizing Patient Care Pathways. Additionally, Our Business Intelligence Reporting Empowers Data-Driven Decision-Making, Enabling Informed Strategies to Maximize Revenue and Operational Outcomes. Trust Billing Care Solutions for Comprehensive Support in Medical Billing, Practice Management, And Strategic Healthcare Solutions Tailored to Your Needs.
                    </p>
                </div>
            </div>
        </>
    )

}

export default WhoWeAre