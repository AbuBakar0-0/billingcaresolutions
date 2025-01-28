import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <>
            <div className='bg-secondary text-white' style={{ backgroundImage: `url("/assets/headers/Blogs-billingcaresolutions.com.webp")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: "center" }}>
                <div className='container mx-auto md:min-h-[24rem] md:max-h-[24rem] flex flex-col md:flex-row justify-start items-center gap-4 text-center lg:p-10'>
                    <div className='w-full md:w-1/2 flex flex-col justify-start items-start text-left gap-3 py-20 scale-[0.85] md:scale-100 ml-10'>
                        <p className='w-full uppercase text-lg font-semibold'>Welcome to the</p>
                        <h1 className='w-full uppercase text-4xl font-bold'>BCS Blog</h1>
                        <p className='text-justify'>Billing Care Solutions commit to unraveling the complexities of healthcare management with precision and expertise. Our blog serves as your ultimate resource for insights that illuminate the path to operational excellence and financial success in the ever-evolving healthcare landscape. Dive into our expert commentary and best practices designed to empower healthcare practices to thrive.</p>
                        <Link to="/contact" className='flex justify-center px-3 py-2 rounded-2xl md:w-1/3  border-[1px] bg-primary p-4 text-white'>Talk to an Expert</Link>
                    </div>
                    <div className='w-full md:w-1/2'>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero