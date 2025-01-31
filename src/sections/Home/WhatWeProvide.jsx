import React, { useEffect, useState } from 'react'
import OfferCards from './../../components/Home/OfferCards';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

function WhatWeProvide() {

    const [showMore, setShowMore] = useState(false);

    const [services, setServices] = useState([]);
    
        useEffect(() => {
            // Fetch existing slides from Supabase
            const fetchSlides = async () => {
                const { data, error } = await supabase.from("what_we_provide").select("*").order("service_no");
                if (error) {
                    console.error("Error fetching slides:", error.message);
                } else {
                    setServices(data || []);
                }
    
            };
    
            fetchSlides();
        }, []);


    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    var itemsToDisplay = showMore ? services : services.slice(0, 5);


    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-col md:flex-row justify-between items-center p-8 lg:p-10'>
                    <div>
                        <div className={`w-full flex flex-row justify-center items-center space-x-3 text-primary font-custom primary text-2xl font-medium`}>
                            <div className={`bg-primary w-[2rem] h-[0.2rem]`}></div>
                            <p className='text-center'>What We Provide?</p>
                            <div className={`bg-primary w-[2rem] h-[0.2rem]`}></div>
                        </div>
                        <p className='text-3xl md:text-5xl text-center md:text-left font-custom font-semibold text-secondary'>
                            Our BCS Solutions
                        </p>
                    </div>
                </div>
                <div className='w-full flex flex-wrap justify-center md:justify-around p-5 mb-10 transition-all duration-300 ease-in-out'>
                    {itemsToDisplay.map((item, index) => (
                        <Link to={`/serviceDetails/${item.link}`}>
                            <OfferCards key={index} data={item} />
                        </Link>
                    ))}
                </div>
                <button
                    onClick={toggleShowMore}
                    className='bg-secondary text-white px-4 py-3 rounded-xl hover:bg-primary hover:transition-all hover:duration-300 hover:ease-in-out mb-10'>
                    {showMore ? 'Show Less' : 'Show More'}
                </button>
            </div>
        </>
    );
}

export default WhatWeProvide;