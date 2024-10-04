import React from 'react'

function Hero() {
    return (
        <>
            <div className='text-white mb-10' style={{ backgroundImage: `url("./assets/headers/blog billingcaresolutions.com.webp")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='container mx-auto min-h-[30rem] flex flex-col md:flex-row justify-start items-center gap-4 text-center p-5'>
                    <div className='w-full md:w-1/2 flex flex-col justify-start items-start text-left gap-4'>
                        <p className='w-full uppercase text-6xl font-bold'>BCS Articles</p>
                        <p className='text-justify'>Billing Care Solutions commit to unraveling the complexities of healthcare management with precision and expertise. Our blog serves as your ultimate resource for insights that illuminate the path to operational excellence and financial success in the ever-evolving healthcare landscape. Dive into our expert commentary and best practices designed to empower healthcare practices to thrive.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero