import React from 'react'
import Heading from '../../components/Heading';
import MilestoneCard from '../../components/About/MilestoneCard';

function Achievements() {
    const acdata = [
        {
            title: "Average Time to Resolution",
            description: "25 Days",
            width: "75",
        },
        {
            title: "First-Pass Claim Acceptance Rate",
            description: "99%",
            width: "99",
        },
        {
            title: "Denial & Rejection Rate",
            description: "5%-10%",
            width: "7.5",
        },
        {
            title: "Processing Turnaround Time",
            description: "24 Hours",
            width: "70",
        },
    ];

    const addata = [
        {
            title: "Electronic Claims Processing Rate",
            description: "95%",
            width: "95",
        },
        {
            title: "Electronic Payment Processing Rate",
            description: "95%",
            width: "95%",
        },
        {
            title: "Client Retention Rate",
            description: "100%",
            width: "100",
        },
        {
            title: "Revenue Growth Rate",
            description: "30%",
            width: "30%",
        },
        
    ]
    return (
        <>
            <div className='w-full flex flex-col justify-center items-center gap-3 text-center p-5'>
                <Heading data={'Our Milestones'} />
                <p className='w-full md:w-1/2'>Our unwavering dedication to excellence in Medical Billing has resulted in exceptional industry recognition and numerous prestigious awards. Some of our notable accomplishments:</p>
            </div>
            <div className='w-full flex flex-col md:flex-row justify-between items-center'>
                <div className='w-full md:w-1/2 flex flex-col justify-center items-center border-l-8 border-secondary p-5 gap-3'>
                    <p className='w-full text-3xl font-semibold text-left text-secondary'>Accuracy and Precision</p>
                    <p>We pride ourselves on maintaining exceptional accuracy and operational efficiency in our Medical Billing processes, ensuring timely reimbursements for our clients. Our commitment to meticulous process management and adherence to industry standards has led to a significant reduction in error rates, well below the national benchmark.</p>
                    {acdata.map((item) => (
                        <MilestoneCard data={item} />
                    ))}
                </div>
                <div className='w-1/2 flex flex-col justify-center items-center'>
                    <img src="./assets/img2.jpg" alt="" className='h-56' />
                </div>
            </div>
            <div className='w-full flex flex-col md:flex-row justify-between items-center'>
                <div className='w-full md:w-1/2 flex flex-col justify-center items-center'>
                    <img src="./assets/img2.jpg" alt="" className='h-56' />
                </div>
                <div className='w-full md:w-1/2 flex flex-col justify-center items-center border-r-8 border-secondary p-5 gap-3'>
                    <p className='w-full text-3xl font-semibold text-left text-secondary'>Expansion and Advancement </p>
                    <p>Our track record of success and commitment to quality has driven substantial growth and diversification in our client base and service portfolio. Our ability to adapt to evolving industry demands and anticipate client needs has positioned us as a leader in the Medical Billing field.</p>
                    {addata.map((item) => (
                        <MilestoneCard data={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Achievements