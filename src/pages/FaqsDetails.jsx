import React, { useEffect } from 'react'
import Hero from '../sections/FaqDetails/Hero'
import Header from './../sections/Header';
import FaqQuestions from '../sections/FaqDetails/FaqQuestions';
import NewCategories from '../sections/Faqs/NewCategories';
import Footer from '../sections/Footer';
import faqs from '../sections/Faqs/data';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function FaqsDetails() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const query = new URLSearchParams(useLocation().search);
    const index = query.get('index');

    const data = faqs[index];

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
            <Hero title={data.title} description={data.description} image={data.header}/>
            <FaqQuestions data={data} />
            <NewCategories />
            <Footer />
        </>
    )
}

export default FaqsDetails