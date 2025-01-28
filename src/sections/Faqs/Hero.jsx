import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <>
            <div className='bg-secondary text-white' style={{ backgroundImage: `url("/assets/headers/FAQs billingcaresolutions.com.webp")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: "center" }}>
                <div className='container mx-auto md:min-h-[24rem] md:max-h-[24rem] flex flex-col md:flex-row justify-start items-center gap-4 text-center lg:p-10'>
                    <div className='w-full md:w-1/2 flex flex-col justify-start items-start text-left gap-3 py-20 scale-[0.85] md:scale-100'>
                        <h1 className='w-full uppercase text-3xl font-bold'>Your Healthcare Questions, Simplified</h1>
                        <p className='text-justify'>Billing Care Solutions know that clear information helps clients make better choices. Our FAQs section provides straightforward answers to common questions about our services and the healthcare billing process. Whether you want to learn about provider enrollment, understand revenue cycle management, or find out how we ensure billing compliance, you’ll get the information you need to handle your healthcare management effectively.
                        </p>
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