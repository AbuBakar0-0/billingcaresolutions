import React, { useEffect, useState } from 'react'
import TopCategoriesCard from './../../components/Faqs/TopCategoriesCard';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

function NewCategories() {


    const [loading, setLoading] = useState(false);
    const [services, setServices] = useState([]);
    // Fetch data from Supabase
    useEffect(() => {
        const fetchHeaderData = async () => {
            try {
                setLoading(true);
                // Fetch the header data where type is 'whybcs'
                const { data: headerData, error: headerError } = await supabase
                    .from('new_to_bcs')
                    .select('*');

                if (headerError) throw headerError;

                setServices(headerData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching header data:", error);
            }
        };

        fetchHeaderData();
    }, []);

    
    return (
        <>
            <div className='w-full container mx-auto flex flex-col justify-center items-center p-10'>
                <div className='w-full flex flex-wrap justify-center items-center gap-5'>
                    <div className={`flex flex-row justify-center items-center gap-3 text-primary text-2xl font-custom font-medium`}>
                        <p>New to BCS</p>
                        <div className={`bg-primary w-[2rem] h-[0.2rem]`}></div>
                    </div>
                    <div className='font-custom text-lg'>
                        View our all <a href="#" className='text-secondary'>features and benefits</a> to get started
                    </div>

                </div>
                <div className='w-full flex flex-wrap justify-center items-center p-10 gap-5'>
                    {services.map((item) => (
                        <>
                            <Link to={`/${item.link}`}>
                                <TopCategoriesCard data={item} />
                            </Link>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default NewCategories