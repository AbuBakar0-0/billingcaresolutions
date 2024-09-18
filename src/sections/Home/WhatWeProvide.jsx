import React, { useState } from 'react'
import OfferCards from './../../components/Home/OfferCards';

function WhatWeProvide() {

    const [showMore, setShowMore] = useState(false);

    const data = [
        {
            title: "Medical Billing & Coding",
            img: './assets/what_do_we_offer/1. Medical Billing and Coding billingcaresolutions.com.webp',
            icon: "./assets/what_do_we_offer/1. Medical Billing and Coding Icon billingcaresolutions.com.svg",
            description: "We handle the entire Billing process, from Coding healthcare services to submitting claims and ensuring timely, accurate reimbursements for providers.",
        },
        {
            title: "Revenue Cycle Management",
            img: './assets/what_do_we_offer/3. Revenue Cycle Management billingcaresolutions.com.webp',
            icon: "./assets/what_do_we_offer/3. Revenue Cycle Management icon billingcaresolutions.com.svg",
            description: "We provide comprehensive RCM services, optimizing the entire billing process from patient registration to final payment collection.",
        },
        {
            title: "Credentialing Services",
            img: './assets/what_do_we_offer/3. Revenue Cycle Management billingcaresolutions.com.webp',
            icon: "./assets/what_do_we_offer/3. Revenue Cycle Management icon billingcaresolutions.com.svg",
            description: "BCS streamlines the credentialing process with precision and efficiency. From verifying qualifications to conducting comprehensive compliance assessments, BCS ensures seamless and expedited credentialing.",
        },
        {
            title: "Medical Billing and Coding Audits",
            img: './assets/what_do_we_offer/3. Revenue Cycle Management billingcaresolutions.com.webp',
            icon: "./assets/what_do_we_offer/3. Revenue Cycle Management icon billingcaresolutions.com.svg",
            description: "At BCS, our medical billing and coding audits play a crucial role in helping healthcare providers maintain compliance with regulatory standards, enhance billing accuracy, and maximize revenue.",
        },
        {
            title: "Reporting and Analytics",
            img: './assets/what_do_we_offer/2. Provider Enrollment & Credentialing billingcaresolutions.com.webp',
            icon: "./assets/what_do_we_offer/2. Provider Enrollment & Credentialing Icon billingcaresolutions.com.svg",
            description: "BCS delivers sophisticated reporting and analytics that turn complex data into actionable insights. Utilizing advanced analytical tools, BCS provides a comprehensive view of financial and operational performance.",
        },

        {
            title: "AR & Denial Management Services",
            img: './assets/what_do_we_offer/4. AR & Denial Management billingcaresolutions.com.webp',
            icon: "./assets/what_do_we_offer/4. AR & Denial Management Icon billingcaresolutions.com.svg",
            description: "BCS enhances financial performance with expert AR and denial management services. By meticulously managing accounts receivable and strategically resolving denials, BCS ensures streamlined revenue cycles and maximized cash flow.",
        },
        {
            title: "Consultation Services",
            img: './assets/what_do_we_offer/5. Eligibility Verification billingcaresolutions.com.webp',
            icon: "./assets/what_do_we_offer/5. Eligibility Verification billingcaresolutions.com.svg",
            description: "BCS offers expert consultation to navigate healthcare management complexities. Providing tailored advice on billing processes, compliance strategies, and operational efficiency, BCS delivers actionable insights and innovative solutions.",
        },
        {
            title: "VOB & Prior Authorization",
            img: './assets/what_do_we_offer/6. Piror Authorization billingcaresolutions.com.webp',
            icon: "./assets/what_do_we_offer/6. Piror Authorization billingcaresolutions.com.svg",
            description: "BCS ensures unparalleled precision in verification and prior authorization. Rigorous patient eligibility checks and meticulous management of authorization requests streamline approvals, reduce claim rejections, and accelerate patient access to services.",
        },
        {
            title: "Compliance Assistance",
            img: './assets/what_do_we_offer/7. Patient Help Support billingcaresolutions.com.webp',
            icon: "./assets/what_do_we_offer/7. Patient Help Support billingcaresolutions.com.svg",
            description: "BCS provides robust compliance assistance to navigate complex healthcare regulations. Expert guidance on regulatory requirements, policy updates, and best practices ensures strict adherence to industry standards.",
        },
        {
            title: "Patient Help Support",
            img: './assets/what_do_we_offer/8. Financial Billing Audit billingcaresolutions.com.webp',
            icon: "./assets/what_do_we_offer/8. Financial Billing Audit billingcaresolutions.com.svg",
            description: "BCS delivers comprehensive patient support, enhancing the healthcare experience with empathy and efficiency. From insurance inquiries to billing questions, BCS provides expert assistance tailored to patient needs.",
        },

    ]

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    // Conditionally render either first 5 items or all items based on showMore state
    const itemsToDisplay = showMore ? data : data.slice(0, 5);


    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-col md:flex-row justify-between items-center p-8 lg:p-10'>
                    <div>
                        <div className={`w-full flex flex-row justify-center items-center space-x-3 text-primary font-custom text-2xl font-medium`}>
                            <div className={`bg-primary w-[2rem] h-[0.2rem]`}></div>
                            <p>What We Provide?</p>
                            <div className={`bg-primary w-[2rem] h-[0.2rem]`}></div>
                        </div>
                        <p className='text-2xl md:text-6xl md:text-left font-custom font-semibold text-secondary'>
                            Our BCS Solutions
                        </p>
                    </div>
                </div>
                <div className='w-full flex flex-wrap justify-center md:justify-between md:px-10 lg:px-28 mb-10 transition-all duration-300 ease-in-out'>
                    {itemsToDisplay.map((item, index) => (
                        <OfferCards key={index} data={item} />
                    ))}
                </div>
                <button
                    onClick={toggleShowMore}
                    className='bg-secondary text-white px-4 py-3 rounded-xl hover:bg-primary hover:transition-all hover:duration-300 hover:ease-in-out mb-10'>
                    {showMore ? 'Show Less' : 'Show More'}
                </button>
            </div>
        </>
    );
}

export default WhatWeProvide;