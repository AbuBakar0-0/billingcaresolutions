import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const VisionCard = ({ title, description, img }) => {

    return (
        <>
            <div className='w-full flex flex-col gap-3'>
                <div className='flex justify-center items-center'>
                    <LazyLoadImage src={img} alt="" className='size-24' />
                </div>
                <p className='w-full text-lg font-semibold text-secondary text-center'>{title}</p>
                <p className='p-4'>{description}</p>
            </div>
        </>
    )
}

export default VisionCard