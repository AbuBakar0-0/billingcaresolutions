import React, { useEffect, useState } from 'react'
import PayoffCard from '../../components/About/PayoffCard';
import { supabase } from '../../lib/supabase';
import Loader from './../../components/ui/Loader';


function Payoff() {

    const [loading, setLoading] = useState(false);
    const [payoff, setPayoff] = useState([]);

    useEffect(() => {
        const fetchHeaderData = async () => {
            try {
                setLoading(true);
                // Fetch the header data where type is 'whybcs'
                const { data, error: headerError } = await supabase
                    .from('payoff')
                    .select('*'); // We expect only one record
                console.log(data);
                if (headerError) throw headerError;

                setPayoff(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching header data:", error);
            }
        };

        fetchHeaderData();
    }, []);

    return (

        loading ? <></> :
            <>
                <div className='w-full flex flex-col justify-center items-center p-10'>
                    <div className='w-full flex flex-col md:flex-row justify-between items-center gap-3'>
                        <div className='w-full md:w-1/3 flex flex-row justify-start items-center gap-3'>
                            <p className='text-2xl md:text-3xl font-semibold text-secondary'>What's the payoff?</p>
                            <div className={`bg-primary w-[0.2rem] h-[2rem]`}></div>
                        </div>
                        <div className='w-full text-justify text-sm lg:text-md whitespace-normal break-words tracking-tight'>
                            {payoff.map((item, index) => (
                                <p>{item.description}</p>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center items-center gap-3 mt-10 '>
                        {payoff.map((item, index) => (
                            <PayoffCard data={item} number={index} />
                        ))}

                    </div>
                </div>
            </>

    )
}

export default Payoff