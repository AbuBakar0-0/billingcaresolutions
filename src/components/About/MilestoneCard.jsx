import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MilestoneCards = ({ data }) => {
    return (
        <div className='w-full flex flex-row justify-start items-center '>
            <LazyLoadImage src="./assets/Arrow billingcaresolutions.com.svg" alt="" className='size-8' />
            <div className='w-full flex flex-col justify-start items-start gap-1 px-4'>
                <p>{data.title}</p>
                <div className='bg-gray-300 w-full h-2 relative'>
                    <div className='bg-secondary h-2 absolute z-10' style={{ width: `${data.width}%` }}>
                    </div>
                </div>
                <p>{data.description}</p>
            </div>
        </div>
    )
}

export default MilestoneCards
