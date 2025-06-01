import React, { useState, useEffect } from 'react';
import Heading from './../../components/Heading';
import TopCategoriesCard from './../../components/Faqs/TopCategoriesCard';
import ExpansionTile from '../../components/FaqDetails/ExpansionTile';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

const FaqQuestions = ({ data, service }) => {

    const [loading, setLoading] = useState(false);
    const [topServices, setTopServices] = useState([]);
    const [itemsToDisplay, setItemsToDisplay] = useState([]);

    // Fetch data from Supabase
    useEffect(() => {
        const fetchHeaderData = async () => {
            try {
                setLoading(true);
                // Fetch the services
                const { data: headerData, error: headerError } = await supabase
                    .from('services')
                    .select('*');

                if (headerError) throw headerError;

                setTopServices(headerData);

                // Shuffle and pick the first 3 items
                const shuffledItems = shuffleArray(headerData).slice(0, 3);
                setItemsToDisplay(shuffledItems);

                setLoading(false);
            } catch (error) {
                console.error("Error fetching header data:", error);
            }
        };

        fetchHeaderData();
    }, []); // Empty dependency array to run once on mount

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        return array;
    };

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className='w-full container mx-auto flex flex-col justify-center items-center p-10'>
                <Heading data={service?.title} />
                <div className='w-full flex flex-col md:flex-row justify-between items-start gap-4 mt-5'>
                    <div className='w-1/5 flex flex-col justify-center items-center'>
                        <div className='hidden md:flex flex-row justify-start items-center gap-3 text-primary text-2xl font-custom font-medium'>
                            <p>Top Categories</p>
                            <div className={`bg-primary w-[2rem] h-[0.2rem]`}></div>
                        </div>
                        <div className='hidden md:flex w-full flex-wrap justify-center items-center p-10 gap-5 container mx-auto'>
                            {itemsToDisplay.map((item, index) => (
                                <Link key={index} to={`/faq-details/${item.id}`}>
                                    <TopCategoriesCard data={item} />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='w-full md:w-3/4 flex flex-col justify-between items-center gap-4'>
                        {data.map((item, index) => (
                            <ExpansionTile
                                key={index}
                                data={item}
                                isOpen={openIndex === index}
                                onClick={() => handleToggle(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqQuestions;
