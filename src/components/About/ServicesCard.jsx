import React from 'react'

const ServicesCard=({title,description,img})=> {
    return (
        <>
            <div className='bg-white w-full md:w-[32%] flex flex-col justify-start items-start shadow-md rounded-2xl hover:shadow-2xl p-5 gap-4'>
                <img src={img} alt={title} className='size-16' />
                <p className='text-xl font-semibold text-secondary'>{title}</p>
                <p>{description}</p>
            </div>
        </>
    )
}

export default ServicesCard