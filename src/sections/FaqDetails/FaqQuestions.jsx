import React, { useState, useEffect } from 'react';
import Heading from './../../components/Heading';
import TopCategoriesCard from './../../components/Faqs/TopCategoriesCard';
import ExpansionTile from '../../components/FaqDetails/ExpansionTile';
import faqs from '../Faqs/data';
import { Link } from 'react-router-dom';


const FaqQuestions = ({ data }) => {

    const [openIndex, setOpenIndex] = useState(null);
    const [itemsToDisplay, setItemsToDisplay] = useState([]);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        return array;
    };

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        // Shuffle and set the items to display only on mount
        const shuffledItems = shuffleArray([...faqs]).slice(0, 3);
        setItemsToDisplay(shuffledItems);
    }, []); // Empty dependency array means it runs only once on mount

    const handleTopCategoriesClick = () => {
        const shuffledItems = shuffleArray([...data]).slice(0, 3);
        setItemsToDisplay(shuffledItems);
    };

    return (
        <>
            <div className='w-full container mx-auto flex flex-col justify-center items-center p-10'>
                <Heading data={data.title} />
                <div className='w-full flex flex-col md:flex-row justify-between items-start gap-4 mt-5'>
                    <div className='w-1/5 flex flex-col justify-center items-center'>
                        <div className='hidden md:flex flex-row justify-start items-center gap-3 text-primary text-2xl font-custom font-medium'>
                            <p>Top Categories</p>
                            <div className={`bg-primary w-[2rem] h-[0.2rem]`}></div>
                        </div>
                        <div className='hidden md:flex w-full flex-wrap justify-center items-center p-10 gap-5 container mx-auto'>
                            {itemsToDisplay.map((item, index) => (
                                <Link to={`/faqDetails?index=${item.id}`}>
                                    <TopCategoriesCard key={index} data={item} onClick={handleTopCategoriesClick} />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='w-full md:w-3/4 flex flex-col justify-between items-center gap-4'>
                        {data.questions.map((item, index) => (
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
}

export default FaqQuestions;


