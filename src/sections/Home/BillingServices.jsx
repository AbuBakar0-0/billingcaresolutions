import React from 'react'
import Counter from './Counter';

function BillingServices() {
    const data = [
        "Denial Resolution",
        "Risk-Free Trial",
        "Real-Time Insurance Validation",
        "Affordable Pricing",
        "Improved Cash Flow",
        "Skilled Medical Billing Experts",
        "Helpdesk Assistance",
        "Revenue Cycle Management",
        "Timely AR Follow-Up",
        "Billing Specialists",
        "Challenging Denials Auditing",
        "Credentialing Services",
        "Healthcare Data Analysis",
        "Billing Strategy Consultation",
        "Insurance Eligibility Verification",
        "Patient Payment Solutions",
    ];

    const counterData = [
        {
            title: "+ Years of Experience ",
            number: 15,
            image: "./assets/counter/1. Years of Experience billingcaresolutions.com.svg",
        },
        {
            title: "+ Providers",
            number: 500,
            image: "./assets/counter/2. Providers billingcaresolutions.com.svg",
        },
        {
            title: "+ Specialties",
            number: 30,
            image: "./assets/counter/3. Software billingcaresolutions.com.svg",
        },
        {
            title: "+ Softwares ",
            number: 25,
            image: "./assets/counter/4. Specialities billingcaresolutions.com.svg",
        }
    ];
    return (
        <div className='flex flex-col justify-center items-center p-10' style={{ backgroundImage: `url("./assets/billingcaresolutions.com (2).webp")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='flex flex-row justify-center items-center space-x-3 text-white font-custom text-lg md:text-4xl text-center font-medium'>
                <div className='bg-white w-[2rem] h-[0.2rem]'></div>
                    <p className='text-2xl md:text-3xl'>Let Us Handle Your Billing Services!</p>
                <div className='bg-white w-[2rem] h-[0.2rem]'></div>
            </div>
            <div className='flex flex-wrap justify-center items-center md:p-8'>
                {data.map((item) => (
                    <div className='w-full md:w-1/2 lg:w-1/4 flex flex-row justify-start items-center text-white'>
                        <img src="./assets/Arrow billingcaresolutions.com.svg" alt="Billing Care Solutions" className='w-4 h-4' />
                        <p className='p-2 text-justify text-sm lg:text-md whitespace-normal break-words tracking-tight'>{item}</p>
                    </div>
                ))}
            </div>
            <div className='flex flex-wrap justify-around items-center rounded-2xl border-4 border-white w-full bg-white p-10 shadow-3xl'>
                {counterData.map((item) => (
                    <Counter title={item.title} number={item.number} image={item.image} />
                ))}
            </div>
        </div>
    )
}

export default BillingServices