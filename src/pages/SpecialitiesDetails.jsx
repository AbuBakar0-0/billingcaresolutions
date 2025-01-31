import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import Footer from '../sections/Footer';
import Header from '../sections/Header';
import SpecialitiesDetailsContent from '../sections/Specialities/SpecialitiesDetailsContent';
import Hero from '../sections/SpecialitiesDetails/Hero';

function SpecialitiesDetails() {
    const { id } = useParams();

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

                    .select("*").eq("id", id).single();
                if (specialityError) throw specialityError;

                console.log(specialityData);
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
            <Hero title={speciality.title} img={speciality.header} short_description={speciality.short_description} />
            <SpecialitiesDetailsContent id={id} />
            <Footer />
        </>
    )
}

export default SpecialitiesDetails