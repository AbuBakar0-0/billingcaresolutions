import React, { useEffect } from 'react'
import Header from '../sections/Header';
import SpecialitiesDetailsContent from '../sections/Specialities/SpecialitiesDetailsContent';
import specialities from '../sections/Specialities/data';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/SpecialitiesDetails/Hero';
import { Helmet } from 'react-helmet';

function SpecialitiesDetails() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const query = new URLSearchParams(useLocation().search);
    const index = query.get('index');

    const data = specialities[index];
    return (
        <>
            {/* <Helmet>
                <title>Specialities - Billing Care Solutions</title>
                <meta name="description" content="At Billing Care Solutions, our specialties lie in delivering precise, customized services that meet the specific needs of healthcare practices. Our deep industry knowledge, paired with cutting-edge solutions, allows us to address critical areas of healthcare management, ensuring optimized revenue and smooth operations." />
                <meta property="og:title" content="Specialities - Billing Care Solutions" />
                <meta property="og:description" content="At Billing Care Solutions, our specialties lie in delivering precise, customized services that meet the specific needs of healthcare practices. Our deep industry knowledge, paired with cutting-edge solutions, allows us to address critical areas of healthcare management, ensuring optimized revenue and smooth operations." />
                <meta property="og:image" content="./assets/BCS Logo billingcaresolutions.com.svg" />
            </Helmet> */}
            <Header />
            <Hero title={data.title} img={data.header} short_description={data.short_description} />
            <SpecialitiesDetailsContent data={data} />
        </>
    )
}

export default SpecialitiesDetails