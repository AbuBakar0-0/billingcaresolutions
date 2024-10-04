import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <>
            <div className='text-white mb-10' style={{ backgroundImage: `url("./assets/headers/blog billingcaresolutions.com.webp")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='container mx-auto min-h-[30rem] flex flex-col md:flex-row justify-start items-center gap-4 text-center p-5'>
                    <div className='w-full md:w-1/2 flex flex-col justify-start items-start text-left gap-4'>
                        <p className='w-full uppercase text-2xl font-semibold'>Welcome to the</p>
                        <p className='w-full uppercase text-6xl font-bold'>BCS Blog</p>
                        <p className='text-justify'>Billing Care Solutions commit to unraveling the complexities of healthcare management with precision and expertise. Our blog serves as your ultimate resource for insights that illuminate the path to operational excellence and financial success in the ever-evolving healthcare landscape. Dive into our expert commentary and best practices designed to empower healthcare practices to thrive.</p>
                        <Link to="/contact" className='flex justify-center px-3 py-2 rounded-2xl md:w-1/2 lg:w-1/4  border-[1px] bg-primary p-4 text-white'>Talk to an Expert</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero