import React from 'react'

const PayoffCards = ({ data }) => {
    return (
        <>
            <div className='hidden md:w-[48%] md:min-h-64 lg:min-h-52 md:flex flex-row justify-center items-start p-5 gap-3 shadow-md rounded-2xl border-2 border-grays'>
                <p className='text-4xl border-2 border-primary text-secondary rounded-2xl px-5 py-3'>{data.id}</p>
                <div className='flex flex-col justify-start items-start gap-1'>
                    <p className='font-semibold text-secondary text-2xl'>{data.title}</p>
                    <p className='text-justify text-md lg:text-lg whitespace-normal break-words tracking-tight'>{data.description}</p>
                </div>
            </div>
            <div className='flex md:hidden w-full md:w-[49.5%] min-h-44 flex-col justify-center items-center p-5 gap-3 shadow-md rounded-2xl border-2 border-grays'>
                <p className='text-4xl border-2 border-primary text-secondary rounded-2xl px-5 py-3'>{data.id}</p>
                <p className='font-semibold text-secondary p-3 md:p-0 text-center text-2xl'>{data.title}</p>
                <p className='text-justify text-md lg:text-lg whitespace-normal break-words tracking-tight'>{data.description}</p>
            </div>
        </>
    )
}

export default PayoffCards