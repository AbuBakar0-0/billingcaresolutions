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
        <div className='flex flex-col justify-center items-center p-8' style={{ backgroundImage: `url("./assets/img2.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <p className='text-3xl text-center font-custom'>Let Us Handle Your Billing Services!</p>
            <div className='flex flex-wrap justify-center items-center md:p-8'>
                {data.map((item) => (
                    <div className='w-full md:w-1/2 lg:w-1/4 flex flex-row justify-start items-center'>
                        <img src="./assets/Arrow billingcaresolutions.com.svg" alt="" className='w-4 h-4' />
                        <p className='p-2'>{item}</p>
                    </div>
                ))}
            </div>
            <div className='flex flex-wrap justify-around items-center rounded-2xl border-4 border-white w-full bg-white p-10 shadow-xl'>
                {counterData.map((item) => (
                    <Counter title={item.title} number={item.number} image={item.image} />
                ))}
            </div>
        </div>
    )
}

export default BillingServices