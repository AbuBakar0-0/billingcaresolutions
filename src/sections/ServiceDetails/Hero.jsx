import React from 'react'

const Hero = ({ title, image, description }) => {
    return (
        <>
            <div className='bg-secondary text-white' style={{ backgroundImage: `url("${image}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='container mx-auto min-h-[30rem] flex flex-col md:flex-row justify-center items-center gap-4 text-center p-5'>
                    <div className='w-full md:w-1/2 flex flex-col justify-start items-start text-left gap-3'>
                        <h1 className='w-full uppercase text-5xl font-bold'>{title}</h1>
                        <p className='w-full text-lg'>{description}</p>
                    </div>
                    <div className='w-full md:w-1/2'>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero