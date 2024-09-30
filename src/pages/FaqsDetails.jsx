import React from 'react'
import Hero from '../sections/FaqDetails/Hero'
import Header from './../sections/Header';
import FaqQuestions from '../sections/FaqDetails/FaqQuestions';
import NewCategories from '../sections/Faqs/NewCategories';
import Footer from '../sections/Footer';
import faqs from '../sections/Faqs/data';
import { useLocation } from 'react-router-dom';

function FaqsDetails() {
    window.scrollTo(0, 0);

    const query = new URLSearchParams(useLocation().search);
    const index = query.get('index');

    const data = faqs[index];

    return (
        <>
            <Header />
            <Hero title={data.title} description={data.description}/>
            <FaqQuestions data={data}/>
            <NewCategories />
            <Footer />
        </>
    )
}

export default FaqsDetails