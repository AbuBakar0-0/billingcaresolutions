import React, { useEffect, useState } from 'react'
import HeadingLine from '../../components/HeadingLine'
import { supabase } from '../../lib/supabase';

function WhoWeAre() {
    
    const [whoWeAre, setWhoWeAre] = useState([]);
    
      useEffect(() => {
        // Fetch existing slides from Supabase
        const fetchSlides = async () => {
          const { data, error } = await supabase.from("who_we_are").select("*").single();
          if (error) {
            console.error("Error fetching slides:", error.message);
          } else {
            setWhoWeAre(data || []);
          }
    
        };
    
        fetchSlides();
      }, []);
    return (
        <>
            <div className='flex flex-col lg:flex-row justify-around items-center p-10'>
                <img src={whoWeAre.image} alt="Billing Care Solutions" className='w-full lg:w-1/3 h-auto px-0 lg:px-10' />
                <div className='flex flex-col w-full lg:w-2/3 justify-start items-start lg:p-10 space-y-4'>
                    <div>
                        <HeadingLine data={whoWeAre.short_title}/>
                        <p className='text-3xl md:text-5xl text-center md:text-left font-custom font-semibold text-secondary'>
                            {whoWeAre.title}
                        </p>
                    </div>
                    <p className='text-justify text-sm lg:text-md whitespace-normal break-words tracking-tight'>
                        {whoWeAre.description}
                    </p>
                </div>
            </div>
        </>
    )

}

export default WhoWeAre