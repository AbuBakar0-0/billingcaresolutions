import React from 'react'
import TopCategoriesCard from './../../components/Faqs/TopCategoriesCard';
import { Link } from 'react-router-dom';

function NewCategories() {
    const data = [
        { title: "Blogs & Articles", icon: "/assets/faqs/blog and article billingcaresolutions.com.svg", link: "/blogs", },
        { title: "Service Features", icon: "/assets/faqs/service features billingcaresolutions.com.svg", link: "/services", },
        { title: "Talk to sales", icon: "/assets/faqs/talk to sales billingcaresolutions.com.svg", link: "/contact", },
    ];
    return (
        <>
            <div className='w-full container mx-auto flex flex-col justify-center items-center p-10'>
                <div className='w-full flex flex-wrap justify-center items-center gap-5'>
                    <div className={`flex flex-row justify-center items-center gap-3 text-primary text-2xl font-custom font-medium`}>
                        <p>New to BCS</p>
                        <div className={`bg-primary w-[2rem] h-[0.2rem]`}></div>
                    </div>
                    <div className='font-custom text-lg'>
                        View our all <a href="#" className='text-secondary'>features and benefits</a> to get started
                    </div>

                </div>
                <div className='w-full flex flex-wrap justify-center items-center p-10 gap-5'>
                    {data.map((item) => (
                        <>
                            <Link to={item.link}>
                                <TopCategoriesCard data={item} />
                            </Link>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default NewCategories