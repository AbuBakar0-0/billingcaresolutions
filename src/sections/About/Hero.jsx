import React, { useEffect, useState } from 'react'
import { supabase } from './../../lib/supabase';
import Loader from './../../components/ui/Loader';

function Hero() {

    const [loading, setLoading] = useState(false);
    const [header, setHeadersData] = useState([]);

    const [icons, setIcons] = useState([]);
    // Fetch data from Supabase
    useEffect(() => {
        const fetchHeaderData = async () => {
            try {
                setLoading(true);
                // Fetch the header data where type is 'whybcs'
                const { data: headerData, error: headerError } = await supabase
                    .from('headers')
                    .select('*')
                    .eq('type', 'whybcs')
                    .single(); // We expect only one record

                if (headerError) throw headerError;

                // Fetch the icons where type is 'top_icons'
                const { data: iconData, error: iconError } = await supabase
                    .from('top_icons')
                    .select('*');
                if (iconError) throw iconError;

                // Update the state with the fetched data
                setHeadersData(headerData);
                setIcons(iconData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching header data:", error);
            }
        };

        fetchHeaderData();
    }, []);

    return (
        <>
            {loading ? <Loader /> : <>
                <div className='bg-secondary text-white' style={{ backgroundImage: `url("${header.background_image}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: "center" }}>
                    <div className='container mx-auto min-h-[24rem] flex flex-col justify-center items-center gap-4 text-center p-4'>
                        <h1 className='text-3xl font-bold font-custom w-full uppercase '>{header.heading}</h1>
                        <p className='text-md w-full md:w-1/2 font-custom'>{header.description}</p>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center p-10'>
                    <div className='container flex flex-col md:flex-row justify-center items-center rounded-2xl bg-white shadow-2xl p-10 md:p-10 md:-mt-28 gap-3'>
                        {icons.map((item) => (
                            <div className='w-1/4 flex flex-col justify-center items-center'>
                                <img src={item.icon} alt="Billing Care Solutions" className='size-20' />
                                <p className='text-secondary font-semibold text-center'>{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </>}
        </>
    )
}

export default Hero