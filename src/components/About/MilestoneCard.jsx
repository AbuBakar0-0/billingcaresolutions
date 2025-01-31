import React from 'react'

const MilestoneCards = ({ data }) => {
    return (
        <div className='w-full flex flex-row justify-start items-center '>
            <img src="/assets/Arrow billingcaresolutions.com.svg" alt="Billing Care Solutions" className='size-8' />
            <div className='w-full flex flex-col justify-start items-start gap-1 px-4'>
                <p>{data.points_title}</p>
                <div className='bg-gray-300 w-full h-2 relative'>
                    <div className='bg-secondary h-2 absolute z-10' style={{ width: `${data.points_percentage}%` }}>
                    </div>
                </div>
                <p>{data.points_description}</p>
            </div>
        </div>
    )
}

export default MilestoneCards
