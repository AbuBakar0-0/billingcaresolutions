import React, { useEffect, useState } from 'react'
import HeadingLine from './../../components/HeadingLine';
import WhyDoHealthcareProfessionals from '../../components/Home/WhyDoHealthcareProfessionals';
import { supabase } from '../../lib/supabase';

function WhyChooseUs() {
    const [whyChooseUs, setWhyChooseUs] = useState([]);

    useEffect(() => {
        // Fetch existing slides from Supabase
        const fetchSlides = async () => {
            const { data, error } = await supabase.from("why_choose_bcs").select("*").single();
            if (error) {
                console.error("Error fetching slides:", error.message);
            } else {
                setWhyChooseUs(data || []);
            }

        };

        fetchSlides();
    }, []);
    return (
        <>
            <div className='w-full flex flex-col lg:flex-row justify-between items-center px-10' >
                <div className='w-full lg:w-1/2 flex flex-col space-y-4 lg:p-10'>
                    <div>
                        <HeadingLine data={whyChooseUs.short_title} />
                        <p className='text-3xl md:text-5xl text-left font-custom font-semibold text-secondary'>
                            {whyChooseUs.title}
                        </p>
                    </div>
                    <p className='mt-5 text-justify text-sm lg:text-md'>
                        {whyChooseUs.description}
                    </p>

                </div>
                <div className='w-full lg:w-1/2 flex justify-center items-center'>
                    <img src={whyChooseUs.image} alt="Billing Care Solutions" className='w-full md:w-3/5 py-10 lg:py-0 ' />
                </div>

            </div>
            <WhyDoHealthcareProfessionals />

        </>
    )
}

export default WhyChooseUs