import React, { useEffect, useState } from 'react'
import Header from './../sections/Header';
import DomainCard from '../components/DomainArea/DomainCard';
import Contact from './../sections/Home/Contact';
import Footer from '../sections/Footer';
import Hero from '../sections/DomainArea/Hero';
import { Helmet } from 'react-helmet';
import { supabase } from './../lib/supabase';



function DomainArea() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const [data, setData] = useState([]);
    const [error, setError] = useState([]);
    const [loading, setIsLoading] = useState(false);


    useEffect(() => {
        const fetchBlogs = async () => {
            setIsLoading(true);
            try {
                const { data, error } = await supabase.from("domainareas").select("*").order("title", { ascending: true });;
                if (error) throw error;
                setData(data);
            } catch (err) {
                console.error("Error fetching blogs:", err);
                setError(err.message || "An error occurred while fetching blogs.");
            } finally {
                setIsLoading(false);
            }
        };



        fetchBlogs();
        window.scrollTo(0, 0); // Scroll to the top
    }, []);


    return (
        <>
            {/* <Helmet>
                <title>
                    Domain Area - Billing Care Solutions
                </title>
                <meta name="description" content="At Billing Care Solutions, we excel in navigating the intricacies of healthcare management through our comprehensive domain areas. Our expertise spans the entire revenue cycle, ensuring that healthcare practices achieve optimal financial performance and operational excellence. Experience unparalleled expertise in healthcare management with Billing Care Solutions. Together, we’ll drive success in your practice!" />
                <meta property="og:title" content="Domain Area - Billing Care Solutions" />
                <meta property="og:description" content="At Billing Care Solutions, we excel in navigating the intricacies of healthcare management through our comprehensive domain areas. Our expertise spans the entire revenue cycle, ensuring that healthcare practices achieve optimal financial performance and operational excellence. Experience unparalleled expertise in healthcare management with Billing Care Solutions. Together, we’ll drive success in your practice!" />
                <meta property="og:image" content="/assets/BCS Logo billingcaresolutions.com.svg" />
            </Helmet> */}
            <Header />
            <Hero />
            <Contact />
            {loading ?
                <div className="w-full flex justify-center items-center h-96">
                    <div className="loader"></div> {/* You can replace this with any loader UI */}
                </div> :
                <div className='w-full flex flex-wrap justify-center gap-4 my-10 transition-all duration-300 ease-in-out container mx-auto'>
                    {data.map((item) => (
                        <a href={item.link}>
                            <DomainCard data={item} />
                        </a>
                    ))}
                </div>
            }
            <Footer />
        </>
    )
}

export default DomainArea