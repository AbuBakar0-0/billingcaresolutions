import React, { useEffect } from 'react'
import Header from './../sections/Header';
import Hero from '../sections/Faqs/Hero';
import TopCategories from '../sections/Faqs/TopCategories';
import NewCategories from '../sections/Faqs/NewCategories';
import Footer from './../sections/Footer';

function Faqs() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <Header />
            <Hero />
            <TopCategories />
            <NewCategories />
            <Footer />
        </>
    )
}

export default Faqs