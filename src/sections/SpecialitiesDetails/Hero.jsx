import React from 'react'

const Hero = ({ title,img, short_description }) => {
    return (
        <>
            <div className='text-white' style={{ backgroundImage: `url("${img}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='container mx-auto min-h-[30rem] flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 text-center p-5'>
                    <div className='w-full md:w-1/2 flex flex-col justify-start items-start text-left gap-4'>
                        <p className='w-full uppercase text-3xl md:text-6xl font-bold'>{title}</p>
                        <p className='text-justify'>{short_description}</p>
                        <button className='px-3 py-2 rounded-2xl md:w-1/2 lg:w-1/4  border-[1px] bg-primary p-4 text-white'>Talk to an Expert</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero