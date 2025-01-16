import React from 'react'

const Hero = ({ title, image, description }) => {
    return (
        <>
            <div className='bg-secondary text-white' style={{ backgroundImage: `url("${image}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: "center" }}>
                <div className='container mx-auto md:min-h-[28rem] md:max-h-[28rem] flex flex-col md:flex-row justify-start items-center gap-4 text-center lg:p-10'>
                    <div className='w-full md:w-1/2 flex flex-col justify-start items-start text-left gap-3 py-20 scale-[0.85] text-md md:scale-100'>
                    <h1 className='w-full uppercase text-4xl font-bold'>{title}</h1>
                    <p className='w-full text-md'>{description}</p>
                    </div>
                    <div className='w-full md:w-1/2'>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Hero