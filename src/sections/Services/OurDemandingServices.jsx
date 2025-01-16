import React from 'react';
import Heading from './../../components/Heading';
import { Link } from 'react-router-dom';
import services from './data';

function OurDemandingServices() {
    
    return (
        <>
            <div>
                <Heading data={"Our Demanding Services"} />
                <div className='w-full flex flex-wrap justify-center gap-4 md:px-10 mb-10 transition-all duration-300 ease-in-out'>
                    {services.map((item, index) => (
                        <Link to={item.title === "Medical Billing & Coding" ? `/servicesDetails?index=${index}` : `/serviceDetails?index=${index}`} >
                            <div className="flip-container size-64 relative my-3">
                                <div className="flipper absolute size-64 object-fit">
                                    {/* Front of the card */}
                                    <div className="front flex flex-col justify-center shadow-xl p-5 rounded-xl">
                                        <div className='w-full flex flex-col justify-center items-center gap-4 rounded-xl'>
                                            <img src={item.icon} alt="Billing Care Solutions" className='size-20 my-5 rounded-xl' />
                                            <p className='text-center text-sm lg:text-md whitespace-normal break-words tracking-tight'>{item.title}</p>
                                        </div>
                                    </div>
                                    {/* Back of the card */}
                                    <div className="back w-6size-64 h-[22rem] flex flex-col justify-center items-start text-white rounded-xl" style={{ backgroundImage: `url("${item.img}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                                        <div className='w-full h-full flex flex-col justify-center items-start p-10 bg-opacity-60 rounded-xl'>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default OurDemandingServices;
