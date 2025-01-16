import React from 'react'

const Hero = ({ title, description, image }) => {
    return (
        <>
            <div className='bg-secondary text-white' style={{ backgroundImage: `url("${image}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='container mx-auto min-h-[26rem] flex flex-col md:flex-row justify-start items-center gap-4 text-center  p-10 lg:p-20'>
                    <div className='w-full md:w-1/2 flex flex-col justify-start items-start text-left gap-4'>
                        <h1 className='w-full uppercase text-4xl font-bold'>{title}</h1>
                        <p className='text-justify'>{description}</p>
                    </div>
                    <div className='w-full md:w-1/2'>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;