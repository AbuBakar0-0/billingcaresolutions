import React, { useEffect, useState } from 'react'
import Heading from './../Heading';
import ServicesCard from './ServicesCard';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { supabase } from './../../lib/supabase';
import Loader from '../ui/Loader';

function WhyDoHealthcareProfessionals() {
    const [loading, setLoading] = useState(false);
    const [healthcare1, setHealthcare1] = useState([]);
    const [healthcare2, setHealthcare2] = useState([]);

    useEffect(() => {
        const fetchHeaderData = async () => {
            try {
                setLoading(true);
                // Fetch the header data where type is 'whybcs'
                const { data: data1, error: headerError } = await supabase
                    .from('healthcare')
                    .select('*').eq("description", ""); // We expect only one record
                if (headerError) throw headerError;

                const { data: data2, error: headerError2 } = await supabase
                    .from('healthcare')
                    .select('*').neq("description", ""); // We expect only one record
                if (headerError2) throw headerError2;

                setHealthcare1(data1);
                setHealthcare2(data2);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching header data:", error);
            }
        };

        fetchHeaderData();
    }, []);


    return (
        loading ?
            <></>
            : <>
                <div className='flex flex-col justify-center items-center w-full p-10'>
                    <Heading data="Why Do Healthcare Professionals Choose Our Medical Billing Services?" />
                    <div className='w-full flex flex-wrap justify-center md:justify-between items-center'>
                        {healthcare1.map((item) => (
                            <ServicesCard data={item} />
                        ))}
                        {healthcare2.map((item) => (
                            <ServicesCard data={item} />
                        ))}
                    </div>
                </div>
            </>
    )
}

export default WhyDoHealthcareProfessionals;