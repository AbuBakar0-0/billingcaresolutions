import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SpecialityCard from '../components/Specialities/SpecialityCard';
import Hero from '../sections/Specialities/Hero';
import { supabase } from './../lib/supabase';
import Footer from './../sections/Footer';
import Header from './../sections/Header';


function Specialities() {

    const [speciality, setSpeciality] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchSpecialityDetails = async () => {
            try {
                setLoading(true);
                // Fetch Speciality
                const { data: specialityData, error: specialityError } = await supabase
                    .from("specialities")
                    .select("*")
                if (specialityError) throw specialityError;
                setSpeciality(specialityData);
            } catch (error) {
                console.error("Error fetching speciality details:", error.message);
            } finally {
                setLoading(false);
            }
        };


        fetchSpecialityDetails();
    }, [])

    return (
        <>
            <Header />
            <Hero />
            {loading ?
                <div className="w-full flex justify-center items-center h-96">
                    <div className="loader"></div> 
                </div>
                :
                <div className='w-full flex flex-wrap justify-center gap-4 my-10 transition-all duration-300 ease-in-out container mx-auto'>
                    {speciality.map((item, index) => (
                        <Link to={`/specialitiesDetails/${item.id}`}>
                            <SpecialityCard data={item} />
                        </Link>
                    ))}
                </div>
            }
            <Footer />
        </>
    )
}

export default Specialities