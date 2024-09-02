import React from 'react'

const Heading = ({data})=> {
    return (
        <>
            <div className='w-full flex flex-row justify-center items-center space-x-3 text-secondary font-custom text-xl md:text-3xl font-medium p-4'>
                <div className='bg-primary w-[2rem] h-[0.2rem]'></div>
                <p className='text-center md:text-left font-custom'>{data}</p>
                <div className='bg-primary w-[2rem] h-[0.2rem]'></div>
            </div>
        </>
    )
}

export default Heading