import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
                    .eq('type', 'faqs')
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
                <div className='container mx-auto md:min-h-[24rem] md:max-h-[24rem] flex flex-col md:flex-row justify-start items-center gap-4 text-center lg:p-10'>
                    <div className='w-full md:w-1/2 flex flex-col justify-start items-start text-left gap-3 py-20 scale-[0.85] md:scale-100'>
                        <h1 className='w-full uppercase text-3xl font-bold'>{header.heading}</h1>
                        <p className='text-justify'>{header.description}
                        </p>
                        <Link to="/contact" className='flex justify-center px-3 py-2 rounded-2xl md:w-1/3  border-[1px] bg-primary p-4 text-white'>Talk to an Expert</Link>
                    </div>
                    <div className='w-full md:w-1/2'>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero