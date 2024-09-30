import React from 'react'
import Header from '../sections/Header';
import SpecialitiesDetailsContent from '../sections/Specialities/SpecialitiesDetailsContent';
import specialities from '../sections/Specialities/data';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/SpecialitiesDetails/Hero';

function SpecialitiesDetails() {
    window.scrollTo(0, 0);

    const query = new URLSearchParams(useLocation().search);
    const index = query.get('index');

    const data = specialities[index];
    return (
        <>
            <Header />
            <Hero title={data.title} img={data.image} short_description={data.short_description} />
            <SpecialitiesDetailsContent data={data}/>
        </>
    )
}

export default SpecialitiesDetails