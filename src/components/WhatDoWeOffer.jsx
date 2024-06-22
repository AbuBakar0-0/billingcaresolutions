import React from 'react'
import OfferCards from './OfferCards'

function WhatDoWeOffer() {

    const data=[
        {
            id:1,
            title:"Medical Billing & Coding",
            img:'./assets/img.jpg',
            icon:"",
            description:"lorem ipsum",
            link:"",
        },
        {
            id:2,
            title:"Provider Enrollment & Credentialing",
            img:'./assets/img.jpg',
            icon:"",
            description:"lorem ipsum",
            link:"",
        },
        {
            id:3,
            title:"Revenue Cycle Management",
            img:'./assets/img.jpg',
            icon:"",
            description:"lorem ipsum",
            link:"",
        },
        {
            id:4,
            title:"AR & Denial Management",
            img:'./assets/img.jpg',
            icon:"",
            description:"lorem ipsum",
            link:"",
        },
        {
            id:5,
            title:"Eligibility Verification",
            img:'./assets/img.jpg',
            icon:"",
            description:"lorem ipsum",
            link:"",
        },
        {
            id:6,
            title:"Prior Authorization",
            img:'./assets/img.jpg',
            icon:"",
            description:"lorem ipsum",
            link:"",
        },
        {
            id:7,
            title:"Patient Help Support",
            img:'./assets/img.jpg',
            icon:"",
            description:"lorem ipsum",
            link:"",
        },
        {
            id:8,
            title:"Financial Billing Audit",
            img:'./assets/img.jpg',
            icon:"",
            description:"lorem ipsum",
            link:"",
        },
        
    ]

    return (
        <>
            <div className='w-screen flex flex-col justify-center items-center p-4'>
                <p className='text-3xl'>What Do We Offer?</p>
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