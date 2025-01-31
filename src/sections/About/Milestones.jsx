import React, { useEffect } from 'react'
import Heading from '../../components/Heading';
import MilestoneCard from '../../components/About/MilestoneCard';
import { useState } from 'react';
import { supabase } from './../../lib/supabase';
import Loader from './../../components/ui/Loader';


function Achievements() {

    const [loading, setLoading] = useState(false);
    const [milestones1, setMilestones1] = useState([]);
    const [milestones2, setMilestones2] = useState([]);

    useEffect(() => {
        const fetchHeaderData = async () => {
            try {
                setLoading(true);
                // Fetch the header data where type is 'whybcs'
                const { data: type1Data, error: error1 } = await supabase
                    .from('milestones')
                    .select('*').eq("type", "01"); // We expect only one record
                if (error1) throw error1;

                setMilestones1(type1Data);

                const { data: type2Data, error: error2 } = await supabase
                    .from('milestones')
                    .select('*').eq("type", "02"); // We expect only one record
                if (error2) throw error2;

                setMilestones2(type2Data);

                setLoading(false);
            } catch (error) {
                console.error("Error fetching header data:", error);
            }
        };

        fetchHeaderData();
    }, []);

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
            description: "1% to 3%",
            width: "1.5",
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
            description: "99%",
            width: "99",
        },
        {
            title: "Electronic Payment Processing Rate",
            description: "99%",
            width: "99",
        },
        {
            title: "Client Retention Rate",
            description: "100%",
            width: "100",
        },
        {
            title: "Revenue Growth Rate",
            description: "95%",
            width: "95",
        },

    ]
    return (
        loading ? <></> :
            <>
                <div className='w-full flex flex-col justify-center items-center gap-3 text-center p-5'>
                    <Heading data={'Our Milestones'} />
                    <p className='w-full md:w-1/2 text-center text-sm lg:text-md whitespace-normal break-words tracking-tight'>
                        {milestones1.map((item, index) => (
                            <>
                                {item.main_description}
                            </>
                        ))}
                    </p>
                </div>
                <div className='w-full flex flex-col md:flex-row justify-between items-center'>
                    <div className='w-full md:w-1/2 flex flex-col justify-center items-center border-l-8 border-secondary p-5 gap-3'>
                        <p className='w-full text-2xl font-semibold text-left text-secondary'>
                            {milestones1.map((item, index) => (
                                <>
                                    {item.title}
                                </>
                            ))}
                        </p>
                        <p className='text-justify text-sm lg:text-md whitespace-normal break-words tracking-tight'>
                            {milestones1.map((item, index) => (
                                <>
                                    {item.description}
                                </>
                            ))}
                        </p>
                        {milestones1.map((item) => (
                            <MilestoneCard data={item} />
                        ))}
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col justify-center items-center'>
                        {milestones1.map((item, index) => (
                            item.image == "" || item.image == null ? null : <img src={item.image} alt="Billing Care Solutions" className='p-10' />))
                        }
                    </div>
                </div>
                <div className='w-full flex flex-col md:flex-row justify-between items-center'>
                    <div className='w-full md:w-1/2 flex flex-col justify-center items-center'>
                        {milestones2.map((item, index) => (
                            item.image == "" || item.image == null ? null : <img src={item.image} alt="Billing Care Solutions" className='p-10' />))
                        }
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col justify-center items-center border-r-8 border-secondary p-5 gap-3'>
                        <p className='w-full text-2xl font-semibold text-left text-secondary'>{milestones2.map((item, index) => (
                            <>
                                {item.title}
                            </>
                        ))} </p>
                        <p className='text-justify text-sm lg:text-md whitespace-normal break-words tracking-tight'>
                            {milestones2.map((item, index) => (
                                <>
                                    {item.description}
                                </>
                            ))}</p>
                        {milestones2.map((item) => (
                            <MilestoneCard data={item} />
                        ))}
                    </div>
                </div>
            </>
    )
}

export default Achievements