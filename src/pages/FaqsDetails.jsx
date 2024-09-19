import React from 'react'
import Hero from '../sections/FaqDetails/Hero'
import Header from './../sections/Header';
import FaqQuestions from '../sections/FaqDetails/FaqQuestions';
import NewCategories from '../sections/Faqs/NewCategories';
import Footer from '../sections/Footer';
import { useLocation } from 'react-router-dom';

function FaqsDetails() {
    const location = useLocation();

    const { title ,description } = location.state || {};
    

    return (
        <>
            <Header />
            <Hero title={title} description={description}/>
            <FaqQuestions />
            <NewCategories />
            <Footer />
        </>
    )
}

export default FaqsDetails