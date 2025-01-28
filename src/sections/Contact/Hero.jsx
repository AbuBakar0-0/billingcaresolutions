import React from 'react'

function Hero() {
    return (
        <>
            <div className='text-white' style={{ backgroundImage: `url("/assets/headers/contact.webp")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='container mx-auto min-h-[26rem] flex flex-col md:flex-row justify-start items-center gap-4 text-center  p-10 lg:p-20'>
                    <div className='w-full md:w-1/2 flex flex-col justify-start items-start text-left gap-4'>
                        <h1 className='w-full uppercase text-5xl font-bold'>Contact Us</h1>
                        <p className='w-full text-md'>Billing Care Solutions optimizes healthcare billing to increase revenue. Our experts deliver precise medical billing, coding, and claims submissions, reducing AR days and accelerating cash flow. Through coding audits and proactive denial management, we ensure compliance and minimize revenue loss. Count on us for tailored billing solutions and expert support at every step.</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero