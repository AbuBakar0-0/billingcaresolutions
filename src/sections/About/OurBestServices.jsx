import React, { useEffect, useState } from 'react'
import Heading from './../../components/Heading';
import ServicesCard from '../../components/About/ServicesCard';
import { supabase } from '../../lib/supabase';
import Loader from '../../components/ui/Loader';


function OurBestServices() {

    const [loading, setLoading] = useState(false);
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchHeaderData = async () => {
            try {
                setLoading(true);
                // Fetch the header data where type is 'whybcs'
                const { data, error: headerError } = await supabase
                    .from('best_services')
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

    return (
        loading ? <></> :
            <>
                <div className='w-full flex flex-col justify-center items-center gap-3 p-10'>
                    <Heading data={'Our Best Services'} />

                    <div className='w-full flex flex-wrap justify-between items-center my-5 gap-3'>
                        {services.map((item) => (
                            <ServicesCard title={item.title} description={item.description} img={item.icon} />
                        ))}
                    </div>

                </div>
            </>
    )
}

export default OurBestServices