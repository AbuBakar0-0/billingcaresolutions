import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <>
            <div className='text-white' style={{ backgroundImage: `url("./assets/headers/FAQs billingcaresolutions.com.webp")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='container mx-auto min-h-[30rem] flex flex-col md:flex-row justify-center items-center gap-4 text-center p-5'>
                    <div className='w-full md:w-1/2 flex flex-col justify-start items-start text-left gap-4'>
                        
                        <h1 className='w-full uppercase text-6xl font-bold'>Your Healthcare Questions, Simplified</h1>
                        <p className='text-justify'>Billing Care Solutions know that clear information helps clients make better choices. Our FAQs section provides straightforward answers to common questions about our services and the healthcare billing process. Whether you want to learn about provider enrollment, understand revenue cycle management, or find out how we ensure billing compliance, you’ll get the information you need to handle your healthcare management effectively.
                        </p>
                        <Link to="/contact" className='flex justify-center px-3 py-2 rounded-2xl md:w-1/2 lg:w-1/4  border-[1px] bg-primary p-4 text-white'>Talk to an Expert</Link>                    </div>
                    <div className='w-full md:w-1/2'>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero