import React from 'react'
import HeadingLine from './../../components/HeadingLine';
import TopCategoriesCard from '../../components/Faqs/TopCategoriesCard';
import faqs from './data';
import { Link } from 'react-router-dom';

function TopCategories() {

    return (
        <>
            <div className='w-full container mx-auto flex flex-col justify-center items-center p-10'>

                <div className={`w-full flex flex-row justify-center items-center gap-3 text-primary font-custom font-medium text-2xl`}>
                    <div className={`bg-primary w-[2rem] h-[0.2rem]`}></div>
                    <p>Top Categories</p>
                    <div className={`bg-primary w-[2rem] h-[0.2rem]`}></div>
                </div>
                <div className='w-full flex flex-wrap justify-center items-center p-10 gap-5'>
                    {faqs.map((item, index) => (
                        <Link to={`/faqDetails?index=${item.id}`}>
                            <TopCategoriesCard data={item} />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TopCategories