import React from 'react'
import Heading from './../../components/Heading';
import StatsCard from '../../components/About/StatsCard';


function Stats() {
    
    const data = [
        {
            title: "Geographic Reach",
            img: "./assets/about-us/48 states.svg",
            description: "50 states",
        },
        {
            title: "Healthcare Network",
            img: "./assets/about-us/1,200+ healthcare providers.svg",
            description: "1,200+ healthcare providers",
        },
        {
            title: "Specialty Expertise",
            img: "./assets/about-us/over 35 medical specialties.svg",
            description: "Over 35 medical specialties",
        },
        {
            title: "Claim Approval Rate",
            img: "./assets/about-us/97 acceptance rate.svg",
            description: "97% acceptance rate",
        },
        {
            title: "Regulatory Compliance",
            img: "./assets/about-us/compliance record.svg",
            description: "100% compliance record",
        },
    ]
    return (
        <>
            <div className='w-full flex flex-col justify-center items-center gap-3 my-10'>
                <Heading data={'Our Company’s Statistics'} />
                <div className='w-full flex flex-wrap justify-center items-center gap-3'>
                    {data.map((item) => (
                        <StatsCard title={item.title} description={item.description} img={item.img}/>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Stats