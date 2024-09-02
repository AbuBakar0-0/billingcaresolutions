import React from 'react'
import Heading from './../../components/Heading';
import StatsCard from '../../components/About/StatsCard';

function Stats() {
    const data = [
        {
            title: "Geographic Reach",
            img: "",
            description: "48 states",
        },
        {
            title: "Healthcare Network",
            img: "",
            description: "1,200+ healthcare providers",
        },
        {
            title: "Specialty Expertise",
            img: "",
            description: "over 35 medical specialties",
        },
        {
            title: "Claim Approval Rate",
            img: "",
            description: "97% acceptance rate",
        },
        {
            title: "Regulatory Compliance",
            img: "",
            description: "100% compliance record",
        },
    ]
    return (
        <>
            <div className='w-full flex flex-col justify-center items-center gap-3'>
                <Heading data={'Our Company’s statistics'} />
                <div className='w-full flex flex-wrap justify-center items-center gap-3'>
                    {data.map((item) => (
                        <StatsCard data={item} />
                    ))}
                </div>

            </div>
        </>
    )
}

export default Stats