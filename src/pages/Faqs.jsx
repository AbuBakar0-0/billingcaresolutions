import React, { useEffect } from 'react'
import Header from './../sections/Header';
import Hero from '../sections/Faqs/Hero';
import TopCategories from '../sections/Faqs/TopCategories';
import NewCategories from '../sections/Faqs/NewCategories';
import Footer from './../sections/Footer';
import { Helmet } from 'react-helmet';

function Faqs() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <Helmet>
                <title>FAQs - Billing Care Solutions</title>
                <meta name="description" content="Billing Care Solutions know that clear information helps clients make better choices. Our FAQs section provides straightforward answers to common questions about our services and the healthcare billing process. Whether you want to learn about provider enrollment, understand revenue cycle management, or find out how we ensure billing compliance, you’ll get the information you need to handle your healthcare management effectively." />
                <meta property="og:title" content="FAQs - Billing Care Solutions" />
                <meta property="og:description" content="Billing Care Solutions know that clear information helps clients make better choices. Our FAQs section provides straightforward answers to common questions about our services and the healthcare billing process. Whether you want to learn about provider enrollment, understand revenue cycle management, or find out how we ensure billing compliance, you’ll get the information you need to handle your healthcare management effectively." />
                <meta property="og:image" content="./assets/BCS Logo billingcaresolutions.com.svg" />
            </Helmet>
            <Header />
            <Hero />
            <TopCategories />
            <NewCategories />
            <Footer />
        </>
    )
}

export default Faqs