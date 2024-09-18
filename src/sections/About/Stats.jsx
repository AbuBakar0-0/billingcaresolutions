import React from 'react'
import Heading from './../../components/Heading';
import StatsCard from '../../components/About/StatsCard';

function Stats() {
    const data = [
        {
            title: "Geographic Reach",
            img: "./assets/about-us/Geographic-Reach-billingcaresolutions.com.svg",
            description: "48 states",
        },
        {
            title: "Healthcare Network",
            img: "./assets/about-us/Healthcare-Network-billingcaresolutions.com.svg",
            description: "1,200+ healthcare providers",
        },
        {
            title: "Specialty Expertise",
            img: "./assets/about-us/Specialty-Expertise-billingcaresolutions.com.svg",
            description: "Over 35 medical specialties",
        },
        {
            title: "Claim Approval Rate",
            img: "./assets/about-us/Claim-Approval-Rate billingcaresolutions.com.svg",
            description: "97% acceptance rate",
        },
        {
            title: "Regulatory Compliance",
            img: "./assets/about-us/Regulatory-Compliance-billingcaresolutions.com.svg",
            description: "100% compliance record",
        },
    ]
    return (
        <>
            <div className='w-full flex flex-col justify-center items-center gap-3 my-10'>
                <Heading data={'Our Company’s statistics'} />
                <div className='w-full flex flex-wrap justify-center items-center gap-3 '>
                    {data.map((item) => (
                        <StatsCard title={item.title} description={item.description} img={item.img}/>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Stats