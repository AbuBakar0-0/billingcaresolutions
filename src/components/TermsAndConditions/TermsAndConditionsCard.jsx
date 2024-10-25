import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const TermsAndConditionsCard = ({ tagline, data }) => {
    return (
        <>
            <div className='w-full flex flex-row justify-start items-center gap-5'>
                <LazyLoadImage src="./assets/Arrow billingcaresolutions.com.svg" alt="" className='size-6' />
                
                <p>{tagline !== undefined ? <span className='text-secondary font-semibold text-justify'>{tagline}</span> : ""}{data}</p>

            </div>
        </>
    )
}

export default TermsAndConditionsCard