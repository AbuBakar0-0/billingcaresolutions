import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FaqQuestions from '../sections/FaqDetails/FaqQuestions';
import Hero from '../sections/FaqDetails/Hero';
import NewCategories from '../sections/Faqs/NewCategories';
import Footer from '../sections/Footer';
import Header from './../sections/Header';
import { supabase } from '../lib/supabase';
import Loader from './../components/ui/Loader';

function FaqsDetails() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);  // Start with loading state as true
    const [faqs, setFaqs] = useState([]);
    const [service, setService] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchHeaderData = async () => {
            try {
                // Fetch service details by ID
                const { data: serviceData, error: serviceError } = await supabase
                    .from('services')
                    .select('*')
                    .eq('slug', id)
                    .single();

                if (serviceError) throw serviceError;

                // Fetch FAQs related to the service
                const { data: faqData, error: faqError } = await supabase
                    .from('service_faqs')
                    .select('*')
                    .eq('service_id', serviceData.id);

                if (faqError) throw faqError;

                setService(serviceData);
                setFaqs(faqData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);  // Always stop loading, even if there's an error
            }
        };

        fetchHeaderData();
    }, [id]);  // Add id as dependency to refetch data on id change

    return (
        <>
            <Header />
            {loading ? <Loader /> : (
                <>
                    {/* Render Hero only if service is available */}
                    {service && (
                        <Hero service={service} />
                    )}
                    <FaqQuestions data={faqs} service={service} />
                    <NewCategories />
                </>
            )}
            <Footer />
        </>
    );
}

export default FaqsDetails;
