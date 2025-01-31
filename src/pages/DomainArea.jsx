import React, { useEffect, useState } from 'react';
import DomainCard from '../components/DomainArea/DomainCard';
import Hero from '../sections/DomainArea/Hero';
import Footer from '../sections/Footer';
import { supabase } from './../lib/supabase';
import Header from './../sections/Header';
import Contact from './../sections/Home/Contact';



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