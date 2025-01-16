import React from 'react'

const VisionCard = ({ title, description, img }) => {

    return (
        <>
            <div className='w-full flex flex-col gap-3'>
                <div className='flex justify-center items-center'>
                    <img src={img} alt="Billing Care Solutions" className='size-24' />
                </div>
                <p className='w-full text-md font-semibold text-secondary text-center'>{title}</p>
                <p className='p-5 text-justify text-sm lg:text-md whitespace-normal break-words tracking-tighter'>{description}</p>
            </div>
        </>
    )
}

export default VisionCard