import React from 'react';
import Heading from './../../components/Heading';
import { Link } from 'react-router-dom';
import services from './data';

function OurDemandingServices() {
    return (
        <>
            <Heading data={"Our Demanding Services"} />
            <div className='w-full flex flex-wrap justify-center gap-4 md:px-10 lg:px-28 mb-10 transition-all duration-300 ease-in-out'>
                {services.map((item, index) => (
                    <Link to={`/serviceDetails?index=${index}`} >
                        <div className="flip-container size-80 relative my-3">
                            <div className="flipper absolute size-80 object-fit">
                                {/* Front of the card */}
                                <div className="front flex flex-col justify-center shadow-xl p-5 rounded-xl">
                                    <div className='w-full flex flex-col justify-center items-center gap-4 rounded-xl'>
                                        <img src={item.icon} alt="" className='size-20 my-5 rounded-xl' />
                                        <p className='text-xl text-center'>{item.title}</p>
                                    </div>
                                </div>
                                {/* Back of the card */}
                                <div className="back w-80 h-[22rem] flex flex-col justify-center items-start text-white rounded-xl" style={{ backgroundImage: `url("${item.img}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                                    <div className='w-full h-full flex flex-col justify-center items-start p-10 bg-opacity-60 rounded-xl'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default OurDemandingServices;
