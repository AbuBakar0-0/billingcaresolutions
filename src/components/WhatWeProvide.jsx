import React from 'react'
import OfferCards from './OfferCards'

function WhatWeProvide() {

    const data = [
        {
            id: 1,
            title: "Medical Billing & Coding",
            img: './assets/what_do_we_offer/1. Medical Billing and Coding billingcaresolutions.com.webp',
            icon: "./assets/what_do_we_offer/1. Medical Billing and Coding Icon billingcaresolutions.com.svg",
            description: "We handle the entire Billing process, from Coding healthcare services to submitting claims and ensuring timely, accurate reimbursements for providers.",
            link: "",
        },
        {
            id: 2,
            title: "Provider Enrollment & Credentialing",
            img: './assets/what_do_we_offer/2. Provider Enrollment & Credentialing billingcaresolutions.com.webp',
            icon: "./assets/what_do_we_offer/2. Provider Enrollment & Credentialing Icon billingcaresolutions.com.svg",
            description: "We offer Provider Enrollment and Credentialing services, ensuring healthcare providers are properly registered and authorized with insurance companies for accurate, timely reimbursements.",
            link: "",
        },
        {
            id: 3,
            title: "Revenue Cycle Management",
            img: './assets/what_do_we_offer/3. Revenue Cycle Management billingcaresolutions.com.webp',
            icon: "./assets/what_do_we_offer/3. Revenue Cycle Management icon billingcaresolutions.com.svg",
            description: "We provide comprehensive RCM services, optimizing the entire billing process from patient registration to final payment collection.",
            link: "",
        },
        {
            id: 4,
            title: "AR & Denial Management",
            img: './assets/what_do_we_offer/4. AR & Denial Management billingcaresolutions.com.webp',
            icon: "./assets/what_do_we_offer/4. AR & Denial Management Icon billingcaresolutions.com.svg",
            description: "We offer AR and Denial Management services, focusing on reducing denied claims and maximizing collections to improve financial performance.",
            link: "",
        },
        {
            id: 5,
            title: "Eligibility Verification",
            img: './assets/what_do_we_offer/5. Eligibility Verification billingcaresolutions.com.webp',
            icon: "./assets/what_do_we_offer/5. Eligibility Verification billingcaresolutions.com.svg",
            description: "We provide Eligibility Verification services, ensuring patient insurance coverage is confirmed before services are rendered, reducing claim denials and payment delays.",
            link: "",
        },
        {
            id: 6,
            title: "Prior Authorization",
            img: './assets/what_do_we_offer/6. Piror Authorization billingcaresolutions.com.webp',
            icon: "./assets/what_do_we_offer/6. Piror Authorization billingcaresolutions.com.svg",
            description: "We offer Prior Authorization services, obtaining approval from insurance companies before medical services are provided, ensuring smooth claims processing and reimbursement.",
            link: "",
        },
        {
            id: 7,
            title: "Patient Help Support",
            img: './assets/what_do_we_offer/7. Patient Help Support billingcaresolutions.com.webp',
            icon: "./assets/what_do_we_offer/7. Patient Help Support billingcaresolutions.com.svg",
            description: "We provide Patient Help Support services, assisting patients with billing inquiries and ensuring clarity and resolution of financial matters related to healthcare services.",
            link: "",
        },
        {
            id: 8,
            title: "Financial Billing Audit",
            img: './assets/what_do_we_offer/8. Financial Billing Audit billingcaresolutions.com.webp',
            icon: "./assets/what_do_we_offer/8. Financial Billing Audit billingcaresolutions.com.svg",
            description: "We offer Financial Billing Audit services, conducting thorough reviews to ensure accuracy, compliance, and efficiency in healthcare billing processes, optimizing financial outcomes for providers.",
            link: "",
        },

    ]

    return (
        <>
            <div className='flex flex-col justify-center items-center p-10'>
                <div className='flex flex-row justify-between items-center lg:p-10'>
                    <div>
                        <div className='flex flex-row justify-start items-center space-x-3 text-primary font-custom text-2xl font-medium'>
                            <p>What We Provide?</p>
                            <div className='bg-primary w-[2rem] h-[0.2rem]'></div>
                        </div>
                        <p className='text-4xl md:text-6xl text-center md:text-left font-custom font-semibold text-secondary'>
                            Our BCS Solutions
                        </p>
                    </div>
                    <p className='w-3/5 text-justify'>We provide advanced infrastructure and strategies to identify issues in your revenue cycle
                        management, thus improving the medical billing cycle with precisely streamlined processes. By
                        analyzing your practice health financial reports, denials, weekly reports, unpaid claims,
                        credentialing matters, PM and Clearinghouse configuration, we offer increased revenue and
                        financial practice collections while reducing administrative costs. Through business intelligence
                        reporting and advanced technology and software services, we deliver weekly reports
                        showcasing constant improvement in your accounts receivable and financial growth.
                    </p>
                </div>
                <div className='w-full flex flex-wrap justify-between lg:p-10'>
                    {data.map((item) => (
                        <OfferCards data={item} />
                    ))}
                </div>
            </div>

        </>
    )
}

export default WhatWeProvide;