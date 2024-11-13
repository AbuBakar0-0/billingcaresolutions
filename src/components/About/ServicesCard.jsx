import React from 'react'

const ServicesCard=({title,description,img})=> {
    return (
        <>
            <div className='bg-white w-full md:w-[32%] min-h-[28rem] flex flex-col justify-start items-start shadow-md rounded-2xl hover:shadow-2xl p-5 gap-4'>
                <img src={img} alt={title} className='size-16' />
                <p className='text-2xl font-semibold text-secondary'>{title}</p>
                <p className='text-justify text-md lg:text-lg whitespace-normal break-words tracking-tight'>{description}</p>
            </div>
        </>
    )
}

export default ServicesCard