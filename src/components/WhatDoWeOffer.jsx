import React from 'react'
import OfferCards from './OfferCards'

function WhatDoWeOffer() {

    const data=[
        {
            id:1,
            title:"Medical Billing & Coding",
            img:'./assets/what_do_we_offer/1. Medical Billing and Coding billingcaresolutions.com.webp',
            icon:"./assets/what_do_we_offer/1. Medical Billing and Coding Icon billingcaresolutions.com.svg",
            description:"lorem ipsum",
            link:"",
        },
        {
            id:2,
            title:"Provider Enrollment & Credentialing",
            img:'./assets/what_do_we_offer/2. Provider Enrollment & Credentialing billingcaresolutions.com.webp',
            icon:"./assets/what_do_we_offer/2. Provider Enrollment & Credentialing Icon billingcaresolutions.com.svg",
            description:"lorem ipsum",
            link:"",
        },
        {
            id:3,
            title:"Revenue Cycle Management",
            img:'./assets/what_do_we_offer/3. Revenue Cycle Management billingcaresolutions.com.webp',
            icon:"./assets/what_do_we_offer/3. Revenue Cycle Management icon billingcaresolutions.com.svg",
            description:"lorem ipsum",
            link:"",
        },
        {
            id:4,
            title:"AR & Denial Management",
            img:'./assets/what_do_we_offer/4. AR & Denial Management billingcaresolutions.com.webp',
            icon:"./assets/what_do_we_offer/4. AR & Denial Management Icon billingcaresolutions.com.svg",
            description:"lorem ipsum",
            link:"",
        },
        {
            id:5,
            title:"Eligibility Verification",
            img:'./assets/what_do_we_offer/5. Eligibility Verification billingcaresolutions.com.webp',
            icon:"./assets/what_do_we_offer/5. Eligibility Verification billingcaresolutions.com.svg",
            description:"lorem ipsum",
            link:"",
        },
        {
            id:6,
            title:"Prior Authorization",
            img:'./assets/what_do_we_offer/6. Piror Authorization billingcaresolutions.com.webp',
            icon:"./assets/what_do_we_offer/6. Piror Authorization billingcaresolutions.com.svg",
            description:"lorem ipsum",
            link:"",
        },
        {
            id:7,
            title:"Patient Help Support",
            img:'./assets/what_do_we_offer/7. Patient Help Support billingcaresolutions.com.webp',
            icon:"./assets/what_do_we_offer/7. Patient Help Support billingcaresolutions.com.svg",
            description:"lorem ipsum",
            link:"",
        },
        {
            id:8,
            title:"Financial Billing Audit",
            img:'./assets/what_do_we_offer/8. Financial Billing Audit billingcaresolutions.com.webp',
            icon:"./assets/what_do_we_offer/8. Financial Billing Audit billingcaresolutions.com.svg",
            description:"lorem ipsum",
            link:"",
        },
        
    ]

    return (
        <>
            <div className='flex flex-col justify-center items-center p-4'>
                <p className='text-4xl text-center md:text-left font-custom font-medium'>What We Provide?</p>
                <div className='w-full flex flex-wrap justify-evenly mt-5'>
                {data.map((item) => (
                    <OfferCards data={item}/>
                ))}
                </div>
            </div>
            
        </>
    )
}

export default WhatDoWeOffer