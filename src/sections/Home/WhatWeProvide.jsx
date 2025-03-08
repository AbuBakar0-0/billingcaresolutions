import React, { useEffect, useState } from 'react'
import OfferCards from './../../components/Home/OfferCards';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

function WhatWeProvide() {

    const [showMore, setShowMore] = useState(false);

    const [services, setServices] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchHeaderData = async () => {
            try {
                setLoading(true);
                // Fetch the header data where type is 'whybcs'
                const { data, error: headerError } = await supabase
                    .from('services')
                    .select('*').order("service_no"); // We expect only one record
                if (headerError) throw headerError;

                setServices(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching header data:", error);
            }
        };

        fetchHeaderData();
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
                        <Link to={`/serviceDetails/${item.title}`}>
                            <div className="flip-container size-64 relative my-3">
                                <div className="flipper absolute size-64 object-fit">
                                    {/* Front of the card */}
                                    <div className="front flex flex-col justify-center shadow-xl p-5 rounded-xl">
                                        <div className='w-full flex flex-col justify-center items-center gap-4 rounded-xl'>
                                            <img src={item.icon} alt="Billing Care Solutions" className='size-20 my-5 rounded-xl' />
                                            <p className='text-center text-sm lg:text-md whitespace-normal break-words tracking-tight'>{item.title}</p>
                                            <button className='px-4 py-2 text-white bg-secondary rounded-lg'>Explore More</button>
                                        </div>
                                    </div>
                                    {/* Back of the card */}
                                    <div className="back w-6size-64 h-[22rem] flex flex-col justify-center items-start text-white rounded-xl" style={{ backgroundImage: `url("${item.image}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                                        <div className='w-full h-full flex flex-col justify-center items-start p-10 bg-opacity-60 rounded-xl'>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
