import React from 'react'
import HeadingLine from '../../components/HeadingLine'
import TopCategoriesCard from './../../components/Faqs/TopCategoriesCard';

function NewCategories() {
    const data = [
        { title: "Blogs & Articles",  icon: "" },
        { title: "Service Features", icon: "" },
        { title: "Talk to sales", icon: "" },
    ];
    return (
        <>
            <div className='w-full container mx-auto flex flex-col justify-center items-center p-10'>
                <div className='w-full flex flex-wrap justify-center items-center gap-5'>
                    <div className={`flex flex-row justify-center items-center gap-3 text-primary text-3xl font-custom font-medium`}>
                        <p>New to BCS</p>
                        <div className={`bg-primary w-[2rem] h-[0.2rem]`}></div>
                    </div>
                    <div className='font-custom text-xl'>
                        View our all <a href="" className='text-secondary'>features and benefits</a> to get started
                    </div>

                </div>
                <div className='w-full flex flex-wrap justify-center items-center p-10 gap-5'>
                    {data.map((item) => (
                        <TopCategoriesCard data={item} />
                    ))}
                </div>  
            </div>
        </>
    )
}

export default NewCategories