import React, { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase';

function Hero() {

    const [loading, setLoading] = useState(false);
    const [header, setHeadersData] = useState([]);
    // Fetch data from Supabase
    useEffect(() => {
        const fetchHeaderData = async () => {
            try {
                setLoading(true);
                // Fetch the header data where type is 'whybcs'
                const { data: headerData, error: headerError } = await supabase
                    .from('headers')
                    .select('*')
                    .eq('type', 'contact')
                    .single(); // We expect only one record

                if (headerError) throw headerError;

                setHeadersData(headerData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching header data:", error);
            }
        };

        fetchHeaderData();
    }, []);


    return (
        <>
            <div className='text-white' style={{ backgroundImage: `url("${header.background_image}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='container mx-auto min-h-[26rem] flex flex-col md:flex-row justify-start items-center gap-4 text-center  p-10 lg:p-20'>
                    <div className='w-full md:w-1/2 flex flex-col justify-start items-start text-left gap-4'>
                        <h1 className='w-full uppercase text-5xl font-bold'>{header.heading}</h1>
                        <p className='w-full text-md'>{header.description}</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero