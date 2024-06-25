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
        "Auditing Challenging Denials",
        "Credentialing Services",
        "Healthcare Data Analysis",
        "Billing Strategy Consultation"
    ];

    const counterData = [
        {
            title: "+ Years of Experience ",
            number: 15,
            image: "./assets/google.png",
        },
        {
            title: "+ Providers",
            number: 500,
            image: "./assets/google.png",
        },
        {
            title: "+ Specialties",
            number: 30,
            image: "./assets/google.png",
        },
        {
            title: "+ Softwares ",
            number: 25,
            image: "./assets/google.png",
        }
    ];
    return (
        <div className='flex flex-col justify-center items-center p-10'>
            <p className='text-3xl font-semibold'>Let Us Handle Your Billing Services!</p>
            <div className='flex flex-wrap justify-around items-center p-8'>
                {data.map((item) => (
                    <div className='w-1/2 lg:w-1/4 flex flex-row justify-start items-center my-1'>
                        <img src="./assets/google.png" alt="" className='w-4 h-4' />
                        <p className='p-2'>{item}</p>
                    </div>
                ))}
            </div>
            <div className='flex flex-wrap justify-around items-center rounded-2xl border-4 border-white w-full bg-red-300 p-10 '>
                {counterData.map((item) => (
                    <Counter title={item.title} number={item.number} image={item.image} />
                ))}
            </div>
        </div>
    )
}

export default BillingServices