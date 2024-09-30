import React from 'react'

const Hero = ({ title }) => {

    return (
        <>
            <div className='bg-secondary text-white' style={{ backgroundImage: `url("./assets/headers/services billingcaresolutions.com.webp")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='container mx-auto min-h-[30rem] flex flex-col md:flex-row justify-center items-center gap-4 text-center p-5'>
                    <div className='w-full md:w-1/2 flex flex-col justify-start items-start text-left gap-3'>
                        <p className='w-full uppercase text-6xl font-bold'>{title}</p>
                    </div>
                    <div className='w-full md:w-1/2'>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero