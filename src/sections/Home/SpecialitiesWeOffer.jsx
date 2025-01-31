import React, { useEffect, useState } from 'react'
import SpecialityCard from './../../components/Home/SpecialityCard';
import Heading from './../../components/Heading';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import Loader from '../../components/ui/Loader';



function SpecialitiesWeOffer() {

    const [loading, setLoading] = useState(false);
    const [specialities, setSpecialities] = useState([]);

    useEffect(() => {
        const fetchHeaderData = async () => {
            try {
                setLoading(true);
                // Fetch the header data where type is 'whybcs'
                const { data: data, error: headerError } = await supabase
                    .from('specialities_we_offer')
                    .select('*'); // We expect only one record
                if (headerError) throw headerError;

                setSpecialities(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching header data:", error);
            }
        };

        fetchHeaderData();
    }, []);


    return (
        <div className='flex flex-col justify-center p-10'>
            <Heading data="Specialities We Offer" />

            {loading ? <Loader /> : <div className='flex flex-wrap justify-around'>
                {specialities.map((item) => (
                    <SpecialityCard data={item} />
                ))}
            </div>}
            <div className='flex justify-center items-center mt-6'>
                <Link to="/specialities" className='bg-secondary text-white px-4 py-3 rounded-xl hover:bg-primary hover:transition-all hover:duration-300 hover:ease-in-out'>Explore More</Link>
            </div>
        </div>
    )
}

export default SpecialitiesWeOffer