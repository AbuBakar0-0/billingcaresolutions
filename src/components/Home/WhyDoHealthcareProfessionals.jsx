import React from 'react'
import Heading from './../Heading';
import ServicesCard from './ServicesCard';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

function WhyDoHealthcareProfessionals() {
    // useEffect(() => {
    //     
    // }, []);
    const data = [
        {
            id: 1,
            title: "15 Minutes Free Consultancy",
            img: "./assets/why_choose_billing_care_solutions/free-consultation-billingcaresolutions.com.svg",
            description: ""
        },
        {
            id: 2,
            title: "Practice Health Audit",
            img: "./assets/why_choose_billing_care_solutions/2. First-Pass Resolution billingcaresolutions.com .svg",
            description: ""
        },
        {
            id: 3,
            title: "Practice Health Plan",
            img: "./assets/why_choose_billing_care_solutions/3. Denial Rejection billingcaresolutions.com.svg",
            description: ""
        },
        {
            id: 4,
            title: "Error Free Billing",
            img: "./assets/why_choose_billing_care_solutions/4. Short Turnaround Time billingcaresolutions.com.svg",
            description: ""
        },
        {
            id: 5,
            title: "Constant Revenue Boost",
            img: "./assets/why_choose_billing_care_solutions/1. Rapid Revenue Recovery billingcaresolutions.com.svg",
            description: "45%"
        },
        {
            id: 6,
            title: "Claims Submission Success Rate",
            img: "./assets/why_choose_billing_care_solutions/6. Electronic Claim billingcaresolutions.com.svg",
            description: "99%"
        },
        {
            id: 7,
            title: "Fast Revenue Restoration",
            img: "./assets/why_choose_billing_care_solutions/5. Electronic Payment billingcaresolutions.com.svg",
            description: "20 Days"
        },
        {
            id: 8,
            title: "Rapid Response Time  ",
            img: "./assets/why_choose_billing_care_solutions/8. Revenue Increase billingcaresolutions.com.svg",
            description: "24/7"
        },
    ];
    return (
        <>
            <div className='flex flex-col justify-center items-center w-full p-10'>
                <Heading data="Why Do Healthcare Professionals Choose Our Medical Billing Services?" />
                <div className='w-full flex flex-wrap justify-center md:justify-between items-center'>
                    {data.map((item) => (
                        <ServicesCard data={item} />
                    ))}
                </div>
            </div></>
    )
}

export default WhyDoHealthcareProfessionals;