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
                    .eq('type', 'articles')
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
            <div className='bg-secondary text-white' style={{ backgroundImage: `url("${header.background_image}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: "center" }}>
                <div className='container mx-auto md:min-h-[28rem] md:max-h-[28rem] flex flex-col md:flex-row justify-start items-center gap-4 text-center lg:p-10'>
                    <div className='w-full md:w-1/2 flex flex-col justify-start items-start text-left gap-3 py-20 scale-[0.85] text-md md:scale-100'>
                        <h1 className='text-2xl'>{header.mini_heading}</h1>
                        <p className='w-full uppercase text-5xl font-bold'> {header.heading}</p>
                    </div>
                    <div className='w-full md:w-1/2'>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero