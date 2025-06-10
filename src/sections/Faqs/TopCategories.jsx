import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TopCategoriesCard from '../../components/Faqs/TopCategoriesCard';
import Loader from '../../components/ui/Loader';
import { supabase } from '../../lib/supabase';

function TopCategories() {

    const [loading, setLoading] = useState(false);
    const [services, setServices] = useState([]);
    // Fetch data from Supabase
    useEffect(() => {
        const fetchHeaderData = async () => {
            try {
                setLoading(true);
                // Fetch the header data where type is 'whybcs'
                const { data: headerData, error: headerError } = await supabase
                    .from('services')
                    .select('*')
                    .order("service_no"); // We expect only one record
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
        loading ? <Loader /> :
            <>
                <div className='w-full container mx-auto flex flex-col justify-center items-center p-10'>

                    <div className={`w-full flex flex-row justify-center items-center gap-3 text-primary font-custom font-medium text-2xl`}>
                        <div className={`bg-primary w-[2rem] h-[0.2rem]`}></div>
                        <p>Top Categories</p>
                        <div className={`bg-primary w-[2rem] h-[0.2rem]`}></div>
                    </div>
                    <div className='w-full flex flex-wrap justify-center items-center p-10 gap-5'>
                        {services.map((item) => (
                            <Link to={`/faqs/${item.slug}`} key={item.slug}>
                                <TopCategoriesCard data={item} />
                            </Link>
                        ))}
                    </div>
                </div>
            </>
    )
}

export default TopCategories