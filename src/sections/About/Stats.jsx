import React, { useEffect, useState } from 'react'
import Heading from './../../components/Heading';
import StatsCard from '../../components/About/StatsCard';
import { supabase } from './../../lib/supabase';
import Loader from './../../components/ui/Loader';


function Stats() {

    const [loading, setLoading] = useState(false);
    const [stats, setStats] = useState([]);

    useEffect(() => {
        const fetchHeaderData = async () => {
            try {
                setLoading(true);
                // Fetch the header data where type is 'whybcs'
                const { data, error: headerError } = await supabase
                    .from('stats')
                    .select('*'); // We expect only one record
                console.log(data);
                if (headerError) throw headerError;

                setStats(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching header data:", error);
            }
        };

        fetchHeaderData();
    }, []);

    return (
        loading ?
        <></> :
            <>
                <div className='w-full flex flex-col justify-center items-center gap-3 my-10'>
                    <Heading data={'Our Company’s Statistics'} />
                    <div className='w-full flex flex-wrap justify-center items-center gap-3'>
                        {stats.map((item) => (
                            <StatsCard title={item.title} description={item.description} img={item.icon} />
                        ))}
                    </div>
                </div>
            </>
    )
}

export default Stats