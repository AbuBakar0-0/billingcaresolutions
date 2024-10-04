import React from 'react'

const Hero=({title})=> {
    return (
        <>
            <div className='bg-secondary text-white'>
                <div className='container mx-auto min-h-80 flex flex-col md:flex-row justify-center items-center gap-4 text-center p-5'>
                    <div className='w-full  flex flex-col justify-center items-center gap-4'>
                        <p className='w-full uppercase texl-3xl md:text-6xl font-bold'>{title}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero