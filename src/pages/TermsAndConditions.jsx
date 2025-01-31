import React, { useEffect, useState } from 'react';
import TermsAndConditionsCard from '../components/TermsAndConditions/TermsAndConditionsCard';
import Header from '../sections/Header';
import Hero from '../sections/TermsAndConditions/Hero';
import HeadingLine from './../components/HeadingLine';
import Footer from './../sections/Footer';
import { supabase } from '../lib/supabase';

function TermsaAndConditions() {
    const [loading, setLoading] = useState(false);
    const [privacyPolicy, setPrivacyPolicy] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchHeaderData = async () => {
            try {
                setLoading(true);
                // Fetch the header data where type is 'whybcs'
                const { data: headerData, error: headerError } = await supabase
                    .from('terms_conditions')
                    .select('*');

                if (headerError) throw headerError;

                setPrivacyPolicy(headerData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching header data:", error);
            }
        };

        fetchHeaderData();
    }, []);

    return (
        <>
            <Header />
            <Hero />
            <div className='w-full container flex flex-col justify-center items-center gap-4 mx-auto my-10'>
                <div className='w-2/3 flex flex-col justify-center items-center gap-4 text-justify text-sm lg:text-md whitespace-normal break-words tracking-tight'>
                    {privacyPolicy.map((item, index) => (
                        <>

                            {(item.title != null && item.title != "") ? <HeadingLine data={item.title} /> : null}
                            {item.description != null && item.description != "" ? <p className='w-full text-left'>{item.description}</p> : null}
                            {(item.point_title != null && item.point_title != "") ?
                                <TermsAndConditionsCard tagline={item.point_title} data={item.point_description} /> :
                                null
                            }
                            {
                                (item.point_title == null || item.point_title == "") && (item.point_description != null && item.point_description != "") ?
                                    <TermsAndConditionsCard tagline={""} data={item.point_description} /> : null
                            }

                        </>
                    ))}
                </div>

            </div>
            <Footer />
        </>
    )
}

export default TermsaAndConditions


