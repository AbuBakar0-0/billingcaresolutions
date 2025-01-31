import React, { useEffect, useState } from 'react'
import HeadingLine from './../../components/HeadingLine';
import { supabase } from '../../lib/supabase';
import Loader from '../../components/ui/Loader';

function AboutCompany() {

    const [loading, setLoading] = useState(false);
    const [aboutCompany, setAboutCompany] = useState([]);

    useEffect(() => {
        const fetchHeaderData = async () => {
            try {
                setLoading(true);
                // Fetch the header data where type is 'whybcs'
                const { data, error: headerError } = await supabase
                    .from('about_company')
                    .select('*')
                    .single(); // We expect only one record

                if (headerError) throw headerError;

                setAboutCompany(data);
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
                <div className='w-full flex flex-col md:flex-row justify-between items-center p-10'>
                    <div className='w-full md:w-1/2 flex flex-col justify-start items-center text-left'>
                        <HeadingLine data={"Billing Care Solutions"} />
                        <p className='w-full text-3xl md:text-5xl text-left font-custom font-semibold text-secondary'>About the Company</p>
                        <p className='py-4 text-justify text-sm lg:text-md whitespace-normal break-words tracking-tight'>{aboutCompany.description}</p>
                    </div>
                    <div className='w-full md:w-1/2 flex justify-center items-center'>
                        <img src={aboutCompany.image} alt="Billing Care Solutions" className='p-5 lg:h-[30rem]' />
                    </div>
                </div>
            </>

    )
}

export default AboutCompany